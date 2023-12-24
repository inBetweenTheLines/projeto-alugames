
let numeroDeJogosAlugados = 0;

function alterarStatus(idDoItem)
{
    if(verificarEstadoDoItem(idDoItem))
    {
        definirEstadoDoItem(idDoItem, 'dashboard__item__img dashboard__item__img--rented', 'dashboard__item__button dashboard__item__button--return', 'Devolver');
        verificarNumeroDeJogosAlugados(idDoItem); 
    }
    else
    {
        confirmarDevolucao(idDoItem); 
    }
}

function verificarEstadoDoItem(idDoItem)
{
    return 'dashboard__item__img' == document.getElementById(`capa-${idDoItem}`).getAttribute('class') && 'dashboard__item__button' == document.getElementById(`botao-${idDoItem}`).getAttribute('class') && 'Alugar' == document.getElementById(`botao-${idDoItem}`).textContent;
}

function definirEstadoDoItem(idDoItem, estadoDaCapa, estadoDoBotao, textoDoBotao)
{
    document.getElementById(`capa-${idDoItem}`).setAttribute('class', estadoDaCapa);
    document.getElementById(`botao-${idDoItem}`).setAttribute('class', estadoDoBotao);
    document.getElementById(`botao-${idDoItem}`).textContent = textoDoBotao;
}

function verificarNumeroDeJogosAlugados(idDoItem) 
{
    if (!verificarEstadoDoItem(idDoItem))
    {
        numeroDeJogosAlugados = numeroDeJogosAlugados + 1;
    }
    else
    {
        numeroDeJogosAlugados = numeroDeJogosAlugados - 1;
    }
    console.log('Jogos alugados: ', numeroDeJogosAlugados);
}

function confirmarDevolucao(idDoItem)
{
    if (confirm('Deseja devolver o jogo?'))
    {
        definirEstadoDoItem(idDoItem, 'dashboard__item__img', 'dashboard__item__button', 'Alugar');
        verificarNumeroDeJogosAlugados(idDoItem); 
    }
    else
    {
        alert('Devolução cancelada.');
    }
}
