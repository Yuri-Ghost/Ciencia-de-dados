const url = "https://servicodados.ibge.gov.br/api/v3/agregados/1969/periodos/2000/variaveis/93%7C1000093?localidades=N1[all]&classificacao=1[0]%7C133[all]

async function visualizarDados(){const res = await fetch(url)}

const dados = await res.json()
console.log (dados)
}

visualizarDados()