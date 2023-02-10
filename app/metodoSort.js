const btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdernarPorPreco.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco() {
    const livrosOrdernados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdernados)
}