describe("File Upload", () => {
  beforeEach("upload", () => {
    cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html");
  });

  it("Verify upload", () => {
    /*   cy.fixture('example.json').then((fileContent)=>{
        cy.get('input[type=file]').attachFile(fileContent,{subjectType:'drag-n-drop'})
      }) */
    cy.get("input[type=file]").attachFile("example.json", {
      subjectType: "drag-n-drop",
    });
  });
});
