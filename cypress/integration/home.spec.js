

describe('home page', ()=>{
    it('app deve estar online', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') /* page-home é o elemento avô, main é o pai, e h1 o filho que queremos
        acessar*/
    })
})