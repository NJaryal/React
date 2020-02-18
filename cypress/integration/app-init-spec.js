describe('app Initialization', () => {
  Cypress.on('uncaught:exception', (err, runnable) => false);

  beforeEach(() => {
    cy.request('https://reactjs-cdp.herokuapp.com/movies/');
    cy.Movievisit();
  });

  it('Loads movieMockData on page load', () => {    
    cy.MovieAndvisit();
    cy.get('[data-test="MovieList"]')
      .should('have.length', 10);
  });
});
