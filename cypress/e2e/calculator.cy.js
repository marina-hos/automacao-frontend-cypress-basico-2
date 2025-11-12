// Este é o arquivo principal de testes (spec file).
// Ele usa os comandos personalizados e os dados do fixture.

describe('Calculadora TestSheepNZ', () => {

// beforeEach é executado antes de cada teste (it)
  beforeEach(() => {
// Carrega o arquivo de dados calculadoraData.json
    cy.fixture('calculatorData').as('dados')

// Abre a calculadora usando o comando customizado
    cy.abrirCalculadora()
  })

  it('Deve realizar uma soma corretamente', function() {
  // Acessa os dados da soma a partir do fixture
    const soma = this.dados.soma

  // Usa o comando customizado para calcular
    cy.calcular(soma.numero1, soma.numero2, soma.operacao)

  // Verifica o resultado esperado
    cy.verificarResultado(soma.resultado)
  })

  it('Deve realizar uma subtração corretamente', function() {
    const sub = this.dados.subtracao
    cy.calcular(sub.numero1, sub.numero2, sub.operacao)
    cy.verificarResultado(sub.resultado)
  })

  it('Deve realizar uma multiplicação corretamente', function() {
    const mult = this.dados.multiplicacao
    cy.calcular(mult.numero1, mult.numero2, mult.operacao)
    cy.verificarResultado(mult.resultado)
  })

  it('Deve realizar uma divisão corretamente', function() {
    const div = this.dados.divisao
    cy.calcular(div.numero1, div.numero2, div.operacao)
    cy.verificarResultado(div.resultado)
  })
})
