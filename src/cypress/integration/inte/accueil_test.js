const ProjectCreatedName = 'Création de projet avec cypress'
const ProjectNotCreatedName = 'Projet pas crée'
const ProjectDesc = 'On crée un projet test'
describe('Page d\'accueil', () => {
    it('Charge la page d\'accueil', () => {
        cy.visit('/')
        cy.url().should('include', '/projectList')
    })
    it('Création de projet validée', () => {
        cy.get('.table').get('.table-hover').get('tbody').children().then(($childrenBefore) => {
            cy.get('.btn-sm').click();
            cy.get('#projectName').type(ProjectCreatedName);
            cy.get('#projectDesc').type(ProjectDesc);
            cy.get('#sprintDelay').type('{backspace}4');
            cy.get('#dateEnd').type('2020-11-29');
            cy.get('.btn-success').click();
            cy.url().should('contains', 'http://localhost:3000/projectList');
            cy.get('.table').get('.table-hover').get('tbody').children().then(($childrenAfter) => {
                expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
                cy.get('.table').get('.table-hover').get('tbody').should('contain', ProjectCreatedName)
            })
        })

    })
    it('Création de projet annulée', () => {
        cy.get('.table').get('.table-hover').get('tbody').children().then(($childrenBefore) => {
            cy.get('.btn-sm').click();
            cy.get('#projectName').type(ProjectNotCreatedName);
            cy.get('#projectDesc').type(ProjectDesc);
            cy.get('#sprintDelay').type('{backspace}5');
            cy.get('#dateEnd').type('1996-12-09');
            cy.get('.btn-danger').click();
            cy.get('.table').get('.table-hover').get('tbody').children().then(($childrenAfter) => {
                expect($childrenBefore.length).to.equal($childrenAfter.length);
                cy.get('.table').get('.table-hover').get('tbody').should('not.contain', ProjectNotCreatedName)
            })
        })
    })
})
