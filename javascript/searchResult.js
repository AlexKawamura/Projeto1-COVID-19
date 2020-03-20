// Adiciona evento de click no botão de Busca
document.querySelector('.botaobusca').addEventListener('click', listaGET);

// Realiza a requisicão do tipo GET
function listaGET() {
  let country = document.querySelector('.countrybusca').value;
  let status = document.querySelector('.statusbusca').value;

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.covid19api.com/total/country/'+country+'/status/'+status, true);
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
  lista.forEach(element => {
  // Inicializa variáveis
  var new_tbody = document.querySelector('tbody');
  var tr = document.createElement('tr');
  var tdCountry = document.createElement('td');
  var tdDate = document.createElement('td');
  var tdCases = document.createElement('td');
  var tdStatus = document.createElement('td');

  // Preenche variáveis
  tdCountry.innerHTML = element.Country;
  tdDate.innerHTML = element.Date;
  tdCases.innerHTML = element.Cases;
  tdStatus.innerHTML = element.Status;

  // Adiciona variáveis na tabela
  tr.appendChild(tdCountry);
  tr.appendChild(tdDate);
  tr.appendChild(tdCases);
  tr.appendChild(tdStatus);
  new_tbody.appendChild(tr);
  });
}


