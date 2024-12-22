import Login from "../../support/Page object/Login.cy";
import link from "../../support/Page object/link.cy";
import Categories from "../../support/Page object/CategoryPage.cy";
import ContactPage from "../../support/Page object/ContactPage.cy";
import Validation from "../../support/Page object/ContentValidation.cy";

describe('',()=>{
  const login1=new Login();
  const Categorie1=new  Categories();
  const Contact1=new ContactPage();
  const Validation1=new Validation();
  const link1=new link();
  it('',()=>{
    login1.url_login();
    login1.fillemail();
  })
  it('',()=>{
    Categorie1.url_login();
    Categorie1.Categorie();
  })
  it('',()=>{
    Categorie1.url_login();
    Categorie1.Categorie();
  })
  it('',()=>{
    Contact1.url_login();
    Contact1. ContactPage();
  })
  it('',()=>{
    Validation1.url_login();
    Validation1. title();
    Validation1. img();
    Validation1. price();
  })

  
})