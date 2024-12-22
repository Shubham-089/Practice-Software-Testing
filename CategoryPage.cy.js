class Categories{
    url_login(){
      cy.visit('https://practicesoftwaretesting.com/')
      cy.wait(5000)
    }
    Categorie(){
      cy.contains(' Categories ').click();
      cy.contains('Hand Tools').should('be.visible')
      cy.contains('Power Tools').should('be.visible')
      cy.contains('Other').should('be.visible')
      cy.contains('Special Tools').should('be.visible')
      
    }
  }
  export default Categories;