# Sprint 3

### Date

> Lundi 30 Novembre au vendredi 11 Décembre

### User Stories

|  ID  |                            User Story                             | Importance | Difficulté | Etat |
| :--: | :----------------------------------------------------------: | :-----: | :-----------: | :--: |
| #07 | En tant que développeur, je souhaite pouvoir ajouter ou supprimer une User story (déjà existante) à un Sprint (déjà existant) à l'aide d'un glisser-déposer si toutes les tâches réalisées ont le status "TODO", afin de pouvoir associer une User story à un sprint. (Undo-able) | Haute | 3 | DOING |
| #08 | En tant que Product Owner, je souhaite pouvoir modifier l'importance des User storys (parmis Basse, Moyenne-Basse, Moyenne-Haute, Haute) afin de spécifier l'importance qu'elle à pour moi à l'équipe de développement. | Moyenne-Haute | 1 | DONE |
| #13 | En tant que scrum master, je souhaite pouvoir cliquer sur le bouton "Modifier le projet" afin de pouvoir modifier les informations (nom, description, durée des sprints par défaut, rôle des membres) afin de redéfinir le projet. (Undo-able) | Moyenne-Haute | 3 | DONE |
| #15 | En tant que développeur, je souhaite pouvoir supprimer une **Task** d'un projet si elle a le status "TODO" afin de l'enlever du travail à faire. | Moyenne-Haute | 3 | DONE |
| #29 | En tant que Scrum Master, je souhaite pouvoir publier une **release** (se compose de : dossier compressé contenant le code fonctionnel du projet, une description de ce qui a été fait, un numéro de version générer automatiquement grace à un rapide questionnaire (checkbox pour le type de mofication: majeure/mineure)) afin de la rendre disponible pour les utilisateurs. | Basse | 3 |DONE|
| #09 | En tant qu'utilisateur, je souhaite pouvoir trier les User storys par catégorie (ID, Difficulté, priorité, sprint, état) afin d'avoir le visuel convenant. | Moyenne-Basse | 3 | DONE |
| #14 | En tant que développeur, je souhaite pouvoir modifier une **Task** (description , Definition of done, durée, dépendances) d'un projet afin de redéfinir le travail à effectuer. (Undo-able) | Moyenne-Haute | 3 |TODO|
| #35 | En tant qu'utilisateur, je souhaite avoir une **barre de recherche** au dessus de la liste de mes projets afin de chercher un projet plus rapidement via son nom ou son équipe. | Basse | 3 |DONE|
| #38 | En tant que Scrum Master, je souhaite pouvoir ajouter des fichiers de documentation afin de centraliser la documentation de mon projet. A ces fichiers s'ajouteront le numéro de la version de release correspondante (à entrer par le scrum master) ainsi que la date de publication (générée automatiquement) | Haute | 3 |TODO|
| #39 | En tant qu'utilisateur, je souhaite avoir accès à la documentation liée à la release publiée afin de pouvoir la télécharger. | Moyenne-Haute | 2 |TODO|
| #30 | En tant qu'utilisateur, je souhaite, sur la page d'accueil, voir la progression de chaque Sprint et User storys à l'aide de moyens graphiques (Chaque Sprint aura le pourcentage de progression associé à son nom et listera l'ID de ses US. A coté de chaque US, une barre de progression indiquera la progression qui a été effectuée sur cette US (tâches réalisées/total tâches liées à l'US) afin d'avoir un aperçu rapide de ce qui est fait et de ce qu'il reste à faire. | Haute | 3 | DONE |



# User stories mises de côté

|  ID  |                            User Story                             | Importance | Difficulté | Etat |
| :--: | :----------------------------------------------------------: | :-----: | :-----------: | :--: |
| #24 | En tant que Scrum Master, je souhaite pouvoir supprimer le **planning** du projet afin de ne plus planifier le projet. (Undo-able) | Moyenne-Haute | 3 |TODO|
| #25 | En tant qu'utilisateur, je souhaite pouvoir avoir accès à un diagramme de Gantt montrant l'organisation du projet généré à partir du **planning** afin de voir l'état global du projet et son avancement  | Moyenne-Basse | 5 |TODO|
| #26 | En tant que Scrum Master, je souhaite pouvoir modifier mon **planning** afin d'organiser mon équipe et la planification des tâches. (Undo-able) | Moyenne-Haute | 5 |TODO|
| #28 | En tant que Scrum Master, je souhaite pouvoir générer un **fichier** au format markdown afin d'avoir un récapitulatif (avancement global, état des tâches, état des User storys, état des tests, état des sprints, nom de release si existante, planning, l'équipe) de l'ensemble du projet.  | Moyenne-Basse | 5 |TODO|
| #31 | En tant que visiteur, je souhaite pouvoir **m'inscrire** en renseignant mes informations (identifiant (obligatoire) : 20 caractères max, mot de passe (obligatoire) : 50 caractères max, adresse email (obligatoire) : 255 caractères max, nom (obligatoire) : 50 caractères max et prénom (obligatoire) : 50 caractères max) afin de créer mon compte utilisateur.  | Basse | 5 |TODO|
| #32 | En tant que visiteur, je souhaite pouvoir me **connecter** avec les identifiants (nom d'utilisateur, mot de passe) afin de démarrer une session et d'accéder à la liste des projets ou je suis membre.  | Basse | 5 |TODO|
| #33 | En tant qu'utilisateur, je souhaite pouvoir me **déconnecter** afin de quitter une session.  | Basse | 2 |TODO|
| #34 | En tant qu'utilisateur, je souhaite avoir une **page d'accueil** contenant un aperçu des sprints (liste des US pour chaque sprints), une présentation de l'équipe avec photo, prénom nom et rôle et le diagramme de type "BurnDown Chart" et la vélocité du sprint afin d'avoir un visualisation globale du projet.  | Moyenne-Haute | 8 |TODO|
| #36 | En tant qu'utilisateur, je souhaite pouvoir changer ma photo de profil de mon compte afin qu'on puisse m'identifier rapidement sur les projets et la page d'accueil.  | Basse | 3 |TODO|
| #37 | En tant qu'utilisateur, je souhaite pouvoir modifier mes informations personnelles telles que mon prénom, nom et ajouter une photo de profil afin de mettre à jour mes informations. | Basse | 1 |TODO|
| #20 | En tant que développeur, je souhaite pouvoir voir l'état global des **tests** unitaires et d'intégration à l'aide d'un élément graphique (barre de progression, pastille de couleur) afin d'avoir un aperçu rapide du code testé.  | Moyenne-Basse | 3 |TODO|
| #23 | En tant que Scrum Master, je souhaite pouvoir créer un **planning** des tâches afin d'associer temporairement des développeurs aux tâches pour m'aider à planifier le projet dans son ensemble. | Moyenne-Haute | 3 |TODO|
| #40 | En tant que développeur, je souhaite pouvoir, dans le kanban, indiquer le nom du test que je fais ainsi que son état (non implémenté, implémenté non testé, test non passé, test passé) que je peux modifier à tout moment afin d'avoir un suivi des tests. A noté que si la tâche passe en "Done", le test sera marqué comme "test passé". | Moyenne-Basse | 3 |TODO|