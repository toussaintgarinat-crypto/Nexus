class World {
  final int id;
  final String name;
  final String emoji;
  final String color;
  final String description;
  final String type;
  final int ownerId;
  final DateTime createdAt;

  World({
    required this.id,
    required this.name,
    required this.emoji,
    required this.color,
    required this.description,
    required this.type,
    required this.ownerId,
    required this.createdAt,
  });

  factory World.fromJson(Map<String, dynamic> json) => World(
        id: json['id'],
        name: json['name'],
        emoji: json['emoji'] ?? '🌐',
        color: json['color'] ?? '#3B82F6',
        description: json['description'] ?? '',
        type: json['type'] ?? 'custom',
        ownerId: json['owner_id'],
        createdAt: DateTime.parse(json['created_at']),
      );

  Color get flutterColor {
    try {
      final hex = color.replaceFirst('#', '');
      return Color(int.parse('FF$hex', radix: 16));
    } catch (_) {
      return const Color(0xFF3B82F6);
    }
  }
}
