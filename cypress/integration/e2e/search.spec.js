describe('Searchbox Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Enter data into search field', () => {
        cy.get('#searchTerm').type('text {enter}')
    })

    it('Should show search results page', () => {
        cy.get('h2').contains('Search Results')
    })
})