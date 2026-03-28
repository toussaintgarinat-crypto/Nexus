class ApiConfig {
  // Change this to your backend URL
  // Local dev:   http://10.0.2.2:8000  (Android emulator)
  //              http://localhost:8000   (iOS simulator)
  // Production:  https://nexus-backend.onrender.com
  static const String baseUrl = 'https://nexus-backend.onrender.com';

  static String get wsBaseUrl => baseUrl.replaceFirst('https://', 'wss://').replaceFirst('http://', 'ws://');

  // Auth
  static const String login = '/auth/login';
  static const String register = '/auth/register';
  static const String me = '/auth/me';

  // Worlds
  static const String worlds = '/worlds/';
  static const String worldTemplates = '/worlds/templates';
  static String worldInvite(int id) => '/worlds/$id/invite';
  static String joinWorld(String code) => '/worlds/join/$code';
  static String deleteWorld(int id) => '/worlds/$id';

  // Channels
  static String worldChannels(int worldId) => '/channels/world/$worldId';
  static String deleteChannel(int id) => '/channels/$id';

  // Messages
  static String messages(int channelId) => '/messages/$channelId';
  static String wsMessages(int channelId) => '${wsBaseUrl}/messages/ws/$channelId';

  // AI
  static const String aiChat = '/ai/chat';
  static const String aiChatStream = '/ai/chat/stream';
  static String aiHistory(int channelId) => '/ai/history/$channelId';
}
