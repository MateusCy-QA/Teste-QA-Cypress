///<reference types ="cypres"
describe("teste de QA", () => {
    before(() => {
        cy.visit("https://wj-qa-automation-test.github.io/qa-test/")
    })

    it(" Ex 01 - Clicar nos botoes", () =>{
        cy.get("#btn_one")        
        .click()
       .should('have.css','display','none')
       cy.get('#btn_two')
       .click()
       .should('have.css','display','none')
       cy.get('#btn_link')
       .click()
       .should('have.css','display','none')
    })
    it("Ex 02 - Clicar nos botoes IFRAME BUTTONS", ()=> {
        cy.get('#iframe_panel_body > iframe').then(iframe => {
            const body = iframe.contents().find("body")
            let iframeBody = cy.wrap(body);
            iframeBody.find("#btn_one")
                .click()
                .should('have.css','display','none')

            iframeBody = cy.wrap(body)
            iframeBody.find("#btn_two")
                .click()
                .should('have.css','display','none')

            iframeBody = cy.wrap(body)
            iframeBody.find("#btn_link")
                .click()
                .should('have.css','display','none')
        })
    })
    it("Ex 03 - Clicar,checar,selecioner e validar imagem ", () => {
        cy.get('#first_name').type("Mateus")
        cy.get('#first_name').should('have.value', 'Mateus')

        cy.get('#reset_buttons').click()
        cy.get('#btn_one').click()

        cy.get('#opt_three')
            .click()
            .should('be.checked')

        cy.get('#select_box')
            .select("ExampleTwo")
            .should('have.value','option_two')  

        cy.get('[alt="selenium"]').should('be.visible')  
    })
})
