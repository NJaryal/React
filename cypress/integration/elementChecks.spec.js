describe('Integartion', () => {
  describe('First Test', () => {
    beforeEach(() => {
      cy.Movievisit();
    })
    it('Search Component Input Field empty', () => {      
      cy.get('form').within(() => {
        cy.get('input')
          .should('have.value', '');
      });
    });

    it('Search Input Field - Npn Existing Movie', () => {
      cy.get('form').within(() => {
        const MovieName = 'Game of Thrones';
        cy.get('input').type(MovieName)
        cy.get('input').should('have.value', MovieName)
        cy.get('[data-test="MovieList"]').should('have.length', 0);
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
});
