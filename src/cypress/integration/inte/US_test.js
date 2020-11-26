const enTantQue = 'En tant que ';
const jeSouhaite = ', je souhaite ';
const afinDe = ' afin de ';

const roleCreation = 'Développeur';
const jeSouhaiteCreated = 'faire quelque chose';
const afinDeCreated = 'pouvoir faire des trucs';
const importanceCreation = 'Moyenne-Haute';
const difficultCreation = '5';
const planificationCreation = '-';

const jeSouhaiteAnnul = 'ne pas faire quelque chose';
const afinDeAnnul = 'ne pas pouvoir faire des trucs';

const jeSouhaiteModified = 'faire autre chose';

function remplirUSForm(role, souhait, afinDe, importance, difficulte, planification) {
    cy.get('.modal-body:nth-child(1) #entantque').select(role);
    cy.get('.modal-body:nth-child(1) #jesouhaite').click();
    cy.get('.modal-body:nth-child(1) #jesouhaite').type(souhait);
    cy.get('.modal-body:nth-child(1) #afinde').click();
    cy.get('.modal-body:nth-child(1) #afinde').type(afinDe);
    cy.get('.modal-body:nth-child(1) #importance').select(importance);
    cy.get('.modal-body:nth-child(1) #difficulte').select(difficulte);
    cy.get('.form-group:nth-child(4) > #plannification').select(planification);
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
    it('Charge la page d\'acceuil', () => {
        cy.visit('/')
        cy.url().should('include', '/projectList')
    })
    it('Charge la page de backlog', () => {
        cy.get('.clickable-row').contains('Projet test').click();
        cy.url().should('include', '/projectView/');
        cy.get('.nav-item').should('contain', 'Backlog');
        cy.get('.nav-item').contains('Backlog').click();
        URLValide();
    })
    it('Création d\'une US validée', () => {
        getListUS().children().then(($childrenBefore) => {
            cy.get('.btn-sm').click();
            remplirUSForm(roleCreation, jeSouhaiteCreated, afinDeCreated, importanceCreation, difficultCreation, planificationCreation);
            cy.get('.modal-footer:nth-child(2) > .btn-success').click();
            getListUS().get('.ui-sortable-handle')
                .should('contain', enTantQue + roleCreation + jeSouhaite + jeSouhaiteCreated + afinDe + afinDeCreated);
            getListUS().children().then(($childrenAfter) => {
                expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
            })
        })
        URLValide()
    })
    it('Création d\'une US annulée', () => {
        getListUS().children().then(($childrenBefore) => {
            cy.get('.btn-sm').click();
            remplirUSForm(roleCreation, jeSouhaiteAnnul, afinDeAnnul, importanceCreation, difficultCreation, planificationCreation);
            cy.get('.modal-footer:nth-child(2) > .btn-danger').click();
            getListUS().get('.ui-sortable-handle')
                .should('not.contain', enTantQue + roleCreation + jeSouhaite + jeSouhaiteAnnul + afinDe + afinDeAnnul);
            getListUS().children().then(($childrenAfter) => {
                expect($childrenBefore.length).to.equal($childrenAfter.length);
            })
        })
        URLValide();
    })
})