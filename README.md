# Sistema de Gerenciamento de Pessoas - Frontend (Athenas Test)

Este projeto é a interface frontend da aplicação de gerenciamento de pessoas, utilizando Angular.

## Tecnologias Utilizadas

- Angular
- HTML
- CSS
- TypeScript

## Requisitos

- Node.js (v14.15.0 ou superior)
- Angular CLI (v15.0.0 ou superior)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Callak95/Athenas_Front.git
   cd athenas_frontend


2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

## Execução

1. **Inicie o servidor de desenvolvimento:**

   ```bash
   ng serve
   ```

   Abra seu navegador e acesse [http://localhost:4200](http://localhost:4200).

## Estrutura do Projeto

- **src/app/**: Diretório principal do aplicativo Angular.
  - **app.component.html**: Estrutura básica do layout da aplicação.
  - **app.component.ts**: Lógica do componente principal.
  - **pessoa/**: Módulo que contém os componentes, serviços e modelos relacionados à entidade Pessoa.
    - **pessoa.component.html**: Formulário e tabela para gerenciar pessoas.
    - **pessoa.component.ts**: Lógica de negócios e comunicação com o serviço backend.
    - **pessoa.service.ts**: Serviço responsável pelas requisições HTTP para o backend.
    - **pessoa.model.ts**: Modelo que define a estrutura de dados da Pessoa.
  - **app.module.ts**: Módulo principal do aplicativo Angular.
  - **app-routing.module.ts**: Módulo de roteamento do aplicativo.
- **styles.css**: Estilos globais da aplicação.

## Funcionalidades

- **Adicionar uma nova pessoa** com os campos: nome, data de nascimento, peso, altura e sexo.
- **Exibir uma lista de pessoas** cadastradas em uma tabela.
- **Editar informações de uma pessoa** existente.
- **Excluir uma pessoa** da lista.
- **Exibir mensagens de sucesso ou erro** para operações de adicionar, editar e excluir.
- **Validações dos Campos**:
  - O formulário valida os campos para garantir que nenhum campo esteja vazio.
  - Não é permitido inserir valores negativos nos campos de peso e altura.
  - Não são permitidos caracteres especiais nos campos.
  - O sistema verifica duplicações antes de adicionar uma nova pessoa.

## Validações e Mensagens

- O formulário valida os campos para garantir que nenhum campo esteja vazio.
- Não é permitido inserir valores negativos nos campos de peso e altura.
- Não são permitidos caracteres especiais nos campos.
- O sistema verifica duplicações antes de adicionar uma nova pessoa.

