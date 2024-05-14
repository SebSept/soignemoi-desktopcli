# Client desktop pour SoigneMoi

## Lancement

prérequis : installer les dépendances `yarn install` (une fois)

- `yarn start` 

## Construction des binaires

Référence : https://www.electronjs.org/docs/latest/tutorial/application-distribution

### Build via docker

référence : https://www.electron.build/multi-platform-build.html#build-electron-app-using-docker-on-a-local-machine

- lancer cette commande dans un terminal (bash)

```
docker run --rm -ti \
 --env-file <(env | grep -iE 'DEBUG|NODE_|ELECTRON_|YARN_|NPM_|CI|CIRCLE|TRAVIS_TAG|TRAVIS|TRAVIS_REPO_|TRAVIS_BUILD_|TRAVIS_BRANCH|TRAVIS_PULL_REQUEST_|APPVEYOR_|CSC_|GH_|GITHUB_|BT_|AWS_|STRIP|BUILD_') \
 --env ELECTRON_CACHE="/root/.cache/electron" \
 --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
 -v ${PWD}:/project \
 -v ${PWD##*/}-node-modules:/project/node_modules \
 -v ~/.cache/electron:/root/.cache/electron \
 -v ~/.cache/electron-builder:/root/.cache/electron-builder \
 electronuserland/builder:wine

```
- dans le contenaire : `yarn`
- puis `./node_modules/.bin/electron-builder` ou `./node_modules/.bin/electron-builder -w` pour windows (options `-mwl` pour compiler pour toutes les plateformes (mac ne doit fonctionner que sous mac.))
- les binaires sont disponibles dans ./dist (il faudrat changer les droits sous linux)

Il y a beaucoup de cache qui peuvent être supprimés à la fin de la construction.
- `rm -rf ~/.cache/electron*`

### Build avec electron-forge

**Option abandonnée.**

Cette option necessite l'installation de packages supplémentaires (node et sur la machine). Ça ne permet que la génération de binaires linux (sur ma machine linux). 

### Action GitHub

**Option abandonnée.**

Les actions github disponibles ne sont pas à jour, ne fonctionne pas et ne sont pas configurables pour fonctionner (passer à node 20 et mettre à jour la version la version de l'action)

