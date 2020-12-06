# TESTS
Le code pour les tests se trouve dans `src/tests`

## Cypress 

Les fichiers `.json` présents dans `/src/tests/cypress/fixtures` servent au remplissage des différents formulaires

Il est possible de voir les résultats des tests cypress effectués à l'adresse [`https://dashboard.cypress.io/projects/5b9i23/runs`](https://dashboard.cypress.io/projects/5b9i23/runs)


### Lancer les tests

Les tests cypress se lancent automatiquement **à chaque push** sur les branches de developpement (Thim, xav, wilfriedaugeard) à l'aide de `github action`
Les tests cypress se lancent automatiquement et sont enregistrer dans la dashboard cypress **à chaque  pull request** sur la branche main à l'aide de `github action`

#### Pour lancer les tests en mode headless (sans affichage) et sans enregistrement
- aller dans `/src`
- installer les dépendances (`npm install`)
- lancer le serveur (`npm run app`)
- lancer la commande (`npm run cy:run`)
- le resultats des tests s'affichera dans le terminal

#### Pour lancer les tests en mode headless (sans affichage) et avec enregistrement
- aller dans `/src`
- installer les dépendances (`npm install`)
- lancer le serveur (`npm run app`)
- lancer la commande (`npm run cy:record`)
- le resultats des tests s'affichera dans le terminal et sur le site internet

#### Pour lancer les tests avec affichage
- aller dans `/src`
- installer les dépendances (`npm install`)
- lancer le serveur (`npm run app`)
- lancer la commande (`npm run cy:open`)
- attendre que la fenêtre cypress s'ouvre puis choisir le navigateur
- cliquer sur Run integration specs
  - alternativement il est possible de lancer les séries de tests de manière indépendante (accueil, sprint et US), il est cependant obligatoire de lancer `0setup` une fois juste avant puisque certains tests requièrent un setup.
- le navigateur s'ouvre et les tests s'executent, il est possible de voir les résultats sur la gauche du navigateur
### Tests de validation
| Nom du test | Déroulement | Résultat | US |
|:-------------|:-------------|:----------|:----:|
| Page d'acceuil : chargement de la page d'accueil | - La page d'accueil s'affiche | La page d'accueil est affichée avec la liste des projets déjà crée | #02
| Page d'acceuil : création de projet validée | - La page d'accueil s'affiche <br> - Sur la page d'accueil cliquer sur le bouton "créer un projet" <br> - Remplir le formulaire du projet <br> - Cliquer sur le bouton "valider" | L'utilisateur à crée un projet qui est affiché dans la liste de ses projets sur la page d'accueil | #01
| Page d'acceuil : création de projet annulée | - La page d'accueil s'affiche <br> - Sur la page d'accueil cliquer sur le bouton "créer un projet" <br> - Remplir le formulaire du projet <br> - Cliquer sur le bouton "annuler" | L'utilisateur n'a pas crée un projet, la liste de ses projets sur la page d'accueil reste identique | #01
| Gestion sprint : Charge la page d'accueil et du projet test | - La page d'accueil s'affiche <br> - Sur la page d'accueil cliquer sur le projet "Projet test" qui doit être présent au préalabre | L'utilisateur est ammenée sur la page d'accueil du projet "Projet test" | Prérequis pour les tests de gestions sprint
| Gestion sprint : Charge la page de sprint | - Depuis la page d'accueil du projet cliquer sur le bouton "Sprints" de la navbar à gauche <br> | L'utilisateur est ammenée sur la page des sprints du projet avec les sprints crées et les US présentes dans les différents sprints | #06 #07
| Gestion sprint : Création de sprint validée | - Depuis la page "Sprints" du projet, cliquer sur le bouton "créer un Sprint"<br> - Remplir le formulaire du sprint <br> Cliquer sur le bouton "valider"| L'utilisateur reste sur la page des sprints du projet avec les sprints crées et les US présentes dans les différents sprints, le nouveau sprint apparaît parmis les sprints déjà présents | #06 
| Gestion sprint : Création de sprint annulée | - Depuis la page "Sprints" du projet, cliquer sur le bouton "créer un Sprint"<br> - Remplir le formulaire du sprint <br> Cliquer sur le bouton "annuler"| L'utilisateur reste sur la page des sprints du projet avec les sprints crées et les US présentes dans les différents sprints, aucun nouveau sprint n'apparaît| #06
| Gestion backlog : Charge la page d'accueil et du projet test | - La page d'accueil s'affiche <br> - Sur la page d'accueil cliquer sur le projet "Projet test" qui doit être présent au préalabre | L'utilisateur est ammenée sur la page d'accueil du projet "Projet test" | Prérequis pour les tests de gestion backlog
| Gestion backlog : Charge la page de Backlog | - Depuis la page d'accueil du projet cliquer sur le bouton "Backlog" de la navbar à gauche <br> | L'utilisateur est ammenée sur la page du backlog du projet avec les différentes US créées | #03 #04 #05
| Gestion backlog : Création d'US validée | - Depuis la page "Backlog" du projet, cliquer sur le bouton "créer une User Story"<br> - Remplir le formulaire de l'US <br> Cliquer sur le bouton "valider" | L'utilisateur reste sur la page backlog du projet avec les US présentes, la nouvelle US apparaît dans la liste des US| #03 
| Gestion backlog : Modification d'US | - Depuis la page "Backlog" du projet, cliquer sur le bouton "Modification" (crayon orange) d'une US (une US doit être présente)<br> - Remplir le formulaire de modification l'US <br> Cliquer sur le bouton "valider" | Le formulaire de modification doit apparaître avec les informations de l'US voulu <br> L'utilisateur reste sur la page backlog du projet avec les US présentes, l'US modifiée apparaît parmis les US avec les nouvelles informations.| #04 
| Gestion backlog : Création d'US annulée | - Depuis la page "Backlog" du projet, cliquer sur le bouton "créer une User Story"<br> - Remplir le formulaire de l'US <br> Cliquer sur le bouton "annuler" | L'utilisateur reste sur la page backlog du projet avec les US présentes, aucune US n'est créée, la liste reste identique| #03
| Gestion backlog : Supression d'US | - Depuis la page "Backlog" du projet, cliquer sur le bouton "Supression" (poubelle rouge) d'une US (une US doit être présente)<br>| L'utilisateur reste sur la page backlog du projet avec les US présentes, l'US supprimée n'apparaît plus parmis les US.| #05 


Le test `end2end_test.js` reprend tous les tests précendents "d'une passe"



## Dernier résultat
```
====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  end2end\end2end_test.js                  00:10        8        8        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inte\0setup.js                           00:02        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inte\accueil_test.js                     00:04        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inte\release_test.js                     00:04        6        6        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inte\sprint_test.js                      00:03        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inte\US_test.js                          00:07        6        6        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:33       28       28        -        -        -  


───────────────────────────────────────────────────────────────────────────────────────────────────────
```
