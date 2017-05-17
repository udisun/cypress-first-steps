describe('Zengaming - End to End Testing', () => {
  context('general', () => {
    before(() => {
      cy.clearLocalStorage()
      cy.login()
    })
    it('Onbaording doesn\'t show when local storage exists', () => {
      cy.clearLocalStorage().then(ls => {
        expect(ls.getItem('didCloseSignupGuide')).to.be.null()
        localStorage.setItem('didCloseSignupGuide', 'closed')

        cy.visit('/')
          .get('signup-guide').should('not.exist')
      })
    })
  })
})
