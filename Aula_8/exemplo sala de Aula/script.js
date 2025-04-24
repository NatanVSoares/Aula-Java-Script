const cepGuanabara = {
  cep: '31310-040',
  logradouro: 'Avenida Expedicionário Benvindo Belém de Lima',
  complemento: '',
  unidade: '',
  bairro: 'São Luiz',
  localidade: 'Belo Horizonte',
  uf: 'MG',
  estado: 'Minas Gerais',
  regiao: 'Sudeste',
  ibge: '3106200',
  gia: '',
  ddd: '31',
  siafi: '4123'
}

const cepDigitado = document.getElementById('cep')
cepDigitado.value = cepGuanabara.cep 

const logradouroDigitado = document.getElementById('logradouro')
logradouroDigitado.value = cepGuanabara.logradouro

const complementoDigitado = document.getElementById('complemento')
complementoDigitado.value = cepGuanabara.complemento


const unidadeDigitado= document.getElementById('unidade')
unidadeDigitado.value = cepGuanabara.unidade

const bairroDigitado= document.getElementById('bairro')
bairroDigitado.value = cepGuanabara.bairro

const localidadeDigitado = document.getElementById('localidade')
localidadeDigitado.value = cepGuanabara.localidade

const ufDigitado = document.getElementById('uf')
ufDigitado.value = cepGuanabara.uf


const estadoDigitado = document.getElementById('estado')
estadoDigitado.value = cepGuanabara.estado






