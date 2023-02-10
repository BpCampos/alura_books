function aplicaDesconto(livros) {
    const desconto = 0.1
    livrosDesconto = livros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })

    return livrosDesconto
}