import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  Given("There is a list of book available then I get the list of books available", () =>{

    cy.request('POST', 'http://localhost:8080/onpremise/rdbms/mysql/bookstoredb', {

        "query":"select * from book"
        }).then(function(response)
{
// expect(response.body).to.have.property("Msg","successfully added")
expect(response.status).to.eq(201)
})
});
 