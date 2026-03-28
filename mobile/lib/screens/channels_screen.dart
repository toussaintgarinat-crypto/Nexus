import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../providers/worlds_provider.dart';
import '../models/channel.dart';
import '../theme/app_theme.dart';
import 'chat_screen.dart';

class ChannelsScreen extends StatelessWidget {
  const ChannelsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final worlds = context.watch<WorldsProvider>();
    final auth = context.read<AuthProvider>();
    final world = worlds.selectedWorld!;

    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            Text(world.emoji, style: const TextStyle(fontSize: 22)),
            const SizedBox(width: 8),
            Text(world.name),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.link_rounded),
            tooltip: 'Inviter',
            onPressed: () async {
              final code = await worlds.generateInvite(world.id, auth.token!);
              if (!context.mounted) return;
              if (code != null) {
                showDialog(
                  context: context,
                  builder: (_) => AlertDialog(
                    backgroundColor: AppTheme.surface,
                    title: const Text('Code d\'invitation', style: TextStyle(color: AppTheme.textPrimary)),
                    content: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Text('Partage ce code pour inviter des membres :', style: TextStyle(color: AppTheme.textSecondary, fontSize: 13)),
                        const SizedBox(height: 12),
                        Container(
                          padding: const EdgeInsets.all(14),
                          decoration: BoxDecoration(
                            color: AppTheme.surfaceLight,
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(color: AppTheme.primary.withOpacity(0.4)),
                          ),
                          child: SelectableText(
                            code,
                            style: const TextStyle(
                              color: AppTheme.primary,
                              fontSize: 20,
                              fontWeight: FontWeight.w700,
                              letterSpacing: 2,
                              fontFamily: 'monospace',
                            ),
                          ),
                        ),
                      ],
                    ),
                    actions: [
                      TextButton(onPressed: () => Navigator.pop(context), child: const Text('Fermer')),
                    ],
                  ),
                );
              }
            },
          ),
        ],
      ),
      body: worlds.loading
          ? const Center(child: CircularProgressIndicator(color: AppTheme.primary))
          : worlds.channels.isEmpty
              ? const Center(
                  child: Text('Aucun channel', style: TextStyle(color: AppTheme.textSecondary)),
                )
              : _ChannelsList(channels: worlds.channels, categorized: worlds.channelsByCategory),
    );
  }
}

class _ChannelsList extends StatelessWidget {
  final List<Channel> channels;
  final Map<String, List<Channel>> categorized;

  const _ChannelsList({required this.channels, required this.categorized});

  @override
  Widget build(BuildContext context) {
    final worlds = context.read<WorldsProvider>();
    final categories = categorized.keys.toList();

    return ListView.builder(
      padding: const EdgeInsets.symmetric(vertical: 8),
      itemCount: categories.length,
      itemBuilder: (context, catIndex) {
        final category = categories[catIndex];
        final catChannels = categorized[category]!;

        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 16, 16, 6),
              child: Text(
                category.toUpperCase(),
                style: const TextStyle(
                  color: AppTheme.textSecondary,
                  fontSize: 11,
                  fontWeight: FontWeight.w600,
                  letterSpacing: 0.8,
                ),
              ),
            ),
            ...catChannels.map((ch) => _ChannelTile(channel: ch)),
          ],
        );
      },
    );
  }
}

class _ChannelTile extends StatelessWidget {
  final Channel channel;

  const _ChannelTile({required this.channel});

  @override
  Widget build(BuildContext context) {
    final worlds = context.watch<WorldsProvider>();
    final isSelected = worlds.selectedChannel?.id == channel.id;

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () {
          worlds.selectChannel(channel);
          Navigator.push(context, MaterialPageRoute(builder: (_) => const ChatScreen()));
        },
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 1),
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
          decoration: BoxDecoration(
            color: isSelected ? AppTheme.primary.withOpacity(0.15) : Colors.transparent,
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            children: [
              Container(
                width: 28,
                alignment: Alignment.center,
                child: channel.type == 'text'
                    ? const Text('#', style: TextStyle(color: AppTheme.textSecondary, fontSize: 18, fontWeight: FontWeight.w700))
                    : Text(channel.icon, style: const TextStyle(fontSize: 16)),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      channel.name,
                      style: TextStyle(
                        color: isSelected ? AppTheme.primary : AppTheme.textPrimary,
                        fontWeight: isSelected ? FontWeight.w600 : FontWeight.w400,
                        fontSize: 15,
                      ),
                    ),
                    if (channel.description.isNotEmpty)
                      Text(channel.description, style: const TextStyle(color: AppTheme.textSecondary, fontSize: 11), maxLines: 1, overflow: TextOverflow.ellipsis),
                  ],
                ),
              ),
              const Icon(Icons.chevron_right, color: AppTheme.textSecondary, size: 18),
            ],
          ),
        ),
      ),
    );
  }
}
