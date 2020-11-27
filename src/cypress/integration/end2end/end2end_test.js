const fixtureProjet = 'end2end\\project\\projectCreated.json';
const fixtureSprint = 'end2end\\sprint\\sprintCreated';
const fixtureCreate = 'US\\USCreated.json';
const fixtureModify = 'US\\USUpdated.json';

const enTantQue = 'En tant que ';
const jeSouhaite = ', je souhaite ';
const afinDe = ' afin de ';

describe('Page d\'accueil end2end', () => {
    it('Charge la page d\'accueil', () => {
        cy.visit('/')
        cy.url().should('contains', '/projectList')
    })

    it('Création de projet et page de projet', () => {
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
                cy.get('.clickable-row').contains(projet.name).click();
                cy.url().should('include', '/projectView/');
            })
        })
    })
})


describe('Gestion sprint end2end', () => {

    it('Charge la page de sprint', () => {
        cy.get('.nav-item').should('contain', 'Sprints');
        cy.get('.nav-item').contains('Sprints').click();
        URLSprint();
    })

    it('Création de sprint validée', () => {
        getListSprint().children().then(($childrenBefore) => {
            cy.fixture(fixtureSprint).then((sprint) => {
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
}