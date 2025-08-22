export const getById = (
  id: string,
  { attr = "data-testid", timeout = 6000 } = {}
) => {
  cy.get(`[${attr}='${id}']`, { timeout });
};
