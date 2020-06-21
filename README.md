<h1 align="center">
  Challenge GoStack ReactJS 🚀
  <p align="center">
  <img src="https://img.shields.io/badge/tech-front--end-green" />

  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/framework-reactjs-blue" />
  </a>

  <a href="https://github.com/Rocketseat">
    <img src="https://img.shields.io/badge/source-rocketseat-blueviolet" />
  </a>
  </p>
</h1>

Primeiro desafio em [ReactJS](https://pt-br.reactjs.org/ "ReactJS") da [RocketSeat](https://rocketseat.com.br/ "RocketSeat"), passado no bootcamp GoStack 12.
**Frontend** (Web) para a **[API em NodeJS](https://github.com/rafaelsanzio/gostack-nodejs "API em NodeJS")**

A proposta é simples: criar elementos visuais para gerenciar repositórios (Fakes), sendo possível adicionar e remover respositórios e dar likes nos repositórios

## Getting Started ▶️
- **Passo 1**: git clone do projeto gostack-reactjs
```bash
  # Navegando até a pasta do projeto
  $ cd gostack-reactjs

  # Instalando todas as depêndencias necessárias
  $ npm||yarn install

  # Starting o frontend da aplicação
  $ npm||yarn start
```

## Conceitos 📕

### Componentização
 - Permite dividir pedaços da aplicação em diferentes componentes. Utilizado em ocasiões em que iremos utilizar o mesmo componente em diversas parte da aplicação.
 
  ##### Exemplo:
 <p align="center">
 	<img src="https://user-images.githubusercontent.com/18368947/85233441-8d1ebb80-b3dc-11ea-9748-fbf68036a12d.png" />
  </br>
	<strong>Componente Header, recebendo a propriedade title e renderizando de forma dinâmica.</strong>
 </p>
 

### Propriedades

- São informações que podem ser enviadas entre um componente pai (`parent`) para um componente filho (`children`). Podemos utilizar o componente `Header` criado anteriormente, passando uma propriedade de nome `title`. Isso permite utilizar um mesmo componente, mas com diferentes títulos.
- Exemplificado na imagem acima 👆🏽

### Estado e Imutabilidade

- Estados são utilizados para armazenar e manipular valores dentro de componentes. Toda vez que um estado é alterado, o componente é re-renderizado e atualiza o valor na tela imediatamente.
- Para utilizar estados no React, podemos importar um Hook chamado `useState` direto do react. `import React, { useState } from 'react'`.
- Para utilizar o `useState`, devemos iniciá-lo em um array com dois valores. O primeiro, será onde o valor do estado será armazenado e o segundo será uma função utilizada para alterar os valores do estado.
- Isto acontece devido à imutabiliade do React, que proíbe alterações diretas no estado. Sendo assim, é necessário alterar o estado utilizando a função declarada no segundo parâmetro.

  ##### Exemplo:
 <p align="center">
 	<img src="https://user-images.githubusercontent.com/18368947/85233633-2f8b6e80-b3de-11ea-80c3-f9c5d95acf9b.png" />
  </br>
  <strong>Iniciando o estado com array vazio, depois setando com a adição de um project.</strong>
 </p>
  

## Considerações :congratulations:
- Projeto desenvolvido no Bootcamp - GoStack da [RocketSeat](https://rocketseat.com.br/ "RocketSeat")  by:

- <i class="fa fa-github" aria-hidden="true"></i> [Rafael Sanzio - GitHub](https://github.com/rafaelsanzio "Rafael Sanzio")
- <i class="fa fa-linkedin" aria-hidden="true"></i> [Rafael Sanzio - LinkedIn](https://www.linkedin.com/in/rafael-sanzio-012778143/ "Rafael Sanzio")
