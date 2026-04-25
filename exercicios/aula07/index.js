// ========================================
// Aula 07 — Async/Await e JSON
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula07
// Não mexa no arquivo index.test.js.

// Exercício 1 — objetoParaJSON
export function objetoParaJSON(objeto) {
  const objetoParaJSON = JSON.stringify(objeto);
  return objetoParaJSON
  // escreva seu código aqui
}

// Exercício 2 — jsonParaObjeto
export function jsonParaObjeto(texto) {
  const objeto = JSON.parse(texto);
  return objeto
  
}

// Exercício 3 — clonarObjeto
export function clonarObjeto(objeto) {
  const original = JSON.stringify(objeto);
  const copia = JSON.parse(original);
  return copia
  // escreva seu código aqui
}

// ──────────────────────────────────────────────────
// Função auxiliar — simula uma consulta ao banco que demora 100ms
// NÃO MEXA nesta função — ela já está pronta
// ──────────────────────────────────────────────────
function simularConsulta(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: `Aluno ${id}`, cidade: 'Salinas' })
    }, 100)
  })
}

// Exercício 4 — buscarDados
export async function buscarDados(id) {
  const buscarDados = await simularConsulta(id);
  return buscarDados
  // escreva seu código aqui
}

// Exercício 5 — dividirSeguro
export async function dividirSeguro(a, b) {
  try{
      if (b === 0){
        throw new Error('Divisão por zero');
        
      }
      return a/b;
  } catch (erro) {
    console.error(erro.message);
    throw erro;
  }
  // escreva seu código aqui
}
