# Gulpfile.js v1.3

Dépot pour retrouver mon gulpfile.js et les dépendances que j'utilise avec qui ne change presque pas de projet en projet.

Il vous suffira de cloner le projet et d'adapter le gulpfile.js et les dépendances selon vos besoins.


## Table des matières

* Membre
* CLI
* Informations complémentaires

## Membre

* "Guillaume Briday" <guillaumebriday@gmail.com>

## CLI

### On installe gulp

``` sh
$	sudo npm install gulp -g
```

### On installe maintenant nos packages : 


``` sh
$	npm install gulp-autoprefixer gulp-sass gulp-size gulp-uglify gulp-concat gulp-load-plugins gulp-minify-css gulp-rename --g
```

### On ajoute browser-sync pour actualiser automatiquement nos navigateurs (optionnel) : 

``` sh
$	npm install browser-sync -g
```

#### On écoute les modifications des fichiers souhaités :

Par exemple ici je veux écouter les modifications de mon css, de mon js et de mon dossier contenant mon PHP : App

``` sh
$	browser-sync start --proxy "local.dev" --files "public/css/style.min.css, public/js/app.min.js, App"
```

local.dev ou l'adresse de votre serveur.



## Si on veut utiliser les tâches : 


``` sh
$	gulp   // Pour la tâche par défaut (ici elle executera les tâches scss et js par défaut)
$ 	gulp s // Pour compiler le scss
$ 	gulp j // Pour compiler le js
$ 	gulp w // Pour éxecuter une fois les deux tâches et ensuite compiler automatiquement les fichiers lors de la sauvegarde
```


## Informations complémentaires

Il faut bien-sûr adapter les chemins selon vos besoins.

N'oubliez d'ajouter le .gitignore à votre dépo git pour ne pas historiser tous les packages inutilement.

N'hésitez pas à me contacter pour avec des informations complémentaires ou me remonter un bug.
