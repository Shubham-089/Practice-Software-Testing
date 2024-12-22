///<reference types="cypress"/>
class Login{
    url_login(){
      cy.visit('https://practicesoftwaretesting.com/')
    }
    fillemail() {
      cy.contains('Sign in').click();
      cy.get('#email').type('email');
      cy.get('#password').type('Shubham');
      cy.get('input[type="submit"]').click();
      cy.get('.ForgetPwd')
    }
  }
  export default Login;