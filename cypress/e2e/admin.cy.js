describe("When testing the admin page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("admin").click();
    cy.url().should("contain", "/admin");
  });

  it("should add a new movie form from the admin page", () => {
    cy.contains("button", "Add a new Movie").click();

    cy.fixture("movies").then((movies) => {
      const movie = movies[0];

      cy.get("input[name=name]").type(movie.name);
      cy.get("input[name=synopsis]").type(movie.synopsis);
      cy.get("input[name=genre]").type(movie.genre);
      cy.get("input[name=releaseDate]").clear().type(movie.releaseDate);
      cy.get("input[name=movieUrl]").clear().type(movie.movieUrl);
      cy.get("input[name=coverImage]").type(movie.coverImage);
    });
  });
});
