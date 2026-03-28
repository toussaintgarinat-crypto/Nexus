import 'package:flutter/material.dart';
import '../config/api_config.dart';
import '../models/world.dart';
import '../models/channel.dart';
import '../services/api_service.dart';

class WorldsProvider extends ChangeNotifier {
  List<World> _worlds = [];
  List<Channel> _channels = [];
  World? _selectedWorld;
  Channel? _selectedChannel;
  bool _loading = false;
  String? _error;

  List<World> get worlds => _worlds;
  List<Channel> get channels => _channels;
  World? get selectedWorld => _selectedWorld;
  Channel? get selectedChannel => _selectedChannel;
  bool get loading => _loading;
  String? get error => _error;

  Map<String, List<Channel>> get channelsByCategory {
    final map = <String, List<Channel>>{};
    for (final ch in _channels) {
      map.putIfAbsent(ch.category, () => []).add(ch);
    }
    return map;
  }

  Future<void> fetchWorlds(String token) async {
    _loading = true;
    _error = null;
    notifyListeners();
    try {
      final api = ApiService(token: token);
      final data = await api.get(ApiConfig.worlds) as List;
      _worlds = data.map((j) => World.fromJson(j)).toList();
    } on ApiException catch (e) {
      _error = e.message;
    } catch (_) {
      _error = 'Impossible de charger les worlds.';
    }
    _loading = false;
    notifyListeners();
  }

  Future<void> selectWorld(World world, String token) async {
    _selectedWorld = world;
    _selectedChannel = null;
    _channels = [];
    notifyListeners();
    await fetchChannels(world.id, token);
  }

  Future<void> fetchChannels(int worldId, String token) async {
    _loading = true;
    notifyListeners();
    try {
      final api = ApiService(token: token);
      final data = await api.get(ApiConfig.worldChannels(worldId)) as List;
      _channels = data.map((j) => Channel.fromJson(j)).toList()
        ..sort((a, b) => a.position.compareTo(b.position));
      if (_channels.isNotEmpty) {
        _selectedChannel = _channels.firstWhere((c) => c.isDefault, orElse: () => _channels.first);
      }
    } on ApiException catch (e) {
      _error = e.message;
    } catch (_) {
      _error = 'Impossible de charger les channels.';
    }
    _loading = false;
    notifyListeners();
  }

  void selectChannel(Channel channel) {
    _selectedChannel = channel;
    notifyListeners();
  }

  Future<World?> createWorld(String token, {
    required String name,
    required String emoji,
    required String color,
    required String description,
    required String type,
  }) async {
    try {
      final api = ApiService(token: token);
      final data = await api.post(ApiConfig.worlds, {
        'name': name,
        'emoji': emoji,
        'color': color,
        'description': description,
        'type': type,
      });
      final world = World.fromJson(data);
      _worlds.insert(0, world);
      notifyListeners();
      return world;
    } catch (_) {
      return null;
    }
  }

  Future<String?> generateInvite(int worldId, String token) async {
    try {
      final api = ApiService(token: token);
      final data = await api.post(ApiConfig.worldInvite(worldId), {'max_uses': 10});
      return data['code'] as String?;
    } catch (_) {
      return null;
    }
  }

  Future<bool> joinWorld(String code, String token) async {
    try {
      final api = ApiService(token: token);
      final data = await api.post(ApiConfig.joinWorld(code), {});
      final world = World.fromJson(data);
      _worlds.insert(0, world);
      notifyListeners();
      return true;
    } catch (_) {
      return false;
    }
  }

  void clearSelection() {
    _selectedWorld = null;
    _selectedChannel = null;
    _channels = [];
    notifyListeners();
  }
}
