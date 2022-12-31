describe("When testing the admin page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("admin").click();
    cy.url().should("contain", "/admin");
  });

  it("should fill new movie form from the admin page", () => {
    cy.contains("button", "Add a new Movie").click();
    cy.contains("Add a New Movie");

    cy.url().should("contain", "/admin");

    cy.get("input[name=name]").type("Cypress test");
    cy.get("input[name=synopsis]").type("This is the movie synopsis");
    cy.get("input[name=genre]").type("adventure");
    cy.get("input[name=releaseDate]").clear().type("1999");
    cy.get("input[name=movieUrl]").clear().type("1999");
    cy.get("input[name=coverImage]").type("Test Image URL");
  });

});
