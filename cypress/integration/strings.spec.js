describe(`String Functions`, () => {
  beforeEach(() => {
    cy.visit(`exercises/string-exercises/index.html`);
  });

  it(`displays a page with a textarea and stats`, () => {
    cy.findByLabelText(/text/i).should(`exist`);
    cy.get(`#results`).should(`exist`);
    cy.get(`#capitalize`).should(`exist`);
    cy.get(`#reverse`).should(`exist`);
    cy.get(`#split`).should(`exist`);
  });
  
  it(`the capitalize result shows the correct output`, () => {
    cy.findByLabelText(/text/i).type(`Hello world!`);
    cy.get(`#capitalize`).should(`have.text`, `HELLO WORLD!`);
    cy.findByLabelText(/text/i).type(` Hello world!`);
    cy.get(`#capitalize`).should(`have.text`, `HELLO WORLD! HELLO WORLD!`);
  });

  it(`the reverse result shows the correct output`, () => {
    cy.findByLabelText(/text/i).type(`Hello world!`);
    cy.get(`#reverse`).should(`have.text`, `!dlrow olleH`);
    cy.get(`#split`).children().should(`have.length`, 2);
  });

  it(`the split result shows the correct output`, () => {
    cy.findByLabelText(/text/i).type(`Hello world!`);
    cy.get(`#split`).children().should(`have.length`, 2);
    cy.get(`#split`).children().eq(0).should(`have.text`, `Hello`);
    cy.get(`#split`).children().eq(1).should(`have.text`, `world!`);
  });
})