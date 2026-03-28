import 'dart:async';
import 'dart:convert';
import 'package:web_socket_channel/web_socket_channel.dart';
import '../config/api_config.dart';
import '../models/message.dart';

class WebSocketService {
  WebSocketChannel? _channel;
  final StreamController<Message> _messageController = StreamController.broadcast();
  final StreamController<Map<String, dynamic>> _typingController = StreamController.broadcast();

  Stream<Message> get messages => _messageController.stream;
  Stream<Map<String, dynamic>> get typingEvents => _typingController.stream;
  bool get isConnected => _channel != null;

  void connect(int channelId, String token) {
    disconnect();
    final uri = Uri.parse('${ApiConfig.wsMessages(channelId)}?token=$token');
    _channel = WebSocketChannel.connect(uri);
    _channel!.stream.listen(
      (data) {
        try {
          final json = jsonDecode(data as String) as Map<String, dynamic>;
          if (json['type'] == 'message') {
            _messageController.add(Message.fromWs(json));
          } else if (json['type'] == 'typing') {
            _typingController.add(json);
          }
        } catch (_) {}
      },
      onDone: () {},
      onError: (_) {},
    );
  }

  void sendMessage(String content) {
    _channel?.sink.add(jsonEncode({'type': 'message', 'content': content}));
  }

  void sendTyping() {
    _channel?.sink.add(jsonEncode({'type': 'typing'}));
  }

  void disconnect() {
    _channel?.sink.close();
    _channel = null;
  }

  void dispose() {
    disconnect();
    _messageController.close();
    _typingController.close();
  }
}
