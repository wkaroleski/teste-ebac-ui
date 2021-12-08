/// <reference types="cypress" />

describe('Funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('Minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
         
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
       
    });
});