// Adiciona evento de click no botão de Busca
window.addEventListener('load', listaGET);

// Realiza a requisicão do tipo GET
function listaGET() {
  
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.covid19api.com/summary', true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      // Chama funcão para construir tabela
        buildTable(JSON.parse(request.responseText));
    }
  };
  request.send();
}

// Constroi a tabela
function buildTable(lista) {
    console.log(lista['Countries']);
  lista['Countries'].forEach(element => {
    // Inicializa variáveis
    
    var tbody = document.querySelector('tbody');
    var tr = document.createElement('tr');
    var tdCountry = document.createElement('td');
    var tdTotalConfirmed = document.createElement('td');
    var tdTotalDeaths = document.createElement('td');
    var tdTotalRecovered = document.createElement('td');

    // Preenche variáveis
    tdCountry.innerHTML = element.Country;
    tdTotalConfirmed.innerHTML = element.TotalConfirmed;
    tdTotalDeaths.innerHTML = element.TotalDeaths;
    tdTotalRecovered.innerHTML = element.TotalRecovered;

    // Adiciona variáveis na tabela
    tr.appendChild(tdCountry);
    tr.appendChild(tdTotalConfirmed);
    tr.appendChild(tdTotalDeaths);
    tr.appendChild(tdTotalRecovered);
    tbody.appendChild(tr);
  });
}