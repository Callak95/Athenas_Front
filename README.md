# Frontend do Gerenciamento de Pessoas

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

- **app.component.html**: Estrutura básica do layout da aplicação.
- **pessoa.component.html**: Formulário e tabela para gerenciar pessoas.
- **pessoa.component.ts**: Lógica de negócios e comunicação com o serviço backend.
- **pessoa.service.ts**: Serviço responsável pelas requisições HTTP para o backend.
- **styles.css**: Estilos globais da aplicação.

## Instruções para Rodar o Projeto

Navegue até o diretório do projeto:

```bash
cd athenas_frontend
Instale as dependências do projeto:

```bash
npm install
Inicie o servidor de desenvolvimento:

```bash
ng serve
Abra seu navegador e acesse http://localhost:4200.

```bash
Validações e Mensagens
O formulário valida os campos para garantir que nenhum campo esteja vazio.
Não é permitido inserir valores negativos nos campos de peso e altura.
Não são permitidos caracteres especiais nos campos.
O sistema verifica duplicações antes de adicionar uma nova pessoa.
