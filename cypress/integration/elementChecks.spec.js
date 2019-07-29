describe('Integartion', () => {
  describe('First Test', () => {
    it('Search Component Input Field empty', () => {
      cy.visit('http://localhost:8080/');
      cy.get('form').within(() => {
        cy.get('input')
          .should('have.value', '');
      });
    });

    it('Search Input Field - Searched Movie', () => {
      cy.visit('http://localhost:8080/');
      cy.get('form').within(() => {
        const MovieName = 'Movie name';
        cy.get('input')
          .should('have.value', MovieName);
      });
    });

    it('SortByCategory component Label check', () => {
      cy.get('[data-test="activeSearch"]')
        .contains('Title');
    });

    it('SearchByType component label check', () => {
      cy.get('[data-test="activeSort"]')
        .contains('RELEASE DATE');
    });
  });

  describe('Second Test', () => {
    it('Visit the app', () => {
      cy.visit('http://localhost:8080/');
    });

    Cypress.on('uncaught:exception', (err, runnable) => false);
    it('fails to visit the  website1', () => {
      cy.visit('http://localhost:8080/');
    });
  });
});
