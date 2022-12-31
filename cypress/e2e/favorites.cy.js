const { Movie } = require("@mui/icons-material");

describe("When testing the favorites page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.skip("should add a movie to favorites", () => {
    cy.contains("button", "Add to Favorite").click();
  });

  it("should watch the movie from favorites", () => {
    cy.contains("favorites").click();
    cy.url().should("contain", "/favorites");
    cy.contains("Name").click();
    cy.contains("button", "Watch Now").click();
  });
});
