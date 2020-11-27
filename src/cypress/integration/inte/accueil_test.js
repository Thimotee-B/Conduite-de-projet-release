const helper = require('../../helper.js');
const fixtureCreate = 'project/projectCreated.json';
const fixtureNotCreate = 'project/projectCancelled.json';


describe('Page d\'accueil', () => {
    it('Charge la page d\'accueil', () => {
        cy.visit('/')
        cy.url().should('contains', '/projectList')
    })

    it('Création de projet validée', () => {
        helper.getListProj().children().then(($childrenBefore) => {
            cy.fixture(fixtureCreate).then((projet) => {
                cy.get('.btn-sm').click();
                helper.remplirProjetForm(projet);
                cy.get('.btn-success').click();
                cy.url().should('contains', '/projectList');
                helper.getListProj().children().then(($childrenAfter) => {
                    expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
                })
                helper.getListProj().should('contain', projet.name)
            })
        })
    })

    it('Création de projet annulée', () => {
        helper.getListProj().children().then(($childrenBefore) => {
            cy.fixture(fixtureNotCreate).then((projet) => {
                cy.get('.btn-sm').click();
                helper.remplirProjetForm(projet);
                cy.get('.btn-danger').click();
                cy.url().should('contains', '/projectList');
                helper.getListProj().children().then(($childrenAfter) => {
                    expect($childrenBefore.length).to.equal($childrenAfter.length);
                })
                helper.getListProj().should('not.contain', projet.name)
            })
        })
    })
})
