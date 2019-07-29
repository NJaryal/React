Cypress.Commands.add('MovieAndvisit', (data = 'fixture:moviesApi') => {
  cy.server();
  cy.route('GET', 'https://reactjs-cdp.herokuapp.com/movies/', data);
  cy.visit('http://localhost:8080/');
});
