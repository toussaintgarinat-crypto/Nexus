import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'providers/auth_provider.dart';
import 'providers/worlds_provider.dart';
import 'screens/login_screen.dart';
import 'screens/worlds_screen.dart';
import 'theme/app_theme.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const NexusApp());
}

class NexusApp extends StatelessWidget {
  const NexusApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()..init()),
        ChangeNotifierProvider(create: (_) => WorldsProvider()),
      ],
      child: MaterialApp(
        title: 'Nexus',
        theme: AppTheme.dark,
        debugShowCheckedModeBanner: false,
        home: const _Root(),
      ),
    );
  }
}

class _Root extends StatelessWidget {
  const _Root();

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();

    switch (auth.status) {
      case AuthStatus.loading:
        return const Scaffold(
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text('⚡', style: TextStyle(fontSize: 56)),
                SizedBox(height: 24),
                CircularProgressIndicator(color: AppTheme.primary),
              ],
            ),
          ),
        );
      case AuthStatus.authenticated:
        return const WorldsScreen();
      case AuthStatus.unauthenticated:
        return const LoginScreen();
    }
  }
}
