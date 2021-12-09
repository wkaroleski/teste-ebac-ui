/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereço.page'


describe('Funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('Minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
         
    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
       EnderecoPage.editarEnderecoFaturamento('Fernanda', 'Petry', 'DCA', 'Brasil', 'Rua tamandare', '1313', 'Pelotas', 'Roraima', '54678974', '67943990673', 'fefe@teste.com')
    });
});