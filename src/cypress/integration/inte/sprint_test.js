describe('Gestion sprint', () => {
    it('Charge la page d\'acceuil', () => {
        cy.visit('/')
    })
    it('Charge la page de sprint', () => {
        cy.get('.clickable-row:nth-child(1) > td:nth-child(1)').click();
        cy.url().should('include', '/projectView/');
        cy.get('.nav-item:nth-child(6) > .nav-link').click();
        cy.url().should('include', '/projectView/'); 
        cy.url().should('include', '/sprint'); 
    })
    it('Création de sprint', () => {
        cy.get('.btn-sm').click();
        cy.get('#beginDate').click();
        cy.get('#beginDate').type('2020-11-29');
        cy.get('#description').click();
        cy.get('#description').type('Sprint 1 pour tester');
        cy.get('.btn-success').click();
        cy.url().should('include', '/projectView/'); 
        cy.url().should('include', '/sprint');
        //On devrait regarder s'il y a un sprint en plus automatiquement?        
    })
    it('Création de sprint annulé', () => {
        cy.get('.btn-sm').click();
        cy.get('#beginDate').click();
        cy.get('#beginDate').type('2020-11-29');
        cy.get('#description').click();
        cy.get('#description').type('Sprint 2 pour tester');
        cy.get('.btn-danger').click();
        cy.url().should('include', '/projectView/'); 
        cy.url().should('include', '/sprint');
        //On devrait regarder s'il y a pas de sprint en plus automatiquement?        
    })
})
