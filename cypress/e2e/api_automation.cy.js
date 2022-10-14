const base_URL = Cypress.env('url_api')
Cypress.config('baseUrl', `${base_URL}`)
const token_key = Cypress.env('api_key')
const lat = 17
const lon = 71
const result_state_code = 16
const postal_code = 99501

describe('API Testing', () => {
    it('Case 1: Get Current Weather Data where given a lat/lon', () => {
        cy.request(`/current?lat=${lat}&lon=${lon}&key=${token_key}`).then((response) => {
            const jsonData = response.body.data[0].state_code
            cy.log(jsonData)

            expect(response).to.have.property('status', 200)
            expect(response.body.data[0]).to.have.property('state_code', `${result_state_code}`)
            
        })
    }),

    it('Case 2: Get Current Weather Data where given a postal code', () => {
        cy.request(`/current?postal_code=${postal_code}&key=${token_key}`).then((response) => {
            const dataTimeStampUTC = response.body.data[0].ob_time
            const dataWeather = response.body.data[0].weather
            const jsonData = JSON.stringify(dataTimeStampUTC,dataWeather)
            cy.log(jsonData)

            expect(response).to.have.property('status', 200)
            expect(response.body.data[0].weather).to.not.be.null
        
            
        })
    })


})