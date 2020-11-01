# Code de conduite - Règles d'écriture


- [Fichiers markdown](#fichiers-markdown)
- [Backlog](#backlog)
- [Sprints](#sprints)
- [Tasks](#tasks)
- [Code source](#code-source)
- [Tests](#tests)
- [Release](#release)


## Fichiers markdown

Le projet doit contenir:

- `WrittingRules.md`: Décrit les règles de conduite à suivre (ce fichier).
- `README.md`: Rappel des sprints et de leur date + backlog
- `Documentation.md`: 
- `Release.md`: Décrit la version, date, contenu de chaque release
- `SprintX.md`: Décrit les issues contenues dans le sprint `X`
- `Task.md`: Décrit les tâches à faire dans le sprint `X`
- `Test.md`: Décrit l'état des tests pour avoir un suivi 



## Backlog

Le backlog s'écrit dans le fichier `README.md`. Chaque issue du backlog doit se composer comme suit:

- ID de la forme: `#numero`
- Description suivant le pattern: `En tant que ... je souhaite ... afin de ...`
- Type: `Feature`, `FixBug`, `Performance` ou `Refactoring`
- Importance: `Haute`, `Moyenne-Haute`, `Moyenne-Basse` ou `Basse`
- Le coût, s'exprimant en entier suivant la suite de fibonacci: `1,2,3,5,8,13,21...`
- Plannification de la forme: `Sprint <numéro du sprint>` 
- Etat: `TODO`,`DOING`,`DONE`



## Sprints

Ecrire le sprint dans un fichier `SprintX.md` où `X` est le numéro du sprint.

Rappeler en début de fichier la date de début et la date de fin du sprint.

Dans un tableau, énoncer les issues à faire dans ce sprint. Reprendre les informations correspondantes du backlog.



## Tasks

Ecrire les tâches dans un fichier `TaskX.md ` où `X` est le numéro du sprint dans lequel la tâche est. 

Chaque tâche doit se composer comme suit:

- ID de la forme: `#numero`
- Description de la tâche
- Issues liées à la tâche
- Dépendances (indiquer l'ID des tâches)
- Coût en demi-jours/Homme
- Etat: `TODO`,`DOING`,`DONE`



## Code source

Utiliser des *Linters* pour aider à suivre les règles suivantes:

- Nom des fichiers:
- Nom des classes:
- Nom des fonctions:
- Etc. A définir



## Tests

Dans le fichier`Test.md`, indiquer les tests effectués dans un tableau avec leur état. Le tableau se compose comme suit:

- ID de la forme: `#numero`
- Description du test en précisant la fonction/classe/fichier.. testé
- Type: `Unitaire`, `Non-Régression`, `E2E`
- Etat: `Non implémenté`,`Non testé`,`Succès`,`Echec`



## Release

Pour chaque release, écrire dans le fichier `Release.md`:

- Numéro de release de la forme `X.X.X`. Le premier `X` correspond au numéro de sprint, le suivant à une nouvelle issue ajoutée, le dernier à une modification mineure.
- La date de publication de la release de la forme `JJ/MM/AAAA`
- Un tableau indiquant les issues réalisées dans cette release.
