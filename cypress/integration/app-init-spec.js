describe('app Initialization', () => {
  Cypress.on('uncaught:exception', (err, runnable) => false);

  it('Loads movieMockData on page load', () => {
    beforeEach(() => {
      cy.request('https://reactjs-cdp.herokuapp.com/movies/');
      cy.visit('http://localhost:8080/');
    });
    cy.MovieAndvisit();
    cy.get('[data-test="MovieList"]')
      .should('have.length', 10);
  });
});
