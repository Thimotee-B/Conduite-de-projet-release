function remplirProjetForm(projet) {
    cy.get('#projectName').type(projet.name);
    cy.get('#projectDesc').type(projet.desc);
    cy.get('#sprintDelay').type(projet.sprint);
    cy.get('#dateEnd').type(projet.date);
}

function getListProj() {
    return cy.get('.table').get('.table-hover').get('tbody');
}

function getListSprint() {
    return cy.get('.container-fluid').get('.spacex1');
}

function getListUS() {
    return cy.get('#USListTable').get('tbody')
}

function getListRelease() {
    return cy.get('.container-fluid')
        .get('.spacex1')
        .get('.table')
        .get('.table-hover')
        .get('.table-sm')
        .get('.table-striped')
        .get('.ui-sortable');
}

function remplirSprintForm(sprint) {
    cy.get('#beginDate').type(sprint.date);
    cy.get('#description').type(sprint.desc);
}


function remplirUSForm(US) {
    cy.get('.modal-body:nth-child(1) #entantque').select(US.role);
    cy.get('.modal-body:nth-child(1) #jesouhaite').type(US.souhait);
    cy.get('.modal-body:nth-child(1) #afinde').type(US.afinDe);
    cy.get('.modal-body:nth-child(1) #importance').select(US.importance);
    cy.get('.modal-body:nth-child(1) #difficulte').select(US.difficulte);
    cy.get('.form-group:nth-child(4) > #plannification').select(US.planification);
}

function remplirUSEdit(US) {
    cy.get('#modifyUSModal1 #entantque').select(US.role);
    cy.get('#modifyUSModal1 #jesouhaite').clear().type(US.souhait);
    cy.get('#modifyUSModal1 #afinde').clear().type(US.afinDe);
    cy.get('#modifyUSModal1 #importance').select(US.importance);
    cy.get('#modifyUSModal1 #difficulte').select(US.difficulte);
    cy.get('#modifyUSModal1 #etat').select(US.etat);

}

function remplirReleaseForm(release){
cy.get('#title').type(release.nom);
cy.get('#description').type(release.desc);
cy.get('#releaseFile').attachFile(release.file);
}

function URLSprint() {
    cy.url().should('include', '/projectView/');
    cy.url().should('include', '/sprint');
}

function URLBacklog() {
    cy.url().should('include', '/projectView/');
    cy.url().should('include', '/backlog');
}

function URLRelease() {
    cy.url().should('include', '/projectView/');
    cy.url().should('include', '/release');
}

module.exports = {
    remplirProjetForm,
    getListProj,
    getListSprint,
    getListUS,
    getListRelease,
    remplirProjetForm,
    remplirSprintForm,
    remplirUSForm,
    remplirUSEdit,
    remplirReleaseForm,
    URLSprint,
    URLBacklog,
    URLRelease,

}