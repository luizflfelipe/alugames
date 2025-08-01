function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        confirm('Tem certeza que deseja devolver este jogo?');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        confirm('Tem certeza que deseja alugar este jogo?');
    }quatidadeDeJogosAlugados();
}
function quatidadeDeJogosAlugados() {
    // Seleciona todos os jogos alugados
    let jogosALugados = document.querySelectorAll('.dashboard__item__img--rented'); 
    let quantidade = jogosALugados.length; // Conta a quantidade de jogos alugados
    console.log(`Quantidade de jogos alugados: ${quantidade}`);
    document.querySelector('h1').textContent = `Jogos Alugados: ${quantidade}`;
    if (quantidade == 0){
        document.querySelector('h1').textContent = 'Aluguel de boardgames'; //Se não houver jogos alugados, exibe mensagem padrão;
    }
}