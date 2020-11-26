describe('Gestion sprint', () => {
    it('Charge la page d\'acceuil', () => {
        cy.visit('/')
        cy.url().should('include', '/projectList')
    })
    it('Charge la page de sprint', () => {
        cy.get('.clickable-row').contains('Projet test').click();
        cy.url().should('include', '/projectView/');
        cy.get('.nav-item').should('contain', 'Sprints');
        cy.get('.nav-item').contains('Sprints').click();
        cy.url().should('include', '/projectView/');
        cy.url().should('include', '/sprint');
    })
    it('Création de sprint', () => {
        cy.get('.container-fluid').get('.spacex1').children().then(($childrenBefore) => {
            cy.get('.btn-sm').click();
            cy.get('#beginDate').click();
            cy.get('#beginDate').type('2020-11-29');
            cy.get('#description').click();
            cy.get('#description').type('Sprint 1 pour tester');
            cy.get('.btn-success').click();
            cy.url().should('include', '/projectView/');
            cy.url().should('include', '/sprint');
            cy.get('.container-fluid').get('.spacex1').should('contain', 'Sprint');
            cy.get('.container-fluid').get('.spacex1').children().then(($childrenAfter) => {
                expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
            })
        })
    })
    it('Création de sprint annulé', () => {
        cy.get('.container-fluid').get('.spacex1').children().then(($childrenBefore) => {
            cy.get('.btn-sm').click();
            cy.get('#beginDate').click();
            cy.get('#beginDate').type('2020-11-29');
            cy.get('#description').click();
            cy.get('#description').type('Sprint 2 pour tester');
            cy.get('.btn-danger').click();
            cy.url().should('include', '/projectView/');
            cy.url().should('include', '/sprint');
            cy.get('.container-fluid').get('.spacex1').children().then(($childrenAfter) => {
                expect($childrenBefore.length).to.equal($childrenAfter.length);
            })
        })
    })
})
