describe('Navigation Functionality', () => {
  beforeEach(() => {
    // Viewport set to a standard desktop size to allow the home image not to obscure the side menu links,
    // otherwise .click({force: true}) would have to be used
    cy.viewport(1024, 768);
    cy.visit('http://localhost:1234');
  });

  it('Clicking on "Card Set" in the side menu navigates to the page containing the card sets', () => {
    cy.get('#cardSetPage').click();
    cy.get('[data-cy="study-set-header"]')
      .should('be.visible')
      .and('have.text', 'Study Set Library');
  });

  it('Clicking on "About" in the side menu navigates to the About page', () => {
    cy.get('#aboutPage').click();
    cy.get('[data-cy="about_page"]')
      .should('be.visible')
      .and('have.text', 'About Study Night');
  });

  it('Clicking on "Home" in the side menu navigates to the Home page', () => {
    cy.get('#homePage').click();
    cy.get('[data-cy="home_header"]')
      .should('be.visible')
      .and('have.text', 'Study Night');
  });
});
