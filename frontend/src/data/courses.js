export const COURSES = [
  {
    id: "html-css",
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
  }
];
