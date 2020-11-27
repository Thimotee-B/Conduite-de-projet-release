const helper = require('../../helper.js');
const fixtureCreate = 'release/releaseCreated';
const fixtureNotCreate = 'release/releaseCancelled';

describe('Gestion des releases', () => {
    it('Charge la page d\'acceuil et du projet test', () => {
        cy.visit('/')
        cy.url().should('include', '/projectList')
        cy.get('.clickable-row').contains('Projet test').click();
    })

    it('Charge la page de release', () => {
        cy.url().should('include', '/projectView/');
        cy.get('.nav-item').should('contain', 'Release');
        cy.get('.nav-item').contains('Release').click();
        helper.URLRelease();
    })

    it('Upload une release validée', () => {
        helper.getListRelease().children().then(($childrenBefore) => {
            console.log($childrenBefore);
            cy.fixture(fixtureCreate).then((release) => {
                cy.get('.btn-sm').click();
                helper.remplirReleaseForm(release);
                cy.get('.btn-success').click();
                helper.URLRelease();
                helper.getListUS().get('.ui-sortable-handle')
                    .should('contain', release.nom);
                helper.getListUS().get('.ui-sortable-handle')
                    .should('contain', release.desc);
            })
            helper.getListRelease().children().then(($childrenAfter) => {
                expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
            })   
        })
    })
})