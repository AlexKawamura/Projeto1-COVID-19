<!DOCTYPE html>
<html>
  <head>
    <title>COVID-19: Search</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="icon" href="assets/icons/coronavirus.png">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body> 
    <div>
        <h1 class="titulo">COVID-19</h1>
    </div>
    <hr class="separador">

      <label class="selectcountry">Choose a country: </label>
      <select class="countrybusca">
        
      </select>
      <label class="selectstatus">Choose a status: </label>
      <select class="statusbusca">
        <option value="confirmed">Confirmed</option>
        <option value="deaths">Deaths</option>
        <option value="recovered">Recovered</option>
      </select>
      <button class="botaobusca">Search</button>

      <div class="pesquisa">
        <table class="tabela">
        <caption class="legendatabela">Results</caption>
            <thead class="cabecalho">
            <tr>
                <th scope="col">Country</th>
                <th scope="col">Date</th>
                <th scope="col">Cases</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
            
            </tbody>
        </table>
    </div>
  </body>
</html>
<script src="javascript/index.js"></script>
