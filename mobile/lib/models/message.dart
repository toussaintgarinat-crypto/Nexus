class MessageUser {
  final int id;
  final String avatarEmoji;
  final String displayName;

  MessageUser({required this.id, required this.avatarEmoji, required this.displayName});

  factory MessageUser.fromJson(Map<String, dynamic> json) => MessageUser(
        id: json['id'],
        avatarEmoji: json['avatar_emoji'] ?? '🧑‍💻',
        displayName: json['display_name'] ?? '',
      );
}

class Message {
  final int id;
  final int channelId;
  final String content;
  final DateTime createdAt;
  final MessageUser user;

  Message({
    required this.id,
    required this.channelId,
    required this.content,
    required this.createdAt,
    required this.user,
  });

  factory Message.fromJson(Map<String, dynamic> json) => Message(
        id: json['id'],
        channelId: json['channel_id'],
        content: json['content'],
        createdAt: DateTime.parse(json['created_at']),
        user: MessageUser.fromJson(json['user']),
      );

  factory Message.fromWs(Map<String, dynamic> json) => Message(
        id: json['id'] ?? 0,
        channelId: 0,
        content: json['content'],
        createdAt: DateTime.tryParse(json['created_at'] ?? '') ?? DateTime.now(),
        user: MessageUser.fromJson(json['user']),
      );
}
