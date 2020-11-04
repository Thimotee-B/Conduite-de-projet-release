# Conduite de projet

## Planning sprints

| Sprint 0  | Sprint 1 | Sprint 2 | Sprint 3 |
|:---------:|:--------:|:-------:|:-------:|
| Maintenant jusqu’au vendredi 23 octobre <br> **Coût** : 0 | Lundi 2 novembre au vendredi 13 Novembre <br> **Coût** : 45 | Lundi 16 Novembre au vendredi 27 Novembre <br> **Coût** : 43 | Lundi 30 Novembre au vendredi 11 Décembre <br> **Coût** : 44 |

 Les **Coûts** correspondent a la somme des difficultés des US

---
Vocabulaire:
- __Product owner__ : porteur de projet et membre spécial
- __Scrum master__ : administrateur du projet (tous les droits)
- __Développeur__ : membre du projet
- __Utilisateur__ : les membres ci-dessus
- __Visiteur__ : utilisateur non-authentifié
---

## Backlog
**Les echelles de difficulté et importance sont dans WrittingRules.md**

|  ID  |                User story               | Importance | Difficulté | Plannification |
|:----:|:---------------------------------------:|:----------:|:----------:|:--------------:|
| #01 | En tant qu'utilisateur, je souhaite cliquer sur le bouton "Nouveau projet" pour saisir un nom (obligatoire), une description (optionnelle), la durée d'un sprint (2 semaines par défaut), ainsi que la date de début du projet afin de créer un nouveau **projet**.  | Haute | 5 | Sprint 1 |
| #02 | En tant qu'utilisateur, je souhaite pouvoir voir une liste des **projets** dont je suis membre afin d'accéder aux projets me concernant. Pour chaque projet, je souhaite voir le nom du projet, mon rôle, le nombre de personnes dans l'équipe, la date de création du projet et la date de fin du projet.  | Moyenne-haute | 3 | Sprint 1 |
| #03 | En tant que développeur, je souhaite pouvoir créer une **User story** (description (obligatoire), , importance(optionelle), difficulté (obligatoire), plannification (optionnelle)) afin de spécifier un besoin, la partie ID de l'US se fera automatiquement par l'application. A la création de l'US, le pattern "En tant que ... je souhaite ... afin de ..." sera pré-rempli dans le champs "description" afin de gagner du temps lors de la création. | Haute | 3 | Sprint 1 |
| #04 | En tant que développeur, je souhaite pouvoir modifier une **User story** (description, type, importance, plannification, état) afin de la mettre à jour. (Undo-able)  | Haute | 3 | Sprint 1 |
| #05 | En tant que développeur, je souhaite pouvoir suprimmer une **User story** afin qu'elle n'apparaîsse plus dans le backlog.  | Moyenne-haute | 2 | Sprint 1 |
| #06 | En tant que développeur, je souhaite pouvoir créer un nouveau **Sprint** (Date de début (obligatoire), description (obligatoire)) afin de pouvoir y organiser les **User stories** et **Tasks** qui vont être fait dans ce sprint.  | Haute | 5 | Sprint 1 |
| #07 | En tant que développeur, je souhaite pouvoir ajouter ou supprimer une **User story** (déjà existante) à un **Sprint** (déjà existant) à l'aide d'un glisser-déposer, afin de pouvoir associer une User story à un sprint. (Undo-able)  | Haute | 3 | Sprint 1 |
| #08 | En tant que Product Owner, je souhaite pouvoir modifier l'importance des **User storys** (parmis Basse, Moyenne-Basse, Moyenne-Haute, Haute) afin de spécifier l'importance qu'elle à pour moi à l'équipe de développement.  | Moyenne-Haute | 1 | Sprint 1 |
| #09 | En tant qu'utilisateur, je souhaite pouvoir trier les **User storys** par catégorie (ID, Difficulté, priorité, sprint, état) afin d'avoir le visuel convenant.  | Moyenne-Basse | 3 | Sprint  |
| #10 | En tant qu'utilisateur, je souhaite pouvoir voir le coût total ainsi que le nombre d'**User storys** dans le **Sprint** afin de m'aider dans la répartition des User storys.  | Moyenne-Haute | 3 | Sprint 1 |
| #11 | En tant que développeur, je souhaite pouvoir associer une **Task** à une ou plusieurs User storys afin de définir les User storys référentes  | Moyenne-Haute | 5 | Sprint 1 |
| #12 | En tant que développeur, je souhaite pouvoir créer une **Task** (description (obligatoire) , Definition of done (obligatoire)(= checkList des points à faire pour considérer la tâche comme finie), durée estimée (demi-jours/homme)(obligatoire), dépendances (obligatoire), L'ID de la tache sera automatiquement généré de la maniere suivante : `S<numsprint>#numTask` et devra se modifier automatiquement dans le cas d'une modification de l'ID de US) afin de définir le travail à effectuer aux développeurs du projet. | Haute | 3 | Sprint 1 |
| #13 | En tant que scrum master, je souhaite pouvoir cliquer sur le bouton "Modifier le **projet**" afin de pouvoir modifier les informations (nom, description, durée des sprints, membre du projet, rôle des membres) afin de redéfinir le projet. (Undo-able) | Moyenne-Haute | 3 | Sprint 1 |
||
| #14 | En tant que développeur, je souhaite pouvoir modifier une **Task** (description , Definition of done, durée, dépendances) d'un projet afin de redéfinir le travail à effectuer. (Undo-able) | Moyenne-Haute | 3 | Sprint 2 |  
| #15 | En tant que développeur, je souhaite pouvoir supprimer une **Task** d'un projet afin de l'enlever du travail à faire. (Undo-able) | Moyenne-Haute | 3 | Sprint 2 |  
| #16 | En tant que développeur, je souhaite avoir accès à un kanban (avec comme colones : Todo, Doing, Reviewing/Testing, Done) afin de changer d'état ma tâche. | Moyenne-Basse | 8 | Sprint 2 |  
| #17 | En tant que développeur, je souhaite pouvoir m'assigner sur une **Task** afin que les autres membres du projet puissent savoir que je travaille dessus pour pouvoir organiser et s'attribuer les **Tasks** restantes.  | Moyenne-Basse | 2 | Sprint 2 |  
| #18 | En tant que chef de projet, je souhaite pouvoir ajouter d'autres utilisateurs à un **projet** que j'ai crée afin qu'ils puissent participer à celui-ci.  | Haute | 3 | Sprint 2 |  
| #19 | En tant que chef de projet, je souhaite pouvoir retirer un/des utilisateurs participant au **projet** afin qu'ils ne puissent plus y contribuer.  | Haute | 3 | Sprint 2 |  
| #20 | En tant que développeur, je souhaite pouvoir voir l'état global des **tests** à l'aide d'un élément graphique (barre de progression, pastille de couleur) afin d'avoir un aperçu rapide du code testé.  | Moyenne-Basse | 3 | Sprint 2 |  
| #21 | En tant que chef de projet, je souhaite pouvoir attribuer des rôles aux membres de mon équipe afin de délimiter leurs actions au sein du projet.  | Moyenne-Basse | 2 | Sprint 2 |  
| #22 | En tant qu'utilisateur, je souhaite pouvoir revenir en arrière afin d'annuler la dernière action qui a été faite sur le projet . | Basse | 13 | Sprint 2 |  
| #23 | En tant que chef de projet, je souhaite pouvoir créer un **planning** afin de planifier le projet  | Moyenne-Haute | 3 | Sprint 2 |  
||
| #24 | En tant que chef de projet, je souhaite pouvoir supprimer le **planning** du projet afin de ne plus planifier le projet. (Undo-able) | Moyenne-Haute | 3 | Sprint 3 |  
| #25 | En tant qu'utilisateur, je souhaite pouvoir avoir accès à un diagramme de Gantt généré à partir du **planning** afin de voir l'état global du projet et son avancement  | Moyenne-Basse | 3 | Sprint 3 |  
| #26 | En tant que chef de projet, je souhaite pouvoir modifier mon **planning** afin d'organiser mon équipe et la planification des tâches. (Undo-able) | Moyenne-Haute | 5 | Sprint 3 |  
| #27 | En tant qu'utilisateur, je souhaite avoir accès aux **releases** afin d'avoir un historique des releases fournis au product owner  | Haute | 3 | Sprint 3 | 
| #28 | En tant que chef de projet, je souhaite pouvoir générer un **fichier** au format markdown afin d'avoir un récapitulatif (avancement global, état des tâches, état des User storys, état des tests, état des sprints, nom de release si existante, planning, l'équipe) de l'ensemble du projet.  | Moyenne-Basse | 3 | Sprint 3 |  
| #29 | En tant que chef de projet, je souhaite pouvoir publier une **release** afin de la rendre disponible pour les utilisateurs. | Basse | 3 | Sprint 3 |  
| #30 | En tant qu'utilisateur, je souhaite, sur la **page d'accueil**, voir la progression de chaque **Sprint** et **User storys** à l'aide de moyens graphiques (barre de progression, camembert) afin d'avoir un aperçu rapide de ce qu'il est fait et de ce qu'il reste à faire.  | Basse | 3 | Sprint 3 |  
| #31 | En tant que visiteur, je souhaite pouvoir **m'inscrire** en renseignant mes informations (identifiant (obligatoire) : 20 caractères max, mot de passe (obligatoire) : 50 caractères max, adresse email (obligatoire) : 255 caractères max, nom (obligatoire) : 50 caractères max et prénom (obligatoire) : 50 caractères max) afin de créer mon compte utilisateur.  | Basse | 5 | Sprint 3 |  
| #32 | En tant que visiteur, je souhaite pouvoir me **connecter** avec les identifiants (nom d'utilisateur, mot de passe) démarrer une session et d'accéder à la liste des projets ou je suis membre.  | Basse | 5 | Sprint 3 |  
| #33 | En tant qu'utilisateur, je souhaite pouvoir me **déconnecter** afin de quitter une session.  | Basse | 2 | Sprint 3 |  
| #34 | En tant qu'utilisateur, je souhaite avoir une **page d'accueil** contenant un aperçu des sprints (liste des US pour chaque sprints), une présentation de l'équipe avec photo, prénom nom et rôle et le diagramme de Gantt du projet afin d'avoir un visualisation globale du projet.  | Basse | 3 | Sprint 3 |  
| #35 | En tant qu'utilisateur, je souhaite avoir une **barre de recherche** au dessus de la liste de mes projets afin de chercher un projet plus rapidement.  | Basse | 3 | Sprint 3 |  