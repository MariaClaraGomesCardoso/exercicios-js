// ========================================
// Aula 08 — Default Export
// ========================================
// Implemente a função e exporte com "export default".
export default function formatarNome(nome) {
   const minusculo = nome.toLowerCase()
   const primeiraLetra = minusculo.charAt(0).toUpperCase()
   const restante = minusculo.slice(1)
   return primeiraLetra + restante
  // escreva seu código aqui
}
