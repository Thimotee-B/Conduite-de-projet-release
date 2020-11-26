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

describe('Gestion backlog', () => {
    it('Charge la page d\'acceuil', () => {
        cy.visit('/')
        cy.url().should('include', '/projectList')
    })
    it('Charge la page de backlog', () => {
        cy.get('.clickable-row').contains('Projet Test').click();
        cy.url().should('include', '/projectView/');
        cy.get('.nav-item').should('contain', 'Backlog');
        cy.get('.nav-item').contains('Backlog').click();
        cy.url().should('include', '/projectView/');
        cy.url().should('include', '/backlog');
    })
    it('Création d\'une US', () => {
        cy.get('.container-fluid')
            .get('.spacex1')
            .get('.table')
            .get('.table-hover')
            .get('.table-sm')
            .get('.table-striped')
            .get('.ui-sortable').children().then(($childrenBefore) => {
                cy.get('.btn-sm').click();
                cy.get('.modal-body:nth-child(1) #entantque').select(roleCreation);
                cy.get('.modal-body:nth-child(1) #jesouhaite').click();
                cy.get('.modal-body:nth-child(1) #jesouhaite').type(jeSouhaiteCreated);
                cy.get('.modal-body:nth-child(1) #afinde').click();
                cy.get('.modal-body:nth-child(1) #afinde').type(afinDeCreated);
                cy.get('.modal-body:nth-child(1) #importance').select(importanceCreation);
                cy.get('.modal-body:nth-child(1) #difficulte').select(difficultCreation);
                cy.get('.form-group:nth-child(4) > #plannification').select(planificationCreation);
                cy.get('.modal-footer:nth-child(2) > .btn-success').click();
                cy.get('.container-fluid')
                    .get('.spacex1')
                    .get('.table')
                    .get('.table-hover')
                    .get('.table-sm')
                    .get('.table-striped')
                    .get('.ui-sortable').get('.ui-sortable-handle')
                    .should('contain', enTantQue + roleCreation + jeSouhaite + jeSouhaiteCreated + afinDe + afinDeCreated);
                cy.get('.container-fluid')
                    .get('.spacex1')
                    .get('.table')
                    .get('.table-hover')
                    .get('.table-sm')
                    .get('.table-striped')
                    .get('.ui-sortable').children().then(($childrenAfter) => {
                        expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
                    })
            })
    })
})