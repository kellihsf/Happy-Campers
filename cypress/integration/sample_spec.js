const { describe } = require("mocha")

describe('Test to view camps', () => {
    it('Visits Happy Camper Site', () => {
      cy.visit('https://happy-campers-app-working.netlify.app/')

      cy.url().should('include', 'happy-campers')

      cy.get('#parkNameInput')
        .type('denali')
    
      cy.contains('#park-form #submitButton', 'Go').click()
      
      cy.get('.parkButton').click()

    })
  })


