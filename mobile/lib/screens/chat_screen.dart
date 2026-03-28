import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import '../config/api_config.dart';
import '../models/message.dart';
import '../providers/auth_provider.dart';
import '../providers/worlds_provider.dart';
import '../services/websocket_service.dart';
import '../theme/app_theme.dart';
import '../widgets/message_bubble.dart';

class ChatScreen extends StatefulWidget {
  const ChatScreen({super.key});

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _msgCtrl = TextEditingController();
  final _scrollCtrl = ScrollController();
  final _wsService = WebSocketService();
  final List<Message> _messages = [];
  bool _loading = true;
  bool _sending = false;
  String? _typingUser;
  Timer? _typingTimer;
  StreamSubscription? _msgSub;
  StreamSubscription? _typingSub;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => _init());
  }

  Future<void> _init() async {
    final auth = context.read<AuthProvider>();
    final worlds = context.read<WorldsProvider>();
    final channel = worlds.selectedChannel!;
    final token = auth.token!;

    await _loadHistory(channel.id, token);
    _wsService.connect(channel.id, token);

    _msgSub = _wsService.messages.listen((msg) {
      if (!mounted) return;
      setState(() => _messages.add(msg));
      _scrollToBottom();
    });

    _typingSub = _wsService.typingEvents.listen((data) {
      final userId = context.read<AuthProvider>().user?.id;
      if (data['user']?['id'] == userId) return;
      if (!mounted) return;
      setState(() => _typingUser = data['user']?['display_name']);
      _typingTimer?.cancel();
      _typingTimer = Timer(const Duration(seconds: 3), () {
        if (mounted) setState(() => _typingUser = null);
      });
    });
  }

  Future<void> _loadHistory(int channelId, String token) async {
    try {
      final res = await http.get(
        Uri.parse('${ApiConfig.baseUrl}${ApiConfig.messages(channelId)}'),
        headers: {'Authorization': 'Bearer $token'},
      );
      if (res.statusCode == 200) {
        final list = jsonDecode(utf8.decode(res.bodyBytes)) as List;
        if (mounted) {
          setState(() {
            _messages.addAll(list.map((j) => Message.fromJson(j)));
            _loading = false;
          });
          WidgetsBinding.instance.addPostFrameCallback((_) => _scrollToBottom(animate: false));
        }
      }
    } catch (_) {
      if (mounted) setState(() => _loading = false);
    }
  }

  void _scrollToBottom({bool animate = true}) {
    if (!_scrollCtrl.hasClients) return;
    if (animate) {
      _scrollCtrl.animateTo(
        _scrollCtrl.position.maxScrollExtent,
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeOut,
      );
    } else {
      _scrollCtrl.jumpTo(_scrollCtrl.position.maxScrollExtent);
    }
  }

  void _send() {
    final content = _msgCtrl.text.trim();
    if (content.isEmpty || _sending) return;
    _msgCtrl.clear();
    _wsService.sendMessage(content);
  }

  void _onTyping() {
    _wsService.sendTyping();
  }

  @override
  void dispose() {
    _msgCtrl.dispose();
    _scrollCtrl.dispose();
    _msgSub?.cancel();
    _typingSub?.cancel();
    _typingTimer?.cancel();
    _wsService.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final worlds = context.watch<WorldsProvider>();
    final auth = context.read<AuthProvider>();
    final channel = worlds.selectedChannel!;
    final myId = auth.user?.id;

    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            const Text('#', style: TextStyle(color: AppTheme.textSecondary, fontSize: 20, fontWeight: FontWeight.w700)),
            const SizedBox(width: 6),
            Text(channel.name),
          ],
        ),
        subtitle: channel.description.isNotEmpty
            ? Text(channel.description, style: const TextStyle(fontSize: 11, color: AppTheme.textSecondary))
            : null,
      ),
      body: Column(
        children: [
          // Messages
          Expanded(
            child: _loading
                ? const Center(child: CircularProgressIndicator(color: AppTheme.primary))
                : _messages.isEmpty
                    ? Center(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Text('👋', style: TextStyle(fontSize: 48)),
                            const SizedBox(height: 12),
                            Text('Début de #${channel.name}', style: const TextStyle(color: AppTheme.textPrimary, fontSize: 16, fontWeight: FontWeight.w600)),
                            const Text('Envoie le premier message !', style: TextStyle(color: AppTheme.textSecondary)),
                          ],
                        ),
                      )
                    : ListView.builder(
                        controller: _scrollCtrl,
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        itemCount: _messages.length,
                        itemBuilder: (context, i) {
                          final msg = _messages[i];
                          final isMe = msg.user.id == myId;
                          final showAvatar = i == 0 || _messages[i - 1].user.id != msg.user.id;
                          return MessageBubble(message: msg, isMe: isMe, showAvatar: showAvatar);
                        },
                      ),
          ),
          // Typing indicator
          if (_typingUser != null)
            Padding(
              padding: const EdgeInsets.only(left: 16, bottom: 4),
              child: Row(
                children: [
                  const SizedBox(
                    width: 24,
                    child: _TypingDots(),
                  ),
                  const SizedBox(width: 8),
                  Text('$_typingUser est en train d\'écrire...', style: const TextStyle(color: AppTheme.textSecondary, fontSize: 12)),
                ],
              ),
            ),
          // Input
          Container(
            padding: EdgeInsets.only(
              left: 12, right: 12,
              top: 8,
              bottom: MediaQuery.of(context).viewInsets.bottom > 0 ? 8 : 12 + MediaQuery.of(context).padding.bottom,
            ),
            decoration: const BoxDecoration(
              color: AppTheme.surface,
              border: Border(top: BorderSide(color: AppTheme.border)),
            ),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _msgCtrl,
                    style: const TextStyle(color: AppTheme.textPrimary, fontSize: 15),
                    maxLines: 4,
                    minLines: 1,
                    onChanged: (_) => _onTyping(),
                    onSubmitted: (_) => _send(),
                    textInputAction: TextInputAction.send,
                    decoration: InputDecoration(
                      hintText: 'Message #${channel.name}',
                      hintStyle: const TextStyle(color: AppTheme.textSecondary),
                      filled: true,
                      fillColor: AppTheme.surfaceLight,
                      contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(22),
                        borderSide: const BorderSide(color: AppTheme.border),
                      ),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(22),
                        borderSide: const BorderSide(color: AppTheme.border),
                      ),
                      focusedBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(22),
                        borderSide: const BorderSide(color: AppTheme.primary),
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 8),
                GestureDetector(
                  onTap: _send,
                  child: Container(
                    width: 44,
                    height: 44,
                    decoration: const BoxDecoration(
                      color: AppTheme.primary,
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(Icons.send_rounded, color: Colors.white, size: 20),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _TypingDots extends StatefulWidget {
  const _TypingDots();

  @override
  State<_TypingDots> createState() => _TypingDotsState();
}

class _TypingDotsState extends State<_TypingDots> with SingleTickerProviderStateMixin {
  late AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 800))..repeat();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _ctrl,
      builder: (_, __) {
        return Row(
          children: List.generate(3, (i) {
            final delay = i / 3;
            final opacity = (((_ctrl.value + delay) % 1.0) > 0.5) ? 1.0 : 0.3;
            return Container(
              margin: const EdgeInsets.only(right: 2),
              width: 5,
              height: 5,
              decoration: BoxDecoration(
                color: AppTheme.textSecondary.withOpacity(opacity),
                shape: BoxShape.circle,
              ),
            );
          }),
        );
      },
    );
  }
}
