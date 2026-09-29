# ReConecta

## Sobre o projeto

A **ReConecta** é uma plataforma web desenvolvida para uma iniciativa do terceiro setor voltada à inclusão digital, sustentabilidade e economia circular. O projeto busca transformar equipamentos eletrônicos subutilizados em oportunidades de acesso à tecnologia, educação, qualificação profissional e participação social.

A aplicação permite apresentar os projetos da organização, incentivar a participação de doadores e voluntários e demonstrar indicadores de impacto por meio de uma interface responsiva e acessível.

## Objetivos

* Promover inclusão digital por meio do recondicionamento de equipamentos.
* Incentivar a reutilização e a destinação adequada de equipamentos eletrônicos.
* Facilitar o engajamento de doadores e voluntários.
* Demonstrar boas práticas de desenvolvimento front-end.
* Aplicar princípios de acessibilidade e responsividade.

## Tecnologias utilizadas

* **HTML5** — estrutura semântica e acessível.
* **CSS3** — identidade visual, Design System, responsividade, Flexbox e CSS Grid.
* **JavaScript ES6+** — interatividade, manipulação do DOM, eventos e lógica da aplicação.
* **ES6 Modules** — organização e modularização do código JavaScript.
* **localStorage** — persistência local dos cadastros para fins de demonstração.
* **Chart.js** — criação de gráficos de indicadores de impacto.
* **Git e GitHub** — controle de versão e organização do histórico do projeto.
* **Live Server** — execução do projeto em ambiente local.

## Estrutura do projeto

```text
ReConecta/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── dados.js
│   ├── templates.js
│   ├── formulario.js
│   ├── storage.js
│   └── graficos.js
├── img/
│   └── equipamentos.jpg
└── README.md
```

### `html/`

Contém a estrutura das páginas e o ponto de entrada da aplicação.

### `css/`

Contém o sistema visual da plataforma, incluindo cores, tipografia, espaçamentos, Grid, Flexbox, componentes e breakpoints responsivos.

### `js/`

Contém os módulos responsáveis pelas funcionalidades dinâmicas da aplicação.

* `app.js` — roteamento e controle principal da SPA.
* `dados.js` — dados utilizados pelos componentes.
* `templates.js` — geração dinâmica dos componentes HTML.
* `formulario.js` — validação, máscaras, eventos e feedback.
* `storage.js` — leitura e gravação no `localStorage`.
* `graficos.js` — integração e configuração do Chart.js.

### `img/`

Armazena as imagens utilizadas na interface.

## Funcionalidades

A aplicação possui:

* Navegação em formato de Single Page Application.
* Menu responsivo e submenu para telas maiores.
* Layout responsivo com CSS Grid e Flexbox.
* Design System baseado em variáveis CSS.
* Cards e badges para apresentação dos projetos.
* Formulário de participação.
* Máscaras para CPF, telefone e CEP.
* Validação de dados no lado do cliente.
* Feedback visual para erros e sucesso.
* Armazenamento local de cadastros.
* Gráfico de indicadores de impacto.
* Navegação por teclado e recursos de acessibilidade.

## Acessibilidade

A aplicação foi desenvolvida considerando princípios da **WCAG 2.1**, incluindo:

* HTML semântico.
* Textos alternativos para imagens.
* Rótulos associados aos campos de formulário.
* Hierarquia adequada de títulos.
* Foco visível para navegação por teclado.
* Contraste adequado entre conteúdo e fundo.
* Mensagens de erro orientativas.
* Uso de `aria-label`, `aria-expanded`, `aria-current` e outros atributos quando necessários.

## Execução local

### Pré-requisitos

* Visual Studio Code ou outro editor de código.
* Navegador atualizado.
* Extensão Live Server ou servidor HTTP local.
* Conexão com a internet para carregar o Chart.js pelo CDN.

### Passo a passo

1. Faça o download ou clone o repositório.
2. Abra a pasta `ReConecta` no VS Code.
3. Inicie um servidor local utilizando o Live Server.
4. Abra o arquivo `html/Index.html` pelo endereço fornecido pelo servidor.
5. Navegue pelas rotas de Início, Projetos e Cadastro.

A utilização de servidor local é necessária porque a aplicação utiliza módulos JavaScript ES6 por meio de `import` e `export`.

## Controle de versão

O projeto utiliza Git e GitHub para controle de versão.

A estrutura de branches segue o modelo GitFlow:

```text
main
└── develop
    ├── feature/acessibilidade
    ├── feature/spa
    ├── feature/formulario
    └── feature/graficos
```

As mensagens de commit seguem o padrão **Conventional Commits**, utilizando prefixos como:

```text
feat:
fix:
docs:
refactor:
style:
```

O versionamento segue o padrão semântico:

```text
MAJOR.MINOR.PATCH
```

## Desenvolvimento

O fluxo recomendado é:

```text
Criar branch
↓
Desenvolver funcionalidade
↓
Testar
↓
Commit
↓
Push
↓
Pull Request
↓
Revisão
↓
Merge
```

Issues e milestones são utilizados para organizar tarefas, acompanhar objetivos e registrar etapas importantes do desenvolvimento.

## Produção

Antes do deploy, recomenda-se:

* validar os arquivos HTML;
* revisar acessibilidade;
* testar a aplicação em diferentes tamanhos de tela;
* verificar o console do navegador;
* otimizar imagens e arquivos;
* revisar os recursos externos;
* realizar testes de navegação e formulário.

## Limitações

O projeto possui caráter acadêmico e utiliza algumas funcionalidades simuladas.

O `localStorage` representa uma solução de persistência local para demonstração e não substitui um banco de dados de produção. Da mesma forma, o projeto não possui um Back-end real para processamento dos cadastros.

O Chart.js é carregado externamente por CDN e depende de conexão com a internet.

## Possíveis evoluções

Como etapas futuras, a aplicação poderia receber:

* API e Back-end próprios.
* Banco de dados.
* Autenticação de usuários.
* Painel administrativo.
* Integração real com doações.
* Sistema de acompanhamento dos equipamentos.
* Hospedagem em ambiente de produção.
* Testes automatizados.

## Autoria

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento Front-End, utilizando a proposta da **ReConecta** como estudo de caso para inclusão digital, sustentabilidade e economia circular.
