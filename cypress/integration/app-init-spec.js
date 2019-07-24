describe('app Initialization', () => {
  Cypress.on('uncaught:exception', (err, runnable) => false);
  it('Loads movieMockData on page load', () => {
    cy.MovieAndvisit();
    cy.get('[data-test="Movie"]')
      .should('have.length', 0);
  });

  it('Error msg is displayed on page load', () => {
    cy.server();
    cy.route({
      url: 'api/moviesApi',
      method: 'GET',
      status: 500,
      response: {},
    });
    cy.visit('/');
    cy.get('[data-test="Movie"]')
      .should('not.exist');
  });
});
