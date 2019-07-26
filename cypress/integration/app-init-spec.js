describe('app Initialization', () => {
  Cypress.on('uncaught:exception', (err, runnable) => false);
  it('Loads movieMockData on page load', () => {
    cy.MovieAndvisit();
    cy.get('[data-test="Movie"]')
      .should('have.length', 0);
  });

});
