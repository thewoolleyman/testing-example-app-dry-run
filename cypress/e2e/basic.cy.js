describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the label', () => {
    cy.get('h1')
      .contains('This is the message returned from the serverless function');
  });

  it('displays the response from the serverless function', () => {
    cy.get('[data-id="message"]')
      .contains('Hello World!');
  });

  it('renders the Netlify logo image', () => {
    cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
