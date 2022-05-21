describe(`Password Reveal`, () => {
  const credentials = {
    username:`user`,
    password:`test`
  };
  beforeEach(() => {
    cy.visit(`exercises/password-reveal/index.html`);
  });

  it(`displays a form`, () => {
    cy.get(`form`).should(`exist`);
    cy.findByLabelText(/username/i).should(`exist`);
    cy.findByLabelText(/password/i).should(`exist`);
  });

  it(`can fill out login form`, () => {
    fillOutForm(credentials);
    cy.findByLabelText(/username/i).should(`have.value`, credentials.username);
    cy.findByLabelText(/password/i).should(`have.value`, credentials.password);
  });
  
  it(`can toggle password visibility`, () => {
    fillOutForm(credentials);
    cy.findByLabelText(/username/i).should(`have.value`, credentials.username);
    cy.findByLabelText(/password/i).should(`have.value`, credentials.password);
    cy.findByLabelText(/password/i).invoke(`attr`, `type`).should(`eq`, `password`);
    cy.get(`[data-cy=toggle-password-visibility]`).click();
    cy.findByLabelText(/password/i).invoke(`attr`, `type`).should(`eq`, `text`);
    cy.get(`[data-cy=toggle-password-visibility]`).click();
    cy.findByLabelText(/password/i).invoke(`attr`, `type`).should(`eq`, `password`);
  });
})

function fillOutForm(creds) {
  cy.findByLabelText(/username/i).type(creds.username);
  cy.findByLabelText(/password/i).type(creds.password, { log: false });
}
