describe(`Word Counter`, () => {
  beforeEach(() => {
    cy.visit(`exercises/word-counter/index.html`);
  });

  it(`displays a page with a textarea and stats`, () => {
    cy.findByLabelText(/text/i).should(`exist`);
    cy.get(`#stat`).should(`exist`);
  });
  
  it(`the stat sections updates as you type`, () => {
    cy.findByLabelText(/text/i).type(`Hello world!`);
    cy.get(`#stat`).should(`have.text`, `You've written 2 words and 12 characters.`)
  });
})