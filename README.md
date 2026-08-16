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
├── accompagnement-conseil.html   Conseil & accompagnement
├── e-learning.html               Conception e-learning
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

## Email de contact et anti-spam

Le site n'affiche jamais l'adresse email en clair (pour limiter la
récupération automatisée par des robots à des fins de spam). Tous les liens
de contact utilisent le texte **« Nous écrire »**, qui pointe en interne vers
`mailto:s.numeriform@gmail.com`. Pour changer cette adresse, faites une
recherche globale sur `s.numeriform@gmail.com` dans les fichiers `.html`.

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
- **Blog** : la rubrique Ressources/blog a été retirée du site pour rester
  centré sur les formations et le conseil. Si vous voulez la réintroduire un
  jour, prévoyez une image d'illustration par catégorie (IA, productivité,
  inclusion numérique, pouvoirs locaux, outils Microsoft).
- **Logo** : déjà intégré (`images/logo.png`), utilisé dans le header et le
  footer de chaque page.

## À personnaliser avant mise en ligne

- Numéro de téléphone si vous ne souhaitez pas l'afficher publiquement.
- Statistiques du bandeau ardoise (10+ ans, 500+ professionnels formés,
  etc.) — à ajuster avec vos chiffres réels.
- Liens réseaux sociaux / LinkedIn — à ajouter dans le pied de page et dans
  le schéma JSON-LD de `index.html`.
