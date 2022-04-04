let prato;
let bebida;
let sobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;
let total;


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

function popup (){
 
  const botaoLiberado = document.querySelector('.botaoVerde')
  const selecaoBebida = document.querySelector('.selecaoBebida > h4').innerHTML
  const selecaoSobremesa = document.querySelector('.selecaoSobremesa > h4').innerHTML
  const selecaoPrato = document.querySelector('.selecaoPrato > h4').innerHTML
  const precoBebida = document.querySelector('.selecaoBebida > .preco').innerHTML
  const precoSobremesa = document.querySelector('.selecaoSobremesa > .preco').innerHTML
  const precoPrato = document.querySelector('.selecaoPrato > .preco').innerHTML
  const popupPrato = document.querySelector('.item1')
  const popupBebida = document.querySelector('.item2')
  const popupSobremesa = document.querySelector('.item3')
  const popupPrecoPrato = document.querySelector('.foodPrice')
  const popupPrecoBebida = document.querySelector('.drinkPrice')
  const popupPrecoSobremesa = document.querySelector('.dessertPrice')
  total = document.querySelector('.valorTotal')



  if(botaoLiberado !== null){
  const popup = document.querySelector(".popup-wrapper")
  popup.style.display = "inherit"
  popupPrato.innerHTML = selecaoPrato
  popupPrecoPrato.innerHTML = precoPrato.replace('R$','')
  popupBebida.innerHTML = selecaoBebida
  popupPrecoBebida.innerHTML = precoBebida.replace('R$','')
  popupSobremesa.innerHTML = selecaoSobremesa
  popupPrecoSobremesa.innerHTML = precoSobremesa.replace('R$','')
  let calculo = Number(popupPrecoPrato.innerHTML.replace(',',".")) + Number(popupPrecoBebida.innerHTML.replace(',',".")) + Number(popupPrecoSobremesa.innerHTML.replace(',',"."))
  total.innerHTML = "R$ " + calculo.toFixed(2)
  }



}

function cancelPopup () {

  const popup = document.querySelector(".popup-wrapper")
  popup.style.display = "none"

}

function enviarPedido (){

  const nomeUser = prompt("Qual o seu nome?")
  const endUser = prompt("Qual o seu endereço?")

let mensage = `Olá, gostaria de fazer o pedido:
 - Prato: ${document.querySelector('.selecaoPrato > h4').innerHTML}
 - Bebida: ${document.querySelector('.selecaoBebida > h4').innerHTML}
 - Sobremesa: ${document.querySelector('.selecaoSobremesa > h4').innerHTML}, 
 Total: ${total.innerHTML}
 
 Nome: ${nomeUser}
 Endereço: ${endUser}`


window.open(`http://wa.me/+5516994242447?text=${mensage}` )

}