// Exemplo de dados dos produtos
const produtos = [
    { id: 1, nome: 'Camisa', preco: 50.00, quantidade: 100 },
    { id: 2, nome: 'Calça', preco: 80.00, quantidade: 50 },
    { id: 3, nome: 'Tênis', preco: 120.00, quantidade: 20 },
    { id: 4, nome: 'Boné', preco: 30.00, quantidade: 80 },
    { id: 5, nome: 'Meia', preco: 10.00, quantidade: 200 }
  ];
  
  // Função para gerar o relatório de produtos
  function gerarRelatorio(produtos) {
    // Cria uma tabela HTML para o relatório
    let table = '<table>';
    table += '<thead><tr><th>ID</th><th>Nome</th><th>Preço</th><th>Quantidade</th><th>Valor Total</th></tr></thead>';
    table += '<tbody>';
  
    // Loop pelos produtos para adicionar as linhas da tabela
    let totalValor = 0;
    for (let produto of produtos) {
      let valorTotal = produto.preco * produto.quantidade;
      totalValor += valorTotal;
      table += `<tr><td>${produto.id}</td><td>${produto.nome}</td><td>${produto.preco}</td><td>${produto.quantidade}</td><td>${valorTotal.toFixed(2)}</td></tr>`;
    }
  
    // Adiciona a linha com o valor total
    table += `<tr><td colspan="4"><strong>Total</strong></td><td>${totalValor.toFixed(2)}</td></tr>`;
  
    // Fecha a tabela HTML
    table += '</tbody></table>';
  
    // Retorna o HTML da tabela
    return table;
  }
  
  // Exibe o relatório na página
  
  
  document.addEventListener('click', (e)=>{
     const el = e.target;
     if (el.classList.contains('produtos')) {
        document.getElementById('tabela-prod').innerHTML = gerarRelatorio(produtos);

     }
       
  });