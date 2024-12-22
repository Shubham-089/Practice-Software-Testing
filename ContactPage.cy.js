class ContactPage{
    url_login(){
      cy.visit('https://practicesoftwaretesting.com/')
      cy.wait(5000)
    }
    ContactPage(){
      cy.contains('Contact').click();
      cy.get('#first_name').type('Shubham');
      cy.get('#last_name').type('Yetonde');
      cy.get('#email').type('shubham@12345');
      cy.get('#subject').type('Cypress');
      cy.get('#message').type('Hey Shubham Yetonde');
      cy.get('[value="Send"]').click();
    }
  }
  export default ContactPage;