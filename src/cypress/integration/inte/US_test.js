const helper = require('../../helper.js');
const fixtureCreate = 'US/USCreated.json';
const fixtureModify = 'US/USUpdated.json';
const fixtureNotCreate = 'US/USCancelled.json';
const enTantQue = 'En tant que ';
const jeSouhaite = ', je souhaite ';
const afinDe = ' afin de ';


describe('Gestion backlog', () => {
    it('Charge la page d\'acceuil et du projet test', () => {
        cy.visit('/')
        cy.url().should('include', '/projectList')
        cy.get('.clickable-row').contains('Projet test').click();
    })

    it('Charge la page de backlog', () => {
        cy.url().should('include', '/projectView/');
        cy.get('.nav-item').should('contain', 'Backlog');
        cy.get('.nav-item').contains('Backlog').click();
        helper.URLBacklog();
    })

    it('Création d\'une US validée', () => {
        helper.getListUS().children().then(($childrenBefore) => {
            cy.fixture(fixtureCreate).then((US) => {
                cy.get('.btn-sm').click();
                helper.remplirUSForm(US);
                cy.get('.modal-footer:nth-child(2) > .btn-success').click();
                helper.URLBacklog();
                helper.getListUS().get('.ui-sortable-handle')
                    .should('contain', enTantQue + US.role + jeSouhaite + US.souhait + afinDe + US.afinDe);
                helper.getListUS().children().then(($childrenAfter) => {
                    expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
                })
            })
        })
    })
    //Ne fonctionne pas s'il y a plusieurs US (à modifier, mais c'est dur)
    it('Modification d\'une US', () => {
        helper.getListUS().children().then(($childrenBefore) => {
            cy.fixture(fixtureModify).then((US) => {
                cy.get('.fa-edit').click();
                helper.remplirUSEdit(US);
                cy.get('#modifyUSModal1 .btn-success').click();
                helper.URLBacklog();
                helper.getListUS().get('.ui-sortable-handle')
                    .should('contain', enTantQue + US.role + jeSouhaite + US.souhait + afinDe + US.afinDe);
                helper.getListUS().children().then(($childrenAfter) => {
                    expect($childrenBefore.length).to.equal($childrenAfter.length);
                })
            })
        })
    })


    it('Création d\'une US annulée', () => {
        helper.getListUS().children().then(($childrenBefore) => {
            cy.fixture(fixtureNotCreate).then((US) => {
                cy.get('.btn-sm').click();
                helper.remplirUSForm(US);
                cy.get('.modal-footer:nth-child(2) > .btn-danger').click();
                helper.URLBacklog();
                helper.getListUS().get('.ui-sortable-handle')
                    .should('not.contain', enTantQue + US.role + jeSouhaite + US.souhait + afinDe + US.afinDe);
                helper.getListUS().children().then(($childrenAfter) => {
                    expect($childrenBefore.length).to.equal($childrenAfter.length);
                })
            })
        })
    })

    it('Suppression d\'une US', () => {
        helper.getListUS().children().then(($childrenBefore) => {
            cy.get('.fa-trash-alt').click();
            helper.URLBacklog();
            helper.getListUS().children().then(($childrenAfter) => {
                expect($childrenBefore.length - 1).to.equal($childrenAfter.length);
            })
        })
    })
})
