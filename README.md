# Lambda para Sistema de Votação

[![Maintenance](https://img.shields.io/badge/Serverless-v2.0-blue.svg)](https://serverless.com/)
[![Maintenance](https://img.shields.io/badge/AWS-Lambda-orange.svg)](https://aws.amazon.com/lambda/)
[![Maintenance](https://img.shields.io/badge/GraphQL-%20-red.svg)](https://graphql.org/)
[![Maintenance](https://img.shields.io/badge/WebSockets-%20-blueviolet.svg)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/your-username/your-repo.svg)](https://github.com/your-username/your-repo/stargazers)

📝 Descrição
---

A aplicação foi desenvolvida como uma função Lambda usando JavaScript na plataforma AWS, seguindo uma arquitetura
Serverless. A abordagem Serverless elimina a necessidade de provisionar e gerenciar servidores, permitindo uma escala
automática e um custo otimizado.

O componente principal da arquitetura é a função Lambda, que atua como o backend da aplicação. A função Lambda é
responsável por processar as solicitações da API GraphQL e executar as operações necessárias, como a criação de
enquetes, listagem de enquetes e votação. O uso da função Lambda permite que a aplicação seja executada de forma
eficiente, respondendo apenas às solicitações necessárias e escalando automaticamente conforme a demanda.

Projeto é construído usando arquitetura Serverless com AWS Lambda, GraphQL para funcionalidade da API e WebSockets para
comunicação em tempo real.


🚀 Status do Projeto
---

🚀 Project Status: In Progress 🚀

💻 Funcionalidades
---

- [x] Listar enquetes
- [x] Criar enquete
- [x] Votar em enquete
- [ ] Editar enquete
- [ ] Excluir enquete
- [ ] Listar votos de enquete

⚡ Tech Stack
---
A lista de tecnologias utilizadas no projeto:

- [Serverless Framework](https://serverless.com/)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [GraphQL](https://graphql.org/)
- [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

📂 Estrutura do Projeto
---
```
├── src
│ ├── index.js
├── resolvers.js
├── schema.js
├── package.json
├── .gitignore
├── serverless.yml
├── socket.js
├── README.md
```
📋 Instalação e Uso
---

Tenha instalado em sua máquina o Node.js versão 14.x ou superior e npm versão 6.x ou superior.

1. Clone o repositório:

```shell
$ git clone https://github.com/caiomarinhodev/my-voting-app.git
```

2. Instale as dependências:

```shell
$ cd my-voting-app
$ npm install
```
```shell
$ serverless config credentials --provider aws --key your-key --secret your-secret
```

Modifique o arquivo serverless.yml com sua configuração AWS e configurações do serviço.

Faça deploy do serviço:

```shell
$ serverless deploy
```

### 🤝 Contributing
Contribuições, issues, e pedidos de novas features são bem-vindos!

### 📝 License
This project is licensed under the MIT License.

### 📬 Contact
 - Caio Marinho
 - Luiz Costa
 - Matheus Beaumord
