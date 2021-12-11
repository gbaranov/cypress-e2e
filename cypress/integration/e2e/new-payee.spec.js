describe('New Payee Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd

            // cy.get('#user_login').type(username)
            // cy.get('#user_password').type(password)
            // cy.get('#user_remember_me').click()
            cy.contains('Signin').click()
            cy.login(username, password)
        })
    })

    it('Add new payee to the list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('123456789')
        cy.get('#np_new_payee_details').type('detail')
        cy.get('#add_new_payee').click()

    })

    it('Success message displayed', () => {
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain', 'The new payee Name was')

    })
})