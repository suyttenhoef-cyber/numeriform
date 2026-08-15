# Site NumeriForm

Site vitrine statique (HTML / CSS / JS vanilla, sans build) pour l'activité
indépendante de Sébastien Uyttenhoef — marque **NumeriForm**, dans le cadre
du Guichet du Numérique.

## Structure

```
numeriform-site/
├── index.html                    Accueil
├── a-propos.html                 À propos
├── formations.html               Catalogue de formations
├── accompagnement-conseil.html   Accompagnement & conseil
├── e-learning.html               Conception e-learning
├── ressources.html               Blog / ressources
├── contact.html                  Contact + formulaire
├── css/style.css                 Design system complet (tokens, composants)
├── js/main.js                    Menu mobile, filtres, formulaires
├── robots.txt
├── sitemap.xml
└── README.md
```

Aucune dépendance de build : le site s'ouvre tel quel dans un navigateur ou
se déploie directement sur GitHub Pages, Netlify ou tout hébergement statique.

## Design system

- **Couleurs** : bleu profond `#1E3A8A`, bleu clair `#3B82F6`, vert `#10B981`,
  blanc et gris clair — variables CSS centralisées dans `css/style.css` (`:root`).
- **Typographies** : Poppins (titres) + Inter (texte courant), chargées via
  Google Fonts.
- **Élément signature** : le visuel « chemin numérique » de la page d'accueil
  (SVG en 3 étapes : Diagnostic → Formation → Autonomie), qui matérialise la
  méthode d'accompagnement et sert de fil conducteur visuel du site.
- Accessibilité : focus visibles, lien d'évitement (« Aller au contenu »),
  `prefers-reduced-motion` respecté, contrastes conformes AA sur les
  couleurs principales.

## Déploiement sur GitHub Pages

1. Créer un dépôt GitHub (ex. `numeriform-site`) et y pousser tout le
   contenu de ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Site NumeriForm — première version"
   git branch -M main
   git remote add origin https://github.com/<votre-compte>/numeriform-site.git
   git push -u origin main
   ```
2. Dans **Settings > Pages** du dépôt, choisir la branche `main` et le
   dossier `/ (root)`.
3. Le site sera disponible à une adresse du type
   `https://<votre-compte>.github.io/numeriform-site/`.
4. Pour un nom de domaine personnalisé (`numeriform.be`), ajouter un fichier
   `CNAME` à la racine contenant le domaine, puis configurer les DNS chez le
   registrar (enregistrement `CNAME` ou `A` selon la documentation GitHub Pages).

## Formulaire de contact et newsletter

Le formulaire fonctionne actuellement **côté front-end uniquement** (message
de confirmation affiché, sans envoi réel) — voir `js/main.js`. Pour recevoir
réellement les messages, deux options simples sans back-end à héberger :

- **Formspree** (https://formspree.io) : remplacer l'attribut `id` du
  formulaire par un `action="https://formspree.io/f/VOTRE_ID"` et
  `method="POST"`, puis supprimer le `e.preventDefault()` correspondant dans
  `main.js`.
- **Netlify Forms** (si hébergé sur Netlify) : ajouter `data-netlify="true"`
  sur la balise `<form>`.

## Images à intégrer

Le site utilise volontairement des blocs de couleur (dégradés CSS/SVG) à la
place de photographies, pour rester déployable immédiatement sans dépendre
de droits d'image. Suggestions de visuels à ajouter par la suite :

- **Accueil / À propos** : photo professionnelle de Sébastien Uyttenhoef en
  situation de formation (devant un groupe, ou en gros plan avec un
  ordinateur/tableau).
- **Formations** : photos génériques libres de droit (Unsplash/Pexels) de
  salles de formation, d'agents communaux au travail, d'ordinateurs portables.
- **Accompagnement & Conseil** : photo de réunion d'équipe, tableau blanc,
  post-its de brainstorming.
- **E-learning** : capture d'écran stylisée d'un module Storyline/Rise (à
  produire à partir d'un vrai module une fois disponible).
- **Blog** : une image d'illustration par catégorie (IA, productivité,
  inclusion numérique, pouvoirs locaux, outils Microsoft), pour garder une
  cohérence visuelle dans les vignettes d'articles.
- **Logo** : le logo texte actuel (« Numeri**Form** ») peut être remplacé par
  un logo graphique dans `images/` puis référencé dans le `<header>` de
  chaque page.

## À personnaliser avant mise en ligne

- Adresse email de contact (`contact@numeriform.be` est un placeholder).
- Numéro de téléphone si vous souhaitez l'afficher.
- Témoignages : ceux du site sont **illustratifs** (clairement indiqués comme
  tels sur la page d'accueil) — à remplacer par de vrais retours clients dès
  que possible pour la crédibilité et le SEO local.
- Statistiques du bandeau bleu (10+ ans, 500+ agents formés, etc.) — à
  ajuster avec vos chiffres réels.
- Liens réseaux sociaux / LinkedIn — à ajouter dans le pied de page et dans
  le schéma JSON-LD (`sameAs`) de `index.html`.
