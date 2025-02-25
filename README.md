# Carrinho de Compras

Este projeto simula um carrinho de compras onde é possível adicionar, remover e atualizar itens. Abaixo está uma explicação simples de como o código funciona.

## Como Funciona

### 1. **HTML**
- O HTML contém a estrutura básica da página, incluindo:
  - Título do carrinho de compras.
  - Botões para adicionar diferentes itens ao carrinho (como "Mouse", "Teclado" e "Monitor").
  - Uma tabela onde os itens do carrinho serão exibidos com nome, preço, quantidade e total.
  - A área para exibir o total final do carrinho.

### 2. **JavaScript**

- **Adicionar Itens:**
  Quando você clica nos botões (por exemplo, "Adicionar Mouse"), o JavaScript adiciona o item ao carrinho, verificando se ele já está lá. Se já existir, apenas aumenta a quantidade; se não, o item é adicionado.

- **Remover Itens:**
  Cada item na tabela tem um botão "Remover". Quando você clica nesse botão, o item é removido do carrinho.

- **Atualizar Quantidade:**
  Você pode atualizar a quantidade de qualquer item na tabela. Se a quantidade for 0, o item é removido automaticamente.

- **Calcular o Total:**
  O total do carrinho é calculado automaticamente, somando o valor de todos os itens, multiplicado pela quantidade de cada um.

### 3. **Tabela**
A tabela exibe:
- Nome do produto
- Preço do produto
- Campo para atualizar a quantidade
- Total de cada item (preço * quantidade)
- Botão para remover o item

---

O código básico permite interagir com um carrinho de compras simples, mas funcional. É possível adicionar, remover e alterar a quantidade de produtos enquanto o total é atualizado automaticamente.
