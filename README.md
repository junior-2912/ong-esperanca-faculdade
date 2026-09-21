# ONG Esperança

Aplicação web desenvolvida para a ONG Esperança, com o objetivo de apresentar a instituição, seus projetos sociais e permitir o cadastro de pessoas interessadas em participar das ações.

O projeto foi desenvolvido com HTML5 semântico, CSS3 responsivo e JavaScript, utilizando o Vite como ferramenta de build. A configuração mantém as três páginas HTML como entradas independentes e aplica otimizações de produção aos recursos CSS e JavaScript.

## Funcionalidades

* Apresentação institucional da ONG.
* Exibição dos principais projetos e campanhas.
* Página de cadastro de voluntários.
* Validação dos campos do formulário.
* Máscaras para CPF, telefone e CEP.
* Feedback visual para campos inválidos.
* Build de produção e minificação com Vite.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Vite
* DOM API

O Vite é utilizado como dependência de desenvolvimento para processar e otimizar os ficheiros durante a build.

## Pré-requisitos

Para executar o projeto é necessário apenas:

* Navegador moderno com suporte a JavaScript ES6+.
* Editor de código, como IntelliJ IDEA, VS Code ou equivalente.
* Node.js 20.19+ ou 22.12+ e npm.

Não é necessário configurar banco de dados ou servidor backend.

## Estrutura do projeto

```text
ong-esperanca/
├── index.html
├── projetos.html
├── cadastro.html
├── README.md
├── package.json
├── vite.config.js
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

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Depois, acesse o endereço apresentado pelo Vite, normalmente `http://localhost:5173`.

### Build de produção

Para gerar a versão otimizada:

```bash
npm run build
```

O Vite cria a pasta `dist/` com as três páginas, os estilos e os scripts processados e minificados. Para pré-visualizar essa versão:

```text
npm run preview
```

## Dependências

As dependências são instaladas com:

```bash
npm install
```

O projeto não utiliza frameworks de interface nem dependências de runtime. O Vite é uma dependência de desenvolvimento usada exclusivamente para a build e o servidor local.

## Testes e validação

O projeto não utiliza atualmente um framework automatizado de testes, como Jest ou Vitest.

A validação foi realizada principalmente por meio de testes funcionais no navegador, verificando:

* Preenchimento correto e incorreto dos formulários.
* Campos obrigatórios.
* Formatos de e-mail, CPF, telefone e CEP.
* Aplicação das máscaras durante o evento `input`.
* Comportamento do evento `submit`.
* Renderização dos elementos no DOM.

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
