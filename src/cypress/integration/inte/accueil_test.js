describe('Page d\'accueil', () => {
    it('Charge la page d\'accueil', () => {
        cy.visit('/')
        cy.url().should('include', '/projectList')
    })
    it('Création de projet validée', () => {
        cy.get('.table').get('.table-hover').get('tbody').children().then(($childrenBefore) => {
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
            cy.url().should('contains', 'http://localhost:3000/projectList');
            cy.get('.table').get('.table-hover').get('tbody').children().then(($childrenAfter) => {
                expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
            })
        })

    })
    it('Création de projet annulée', () => {
        cy.get('.table').get('.table-hover').get('tbody').children().then(($childrenBefore) => {
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
            cy.get('.table').get('.table-hover').get('tbody').children().then(($childrenAfter) => {
                expect($childrenBefore.length).to.equal($childrenAfter.length);
            })
        })
    })
})
