# ONG Esperança

Aplicação web desenvolvida para a ONG Esperança, com o objetivo de apresentar a instituição, seus projetos sociais e permitir o cadastro de pessoas interessadas em participar das ações.

O projeto foi desenvolvido inicialmente com HTML5 semântico e CSS3 responsivo e, posteriormente, evoluído para uma aplicação dinâmica utilizando JavaScript, com navegação em formato SPA, manipulação do DOM, validação de formulários, renderização por templates e persistência local dos dados.

## Funcionalidades

* Apresentação institucional da ONG.
* Exibição dos principais projetos e campanhas.
* Página de cadastro de voluntários.
* Validação dos campos do formulário.
* Máscaras para CPF, telefone e CEP.
* Feedback visual para campos inválidos.
* Navegação entre seções sem recarregamento completo da página.
* Renderização dinâmica dos conteúdos através do JavaScript.
* Persistência dos cadastros utilizando `localStorage`.
* Recuperação dos dados armazenados durante o carregamento inicial.
* Tratamento da navegação pelos botões voltar e avançar do navegador.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* DOM API
* Web Storage API (`localStorage`)
* History API (`pushState` e `popstate`)
* JSON (`JSON.stringify` e `JSON.parse`)

Não foram utilizadas bibliotecas, frameworks ou dependências externas.

## Pré-requisitos

Para executar o projeto é necessário apenas:

* Navegador moderno com suporte a JavaScript ES6+.
* Editor de código, como IntelliJ IDEA, VS Code ou equivalente.
* Python 3, caso seja utilizado um servidor HTTP local.

Não é necessário instalar pacotes com NPM nem configurar banco de dados ou servidor backend.

## Estrutura do projeto

```text
ong-esperanca/
├── index.html
├── projetos.html
├── cadastro.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── hero-voluntarios.svg
    ├── projeto-alimentacao.svg
    ├── projeto-educacao.svg
    ├── projeto-comunidade.svg
    └── seja-voluntario.svg
```

A pasta `css` concentra os estilos visuais, `js` contém as funcionalidades e regras de interação e `img` reúne os recursos gráficos utilizados pela interface.

## Como executar

Clone ou copie o projeto para sua máquina e abra a pasta raiz no editor de sua preferência.

Para uma execução simples, o arquivo `index.html` pode ser aberto diretamente no navegador. Entretanto, recomenda-se utilizar um servidor HTTP local para reproduzir um ambiente mais próximo de uma aplicação web real.

### Servidor HTTP com Python

No terminal, dentro da pasta do projeto:

```bash
python -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

Para encerrar o servidor:

```text
Ctrl + C
```

## Dependências

O projeto não possui dependências externas.

Não existe arquivo `package.json`, portanto não é necessário executar:

```bash
npm install
```

Todo o funcionamento utiliza APIs e recursos nativos do navegador.

## Build

Como a aplicação utiliza JavaScript puro e não possui um bundler, como Vite, Webpack ou Parcel, não existe uma etapa de compilação ou geração de build.

A versão executável do projeto é formada pelos próprios arquivos:

```text
HTML + CSS + JavaScript + imagens
```

Assim, não há um comando de build obrigatório.

## Testes e validação

O projeto não utiliza atualmente um framework automatizado de testes, como Jest ou Vitest.

A validação foi realizada principalmente por meio de testes funcionais no navegador, verificando:

* Preenchimento correto e incorreto dos formulários.
* Campos obrigatórios.
* Formatos de e-mail, CPF, telefone e CEP.
* Aplicação das máscaras durante o evento `input`.
* Comportamento do evento `submit`.
* Navegação entre as rotas.
* Botões voltar e avançar do navegador.
* Persistência e recuperação de dados no `localStorage`.
* Renderização dos elementos no DOM.
* Tratamento de cenários sem dados armazenados.

O navegador também foi utilizado para diagnóstico por meio do **Console**, **DevTools**, inspeção do DOM, armazenamento local e **Debugger/breakpoints**.

## Persistência dos dados

Os cadastros realizados pelo utilizador são armazenados localmente no navegador através do `localStorage`.

Antes da gravação, os objetos JavaScript são convertidos para JSON:

```javascript
localStorage.setItem("cadastros", JSON.stringify(cadastros));
```

Durante a inicialização, os dados são recuperados e convertidos novamente para objetos JavaScript:

```javascript
const cadastros =
    JSON.parse(localStorage.getItem("cadastros")) || [];
```

Isso permite restaurar o histórico anteriormente registrado mesmo após o recarregamento da aplicação.

## Arquitetura JavaScript

A lógica da aplicação é organizada por responsabilidade, separando os mecanismos de navegação, renderização, formulários e persistência.

Entre as principais responsabilidades estão:

* **Navegação:** controle das rotas e do histórico do navegador.
* **Templates:** geração dinâmica dos componentes HTML.
* **Formulário:** captura, validação e tratamento dos dados.
* **Persistência:** leitura e gravação no `localStorage`.
* **Inicialização:** coordenação dos módulos e carregamento inicial da aplicação.

Essa separação busca manter alta coesão dentro de cada responsabilidade e reduzir o acoplamento entre as funcionalidades.

## Validação do formulário

A aplicação combina recursos nativos do HTML5 com JavaScript.

São utilizados mecanismos como:

```html
required
type="email"
pattern="..."
```

Além disso, eventos como `input` e `submit` permitem realizar tratamentos dinâmicos durante a interação.

O envio tradicional do formulário é interrompido com:

```javascript
event.preventDefault();
```

permitindo que a aplicação valide os dados, apresente feedback ao utilizador e processe as informações sem recarregar a página.

## Compatibilidade

A aplicação foi desenvolvida utilizando recursos padronizados do HTML5, CSS3 e JavaScript moderno, sendo recomendada a utilização de versões recentes de navegadores como:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox

## Licença

Projeto desenvolvido para fins acadêmicos e de estudo em desenvolvimento web.
