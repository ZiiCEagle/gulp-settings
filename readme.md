# Gulpfile.js v2.0

Mise en place de Gulp avec du [CoffeeScript](http://coffeescript.org) et [Bower](http://bower.io)

## Table des matières

* Membre
* CLI
* Informations complémentaires

## Membre

* "Guillaume Briday" <guillaumebriday@gmail.com>

## CLI

### Initialisation du projet

```
$ npm init
```

Installation de Bower

```
$ npm install -g bower
```

Initialisation de bower

```
$ bower init
```

On installe nos dépendances pour bower

```
$ bower install font-awesome --save-dev
```

On installe nos dépendances pour gulp

```
$ npm install --save-dev gulp coffee-script gulp-autoprefixer gulp-bower gulp-clean gulp-coffee gulp-concat gulp-cssnano gulp-jade gulp-load-plugins gulp-notify gulp-rename gulp-sass gulp-size node-notifier gulp-imagemin
```

Je fais toujours un dossier assets pour ma structure de fichier de la forme :

```
.
+-- assets
|   +-- js
|   +-- scss
|       +-- Tous les dossiers de ma structure css
|      style.scss
|   +-- img
```

Et je compile dans un dossier public de la forme

```
.
+-- public
|   app.min.js
|   style.min.css
|   +-- fonts
|       fonts
```


## Si on veut utiliser les tâches :


```
$   gulp          // Pour la tâche par défaut (ici elle executera les tâches scss et js par défaut)
$   gulp styles   // Pour compiler le scss
$   gulp scripts  // Pour compiler le js
$   gulp clean    // Pour cleaner les dossiers
$   gulp watch    // Pour éxecuter une fois les deux tâches et ensuite compiler automatiquement les fichiers lors de la sauvegarde
```


## Informations complémentaires

Il faut bien-sûr adapter selon vos besoins !

N'oubliez d'ajouter le .gitignore à votre dépo git pour ne pas historiser tous les packages inutilement.

N'hésitez pas à proposer des modifications ou des améliorations que j'ajouterais avec plaisir.

N'hésitez pas à me contacter pour avec des informations complémentaires ou me remonter un bug.
