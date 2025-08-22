describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows the 3 cards", () => {
    cy.getById("hero-banner-1")
      .should("exist")
      .contains("Fresh & Healthy Organic Food");
    cy.getById("hero-banner-2").should("exist").contains("Summer Sale");
    cy.getById("hero-banner-3")
      .should("exist")
      .contains("Special Products Deal of the Month");
  });

  it("renders features list and confirms items count", () => {
    cy.getById("features-section").should("exist");
    cy.getById("features-section")
      .find(".feature-item")
      .should("have.length", 4);
  });

  it("renders popular categories and confirms items count", () => {
    cy.getById("popular-categories-title")
      .should("exist")
      .contains("Popular Categories");
    cy.getById("popular-categories")
      .find(".category-item")
      .should("have.length", 12);
  });

  it("renders popular products and confirms items count", () => {
    cy.getById("popular-products-title")
      .should("exist")
      .contains("Popular Products");
    cy.getById("popular-products")
      .find(".product-item")
      .should("have.length", 10);
  });

  it("renders promo section and confirms items count", () => {
    cy.getById("best-deals")
      .should("exist")
      .find(".promo-item")
      .should("have.length", 3);
  });
});
