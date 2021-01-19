describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("should display the title of the website, a form, buttons, and cards", () => {
    cy.contains("Burrito Builder")
    cy.get('input')
    cy.get([name="beans"])
    cy.get('button').contains('Submit Order')
    cy.get('section > :nth-child(3)')
  })

  it("should not build a card when no ingredients are selected", () => {
    cy.get('input').type("Joe")

    cy.should('not.contain', 'Submit Order')
  })

  it("should not build a card when no name has been entered", () => {
    cy.get('button').contains('beans').click()

    cy.should('not.contain', 'Submit Order')
  })

  it("should submit a new order on submit when form is properly filled", () => {
    cy.get('button').contains('beans').click()
    cy.get('input').type("Will")

    cy.get('.submit-button').click()
  })

})