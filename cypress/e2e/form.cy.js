describe('Form Functionality', () => {
  beforeEach(() => {
    // Viewport set to a standard desktop size to allow the home image not to obscure the side menu links,
    // otherwise .click({force: true}) would have to be used
    cy.viewport(1024, 768);
    cy.visit('http://localhost:1234');
    cy.get('#cardSetPage').click();
  });

  it('Clicking on "Add New Set" opens the Create Set Form', () => {
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="set_form"]').should('be.visible');
  });

  describe('Add New Set Functionality', () => {
    beforeEach(() => {
      cy.get('[data-cy="toggle_form"]').click();
    });

    it('Filling the Add New Set form with a valid input generates a new set', () => {
      const setName = 'Example Set';
      cy.get('#titleInput').type(setName);
      cy.get('[type="submit"]').click();
      cy.get('.setContainer')
        .last()
        .should('contain.text', setName)
        .and('contain.text', 'Terms: 0');
    });

    it('Filling the Add New Set form with an empty input generates an error', () => {
      cy.get('[type="submit"]').click();
      cy.get('.error')
        .should('be.visible')
        .and('contain.text', 'TITLE CANNOT BE EMPTY');
    });
  });

  it('Clicking on "Add New Card" opens the Create Card Form', () => {
    cy.get(`[data-cy="1"]`).click(); //Test being done on the first set only
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="card_form"]').should('be.visible');
  });

  describe('Add New Card Functionality', () => {
    beforeEach(() => {
      cy.get(`[data-cy="1"]`).click(); //Test being done on the first set only
      cy.get('[data-cy="toggle_form"]').click();
    });

    it('Filling the Add New Card form with a valid input generates a new card', () => {
      const cardName = 'Example Card';
      const cardDescription = 'Example Description';
      cy.get('#termInput').type(cardName);
      cy.get('#descriptionInput').type(cardDescription);
      cy.get('[type="submit"]').click();
      cy.get('.term').should('contain.text', cardName);
      cy.get('.description').should('contain.text', cardDescription);
    });

    it('Filling the Add New Card form with an empty description generates an error', () => {
      const cardName = 'Example Card';
      cy.get('#termInput').type(cardName);
      cy.get('[type="submit"]').click();
      cy.get('.error')
        .should('be.visible')
        .and('contain.text', 'DESCRIPTION CANNOT BE EMPTY');
    });

    it('Filling the Add New Card form with an empty term generates an error', () => {
      const cardDescription = 'Example Description';
      cy.get('#descriptionInput').type(cardDescription);
      cy.get('[type="submit"]').click();
      cy.get('.error')
        .should('be.visible')
        .and('contain.text', 'TERM CANNOT BE EMPTY');
    });

    it('Filling the Add New Card form with an empty term and description generates an error', () => {
      cy.get('[type="submit"]').click();
      cy.get('.error')
        .should('be.visible')
        .and('contain.text', 'TERM AND DESCRIPTION CANNOT BE EMPTY');
    });
  });
});
