# TESTS
Le code pour les tests se trouve dans `\src\cypress\integration`

Les fichiers `.json` présents dans `\src\cypress\fixtures\` servent au remplissage des différents formulaires

Il est possible de voir les résultats des tests cypress effectués à l'adresse `https://dashboard.cypress.io/projects/5b9i23/runs/1/overview`

## Lancer les tests

### Pour lancer les tests en mode headless (sans affichage) et sans enregistrement
- aller dans `\src`
- installer les dépendances (`npm install`)
- lancer le serveur (`npm run app`)
- lancer la commande (`npm run cy:run`)
- le resultats des tests s'affichera dans le terminal

### Pour lancer les tests en mode headless (sans affichage) et avec enregistrement
- aller dans `\src`
- installer les dépendances (`npm install`)
- lancer le serveur (`npm run app`)
- lancer la commande (`npm run cy:record`)
- le resultats des tests s'affichera dans le terminal et sur le site internet

### Pour lancer les tests avec affichage
- aller dans `\src`
- installer les dépendances (`npm install`)
- lancer le serveur (`npm run app`)
- lancer la commande (`npm run cy:open`)
- attendre que la fenêtre cypress s'ouvre puis choisir le navigateur
- cliquer sur Run integration specs
  - alternativement il est possible de lancer les séries de tests de manière indépendante (accueil, sprint et US), il est cependant recommandé de lancer setup juste avant puisque certains tests requièrent un setup.
- le navigateur s'ouvre et les tests s'executent, il est possible de voir les résultats sur la gauche du navigateur





## Dernier résultat

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    6.0.0                                                                              │
  │ Browser:    Electron 87 (headless)                                                             │
  │ Specs:      4 found (end2end\setup.js, inte\accueil_test.js, inte\sprint_test.js, inte\US_test │
  │             .js)                                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  end2end\setup.js                                                                (1 of 4)


  SETUP
    √ Création du projet SETUP pour les tests (3548ms)


  1 passing (4s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     3 seconds                                                                        │
  │ Spec Ran:     end2end\setup.js                                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: E:\PC\Documents\Cours\CDPProject\Conduite-de-projet-dev\src    (0 seconds)
                          \cypress\videos\end2end\setup.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  inte\accueil_test.js                                                            (2 of 4)


  Page d'accueil
    √ Charge la page d'accueil (962ms)
    √ Création de projet validée (1814ms)
    √ Création de projet annulée (1610ms)


  3 passing (4s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     4 seconds                                                                        │
  │ Spec Ran:     inte\accueil_test.js                                                             │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: E:\PC\Documents\Cours\CDPProject\Conduite-de-projet-dev\src    (0 seconds)
                          \cypress\videos\inte\accueil_test.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  inte\sprint_test.js                                                             (3 of 4)


  Gestion sprint
    √ Charge la page d'acceuil et du projet test (2052ms)
    √ Charge la page de sprint (184ms)
    √ Création de sprint validée (1200ms)
    √ Création de sprint annulée (972ms)


  4 passing (4s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     4 seconds                                                                        │
  │ Spec Ran:     inte\sprint_test.js                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: E:\PC\Documents\Cours\CDPProject\Conduite-de-projet-dev\src    (0 seconds)
                          \cypress\videos\inte\sprint_test.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  inte\US_test.js                                                                 (4 of 4)


  Gestion backlog
    √ Charge la page d'acceuil et du projet test (1229ms)
    √ Charge la page de backlog (183ms)
    √ Création d'une US validée (1701ms)
    √ Modification d'une US (2189ms)
    √ Création d'une US annulée (1769ms)
    √ Suppression d'une US (351ms)


  6 passing (7s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        6                                                                                │
  │ Passing:      6                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     7 seconds                                                                        │
  │ Spec Ran:     inte\US_test.js                                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: E:\PC\Documents\Cours\CDPProject\Conduite-de-projet-dev\src    (0 seconds)
                          \cypress\videos\inte\US_test.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  end2end\setup.js                         00:03        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inte\accueil_test.js                     00:04        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inte\sprint_test.js                      00:04        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inte\US_test.js                          00:07        6        6        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:19       14       14        -        -        -