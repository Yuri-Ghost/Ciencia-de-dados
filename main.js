const url = "https://servicodados.ibge.gov.br/api/v3/agregados/1969/periodos/2000/variaveis/93%7C1000093?localidades=N1[all]&classificacao=1[0]%7C133[all]"

async function visualizarDados(){const res = await fetch(url)

const dados = await res.json()

const tipo_dados = dados[0]['variavel']
console.log(tipo_dados)
const regiao = dados[0]["resultados"]
console.log(regiao)

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos--container__texto')
paragrafo.innerHTML ="Aqui será colocado os dados"
console.log(paragrafo)
const container = document.getElementById('graficos')

container.appendChild(paragrafo)
}

visualizarDados()