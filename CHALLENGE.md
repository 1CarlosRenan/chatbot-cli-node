Projeto: Chatbot

## 🎯 Objetivo
Desenvolver um chatbot funcional, com base em uma máquina de estados simples, capaz de interagir com o usuário, coletar informações e consultar APIs públicas externas.

## ✅ Requisitos
1. Criar uma interface para interação com o usuário (pode ser terminal CLI).
2. O chatbot deve ser estruturado como uma máquina de estados simples, com transições baseadas nas respostas do usuário.
3. O bot deve:
  1. Exibir uma mensagem de saudação.

Apresentar um menu interativo.

Permitir a consulta de dados via API pública.
Exemplos de APIs sugeridas:

ViaCEP – Consulta de CEPs

Open-Meteo – Consulta de clima

Manter uma estrutura mínima de projeto, com código limpo e organizado.

Utilizar Node.js.

Disponibilizar o projeto em um repositório público no GitHub.

## 🧭 Fluxo Esperado
O bot inicia com uma mensagem de boas-vindas.

Exibe o menu de opções:

O que você deseja fazer?
[1] Consultar clima
[2] Sair
Com base na escolha, o bot muda de estado:

Opção 1 - Consultar Clima:

Solicita o nome da cidade ao usuário.

Utiliza uma API auxiliar (como Nominatim) para buscar as coordenadas geográficas.

Consulta a temperatura atual na cidade usando a API Open-Meteo.

Exibe as informações no terminal.

Após qualquer operação, retorna ao menu principal.

## 🧠 Critérios de Avaliação
Organização e estrutura do código.

Clareza e controle na transição de estados.

Boas práticas de programação (nomes de variáveis, modularização).

Tratamento adequado de erros e entradas inválidas.

Para vaga pleno: Utilização de ferramentas de observabilidade e monitoramento.