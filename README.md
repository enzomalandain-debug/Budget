# Paie & Budget

Journée de travail, feuille d'heures, paie et budget du foyer, dans une application installée sur l'iPhone qui fonctionne **sans réseau**.
Toutes les données restent dans le téléphone : rien n'est envoyé sur internet, ni dans ce dépôt.

## 1. Mettre l'application en ligne (une seule fois)

1. Sur github.com, crée un nouveau dépôt (**+** → *New repository*), par exemple `paie-budget`, en **Public**, sans rien cocher d'autre.
2. Dans le dépôt : **Add file** → **Upload files**, puis dépose ces 6 fichiers :
   `index.html`, `sw.js`, `manifest.webmanifest`, `icon-180.png`, `icon-192.png`, `icon-512.png`
   (ce `README.md` aussi si tu veux). Valide avec **Commit changes**.
3. **Settings** → **Pages** → *Source* : **Deploy from a branch** → *Branch* : **main**, dossier **/ (root)** → **Save**.
4. Une à deux minutes plus tard, l'adresse apparaît en haut de la page **Pages** :
   `https://TON-PSEUDO.github.io/paie-budget/`

## 2. Installer sur l'iPhone

1. Ouvre l'adresse dans **Safari** (pas dans une autre application).
2. Bouton **Partager** → **Sur l'écran d'accueil** → **Ajouter**.
3. Ouvre l'application **depuis l'écran d'accueil** une première fois avec du réseau : elle se garde dans le téléphone et marche ensuite en mode avion.

Important : sur iPhone, l'application de l'écran d'accueil et Safari ont des données séparées. Utilise toujours l'icône de l'écran d'accueil.

## 3. Premier lancement

- **Commencer** : prénom, comptes, roulement. Pour le roulement, mets le premier jour d'un de tes cycles, ou utilise *Ligne précédente / suivante* jusqu'à ce que tes 7 prochains jours correspondent à ton planning.
  Ensuite : tes taux dans **Ma paie › Modèle** (recopiés d'un bulletin récent), puis ton premier mois dans **Budget**.
- **Restaurer une sauvegarde** : choisis ton fichier de sauvegarde (ou colle son contenu) pour retrouver toutes tes données.

## 4. Sauvegardes

Tes données ne sont que dans ton téléphone. Si l'application est supprimée ou le téléphone perdu, elles partent avec.
**Réglages et sauvegarde** → **Enregistrer une sauvegarde** → *Enregistrer dans Fichiers* (ou iCloud Drive). L'application te le rappelle au bout de 7 jours.
Une sauvegarde contient des données personnelles : ne la partage pas et **ne la mets jamais dans ce dépôt**.

## 5. Partager avec des collègues

Donne-leur simplement l'adresse. Chacun installe l'application, appuie sur **Commencer** et part de zéro : personne ne voit les données des autres.

## 6. Mettre à jour

Remplace les fichiers dans le dépôt (**Add file** → **Upload files**, mêmes noms) → **Commit changes**.
Chaque téléphone récupère la nouvelle version la prochaine fois que l'application est ouverte avec du réseau (parfois il faut l'ouvrir deux fois).
