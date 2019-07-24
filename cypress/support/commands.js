Cypress.Commands.add('MovieAndvisit', (data = 'fixture:moviesApi') => {
    cy.server();
    cy.route('GET', '/api/moviesApi', data);
    cy.visit('/');
})