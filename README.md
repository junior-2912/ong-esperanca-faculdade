# ONG Esperança

Projeto acadêmico de site institucional para uma organização do terceiro setor, desenvolvido com HTML5 semântico, CSS e JavaScript puro.

## Páginas

- `index.html` — apresentação institucional e contato.
- `projetos.html` — projetos sociais, voluntariado e doações.
- `cadastro.html` — formulário de cadastro de voluntários.

## Recursos implementados

- Estrutura semântica com `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `address` e `footer`.
- Metadados básicos para SEO.
- Imagens com `alt` descritivo.
- Formulário organizado com `fieldset` e `legend`.
- Validação nativa com `required`, `minlength`, `min`, `max`, `pattern` e tipos adequados.
- Máscaras de CPF, telefone e CEP com JavaScript.
- Validação matemática do CPF, além da validação de formato.
- Layout responsivo para telas menores.
- Sem dependências externas.

## Estrutura

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

## Observação sobre o formulário

O formulário é demonstrativo e não envia dados para um backend. Ao enviar corretamente, o JavaScript exibe uma mensagem de sucesso no próprio navegador.

## Validação

Abra as três páginas no navegador e, antes da entrega, valide os arquivos HTML no serviço oficial de validação do W3C.
