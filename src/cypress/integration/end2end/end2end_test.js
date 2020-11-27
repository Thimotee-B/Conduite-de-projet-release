const fixtureProjet = 'end2end\\project\\projectCreated.json';


function remplirProjetForm(projet) {
    cy.get('#projectName').type(projet.name);
    cy.get('#projectDesc').type(projet.desc);
    cy.get('#sprintDelay').type(projet.sprint);
    cy.get('#dateEnd').type(projet.date);
}

function getListProj() {
    return cy.get('.table').get('.table-hover').get('tbody');
}


describe('Page d\'accueil', () => {
    it('Charge la page d\'accueil', () => {
        cy.visit('/')
        cy.url().should('contains', '/projectList')
    })

    it('Création de projet validée', () => {
        getListProj().children().then(($childrenBefore) => {
            cy.fixture(fixtureProjet).then((projet) => {
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