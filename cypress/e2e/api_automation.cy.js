let lat = 17
let lon = 71
let result_state_code = 16
let postal_code = 99501

describe('API Testing', () => {
    let base_URL = Cypress.env('url_api')
    Cypress.config('baseUrl', `${base_URL}`)
    let token_key = Cypress.env('api_key')

    it('Case 1: Get Current Weather Data where given a lat/lon', () => {
        cy.request(`/current?lat=${lat}&lon=${lon}&key=${token_key}`).then((response) => {
            let jsonData = response.body.data[0].state_code
            cy.log(jsonData)

            expect(response).to.have.property('status', 200)
            expect(response.body.data[0]).to.have.property('state_code', `${result_state_code}`)
            
        })
    }),

    it('Case 2: Get Current Weather Data where given a postal code', () => {
        cy.request(`/current?postal_code=${postal_code}&key=${token_key}`).then((response) => {
            let dataTimeStampUTC = response.body.data[0].ob_time
            let dataWeather = response.body.data[0].weather
            let jsonData = JSON.stringify(dataTimeStampUTC,dataWeather)
            cy.log(jsonData)

            expect(response).to.have.property('status', 200)
            expect(response.body.data[0].weather).to.not.be.null
        
            
        })
    })


})