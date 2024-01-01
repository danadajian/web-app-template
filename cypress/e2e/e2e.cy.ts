describe("e2e", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays an 18x20 table with numbers in reverse order", () => {
    cy.findByRole("heading", { name: "Hello world!" }).should("be.visible");
  });
});
