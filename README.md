# Projeto de Cadastro de Animes

Este é um projeto React para cadastrar e organizar animes por gênero, onde é possível criar cards personalizados para cada anime, especificando seu nome, número de episódios, imagem de cartaz e gênero. O projeto também permite modificar as cores dos gêneros e possui um rodapé com links para redes sociais.

## Funcionalidades

- Adicionar um novo anime com informações de nome, número de episódios, imagem de cartaz e gênero.
- Excluir animes da lista.
- Alterar a cor de fundo de cada gênero de anime.
- Rodapé com links para GitHub, LinkedIn e redes sociais.

## Estrutura do Projeto

Abaixo, uma breve descrição dos principais componentes do projeto:

### `App.js`
Componente principal que gerencia o estado global dos animes e dos gêneros. Ele controla as operações de adicionar e excluir animes e a mudança de cor dos gêneros.

### Componentes

- **`Banner`**: Componente de cabeçalho que exibe uma imagem principal.
- **`Formulario`**: Formulário para cadastro de animes, onde é possível inserir informações sobre o nome, número de episódios, imagem e gênero.
- **`Botao`**: Componente de botão estilizado para envio do formulário.
- **`CampoTexto`**: Componente para os campos de texto do formulário.
- **`ListaSuspensa`**: Lista suspensa que permite selecionar o gênero do anime.
- **`Time`**: Representa cada gênero de anime, exibindo os animes cadastrados nesse gênero e permitindo a mudança de cor do fundo.
- **`Colaborador`**: Card individual de cada anime, mostrando informações como imagem, nome e número de episódios, além de um botão para excluir o anime.
- **`Rodape`**: Rodapé com links para redes sociais, incluindo GitHub e LinkedIn.

## Dependências

Para que o projeto funcione corretamente, são necessárias as seguintes dependências:

- `react-icons`: Para os ícones de redes sociais e o botão de exclusão.
- `uuid`: Para gerar IDs únicos para os animes e gêneros.
- `hex-to-rgba`: Para ajustar as cores dos componentes.

## Como Clonar e Rodar o Projeto

1. Clone o repositório: `git clone https://github.com/EdsonJr21/Cadastro-de-Animes.git`
2. Navegue até o diretório: `cd Cadastro-de-Animes`
3. Instale as dependências: `npm install`
4. Inicie o projeto: `npm start`