const helper = require('../../helper.js');
require('cypress-downloadfile/lib/downloadFileCommand');
const fixtureCreate = 'release/releaseCreated';
const fixtureNotCreate = 'release/releaseCancelled';

describe('Gestion des releases', () => {
    it('Charge la page d\'acceuil et du projet test', () => {
        cy.visit('/')
        cy.url().should('include', '/projectList')
        cy.get('.clickable-row').contains('Projet test').click();
    })

    it('Charge la page de release', () => {
        cy.url().should('include', '/projectView/');
        cy.get('.nav-item').should('contain', 'Release');
        cy.get('.nav-item').contains('Release').click();
        helper.URLRelease();
    })

    it('Upload une release validée', () => {
        helper.getListRelease().children().then(($childrenBefore) => {
            console.log($childrenBefore);
            cy.fixture(fixtureCreate).then((release) => {
                cy.get('.btn-sm').click();
                helper.remplirReleaseForm(release);
                cy.get('.btn-success').click();
                helper.URLRelease();
                helper.getListUS().get('.ui-sortable-handle')
                    .should('contain', release.nom);
                helper.getListUS().get('.ui-sortable-handle')
                    .should('contain', release.desc);
            })
            helper.getListRelease().children().then(($childrenAfter) => {
                expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
            })   
        })
    })
    it('Telechargement d\'une release',() =>{
        cy.url().then(($url) =>{
            console.log($url);
            cy.downloadFile($url + '/download/release.zip', 'cypress/download/test', 'release.zip');
        })
        cy.readFile('cypress/download/test/release.zip').then(($contentDL)=>{
            cy.readFile('cypress/upload/release.zip').then(($contenUP)=>{
                expect($contentDL).to.equal($contenUP);
            })
        })
    })
    it('Upload une release annulée', () => {
        helper.getListRelease().children().then(($childrenBefore) => {
            console.log($childrenBefore);
            cy.fixture(fixtureNotCreate).then((release) => {
                cy.get('.btn-sm').click();
                helper.remplirReleaseForm(release);
                cy.get('.btn-danger').click();
                helper.URLRelease();
                helper.getListUS().get('.ui-sortable-handle')
                    .should('not.contain', release.nom);
                helper.getListUS().get('.ui-sortable-handle')
                    .should('not.contain', release.desc);
            })
            helper.getListRelease().children().then(($childrenAfter) => {
                expect($childrenBefore.length).to.equal($childrenAfter.length);
            })   
        })
    })

})