describe("Navigation and Interactions", () => {
  it("loads the home page", () => {
    cy.visit("/");
    cy.contains("Popular Categories");
    cy.contains("Featured Products");
  });

  it("navigates to the cart page", () => {
    cy.visit("/");
    cy.get('a[href="/cart"], [href="/cart"]').first().click({ force: true });
    cy.url().should("include", "/cart");
    cy.contains("My Shopping Cart");
  });

  it("navigates to the listing page", () => {
    cy.visit("/");
    cy.get('a[href="/listing"], [href="/listing"]')
      .first()
      .click({ force: true });
    cy.url().should("include", "/listing");
    cy.contains("Vegetables");
  });

  it("navigates to the checkout page from cart", () => {
    cy.visit("/");
    cy.get('a[href="/checkout"], [href="/checkout"]')
      .first()
      .click({ force: true });
    cy.url().should("include", "/checkout");
    cy.contains("Billing Information");
  });
});
