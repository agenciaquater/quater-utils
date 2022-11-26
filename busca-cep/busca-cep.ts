/*
  Este é um exemplo de como relizar a busca de um cep através do ViaCEP
*/

export interface ViaCEP {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

async function buscaCep (cep: string) {
  const address: ViaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .catch(error => {
    if (error) {
      return error
    }
  }) 
  
  return address 
}