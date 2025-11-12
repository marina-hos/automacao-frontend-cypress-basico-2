// Comando para abrir a calculadora
Cypress.Commands.add('abrirCalculadora', () => {
  cy.visit('/BasicCalculator')
})

// Comando para preencher os campos e realizar uma operação
Cypress.Commands.add('calcular', (n1, n2, operacao) => {
  cy.get('#number1Field').clear().type(n1)
  cy.wait(200)
  cy.get('#number2Field').clear().type(n2)
  cy.wait(200)
  cy.get('#selectOperationDropdown').select(operacao)
  cy.wait(200)
  cy.get('#calculateButton').click()
  cy.wait(200)
})

// Comando para verificar o resultado
Cypress.Commands.add('verificarResultado', (valorEsperado) => {
  cy.get('#numberAnswerField').should('have.value', valorEsperado)
})
