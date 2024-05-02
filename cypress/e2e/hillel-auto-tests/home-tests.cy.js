/// <reference types="cypress" />
describe("check social links", () => {
    beforeEach(() => {
      cy.visit("https://qauto.forstudy.space/", {
        auth: {
          username: "guest",
          password: "welcome2qauto",
        },
      });
    });
  
    it("check social link facebook", () => {
      cy.get("a.socials_link")
        .eq(0)
        .invoke("attr", "href")
        .should("contain", "facebook.com");
    })

    it("check social link telegram", () => {
        cy.get("a.socials_link")
          .eq(1)
          .invoke("attr", "href")
          .should("contain", "t.me");
      })
  
    it("check social link youtube", () => {
        cy.get("a.socials_link")
          .eq(2)
          .invoke("attr", "href")
          .should("contain", "youtube.com");
      })

    it("check social link instagram", () => {
        cy.get("a.socials_link")
          .eq(3)
          .invoke("attr", "href")
          .should("contain", "instagram.com");
      })

    it("check social link linkedin", () => {
        cy.get("a.socials_link")
          .eq(4)
          .invoke("attr", "href")
          .should("contain", "linkedin.com");
      })  

    it("check button Sign In functionality", () => {
        cy.get('button.btn.btn-outline-white.header_signin').click()
        cy.get('h4.modal-title').should('have.text', 'Log in');
    })  

    it("check button Sign Up functionality", () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click()
        cy.get('h4.modal-title').should('have.text', 'Registration')
    }) 
  });