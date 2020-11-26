const enTantQue = 'En tant que ';
const jeSouhaite = ', je souhaite ';
const afinDe = ' afin de ';

const fixtureCreate = 'US\\USCreated.json'
const fixtureNotCreate = 'US\\USCancelled.json'
const fixtureModify = 'US\\USUpdated.json'


function remplirUSForm(US) {
    cy.get('.modal-body:nth-child(1) #entantque').select(US.role);
    cy.get('.modal-body:nth-child(1) #jesouhaite').type(US.souhait);
    cy.get('.modal-body:nth-child(1) #afinde').type(US.afinDe);
    cy.get('.modal-body:nth-child(1) #importance').select(US.importance);
    cy.get('.modal-body:nth-child(1) #difficulte').select(US.difficulte);
    cy.get('.form-group:nth-child(4) > #plannification').select(US.planification);
}

function URLValide() {
    cy.url().should('include', '/projectView/');
    cy.url().should('include', '/backlog');
}

function getListUS() {
    return cy.get('.container-fluid')
        .get('.spacex1')
        .get('.table')
        .get('.table-hover')
        .get('.table-sm')
        .get('.table-striped')
        .get('.ui-sortable');
}

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
        URLValide();
    })

    it('Création d\'une US validée', () => {
        getListUS().children().then(($childrenBefore) => {
            cy.fixture(fixtureCreate).then((US) => {
                cy.get('.btn-sm').click();
                remplirUSForm(US);
                cy.get('.modal-footer:nth-child(2) > .btn-success').click();
                URLValide();
                getListUS().get('.ui-sortable-handle')
                    .should('contain', enTantQue + US.role + jeSouhaite + US.souhait + afinDe + US.afinDe);
                getListUS().children().then(($childrenAfter) => {
                    expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
                })
            })
        })
    })

    it('Création d\'une US annulée', () => {
        getListUS().children().then(($childrenBefore) => {
            cy.fixture(fixtureNotCreate).then((US) => {
                cy.get('.btn-sm').click();
                remplirUSForm(US);
                cy.get('.modal-footer:nth-child(2) > .btn-danger').click();
                URLValide();
                getListUS().get('.ui-sortable-handle')
                    .should('not.contain', enTantQue + US.role + jeSouhaite + US.souhait + afinDe + US.afinDe);
                getListUS().children().then(($childrenAfter) => {
                    expect($childrenBefore.length).to.equal($childrenAfter.length);
                })
            })
        })
    })
})