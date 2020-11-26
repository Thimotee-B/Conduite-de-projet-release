const jeSouhaiteCreated='faire quelque chose';
const afinDeCreated='pouvoir faire des trucs';
const jeSouhaiteModified='faire autre chose'

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
    it('Charge la page de backlog', () => {
        cy.get('.container-fluid')
        .get('.spacex1')
        .get('.table')
        .get('.table-hover')
        .get('.table-sm')
        .get('.table-striped')
        .get('.ui-sortable').children().then(($childrenBefore) => {
            
        })
    })
})