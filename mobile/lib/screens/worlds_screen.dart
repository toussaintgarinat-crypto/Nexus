import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../providers/worlds_provider.dart';
import '../models/world.dart';
import '../theme/app_theme.dart';
import 'channels_screen.dart';
import 'courses_screen.dart';

class WorldsScreen extends StatefulWidget {
  const WorldsScreen({super.key});

  @override
  State<WorldsScreen> createState() => _WorldsScreenState();
}

class _WorldsScreenState extends State<WorldsScreen> {
  int _tab = 0;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final token = context.read<AuthProvider>().token!;
      context.read<WorldsProvider>().fetchWorlds(token);
    });
  }

  void _showCreateWorld() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: AppTheme.surface,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (_) => const _CreateWorldSheet(),
    );
  }

  void _showJoinWorld() {
    final ctrl = TextEditingController();
    showDialog(
      context: context,
      builder: (_) => AlertDialog(
        backgroundColor: AppTheme.surface,
        title: const Text('Rejoindre un world', style: TextStyle(color: AppTheme.textPrimary)),
        content: TextField(
          controller: ctrl,
          style: const TextStyle(color: AppTheme.textPrimary),
          decoration: const InputDecoration(
            hintText: 'Code d\'invitation',
            hintStyle: TextStyle(color: AppTheme.textSecondary),
          ),
          autofocus: true,
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: const Text('Annuler')),
          TextButton(
            onPressed: () async {
              final token = context.read<AuthProvider>().token!;
              final ok = await context.read<WorldsProvider>().joinWorld(ctrl.text.trim(), token);
              if (!mounted) return;
              Navigator.pop(context);
              if (!ok) {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Code invalide ou expiré'), backgroundColor: AppTheme.error),
                );
              }
            },
            child: const Text('Rejoindre'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    final user = auth.user!;

    return Scaffold(
      appBar: AppBar(
        leading: Padding(
          padding: const EdgeInsets.all(8),
          child: Container(
            decoration: BoxDecoration(
              color: AppTheme.primary.withOpacity(0.15),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: AppTheme.primary.withOpacity(0.3)),
            ),
            alignment: Alignment.center,
            child: Text(user.avatarEmoji, style: const TextStyle(fontSize: 18)),
          ),
        ),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Nexus', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700)),
            Text(user.displayName, style: const TextStyle(fontSize: 11, color: AppTheme.textSecondary)),
          ],
        ),
        actions: [
          IconButton(icon: const Icon(Icons.logout_rounded), onPressed: () => auth.logout()),
        ],
        bottom: TabBar(
          onTap: (i) => setState(() => _tab = i),
          tabs: const [
            Tab(text: 'Mes Worlds'),
            Tab(text: 'Cours'),
          ],
          labelColor: AppTheme.primary,
          unselectedLabelColor: AppTheme.textSecondary,
          indicatorColor: AppTheme.primary,
        ),
      ),
      body: _tab == 0 ? _WorldsTab(onCreateWorld: _showCreateWorld, onJoinWorld: _showJoinWorld) : const CoursesScreen(),
      floatingActionButton: _tab == 0
          ? FloatingActionButton(
              onPressed: _showCreateWorld,
              backgroundColor: AppTheme.primary,
              child: const Icon(Icons.add, color: Colors.white),
            )
          : null,
    );
  }
}

class _WorldsTab extends StatelessWidget {
  final VoidCallback onCreateWorld;
  final VoidCallback onJoinWorld;

  const _WorldsTab({required this.onCreateWorld, required this.onJoinWorld});

  @override
  Widget build(BuildContext context) {
    final worlds = context.watch<WorldsProvider>();
    final token = context.read<AuthProvider>().token!;

    if (worlds.loading && worlds.worlds.isEmpty) {
      return const Center(child: CircularProgressIndicator(color: AppTheme.primary));
    }

    if (worlds.worlds.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('🌐', style: TextStyle(fontSize: 56)),
            const SizedBox(height: 16),
            const Text('Aucun world encore', style: TextStyle(color: AppTheme.textPrimary, fontSize: 18, fontWeight: FontWeight.w600)),
            const SizedBox(height: 8),
            const Text('Crée ou rejoins un world pour commencer', style: TextStyle(color: AppTheme.textSecondary)),
            const SizedBox(height: 24),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton.icon(
                  onPressed: onCreateWorld,
                  icon: const Icon(Icons.add, size: 18),
                  label: const Text('Créer'),
                ),
                const SizedBox(width: 12),
                OutlinedButton.icon(
                  onPressed: onJoinWorld,
                  icon: const Icon(Icons.link, size: 18),
                  label: const Text('Rejoindre'),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: AppTheme.textSecondary,
                    side: const BorderSide(color: AppTheme.border),
                  ),
                ),
              ],
            ),
          ],
        ),
      );
    }

    return RefreshIndicator(
      onRefresh: () => worlds.fetchWorlds(token),
      color: AppTheme.primary,
      backgroundColor: AppTheme.surface,
      child: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Row(
            children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: onJoinWorld,
                  icon: const Icon(Icons.link, size: 16),
                  label: const Text('Rejoindre via code'),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: AppTheme.textSecondary,
                    side: const BorderSide(color: AppTheme.border),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          ...worlds.worlds.map((w) => _WorldCard(
                world: w,
                onTap: () {
                  worlds.selectWorld(w, token);
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const ChannelsScreen()));
                },
              )),
        ],
      ),
    );
  }
}

class _WorldCard extends StatelessWidget {
  final World world;
  final VoidCallback onTap;

  const _WorldCard({required this.world, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      child: Material(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(14),
          child: Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: AppTheme.border),
            ),
            child: Row(
              children: [
                Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(
                    color: world.flutterColor.withOpacity(0.15),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: world.flutterColor.withOpacity(0.3)),
                  ),
                  alignment: Alignment.center,
                  child: Text(world.emoji, style: const TextStyle(fontSize: 26)),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(world.name, style: const TextStyle(color: AppTheme.textPrimary, fontWeight: FontWeight.w600, fontSize: 15)),
                      if (world.description.isNotEmpty)
                        Padding(
                          padding: const EdgeInsets.only(top: 2),
                          child: Text(world.description, style: const TextStyle(color: AppTheme.textSecondary, fontSize: 12), maxLines: 1, overflow: TextOverflow.ellipsis),
                        ),
                    ],
                  ),
                ),
                const Icon(Icons.chevron_right, color: AppTheme.textSecondary),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _CreateWorldSheet extends StatefulWidget {
  const _CreateWorldSheet();

  @override
  State<_CreateWorldSheet> createState() => _CreateWorldSheetState();
}

class _CreateWorldSheetState extends State<_CreateWorldSheet> {
  final _nameCtrl = TextEditingController();
  final _descCtrl = TextEditingController();
  String _emoji = '🌐';
  String _color = '#3B82F6';
  String _type = 'custom';
  bool _loading = false;

  static const _colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#06B6D4', '#F97316'];
  static const _emojis = ['🌐', '⚡', '🚀', '🎮', '🧠', '🔧', '🎨', '📱', '🔒', '🤖', '💡', '🏗️'];

  Future<void> _create() async {
    if (_nameCtrl.text.trim().isEmpty) return;
    setState(() => _loading = true);
    final token = context.read<AuthProvider>().token!;
    final world = await context.read<WorldsProvider>().createWorld(
      token,
      name: _nameCtrl.text.trim(),
      emoji: _emoji,
      color: _color,
      description: _descCtrl.text.trim(),
      type: _type,
    );
    if (!mounted) return;
    setState(() => _loading = false);
    if (world != null) {
      Navigator.pop(context);
      final worlds = context.read<WorldsProvider>();
      await worlds.selectWorld(world, token);
      if (!mounted) return;
      Navigator.push(context, MaterialPageRoute(builder: (_) => const ChannelsScreen()));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 24, right: 24, top: 24,
        bottom: MediaQuery.of(context).viewInsets.bottom + 24,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              const Text('Nouveau world', style: TextStyle(color: AppTheme.textPrimary, fontSize: 18, fontWeight: FontWeight.w700)),
              const Spacer(),
              IconButton(icon: const Icon(Icons.close), onPressed: () => Navigator.pop(context)),
            ],
          ),
          const SizedBox(height: 16),
          // Emoji picker
          const Text('Icône', style: TextStyle(color: AppTheme.textSecondary, fontSize: 12)),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            children: _emojis.map((e) => GestureDetector(
              onTap: () => setState(() => _emoji = e),
              child: Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(
                  color: e == _emoji ? AppTheme.primary.withOpacity(0.2) : AppTheme.surfaceLight,
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: e == _emoji ? AppTheme.primary : AppTheme.border),
                ),
                alignment: Alignment.center,
                child: Text(e, style: const TextStyle(fontSize: 20)),
              ),
            )).toList(),
          ),
          const SizedBox(height: 14),
          // Color picker
          const Text('Couleur', style: TextStyle(color: AppTheme.textSecondary, fontSize: 12)),
          const SizedBox(height: 8),
          Row(
            children: _colors.map((c) {
              final hex = c.replaceFirst('#', '');
              final color = Color(int.parse('FF$hex', radix: 16));
              return GestureDetector(
                onTap: () => setState(() => _color = c),
                child: Container(
                  margin: const EdgeInsets.only(right: 8),
                  width: 32,
                  height: 32,
                  decoration: BoxDecoration(
                    color: color,
                    shape: BoxShape.circle,
                    border: Border.all(
                      color: _color == c ? Colors.white : Colors.transparent,
                      width: 2,
                    ),
                  ),
                ),
              );
            }).toList(),
          ),
          const SizedBox(height: 14),
          TextField(
            controller: _nameCtrl,
            style: const TextStyle(color: AppTheme.textPrimary),
            decoration: const InputDecoration(labelText: 'Nom du world'),
          ),
          const SizedBox(height: 10),
          TextField(
            controller: _descCtrl,
            style: const TextStyle(color: AppTheme.textPrimary),
            decoration: const InputDecoration(labelText: 'Description (optionnel)'),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: _loading ? null : _create,
            child: _loading
                ? const SizedBox(height: 20, width: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Text('Créer le world'),
          ),
        ],
      ),
    );
  }
}
