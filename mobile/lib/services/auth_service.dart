import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import '../config/api_config.dart';
import '../models/user.dart';
import 'api_service.dart';

class AuthService {
  static const _tokenKey = 'nexus_token';

  Future<String?> getToken() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString(_tokenKey);
  }

  Future<void> saveToken(String token) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_tokenKey, token);
  }

  Future<void> clearToken() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_tokenKey);
  }

  Future<String> login(String email, String password) async {
    final res = await http.post(
      Uri.parse('${ApiConfig.baseUrl}${ApiConfig.login}'),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: {'username': email, 'password': password},
    );
    if (res.statusCode >= 200 && res.statusCode < 300) {
      final token = jsonDecode(res.body)['access_token'] as String;
      await saveToken(token);
      return token;
    }
    String msg = 'Identifiants incorrects';
    try {
      msg = jsonDecode(res.body)['detail'] ?? msg;
    } catch (_) {}
    throw ApiException(msg, statusCode: res.statusCode);
  }

  Future<void> register({
    required String email,
    required String password,
    required String displayName,
    required String avatarEmoji,
  }) async {
    final api = ApiService();
    await api.post(ApiConfig.register, {
      'email': email,
      'password': password,
      'display_name': displayName,
      'avatar_emoji': avatarEmoji,
    });
  }

  Future<User> getMe(String token) async {
    final api = ApiService(token: token);
    final data = await api.get(ApiConfig.me);
    return User.fromJson(data);
  }
}
