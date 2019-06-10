# ServiceWorkerDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Conclusion
Ce projet m'a permis de découvrir l'API Service Worker. J'ai utilisé ce qu'Angular fournit, [ici](https://angular.io/guide/service-worker-getting-started).
Je n'ai pas pu tout faire par manque de temps.

Quand on passe en mode offline ou online, je n'affiche pas de message. J'aurais fait un component nommé "StateMessage" qui affiche le message avec une durée d'affichage de 5 secondes quand on clique sur le switch pour changer le mode.

On peut dire que j'ai un indicateur de réseau grâce à mon switch, je le bloque lorsqu'il detecte qu'il n'y a pas de connection.
