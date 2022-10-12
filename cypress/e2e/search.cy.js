let search_valid = 'Apply for a number plate'
let loc_valid = 'Sydney 2000'
let base_url = Cypress.env('base_url')


describe('Test search and find locations', () => {
  it('Case 1: sucessfully search with valid data', () => {
    cy.visit(`${base_url}`)
    cy.viewport(1500, 800)
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get('#homeautosuggestpTPTHOb9F9A > .form__text').type(search_valid.toString())
    cy.get('#homeautosuggestpTPTHOb9F9A > .form__text').type('{enter}',{force: true, delay: 0})
    cy.contains('Apply for a number plate').should('be.visible')
    cy.get('.search__result').eq(2).scrollIntoView().should('be.visible')
    cy.contains('number').should('be.visible')  
  })

  it('Case 2: sucessfully find services with valid data', () => {
    cy.visit(`${base_url}`)
    cy.viewport(1500, 800)
    cy.contains('Find locations').click()
    cy.get('#locatorTextSearch').focus().clear().type(loc_valid.toString())
    cy.get('#locatorTextSearch').type('{enter}',{force: true, delay: 0})
    cy.contains('Rozelle Bay Maritime Service Centre').should('be.visible')
  })
})