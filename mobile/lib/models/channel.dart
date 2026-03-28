class Channel {
  final int id;
  final int worldId;
  final String name;
  final String description;
  final String type;
  final String category;
  final int position;
  final bool isDefault;

  Channel({
    required this.id,
    required this.worldId,
    required this.name,
    required this.description,
    required this.type,
    required this.category,
    required this.position,
    required this.isDefault,
  });

  factory Channel.fromJson(Map<String, dynamic> json) => Channel(
        id: json['id'],
        worldId: json['world_id'],
        name: json['name'],
        description: json['description'] ?? '',
        type: json['type'] ?? 'text',
        category: json['category'] ?? 'Général',
        position: json['position'] ?? 0,
        isDefault: json['is_default'] ?? false,
      );

  String get icon {
    switch (type) {
      case 'voice':
        return '🔊';
      case 'mixed':
        return '🎙️';
      default:
        return '#';
    }
  }
}
