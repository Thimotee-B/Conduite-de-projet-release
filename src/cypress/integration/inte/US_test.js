describe('Gestion sprint', () => {
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
    
})