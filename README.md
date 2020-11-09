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
| #17 | En tant que développeur, je souhaite pouvoir m'assigner sur une **Task** afin de connaître l'état du projet et de savoir ce que fait chaque développeur.  | Moyenne-Basse | 2 | Sprint 2 |  
| #18 | En tant que Scrum Master, je souhaite pouvoir ajouter par adresse mail d'autres utilisateurs à un **projet** que j'ai créé afin qu'ils puissent participer à celui-ci.  | Haute | 3 | Sprint 2 |  
| #19 | En tant que Scrum Master, je souhaite pouvoir retirer un/des utilisateurs participant au **projet** afin qu'ils ne puissent plus y contribuer.  | Haute | 3 | Sprint 2 |  
| #20 | En tant que développeur, je souhaite pouvoir voir l'état global des **tests** unitaires et d'intégration à l'aide d'un élément graphique (barre de progression, pastille de couleur) afin d'avoir un aperçu rapide du code testé.  | Moyenne-Basse | 3 | Sprint 2 |  
| #21 | En tant que Scrum Master, je souhaite pouvoir attribuer des rôles aux membres de mon équipe afin de délimiter leurs actions au sein du projet.  | Moyenne-Basse | 2 | Sprint 2 |  
| #22 | En tant qu'utilisateur, je souhaite pouvoir annuler la dernière action qui a été faite sur le projet (Ajouter un membre/task/US/sprint, Supprimer un membre/task/US/sprint) afin de revenir à l'état du projet précédent l'action qui a été annulé, si l'action en question est undo-able. | Basse | 13 | Sprint 2 |  
| #23 | En tant que Scrum Master, je souhaite pouvoir créer un **planning** des tâches afin de planifier le projet dans son ensemble. | Moyenne-Haute | 3 | Sprint 2 |  
||
| #24 | En tant que Scrum Master, je souhaite pouvoir supprimer le **planning** du projet afin de ne plus planifier le projet. (Undo-able) | Moyenne-Haute | 3 | Sprint 3 |  
| #25 | En tant qu'utilisateur, je souhaite pouvoir avoir accès à un diagramme de Gantt montrant l'organisation du projet généré à partir du **planning** afin de voir l'état global du projet et son avancement  | Moyenne-Basse | 3 | Sprint 3 |  
| #26 | En tant que Scrum Master, je souhaite pouvoir modifier mon **planning** afin d'organiser mon équipe et la planification des tâches. (Undo-able) | Moyenne-Haute | 5 | Sprint 3 |  
| #27 | En tant qu'utilisateur, je souhaite pouvoir télécharger les **releases** faites jusqu'à ce jour et voir les fonctionnalités de chacune d'entres-elles afin d'avoir un historique des releases fournis au product owner  | Haute | 3 | Sprint 3 | 
| #28 | En tant que Scrum Master, je souhaite pouvoir générer un **fichier** au format markdown afin d'avoir un récapitulatif (avancement global, état des tâches, état des User storys, état des tests, état des sprints, nom de release si existante, planning, l'équipe) de l'ensemble du projet.  | Moyenne-Basse | 3 | Sprint 3 |  
| #29 | En tant que Scrum Master, je souhaite pouvoir publier une **release** (se compose de : dossier compressé contenant le code fonctionnel du projet, une description de ce qui a été fait, un numéro de version générer automatiquement grace à un rapide questionnaire (numero du sprint concerné (entier), checkbox pour le type de mofication: majeure/mineure)) afin de la rendre disponible pour les utilisateurs. | Basse | 3 | Sprint 3 |  
| #30 | En tant qu'utilisateur, je souhaite, sur la **page d'accueil**, voir la progression de chaque **Sprint** et **User storys** à l'aide de moyens graphiques (Chaque Sprint aura un camembert de progression associé à son nom et listera l'ID de ses US. A coté de chaque US, une barre de progression indiquera la progression qui a été effectuée sur cette US (tâches réalisées/total tâches liées à l'US)  afin d'avoir un aperçu rapide de ce qui est fait et de ce qu'il reste à faire.  | Haute | 3 | Sprint 2 |  
| #31 | En tant que visiteur, je souhaite pouvoir **m'inscrire** en renseignant mes informations (identifiant (obligatoire) : 20 caractères max, mot de passe (obligatoire) : 50 caractères max, adresse email (obligatoire) : 255 caractères max, nom (obligatoire) : 50 caractères max et prénom (obligatoire) : 50 caractères max) afin de créer mon compte utilisateur.  | Basse | 5 | Sprint 3 |  
| #32 | En tant que visiteur, je souhaite pouvoir me **connecter** avec les identifiants (nom d'utilisateur, mot de passe) démarrer une session et d'accéder à la liste des projets ou je suis membre.  | Basse | 5 | Sprint 3 |  
| #33 | En tant qu'utilisateur, je souhaite pouvoir me **déconnecter** afin de quitter une session.  | Basse | 2 | Sprint 3 |  
| #34 | En tant qu'utilisateur, je souhaite avoir une **page d'accueil** contenant un aperçu des sprints (liste des US pour chaque sprints), une présentation de l'équipe avec photo, prénom nom et rôle et le diagramme de type "BurnDown Chart" et un diagramme de vélocité du projet afin d'avoir un visualisation globale du projet.  | Moyenne-Haute | 5 | Sprint 3 |  
| #35 | En tant qu'utilisateur, je souhaite avoir une **barre de recherche** au dessus de la liste de mes projets afin de chercher un projet plus rapidement via son nom ou son équipe. | Basse | 3 | Sprint 3 |  
| #36 | En tant qu'utilisateur, je souhaite pouvoir changer ma photo de profil de mon compte afin qu'on puisse m'identifier rapidement sur les projets et la page d'accueil.  | Basse | 3 | Sprint 3 |

</br>
</br>
</br>
</br>


# TODO temporaire pour Backlog (supprimer au fur et a mesure)

## Manque d'automatisation (et de précision de ce qui est automatisé)

* Quid des burndown charts ? calculs de vélocités ? etc. qui aident a la gestion de projet
* **Problème majeur** a mon sens: votre application permet (entre autre) de :
  * modifier/supprimer une issue
  * supprimer une issue d'un sprint
  * modifier la durée d'un sprint
  * modifier une task
  * retirer un développeur  
    Hors, vous ne bornez pas ces fonctionnalités. Cela me paraît etre dangereux et ne garantit pas qu'une gestion de projet faite avec votre appliation assure un suivi des bonnes pratiques SCRUM. En outre, que se passe-t-il si je supprime une US qui est dans le sprint en cours et dont des taches soint en cours de réalisation (voire on déja été terminées) ? idem si je modifie ce genre d'US, comment je doit interpréter les tâches déjà effectuées (et qui ne répondent peut être pas au besoin exprimé par la nouvelle version de l'US) ? Même probleme avec les tâches ou la suppression de développeurs d'un projet: a chaque fois, ça peut avoir des conséquences qui risquent de nuire a l'intégrité du projet. 
* Dans l'état actuel de votre backlog, mis apart la gestion de plusieurs projets/utilisateurs a la fois, la plusvalue qu'il y aurait a l'utiliser par rapport a une fiche de gestion de projet Excel n'est pas évidente (eg. comme une feuille excel: tout peut etre modifié n'importe quand sans restriction ni garantie, il n'y a que quelques statistiques/visualisations). 

## Remarques finales

* Un plutot bon niveau de rédaction sur le début du backlog qui s'amoindrit petit a petit. En prenant en compte les commentaires que je vous ai fait et en rédigeant toutes les US avec la même rigueur que pour les premières, ce sera un bon backlog (je pense)
* Un manque de précision sur plusieurs niveaux (dommage, ça avait bien commencé)
* Un manque d'automatisation
* Mauvaise homogénéité (beaucoup d'US ne décrivent que l'affichage d'un champ)
* Vous survolez complètement la gestion des artefacts Tests, Release et n'avez aucun point Documentation