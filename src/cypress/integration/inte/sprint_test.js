const descSprintCreated = 'Sprint 1 pour tester'
const descSprintNotCreated = 'PAS Sprint 2 pour tester'
const dateSprint = '2020-11-29'

function URLValide(){
    cy.url().should('include', '/projectView/');
    cy.url().should('include', '/sprint');
}

function getListSprint(){
    return cy.get('.container-fluid').get('.spacex1');
}

function remplirSprintForm(date, desc){
    cy.get('#beginDate').type(date);
    cy.get('#description').type(desc);
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
            cy.get('.btn-sm').click();
            remplirSprintForm(dateSprint, descSprintCreated);
            cy.get('.btn-success').click();
            URLValide();
            getListSprint().should('contain', 'Sprint');
            getListSprint().children().then(($childrenAfter) => {
                expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
            })
        })
    })

    it('Création de sprint annulée', () => {
        getListSprint().children().then(($childrenBefore) => {
            cy.get('.btn-sm').click();
            remplirSprintForm(dateSprint, descSprintNotCreated);
            cy.get('.btn-danger').click();
            URLValide();
            getListSprint().children().then(($childrenAfter) => {
                expect($childrenBefore.length).to.equal($childrenAfter.length);
            })
        })
    })
})
