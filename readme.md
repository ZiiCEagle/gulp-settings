# Gulpfile.js v1.0

Dépot pour retrouver mon gulpfile.js et les dépendances que j'utilise avec qui ne change presque pas de projet en projet.

Il vous suffira de cloner le projet et d'adapter le gulpfile.js et les dépendances selon vos besoins.


## Table des matières

* Membre
* CLI
* Informations complémentaires

## Membre

* "Guillaume Briday" <guillaumebriday@gmail.com>

## CLI

On installe gulp

``` sh
    sudo npm install gulp
```

On installe maintenant nos packages : 


``` sh
    npm install gulp-autoprefixer gulp-sass gulp-size gulp-uglify gulp-concat gulp-load-plugins gulp-minify-css gulp-rename --save-dev
```

Si on veut utiliser les tâches : 


``` sh
    gulp // Pour la tâche par défaut
    gulp scss // Pour compiler le scss
    gulp js // Pour compiler le js
    gulp watch // Pour compiler les fichiers lors de la sauvegarde
```


## Informations complémentaires

N'hésitez pas à me contacter pour avec des informations complémentaires ou me remonter un bug.
