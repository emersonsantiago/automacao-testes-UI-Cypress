/// <reference types="cypress" />

context('Funcionalidade login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')        
    });

    afterEach(() => {
        cy.screenshot()
    });

it('Deve fazer login com sucesso', () =>{ 
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
})

it('Deve exibir uma mensagem de erro ao inserir usuário e/ou senha inválidos', () =>{
    cy.get('#username').type('alunoebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
})


})