class Validation{
    url_login(){
      cy.visit('https://practicesoftwaretesting.com/')
    }
    title(){
      cy.title().should('eq','Practice Software Testing - Toolshop - v5.0');
  
    }
    img(){
      cy.get('[alt="Banner"]').should('be.visible');
    }
    price(){
      cy.contains(' Price Range').should('be.visible');
    }
  
  }
  export default Validation;