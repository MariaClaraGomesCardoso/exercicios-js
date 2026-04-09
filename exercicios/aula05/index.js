// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  if (idade >= 18) 
    return "adulto"
  else if (idade >= 12 ) 
    return "adolescente"
  else 
    return "criança"
  
  // escreva seu código aqui
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
   return preco - (percentual * preco /100)
  // escreva seu código aqui
}

// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  if (nota >= 60)
    return "aprovado"
  else if (nota >= 40)
    return "recuperação"
  else 
    return "reprovado"
  // escreva seu código aqui
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  let soma = 0
  for (const num of numeros){
    if (num % 2 === 0){
      soma += num;
    }
  }
  return soma;
  // escreva seu código aqui
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  let soma = 0;
  for (const text of texto){
    if (text === letra){
      soma ++
    }
    
  }
  return soma
  
}
