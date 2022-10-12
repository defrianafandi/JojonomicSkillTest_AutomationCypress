class locator {
    email() {
        return cy.get('#homeautosuggestcyPiF64CETk')
    }
    password() {
        return cy.get('input[type="password"]')
    }
    signInButton() {
        return cy.get('.btn').contains('Sign in')
    }
}
export default locator