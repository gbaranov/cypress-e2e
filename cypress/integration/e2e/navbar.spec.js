describe('Navbar Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('Display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
    })

    it('Display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })
})