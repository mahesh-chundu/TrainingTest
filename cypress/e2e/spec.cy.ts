describe("empty spec", () => {
  beforeEach("passes", () => {
    cy.visit("https://kitchen.applitools.com/ingredients/iframe");
  });

  it("Verify iframe", () => {
    //cy.get('#the-kitchen-table').its('contentDocument.body').then(cy.wrap)
    // .find('button.ytp-large-play-button').should('be.visible')
    cy.iframe("#youtube-table-cypress")
      .find("button.ytp-large-play-button", { timeout: 60000 })
      .should("be.visible")
      .click();
  });

  it("Verify iframe TEST 2", () => {
    cy.get("#the-kitchen-table").then(($iframe) => {
      const iframeContent = $iframe.contents().find("body");

      cy.wrap(iframeContent).find("#fruits-vegetables");
    });
  });
});
