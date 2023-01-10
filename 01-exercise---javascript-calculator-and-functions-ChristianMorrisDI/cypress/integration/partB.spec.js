describe("Part B - Calculator functions", () => {
  it("should add two numbers together", () => {
    cy.visit("http://localhost:5000");

    cy.get('[value="4"]')
      .click()
      .then(() => {
        return cy.get('[value="+"]');
      })
      .click()
      .then(() => {
        return cy.get('[value="2"]');
      })
      .click()
      .then(() => {
        return cy.get('.equal-sign');
      })
      .click()
      .then(() => {
        cy.get(".calculator-screen").invoke('val').should('eq', '6');
      })
  });

  it("should multiply two numbers together", () => {
    cy.visit("http://localhost:5000");

    cy.get('[value="4"]')
      .click()
      .then(() => {
        return cy.get('[value="*"]');
      })
      .click()
      .then(() => {
        return cy.get('[value="2"]');
      })
      .click()
      .then(() => {
        return cy.get('.equal-sign');
      })
      .click()
      .then(() => {
        cy.get(".calculator-screen").invoke('val').should('eq', '8');
      })
  });

  it("should subtract one number from another number", () => {
    cy.visit("http://localhost:5000");

    cy.get('[value="4"]')
      .click()
      .then(() => {
        return cy.get('[value="-"]');
      })
      .click()
      .then(() => {
        return cy.get('[value="2"]');
      })
      .click()
      .then(() => {
        return cy.get('.equal-sign');
      })
      .click()
      .then(() => {
        cy.get(".calculator-screen").invoke('val').should('eq', '2');
      })
  });

  it("should divide two numbers", () => {
    cy.visit("http://localhost:5000");

    cy.get('[value="4"]')
      .click()
      .then(() => {
        return cy.get('[value="/"]');
      })
      .click()
      .then(() => {
        return cy.get('[value="2"]');
      })
      .click()
      .then(() => {
        return cy.get('.equal-sign');
      })
      .click()
      .then(() => {
        cy.get(".calculator-screen").invoke('val').should('eq', '2');
      })
  });
});
