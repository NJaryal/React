describe('Integartion', () => {
  describe('First Test', () => {
    it('is working', () => {
      expect(true).to.equal(true);
    });

    it('blank input field', () => {
      const userTypedMsg = 'Tomb Raider';
      cy.get('[data-test="SearchComponent"]')
        .should('have.value', userTypedMsg);
    });

    it('blank input field', () => {
      cy.get('[data-test="activeSearch"]')
        .contains('Title');
    });

    it('blank input field', () => {
      cy.get('[data-test="activeSort"]')
        .contains('RELEASE DATE');
    });
  });

  describe('Second Test', () => {
    it('Visit the app', () => {
      cy.visit('/');
    });

    Cypress.on('uncaught:exception', (err, runnable) => false);
    it('fails to visit the  website1', () => {
      cy.visit('https://github.com/NJaryal/ReactApp');
    });
  });
});
