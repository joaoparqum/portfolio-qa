/// <reference types="cypress" />

context('Dev Finances Agilizei', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#/');
        cy.get('#data-table tbody tr').should('have.length', 0)
    });    
    
    it('Cadastrar entradas', () => {
        //cy.visit('https://devfinances-agilizei.netlify.app/#/');
        // entender o fluxo manualmente
        // mapear os elementos da tela
        // descrever as interações com o cypress
        // adicionar as asserções que a gente precisa

        //cy.visit('https://devfinance-agilizei.netlify.app/#/');

        //cy.get('#data-table tbody tr').should('have.length', 0)//para ver se a lista inicializa vazia

        cy.get('#transaction .button').click()
        cy.get('#description').type('Salário')
        cy.get('#amount').type(2500)
        cy.get('#date').type('2024-06-10')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1)
        
    });

    // cadastrar saídas
    it('Cadastrar saídas', () => {
        
        //cy.visit('https://devfinance-agilizei.netlify.app/#/');

        //cy.get('#data-table tbody tr').should('have.length', 0)//para ver se a lista inicializa vazia

        cy.get('#transaction .button').click()
        cy.get('#description').type('Presente')
        cy.get('#amount').type(-150)
        cy.get('#date').type('2024-06-10')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1)

    });


    // remover entradas e saídas
});