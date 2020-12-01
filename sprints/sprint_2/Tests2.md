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
  - alternativement il est possible de lancer les séries de tests de manière indépendante (accueil, sprint et US), il est cependant recommandé de lancer setup juste avant puisque certains tests requièrent un setup.
- le navigateur s'ouvre et les tests s'executent, il est possible de voir les résultats sur la gauche du navigateur





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
