describe("Nav Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows the cart link and navigates to cart", () => {
    cy.getById("nav-cart-link").should("exist").click();
    cy.url().should("include", "/cart");
  });

  it("shows the logo, search", () => {
    cy.getById("nav-logo").should("exist");
    cy.getById("nav-search").should("exist");
    cy.getById("nav-menu").should("exist").contains("Home");
  });
});
