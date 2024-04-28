/// <reference types="cypress" />
describe("to do test", () => {
    it("first test", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("#username").type("Valera");
      cy.get("#password").type("123");
      cy.get('button[type=submit]').click();
      cy.get('div#flash.flash.error').should('have.text', '\n            Your username is invalid!\n            ×\n          ')
    });
  });