async function buscarCidades(){
    try{

    const dddDigitado = document.getElementById('ddd').value
    const urlAPI = `https://brasilapi.com.br/api/ddd/v1/${dddDigitado}`
    if (dddDigitado.length !== 2){
        throw new Error('DDD digitado no formato inválido.')
    }
    const resposta = await fetch(urlAPI)
    const dadosGeral = await resposta.json()
    const cidadesOrdenadas = dadosGeral.cities.sort()

    const divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ''

    divResultado.innerHTML += `<p>Estado:${dadosGeral.state}</p>`
    cidadesOrdenadas.forEach(cidade => {
        divResultado.innerHTML += `
        <li>${cidade}</li>`
        
    });

    } catch (erro){
    console.error("Erro ao buscar Cidades.",erro);
            }
    }