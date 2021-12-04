describe('Password Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Click on Sign in button', () => {
        cy.get('#signin_button').click()
    })

    it('Click on Forgot password', () => {
        cy.get('.offset3 > a').click()
    })

    it('Enter email', () => {
        cy.get('#user_email').type("test@test.com")
    })

    it('Submit email', () => {
        cy.contains('Send Password').click()
    })
})