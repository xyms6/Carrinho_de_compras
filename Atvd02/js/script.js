// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar um item ao carrinho
function adicionarItem(id, nome, preco) {
    // Verifica se o item já está no carrinho
    let item = carrinho.find(produto => produto.id === id);
    if (item) {
        item.quantidade += 1; // Se já existe, apenas aumenta a quantidade
    } else {
        carrinho.push({ id, nome, preco, quantidade: 1 }); // Se não, adiciona novo item
    }
    atualizarCarrinho(); // Atualiza a tabela
}

// Função para remover um item do carrinho
function removerItem(id) {
    carrinho = carrinho.filter(produto => produto.id !== id);
    atualizarCarrinho(); // Atualiza a tabela
}

// Função para atualizar a quantidade de um item
function atualizarQuantidade(id, quantidade) {
    let item = carrinho.find(produto => produto.id === id);
    if (item && quantidade > 0) {
        item.quantidade = quantidade;
    } else {
        removerItem(id); // Se a quantidade for zero, remove o item
    }
    atualizarCarrinho(); // Atualiza a tabela
}

// Função para calcular o total do carrinho
function calcularTotal() {
    return carrinho.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
}

// Função para atualizar a tabela do carrinho
function atualizarCarrinho() {
    let tabela = document.getElementById("carrinho");
    tabela.innerHTML = ""; // Limpa a tabela antes de atualizar
    
    carrinho.forEach(produto => {
        let linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>R$${produto.preco}</td>
            <td><input type='number' value='${produto.quantidade}' min='1' onchange='atualizarQuantidade(${produto.id}, this.value)'></td>
            <td>R$${produto.preco * produto.quantidade}</td>
            <td><button onclick='removerItem(${produto.id})'>Remover</button></td>
        `;
        tabela.appendChild(linha);
    });
    document.getElementById("total").textContent = calcularTotal();
}
