class link{
    clickonlink(linktext)
      {
          cy.contains(linktext).click()
          
      }
  }
  export default link