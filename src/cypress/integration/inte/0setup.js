const fixtureCreate = 'setup\\setupProjet.json';

function remplirProjetForm(projet) {
    cy.get('#projectName').type(projet.name);
    cy.get('#projectDesc').type(projet.desc);
    cy.get('#sprintDelay').type(projet.sprint);
    cy.get('#dateEnd').type(projet.date);
}

function getListProj() {
    return cy.get('.table').get('.table-hover').get('tbody');
}


describe('SETUP', () => {
    it('Création du projet SETUP pour les tests', () => {
        cy.visit('/')
        getListProj().children().then(($childrenBefore) => {
            cy.fixture(fixtureCreate).then((projet) => {
                cy.get('.btn-sm').click();
                remplirProjetForm(projet);
                cy.get('.btn-success').click();
                cy.url().should('contains', '/projectList');
                getListProj().children().then(($childrenAfter) => {
                    expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
                })
                getListProj().should('contain', projet.name)
            })
        })
    })
})