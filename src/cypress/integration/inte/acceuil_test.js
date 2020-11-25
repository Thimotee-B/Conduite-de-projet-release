describe('Page d\'acceuil', () => {
    it('Charge la page d\'acceuil', () => {
        cy.visit('/')
    })
    it('Création de projet validée', () => {
        cy.get('.btn-sm').click();
        cy.get('#projectName').click();
        cy.get('#projectName').type('Création de projet avec cypress');
        cy.get('#projectDesc').click();
        cy.get('#projectDesc').type('on crée un projet test');
        cy.get('#sprintDelay').click();
        cy.get('#sprintDelay').type('{backspace}4');
        cy.get('#dateEnd').click();
        cy.get('#dateEnd').type('2020-11-29');
        cy.get('.btn-success').click();
        cy.get('.modal-content > form').submit();
        cy.url().should('contains', 'http://localhost:3000/projectList');
    })
    it('Création de projet annulée', () => {
        cy.get('.btn-sm').click();
        cy.get('#projectName').click();
        cy.get('#projectName').type('On test avec cypress');
        cy.get('#projectDesc').type('Cypress c\'est super');
        cy.get('#sprintDelay').click();
        cy.get('#sprintDelay').type('{backspace}5');
        cy.get('#dateEnd').click();
        cy.get('#dateEnd').type('0001-12-09');
        cy.get('#dateEnd').type('0019-12-09');
        cy.get('#dateEnd').type('0199-12-09');
        cy.get('#dateEnd').type('1996-12-09');
        cy.get('.btn-danger').click();
    })
})
