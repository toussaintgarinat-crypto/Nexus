import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

// Cours intégrés localement (pas besoin de réseau)
const _courses = [
  {'id': 'html-css', 'emoji': '🌐', 'title': 'HTML & CSS', 'description': 'Les fondations du web', 'level': 'Débutant', 'color': '#E34F26', 'category': 'Frontend', 'lessons': 3},
  {'id': 'javascript', 'emoji': '⚡', 'title': 'JavaScript', 'description': 'Le langage de programmation du web', 'level': 'Débutant', 'color': '#F7DF1E', 'category': 'Frontend', 'lessons': 3},
  {'id': 'react', 'emoji': '⚛️', 'title': 'React', 'description': 'Interfaces modernes avec React', 'level': 'Intermédiaire', 'color': '#61DAFB', 'category': 'Frontend', 'lessons': 3},
  {'id': 'typescript', 'emoji': '🔷', 'title': 'TypeScript', 'description': 'JavaScript avec le typage fort', 'level': 'Intermédiaire', 'color': '#3178C6', 'category': 'Frontend', 'lessons': 3},
  {'id': 'performance-web', 'emoji': '🚀', 'title': 'Performance Web', 'description': 'Optimiser vitesse et Core Web Vitals', 'level': 'Avancé', 'color': '#F97316', 'category': 'Frontend', 'lessons': 3},
  {'id': 'python', 'emoji': '🐍', 'title': 'Python', 'description': 'Le langage polyvalent', 'level': 'Débutant', 'color': '#3776AB', 'category': 'Backend', 'lessons': 4},
  {'id': 'api-rest', 'emoji': '🔌', 'title': 'API REST', 'description': 'Concevoir et consommer des APIs', 'level': 'Intermédiaire', 'color': '#10B981', 'category': 'Backend', 'lessons': 3},
  {'id': 'docker', 'emoji': '🐳', 'title': 'Docker', 'description': 'Conteneurisation et déploiement', 'level': 'Intermédiaire', 'color': '#2496ED', 'category': 'Backend', 'lessons': 3},
  {'id': 'architecture-backend', 'emoji': '🏗️', 'title': 'Architecture Backend', 'description': 'Microservices, scalabilité, patterns', 'level': 'Avancé', 'color': '#6366F1', 'category': 'Backend', 'lessons': 3},
  {'id': 'message-queues', 'emoji': '📨', 'title': 'Message Queues', 'description': 'Kafka, RabbitMQ, systèmes async', 'level': 'Avancé', 'color': '#FF6B35', 'category': 'Backend', 'lessons': 3},
  {'id': 'graphql', 'emoji': '◈', 'title': 'GraphQL', 'description': 'API flexible et typée', 'level': 'Intermédiaire', 'color': '#E10098', 'category': 'Backend', 'lessons': 2},
  {'id': 'sql', 'emoji': '🗄️', 'title': 'SQL', 'description': 'Maîtriser les bases relationnelles', 'level': 'Débutant', 'color': '#336791', 'category': 'Base de données', 'lessons': 3},
  {'id': 'bases-de-donnees-sql', 'emoji': '💾', 'title': 'Bases de données SQL', 'description': 'ACID, transactions, index', 'level': 'Intermédiaire', 'color': '#F59E0B', 'category': 'Base de données', 'lessons': 3},
  {'id': 'postgresql-avance', 'emoji': '🐘', 'title': 'PostgreSQL Avancé', 'description': 'JSONB, performances, partitionnement', 'level': 'Avancé', 'color': '#336791', 'category': 'Base de données', 'lessons': 3},
  {'id': 'nosql-mongodb', 'emoji': '🍃', 'title': 'MongoDB', 'description': 'Base de données orientée documents', 'level': 'Intermédiaire', 'color': '#47A248', 'category': 'Base de données', 'lessons': 3},
  {'id': 'nosql-redis', 'emoji': '🔴', 'title': 'Redis', 'description': 'Cache et structures de données in-memory', 'level': 'Intermédiaire', 'color': '#DC382D', 'category': 'Base de données', 'lessons': 3},
  {'id': 'choisir-base-donnees', 'emoji': '🧭', 'title': 'Choisir sa base de données', 'description': 'Guide complet de sélection', 'level': 'Intermédiaire', 'color': '#8B5CF6', 'category': 'Base de données', 'lessons': 3},
  {'id': 'devops', 'emoji': '🔄', 'title': 'DevOps', 'description': 'CI/CD, infrastructure as code', 'level': 'Intermédiaire', 'color': '#0EA5E9', 'category': 'DevOps', 'lessons': 3},
  {'id': 'reseaux-http', 'emoji': '🌐', 'title': 'Réseaux & HTTP', 'description': 'TCP/IP, HTTP/2, WebSockets', 'level': 'Intermédiaire', 'color': '#64748B', 'category': 'DevOps', 'lessons': 3},
  {'id': 'securite-web', 'emoji': '🔒', 'title': 'Sécurité Web', 'description': 'OWASP, authentification, chiffrement', 'level': 'Intermédiaire', 'color': '#EF4444', 'category': 'Sécurité', 'lessons': 4},
  {'id': 'ia-llm', 'emoji': '🤖', 'title': 'IA & LLMs', 'description': 'Comprendre l\'intelligence artificielle', 'level': 'Intermédiaire', 'color': '#8B5CF6', 'category': 'IA & LLM', 'lessons': 4},
  {'id': 'coder-avec-ia', 'emoji': '🤖', 'title': 'Coder avec l\'IA', 'description': 'MCP, agents, sous-agents, RAG', 'level': 'Intermédiaire', 'color': '#8B5CF6', 'category': 'IA & LLM', 'lessons': 4},
  {'id': 'git', 'emoji': '🌿', 'title': 'Git', 'description': 'Contrôle de version et collaboration', 'level': 'Débutant', 'color': '#F05032', 'category': 'Fondamentaux', 'lessons': 3},
  {'id': 'algorithmes', 'emoji': '🧮', 'title': 'Algorithmes', 'description': 'Tri, recherche, complexité', 'level': 'Intermédiaire', 'color': '#6366F1', 'category': 'Fondamentaux', 'lessons': 3},
  {'id': 'design-patterns', 'emoji': '🎨', 'title': 'Design Patterns', 'description': 'Patterns de conception logicielle', 'level': 'Intermédiaire', 'color': '#8B5CF6', 'category': 'Fondamentaux', 'lessons': 3},
  {'id': 'choisir-langage', 'emoji': '🧠', 'title': 'Choisir son langage', 'description': 'Idéal vs raisonnable selon ton besoin', 'level': 'Débutant', 'color': '#F59E0B', 'category': 'Fondamentaux', 'lessons': 3},
  {'id': 'open-source', 'emoji': '🔓', 'title': 'Open Source & Licences', 'description': 'Licences, contribuer, créer un projet', 'level': 'Débutant', 'color': '#10B981', 'category': 'Fondamentaux', 'lessons': 4},
  {'id': 'serveurs-vm', 'emoji': '🖥️', 'title': 'Serveurs & VMs', 'description': 'Bare metal, virtualisation, Proxmox', 'level': 'Débutant', 'color': '#6366F1', 'category': 'Serveurs & Infra', 'lessons': 4},
  {'id': 'terminal', 'emoji': '💻', 'title': 'Terminal', 'description': 'Commandes macOS et Windows', 'level': 'Débutant', 'color': '#06B6D4', 'category': 'Outils', 'lessons': 4},
];

const _categories = [
  {'id': 'all', 'label': 'Tous', 'emoji': '📚'},
  {'id': 'Frontend', 'label': 'Frontend', 'emoji': '🎨'},
  {'id': 'Backend', 'label': 'Backend', 'emoji': '⚙️'},
  {'id': 'Base de données', 'label': 'Base de données', 'emoji': '🗄️'},
  {'id': 'DevOps', 'label': 'DevOps', 'emoji': '🚀'},
  {'id': 'Sécurité', 'label': 'Sécurité', 'emoji': '🔒'},
  {'id': 'IA & LLM', 'label': 'IA & LLM', 'emoji': '🤖'},
  {'id': 'Fondamentaux', 'label': 'Fondamentaux', 'emoji': '🧱'},
  {'id': 'Serveurs & Infra', 'label': 'Serveurs & Infra', 'emoji': '🖥️'},
  {'id': 'Outils', 'label': 'Outils', 'emoji': '🛠️'},
];

const _levelColors = {
  'Débutant': Color(0xFF10B981),
  'Intermédiaire': Color(0xFFF59E0B),
  'Avancé': Color(0xFFEF4444),
};

class CoursesScreen extends StatefulWidget {
  const CoursesScreen({super.key});

  @override
  State<CoursesScreen> createState() => _CoursesScreenState();
}

class _CoursesScreenState extends State<CoursesScreen> {
  String _search = '';
  String _activeCategory = 'all';

  List<Map<String, dynamic>> get _filtered => _courses.where((c) {
        final matchSearch = _search.isEmpty ||
            (c['title'] as String).toLowerCase().contains(_search.toLowerCase()) ||
            (c['description'] as String).toLowerCase().contains(_search.toLowerCase());
        final matchCat = _activeCategory == 'all' || c['category'] == _activeCategory;
        return matchSearch && matchCat;
      }).toList().cast<Map<String, dynamic>>();

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Search + filters
        Container(
          color: AppTheme.surface,
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
          child: Column(
            children: [
              TextField(
                onChanged: (v) => setState(() => _search = v),
                style: const TextStyle(color: AppTheme.textPrimary, fontSize: 14),
                decoration: InputDecoration(
                  hintText: 'Rechercher un cours...',
                  prefixIcon: const Icon(Icons.search, size: 20),
                  suffixIcon: _search.isNotEmpty
                      ? IconButton(icon: const Icon(Icons.clear, size: 18), onPressed: () => setState(() => _search = ''))
                      : null,
                ),
              ),
              const SizedBox(height: 10),
              SizedBox(
                height: 34,
                child: ListView.separated(
                  scrollDirection: Axis.horizontal,
                  itemCount: _categories.length,
                  separatorBuilder: (_, __) => const SizedBox(width: 6),
                  itemBuilder: (_, i) {
                    final cat = _categories[i];
                    final id = cat['id'] as String;
                    final isActive = _activeCategory == id;
                    final count = id == 'all'
                        ? _courses.length
                        : _courses.where((c) => c['category'] == id).length;
                    return GestureDetector(
                      onTap: () => setState(() => _activeCategory = id),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 150),
                        padding: const EdgeInsets.symmetric(horizontal: 12),
                        decoration: BoxDecoration(
                          color: isActive ? AppTheme.primary.withOpacity(0.2) : AppTheme.surfaceLight,
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: isActive ? AppTheme.primary : AppTheme.border),
                        ),
                        alignment: Alignment.center,
                        child: Text(
                          '${cat['emoji']} ${cat['label']} ($count)',
                          style: TextStyle(
                            color: isActive ? AppTheme.primary : AppTheme.textSecondary,
                            fontSize: 12,
                            fontWeight: isActive ? FontWeight.w600 : FontWeight.normal,
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
              const SizedBox(height: 12),
            ],
          ),
        ),
        const Divider(height: 1),
        // Grid
        Expanded(
          child: _filtered.isEmpty
              ? Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text('🔍', style: TextStyle(fontSize: 40)),
                      const SizedBox(height: 12),
                      Text('Aucun cours pour "$_search"', style: const TextStyle(color: AppTheme.textSecondary)),
                    ],
                  ),
                )
              : GridView.builder(
                  padding: const EdgeInsets.all(14),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    childAspectRatio: 0.85,
                    crossAxisSpacing: 10,
                    mainAxisSpacing: 10,
                  ),
                  itemCount: _filtered.length,
                  itemBuilder: (_, i) => _CourseCard(course: _filtered[i]),
                ),
        ),
      ],
    );
  }
}

class _CourseCard extends StatelessWidget {
  final Map<String, dynamic> course;

  const _CourseCard({required this.course});

  Color get _color {
    try {
      final hex = (course['color'] as String).replaceFirst('#', '');
      return Color(int.parse('FF$hex', radix: 16));
    } catch (_) {
      return AppTheme.primary;
    }
  }

  @override
  Widget build(BuildContext context) {
    final level = course['level'] as String;
    final levelColor = _levelColors[level] ?? AppTheme.textSecondary;
    final lessons = course['lessons'] as int;

    return Material(
      color: AppTheme.surface,
      borderRadius: BorderRadius.circular(14),
      child: InkWell(
        borderRadius: BorderRadius.circular(14),
        onTap: () {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('${course['emoji']} ${course['title']} — ${course['description']}')),
          );
        },
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: AppTheme.border),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 46,
                    height: 46,
                    decoration: BoxDecoration(
                      color: _color.withOpacity(0.15),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    alignment: Alignment.center,
                    child: Text(course['emoji'] as String, style: const TextStyle(fontSize: 24)),
                  ),
                  const Spacer(),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 3),
                    decoration: BoxDecoration(
                      color: levelColor.withOpacity(0.15),
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: levelColor.withOpacity(0.4)),
                    ),
                    child: Text(level, style: TextStyle(color: levelColor, fontSize: 9, fontWeight: FontWeight.w600)),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              Text(
                course['title'] as String,
                style: const TextStyle(color: AppTheme.textPrimary, fontWeight: FontWeight.w600, fontSize: 13),
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
              const SizedBox(height: 4),
              Expanded(
                child: Text(
                  course['description'] as String,
                  style: const TextStyle(color: AppTheme.textSecondary, fontSize: 11, height: 1.4),
                  maxLines: 3,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                '📖 $lessons leçon${lessons > 1 ? 's' : ''}',
                style: const TextStyle(color: AppTheme.textSecondary, fontSize: 11),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
