let search_valid = 'Apply for a number plate'
let loc_valid = 'Sydney 2000'
let base_url = Cypress.env('base_url')


describe('Test search and find locations', () => {
  it('Case 1: sucessfully search with valid data', () => {
    cy.visit(`${base_url}`)
    cy.viewport(1400, 800)
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get('[name="q"]').eq(2).type(search_valid.toString(),{force: true, delay: 0})
    cy.contains(search_valid.toLowerCase()).should('be.visible')
    cy.get('[name="q"]').eq(2).type('{enter}',{force: true, delay: 0})
    cy.wait(1000)
    cy.contains('Apply for a number plate').should('be.visible')
    cy.get('.search__result').eq(1).scrollIntoView().should('be.visible')
    cy.contains('number').should('be.visible')  
  })

  it('Case 2: sucessfully find services with valid data', () => {
    cy.visit(`${base_url}`)
    cy.viewport(1500, 800)
    cy.contains('Find locations').click()
    cy.get('#locatorTextSearch').focus().clear().type(loc_valid.toString(),{force: true, delay: 0})
    cy.wait(1000)
    cy.get('#locatorTextSearch').type('{enter}',{force: true, delay: 0})
    cy.contains('Rozelle Bay Maritime Service Centre').should('be.visible')
  })
})