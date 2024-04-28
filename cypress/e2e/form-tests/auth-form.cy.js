/// <reference types="cypress" />
describe("to do test", () => {
  it("first test", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("tomsmith");
    cy.get('button[type=submit]').click();
    cy.get('div#flash.error').should('have.text', "\n            Your password is invalid!\n            ×\n          ")
  });
});


