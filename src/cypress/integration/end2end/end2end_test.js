const helper = require('../../helper.js');
const fixtureProjet = 'end2end/project/projectCreated.json';
const fixtureSprint = 'end2end/sprint/sprintCreated';
const fixtureUSCreate = 'end2end/US/USCreated.json';
const fixtureUSModify = 'end2end/US/USUpdated.json';

const enTantQue = 'En tant que ';
const jeSouhaite = ', je souhaite ';
const afinDe = ' afin de ';

describe('Page d\'accueil end2end', () => {
    it('Charge la page d\'accueil', () => {
        cy.visit('/')
        cy.url().should('contains', '/projectList')
    })

    it('Création de projet et page de projet', () => {
        helper.getListProj().children().then(($childrenBefore) => {
            cy.fixture(fixtureProjet).then((projet) => {
                cy.get('.btn-sm').click();
                helper.remplirProjetForm(projet);
                cy.get('.btn-success').click();
                cy.url().should('contains', '/projectList');
                helper.getListProj().children().then(($childrenAfter) => {
                    expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
                })
                helper.getListProj().should('contain', projet.name)
                cy.get('.clickable-row').contains(projet.name).click();
                cy.url().should('include', '/projectView/');
            })
        })
    })
})

describe('Gestion sprint end2end', () => {
    it('Charge la page de sprint', () => {
        cy.get('.nav-item').should('contain', 'Sprints');
        cy.get('.nav-item').contains('Sprints').click();
        helper.URLSprint();
    })

    it('Création de sprint validée', () => {
        helper.getListSprint().children().then(($childrenBefore) => {
            cy.fixture(fixtureSprint).then((sprint) => {
                cy.get('.btn-sm').click();
                helper.remplirSprintForm(sprint);
                cy.get('.btn-success').click();
                helper.URLSprint();
                helper.getListSprint().should('contain', 'Sprint');
                helper.getListSprint().children().then(($childrenAfter) => {
                    expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
                })
            })
        })
    })
})

describe('Gestion backlog end2end', () => {

    it('Charge la page de backlog', () => {
        cy.url().should('include', '/projectView/');
        cy.get('.nav-item').should('contain', 'Backlog');
        cy.get('.nav-item').contains('Backlog').click();
        helper.URLBacklog();
    })

    it('Création d\'une US', () => {
        helper.getListUS().children().then(($childrenBefore) => {
            cy.fixture(fixtureUSCreate).then((US) => {
                cy.get('.btn-sm').click();
                helper.remplirUSForm(US);
                cy.get('.modal-footer:nth-child(2) > .btn-success').click();
                helper.URLBacklog();
                helper.getListUS().should('contain', enTantQue + US.role + jeSouhaite + US.souhait + afinDe + US.afinDe);
                helper.getListUS().children().then(($childrenAfter) => {
                    if ($childrenBefore>1)
                        expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
                })
            })
        })
    })
//Ne fonctionne pas s'il y a plusieurs US (à modifier, mais c'est dur)
    it('Modification d\'une US', () => {
        helper.getListUS().children().then(($childrenBefore) => {
            cy.fixture(fixtureUSModify).then((US) => {
                cy.get('.fa-edit').click();
                helper.remplirUSEdit(US);
                cy.get('#modifyUSModal1 .btn-success').click();
                helper.URLBacklog();
                helper.getListUS().should('contain', enTantQue + US.role + jeSouhaite + US.souhait + afinDe + US.afinDe);
                helper.getListUS().children().then(($childrenAfter) => {
                    expect($childrenBefore.length).to.equal($childrenAfter.length);
                })
            })
        })
    })

    it('Suppression d\'une US', () => {
        helper.getListUS().children().then(($childrenBefore) => {
            cy.fixture(fixtureUSModify).then((US) => {
                cy.get('.fa-trash-alt').click();
                helper.URLBacklog();
                helper.getListUS().children().then(($childrenAfter) => {
                    if ($childrenBefore>1)
                        expect($childrenBefore.length-1).to.equal($childrenAfter.length);
                })
            })
        })
    })
})
