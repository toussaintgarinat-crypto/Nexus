import 'package:flutter/material.dart';
import '../models/user.dart';
import '../services/auth_service.dart';
import '../services/api_service.dart';

enum AuthStatus { loading, authenticated, unauthenticated }

class AuthProvider extends ChangeNotifier {
  final AuthService _authService = AuthService();

  AuthStatus _status = AuthStatus.loading;
  User? _user;
  String? _token;
  String? _error;

  AuthStatus get status => _status;
  User? get user => _user;
  String? get token => _token;
  String? get error => _error;
  bool get isAuthenticated => _status == AuthStatus.authenticated;

  Future<void> init() async {
    final savedToken = await _authService.getToken();
    if (savedToken != null) {
      try {
        _user = await _authService.getMe(savedToken).timeout(
          const Duration(seconds: 10),
          onTimeout: () => throw Exception('timeout'),
        );
        _token = savedToken;
        _status = AuthStatus.authenticated;
      } catch (_) {
        await _authService.clearToken();
        _status = AuthStatus.unauthenticated;
      }
    } else {
      _status = AuthStatus.unauthenticated;
    }
    notifyListeners();
  }

  Future<bool> login(String email, String password) async {
    _error = null;
    try {
      _token = await _authService.login(email, password);
      _user = await _authService.getMe(_token!);
      _status = AuthStatus.authenticated;
      notifyListeners();
      return true;
    } on ApiException catch (e) {
      _error = e.message;
      notifyListeners();
      return false;
    } catch (_) {
      _error = 'Erreur de connexion. Vérifiez votre réseau.';
      notifyListeners();
      return false;
    }
  }

  Future<bool> register({
    required String email,
    required String password,
    required String displayName,
    required String avatarEmoji,
  }) async {
    _error = null;
    try {
      await _authService.register(
        email: email,
        password: password,
        displayName: displayName,
        avatarEmoji: avatarEmoji,
      );
      return await login(email, password);
    } on ApiException catch (e) {
      _error = e.message;
      notifyListeners();
      return false;
    } catch (_) {
      _error = 'Erreur lors de la création du compte.';
      notifyListeners();
      return false;
    }
  }

  Future<void> logout() async {
    await _authService.clearToken();
    _token = null;
    _user = null;
    _status = AuthStatus.unauthenticated;
    notifyListeners();
  }
}
