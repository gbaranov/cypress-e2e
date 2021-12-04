describe('Feedback Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })

    it('Load feedback form', () => {
        cy.get('form').should('be.visible')
    })

    it('Fill feedback form', () => {
        cy.get('#name').type('name')
        cy.get('#email').type('test@test.com')
        cy.get('#subject').type('sub')
        cy.get('#comment').type('comment...')
    })

    it('Submit feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('Verify proper content displayed', () => {
        cy.get('h3').contains('Feedback')
    })
})