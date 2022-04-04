let prato;
let bebida;
let sobremesa;
let valorPrato;

function selecionarPrato(prato) {
  

  const selecaoPrato = document.querySelector('.selecaoPrato') 
  const pratoSelecionado = document.querySelector("."  + prato)
  


  if (selecaoPrato !== null) {
    selecaoPrato.classList.remove('selecaoPrato') &&
    pratoSelecionado.classList.add("selecaoPrato")
  }
    pratoSelecionado.classList.toggle('selecaoPrato')

    atualizarBotao()
}

function selecionarBebida(bebida) {
  

  const selecaoBebida = document.querySelector('.selecaoBebida') 
  const bebidaSelecionado = document.querySelector("."  + bebida)
  


  if (selecaoBebida !== null) {
    selecaoBebida.classList.remove('selecaoBebida') &&
    bebidaSelecionado.classList.add("selecaoBebida")
  }
  bebidaSelecionado.classList.toggle('selecaoBebida')

  atualizarBotao()
}

function selecionarSobremesa(sobremesa) {
  

  const selecaoSobremesa = document.querySelector('.selecaoSobremesa') 
  const sobremesaSelecionado = document.querySelector("."  + sobremesa)
  


  if (selecaoSobremesa !== null) {
    selecaoSobremesa.classList.remove('selecaoSobremesa') &&
    sobremesaSelecionado.classList.add("selecaoSobremesa")
  }
  sobremesaSelecionado.classList.add('selecaoSobremesa')

  
  atualizarBotao ()
}

function atualizarBotao () {
  
 

  const botao = document.querySelector("button")
  const selecaoBebida = document.querySelector('.selecaoBebida')
  const selecaoSobremesa = document.querySelector('.selecaoSobremesa')
  const selecaoPrato = document.querySelector('.selecaoPrato')

  if (selecaoBebida && selecaoSobremesa && selecaoPrato !== null) {
    botao.classList.add("botaoVerde")
    botao.innerHTML = "Fechar pedido"
    
  } 
}