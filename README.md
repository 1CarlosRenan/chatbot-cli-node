# Chatbot de Clima

Um pequeno chatbot de terminal feito em Node.js que permite ao usuário consultar informações de clima e coordenadas de uma cidade.

## Funcionalidades

- Menu interativo no terminal
- Consulta de coordenadas geográficas usando a API **Nominatim** (OpenStreetMap)
- Consulta de temperatura atual usando a API **Open-Meteo**
- Logs de operações no console
- Modularizado em estados para fácil manutenção

## Pré-requisitos

- Node.js 18 ou superior
- Ter acesso à internet (para consultar as APIs)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/1CarlosRenan/chatbot-cli-node
cd chatbot-cli-node
```

2. Dependências:

```bash
npm install
```

Passo opcional, pois apenas o Jest é utilizado como dependência para rodar um único teste.

3. Certifique-se de que seu package.json tenha:

```bash
{
  "type": "module"
}
```

## Como executar
No terminal, execute:

```bash
npm start
```

O chatbot irá iniciar e mostrar o menu de opções.

## Estrutura de Pastas

```bash
/states        → Estados da aplicação (menu, consulta, saída)
/services      → Serviços externos (consulta de APIs)
/utils         → Utilitários (input do usuário, logger)
/test          → Testes unitários
index.js       → Ponto de entrada da aplicação
```

## APIs Utilizadas

[Nominatim](https://nominatim.org/)

[Open-Meteo](https://open-meteo.com/)