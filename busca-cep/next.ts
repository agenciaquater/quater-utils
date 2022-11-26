/*
  Usando a função buscaCep em uma API Route do Nextjs
*/

import { NextApiRequest, NextApiResponse } from "next";

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

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const cep = request.body

  const address: ViaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .catch(error => {
    if (error) {
      response.status(400).json({error: 'Bad Request'})
    }
  }) 
  
  response.status(200).json({address})
}