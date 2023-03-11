$(function() {
    /* DataSources */
    var codigosBarra = [
      { title: '7891031409404' },
      { title: '7891031406014' }
    ];
  
    var produtos = [
      { title: 'Ketchup Hemmer Tradicional 320g' },
      { title: 'Mostarda Escura Hemmer Tipo Holandesa 200g' }
    ];
  
    var categorias = [
      { title: 'Condimento' },
      { title: 'Hamburguer' }
    ];
    /* FIM DataSources */
  
    /* Modais */
    $(".btnExcluir")
      .click(function(){
      $("#modalConfirmacaoExclusao")
        .modal('show');
    });
  
    $(".btnCadastro")
      .click(function(){
      $("#modalCadastro")
        .modal('show');
    });
    /* FIM Modais */
  
    /* Filtros */
    $('#filtroCodigoBarra')
      .search({
      source: codigosBarra
    })
  
    $('#filtroProduto')
      .search({
      source: produtos
    })
  
    $('#filtroCategorias')
      .search({
      source: categorias
    })
    /* FIM Filtros */
  
    /* DropDowns */
    $('#dropdownCategorias')
      .dropdown({
      allowAdditions: true
    });
  
    $('#dropdownMarcas')
      .dropdown({
      allowAdditions: true
    });
  
    $('#dropdownMedida')
      .dropdown();
    /* FIM DropDowns */
  });
  