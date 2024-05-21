Claro! Vou fornecer um README mais completo para o frontend, incluindo mais detalhes sobre a configuração e estrutura do projeto.

```markdown
# Frontend do Gerenciamento de Pessoas - (Athenas Test)

Este projeto é a interface frontend de uma aplicação de gerenciamento de pessoas, utilizando Angular.

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

## Tecnologias Utilizadas

- Angular
- HTML
- CSS
- TypeScript

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

## Pré-requisitos

- Node.js (v14.15.0 ou superior)
- Angular CLI (v15.0.0 ou superior)

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/Callak95/Athenas_Front.git
   cd athenas_frontend
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   ng serve
   ```

2. Abra seu navegador e acesse [http://localhost:4200](http://localhost:4200).

## Estrutura do Projeto

- **app.component.html**: Estrutura básica do layout da aplicação.
- **pessoa.component.html**: Formulário e tabela para gerenciar pessoas.
- **pessoa.component.ts**: Lógica de negócios e comunicação com o serviço backend.
- **pessoa.service.ts**: Serviço responsável pelas requisições HTTP para o backend.
- **pessoa.model.ts**: Modelo que define a estrutura de dados da Pessoa.
- **app.module.ts**: Módulo principal do aplicativo Angular.
- **app-routing.module.ts**: Módulo de roteamento do aplicativo.

## Validações e Mensagens

- O formulário valida os campos para garantir que nenhum campo esteja vazio.
- Não é permitido inserir valores negativos nos campos de peso e altura.
- Não são permitidos caracteres especiais nos campos.
- O sistema verifica duplicações antes de adicionar uma nova pessoa.

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

## Validações e Mensagens

- O formulário valida os campos para garantir que nenhum campo esteja vazio.
- Não é permitido inserir valores negativos nos campos de peso e altura.
- Não são permitidos caracteres especiais nos campos.
- O sistema verifica duplicações antes de adicionar uma nova pessoa.

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
