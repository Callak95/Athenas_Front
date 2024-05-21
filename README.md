# Sistema de Gerenciamento de Pessoas - Frontend (Athenas Test)

Este projeto é o frontend de um sistema de gerenciamento de pessoas desenvolvido utilizando Angular. Ele fornece uma interface de usuário para interagir com a API do backend e realizar operações CRUD (Create, Read, Update, Delete) em um banco de dados de pessoas.

## Tecnologias Utilizadas

- Angular 13
- TypeScript
- HTML5
- CSS3

## Requisitos

- Node.js 14 ou superior
- Angular CLI

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/athenas_frontend.git
   cd athenas_frontend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

## Configuração

1. **Configuração do Ambiente:**

   Certifique-se de que a URL da API do backend está corretamente configurada no arquivo `environment.ts`.

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://127.0.0.1:8000/api'
   };
   ```

## Execução

1. **Inicie o servidor de desenvolvimento:**

   ```bash
   ng serve
   ```

   O servidor estará disponível em [http://localhost:4200](http://localhost:4200).

## Estrutura do Projeto

- `src/` - Diretório principal do projeto Angular.
- `app/` - Diretório que contém os componentes, serviços e módulos da aplicação.

## Arquivos Importantes

- `app.module.ts` - Módulo principal da aplicação.
- `app.component.ts` - Componente raiz da aplicação.
- `pessoa/` - Diretório que contém os componentes e serviços relacionados a pessoas.

## Componentes Principais

- `PessoaListComponent` - Lista todas as pessoas.
- `PessoaDetailComponent` - Exibe os detalhes de uma pessoa específica.
- `PessoaFormComponent` - Formulário para adicionar ou editar uma pessoa.

## Serviços

- `PessoaService` - Serviço que realiza as chamadas HTTP para a API do backend.

## Exemplo de Utilização

### Listar Pessoas

O componente `PessoaListComponent` faz uma chamada para `PessoaService` para listar todas as pessoas.

### Adicionar Pessoa

O componente `PessoaFormComponent` utiliza `PessoaService` para enviar uma requisição POST para adicionar uma nova pessoa.

### Atualizar Pessoa

O componente `PessoaFormComponent` utiliza `PessoaService` para enviar uma requisição PUT para atualizar os dados de uma pessoa existente.

### Deletar Pessoa

O componente `PessoaListComponent` utiliza `PessoaService` para enviar uma requisição DELETE para remover uma pessoa do banco de dados.
