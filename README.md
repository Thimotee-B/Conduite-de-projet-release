# Conduite de projet

## Planning sprints

| Sprint 0  | Sprint 1 | Sprint 2 | Sprint 3 |
|:---------:|:--------:|:-------:|:-------:|
| Maintenant jusqu’au vendredi 23 octobre <br> **Coût** : 0 | Lundi 2 novembre au vendredi 13 Novembre <br> **Coût** : 45 | Lundi 16 Novembre au vendredi 27 Novembre <br> **Coût** : 43 | Lundi 30 Novembre au vendredi 11 Décembre <br> **Coût** : 44 |

---
Vocabulaire:
- __Product owner__ : porteur de projet et membre spécial
- __Chef de projet__ : administrateur du projet (tous les droits)
- __Développeur__ : membre du projet
- __Utilisateur__ : les membres ci-dessus
- __Visiteur__ : utilisateur non-authentifié
---

## Backlog

|  ID  |                Issue                | Type | Importance | Coût | Plannification | Etat |
|:----:|:----------------------------------------:|:----:|:----------:|:----:|:--------------:|:----:|
| #01 | En tant qu'utilisateur, je souhaite cliquer sur le bouton "Nouveau projet" pour saisir un nom (obligatoire), une description (optionnelle), la durée d'un sprint (2 semaines par défaut), ainsi que la date de début du projet afin de créer un nouveau **projet**. | Feature | Haute | 5 | Sprint 1 | TODO |
| #02 | En tant qu'utilisateur, je souhaite pouvoir voir une liste des **projets** dont je suis membre afin d'accéder aux projets me concernant. Pour chaque projet, je souhaite voir le nom du projet, mon rôle, le nombre de personnes dans l'équipe, la date de création du projet et la date de fin du projet. | Feature | Moyenne-haute | 3 | Sprint 1 | TODO |
| #03 | En tant que développeur, je souhaite pouvoir créer une **Issue** (id, description, type, importance, plannification, état) afin de spécifier un besoin. | Feature | Haute | 3 | Sprint 1 | TODO |
| #04 | En tant que développeur, je souhaite, lorsque je créer une **Issue**, avoir le pattern "En tant que ... je souhaite ... afin de ..." pré-rempli dans le champs "description" afin de gagner du temps lors de la création. | Feature | Haute | 3 | Sprint 1 | TODO |
| #05 | En tant que développeur, je souhaite pouvoir modifier une **Issue** (description, type, importance, plannification, état) afin de la mettre à jour. | Feature | Haute | 3 | Sprint 1 | TODO |
| #06 | En tant que développeur, je souhaite pouvoir suprimmer une **Issue** afin qu'elle n'apparaîsse plus dans le backlog. | Feature | Moyenne-haute | 2 | Sprint 1 | TODO |
| #07 | En tant que développeur, je souhaite pouvoir créer un nouveau **Sprint** (Date de début, description) afin de pouvoir y organiser les Issues qui vont être fait dans ce sprint. | Feature | Haute | 5 | Sprint 1 | TODO |
| #08 | En tant que développeur, je souhaite pouvoir ajouter ou supprimer une **Issue** (déjà existante) à un **Sprint** (déjà existant) à l'aide d'un glisser-déposer, afin de pouvoir associer une Issue à un sprint. | Feature | Haute | 3 | Sprint 1 | TODO |
| #9 | En tant que Product Owner, je souhaite pouvoir gérer l'importance des **Issues** afin de la spécifier à l'équipe. | Feature | Moyenne-Haute | 1 | Sprint 1 | TODO |
| #10 | En tant qu'utilisateur, je souhaite pouvoir trier les **Issues** par catégorie (ID, Difficulté, priorité, sprint, état) afin d'avoir le visuel convenant. | Feature | Moyenne-Basse | 3 | Sprint  | TODO |
| #11 | En tant qu'utilisateur, je souhaite pouvoir voir le coût total ainsi que le nombre d'**Issues** dans le **Sprint** afin de m'aider dans la répartition des issues. | Feature | Moyenne-Haute | 3 | Sprint 1 | TODO |
| #12 | En tant que développeur, je souhaite pouvoir associer une **Task** à une ou plusieurs issues afin de définir les issues référentes | Feature | Moyenne-Haute | 5 | Sprint 1 | TODO |
| #13 | En tant que développeur, je souhaite pouvoir créer une **Task** (description , Definition of done, durée, dépendances) afin de définir le travail à effectuer aux développeurs du projet. | Feature | Haute | 3 | Sprint 1 | TODO |
| #14 | En tant que chef de projet, je souhaite pouvoir cliquer sur le bouton "Modifier le **projet**" afin de pouvoir modifier les informations (nom, description, durée des sprints, membre du projet, rôle des membres) afin de redéfinir le projet. | Feature | Moyenne-Haute | 3 | Sprint 1 | TODO |
||
| #15 | En tant que développeur, je souhaite pouvoir modifier une **Task** (description , Definition of done, durée, dépendances) d'un projet afin de redéfinir le travail à effectuer. | Feature | Moyenne-Haute | 3 | Sprint 2 | TODO |
| #16 | En tant que développeur, je souhaite pouvoir supprimer une **Task** d'un projet afin de l'enlever du travail à faire. | Feature | Moyenne-Haute | 3 | Sprint 2 | TODO |
| #17 | En tant que développeur, je souhaite avoir accès à un kanban afin de changer d'état ma tâche.| Feature | Moyenne-Basse | 8 | Sprint 2 | TODO |
| #18 | En tant que développeur, je souhaite pouvoir m'assigner sur une Task afin que les autres membres du projet sachent quelles sont les tâches à faire. | Feature | Moyenne-Basse | 2 | Sprint 2 | TODO |
| #19 | En tant que chef de projet, je souhaite pouvoir ajouter d'autres utilisateurs à un **projet** que j'ai crée afin qu'ils puissent participer à celui-ci. | Feature | Haute | 3 | Sprint 2 | TODO |
| #20 | En tant que chef de projet, je souhaite pouvoir retirer un/des utilisateurs participant au **projet** afin qu'ils ne puissent plus y contribuer. | Feature | Haute | 3 | Sprint 2 | TODO |
| #21 | En tant que développeur, je souhaite pouvoir voir l'état global des **tests** à l'aide d'un élément graphique (barre de progression, pastille de couleur) afin d'avoir un aperçu rapide du code testé. | Feature | Moyenne-Basse | 3 | Sprint 2 | TODO |
| #22 | En tant que chef de projet, je souhaite pouvoir attribuer des rôles aux membres de mon équipe afin de délimiter leurs actions au sein du projet. | Feature | Moyenne-Basse | 2 | Sprint 2 | TODO |
| #23 | En tant qu'utilisateur, je souhaite pouvoir revenir en arrière afin d'annuler la dernière action qui a été faite sur le projet .| Feature | Basse | 13 | Sprint 2 | TODO |
| #24 | En tant que chef de projet, je souhaite pouvoir créer un **planning** afin de planifier le projet | Feature | Moyenne-Haute | 3 | Sprint 2 | TODO |
||
| #25 | En tant que chef de projet, je souhaite pouvoir supprimer le **planning** du projet afin de ne plus planifier le projet. | Feature | Moyenne-Haute | 3 | Sprint 3 | TODO |
| #26 | En tant qu'utilisateur, je souhaite pouvoir avoir accès à un diagramme de Gantt généré à partir du **planning** afin de voir l'état global du projet et son avancement | Feature | Moyenne-Basse | 3 | Sprint 3 | TODO |
| #27 | En tant que chef de projet, je souhaite pouvoir modifier mon **planning** afin d'organiser mon équipe et la planification des tâches. | Feature | Moyenne-Haute | 5 | Sprint 3 | TODO |
| #28 | En tant qu'utilisateur, je souhaite avoir accès aux **releases** afin d'avoir un historique des releases fournis au product owner | Feature | Haute | 3 | Sprint 3 |TODO |
| #29 | En tant que chef de projet, je souhaite pouvoir générer un **fichier** au format markdown afin d'avoir un récapitulatif (avancement global, état des tâches, état des issues, état des tests, état des sprints, nom de release si existante, planning, l'équipe) de l'ensemble du projet. | Feature | Moyenne-Basse | 3 | Sprint 3 | TODO |
| #30 | En tant que chef de projet, je souhaite pouvoir publier une **release** afin de la rendre disponible pour les utilisateurs.| Feature | Basse | 3 | Sprint 3 | TODO |
| #31 | En tant qu'utilisateur, je souhaite, sur la **page d'accueil**, voir la progression de chaque **Sprint** et **Issues** à l'aide de moyens graphiques (barre de progression, camembert) afin d'avoir un aperçu rapide de ce qu'il est fait et de ce qu'il reste à faire. | Feature | Basse | 3 | Sprint 3 | TODO |
| #32 | En tant que visiteur, je souhaite pouvoir **m'inscrire** en renseignant mes informations (identifiant (obligatoire) : 20 caractères max, mot de passe (obligatoire) : 50 caractères max, adresse email (obligatoire) : 255 caractères max, nom (obligatoire) : 50 caractères max et prénom (obligatoire) : 50 caractères max) afin de créer mon compte utilisateur. | Feature | Basse | 5 | Sprint 3 | TODO |
| #33 | En tant que visiteur, je souhaite pouvoir me **connecter** avec les identifiants (nom d'utilisateur, mot de passe) démarrer une session et d'accéder à la liste des projets ou je suis membre. | Feature | Basse | 5 | Sprint 3 | TODO |
| #34 | En tant qu'utilisateur, je souhaite pouvoir me **déconnecter** afin de quitter une session. | Feature | Basse | 2 | Sprint 3 | TODO |
| #35 | En tant qu'utilisateur, je souhaite avoir une **page d'accueil** contenant un aperçu des sprints (liste des US pour chaque sprints), une présentation de l'équipe avec photo, prénom nom et rôle et le diagramme de Gantt du projet afin d'avoir un visualisation globale du projet. | Feature | Basse | 3 | Sprint 3 | TODO |
| #36 | En tant qu'utilisateur, je souhaite avoir une **barre de recherche** au dessus de la liste de mes projets afin de chercher un projet plus rapidement. | Feature | Basse | 3 | Sprint 3 | TODO |
