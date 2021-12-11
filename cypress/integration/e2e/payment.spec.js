describe('Payment Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
    })

    it('Send new payment (fake)', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('2000')
        cy.get('#sp_date').type('2020-01-10 {enter}')
        cy.get('#sp_description').type('desc')
        cy.get('#pay_saved_payees').click()
    })

    it('Success message appear', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'submitted')
    })
})