class User {
  final int id;
  final String email;
  final String displayName;
  final String avatarEmoji;
  final DateTime createdAt;

  User({
    required this.id,
    required this.email,
    required this.displayName,
    required this.avatarEmoji,
    required this.createdAt,
  });

  factory User.fromJson(Map<String, dynamic> json) => User(
        id: json['id'],
        email: json['email'],
        displayName: json['display_name'] ?? '',
        avatarEmoji: json['avatar_emoji'] ?? '🧑‍💻',
        createdAt: DateTime.parse(json['created_at']),
      );
}
