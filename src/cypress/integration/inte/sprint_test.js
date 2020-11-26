const fixtureCreate = 'sprint\\sprintCreated'
const fixtureNotCreate = 'sprint\\sprintCancelled'

function URLValide() {
    cy.url().should('include', '/projectView/');
    cy.url().should('include', '/sprint');
}

function getListSprint() {
    return cy.get('.container-fluid').get('.spacex1');
}

function remplirSprintForm(sprint) {
    cy.get('#beginDate').type(sprint.date);
    cy.get('#description').type(sprint.desc);
}


describe('Gestion sprint', () => {
    it('Charge la page d\'acceuil et du projet test', () => {
        cy.visit('/')
        cy.url().should('include', '/projectList')
        cy.get('.clickable-row').contains('Projet test').click();
        cy.url().should('include', '/projectView/');
    })

    it('Charge la page de sprint', () => {
        cy.get('.nav-item').should('contain', 'Sprints');
        cy.get('.nav-item').contains('Sprints').click();
        URLValide();
    })

    it('Création de sprint validée', () => {
        getListSprint().children().then(($childrenBefore) => {
            cy.fixture(fixtureCreate).then((sprint) => {
                cy.get('.btn-sm').click();
                remplirSprintForm(sprint);
                cy.get('.btn-success').click();
                URLValide();
                getListSprint().should('contain', 'Sprint');
                getListSprint().children().then(($childrenAfter) => {
                    expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
                })
            })
        })
    })

    it('Création de sprint annulée', () => {
        getListSprint().children().then(($childrenBefore) => {
            cy.fixture(fixtureNotCreate).then((sprint) => {
                cy.get('.btn-sm').click();
                remplirSprintForm(sprint);
                cy.get('.btn-danger').click();
                URLValide();
                getListSprint().children().then(($childrenAfter) => {
                    expect($childrenBefore.length).to.equal($childrenAfter.length);
                })
            })
        })
    })
})
