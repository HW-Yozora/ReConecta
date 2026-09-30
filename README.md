# ReConecta

## Status do projeto

**Versão atual: v1.0.1**

Projeto acadêmico funcional, com build realizado pelo Vite e deployment em produção realizado pela Vercel.

**Aplicação em produção:**
https://re-conecta-seven.vercel.app/#inicio

---

## Sobre o projeto

A **ReConecta** é uma plataforma web desenvolvida para uma iniciativa do terceiro setor voltada à inclusão digital, sustentabilidade e economia circular.

O projeto busca transformar equipamentos eletrônicos subutilizados em oportunidades de acesso à tecnologia, educação, qualificação profissional e participação social.

A aplicação apresenta os projetos da organização, incentiva a participação de doadores e voluntários e demonstra indicadores de impacto por meio de uma interface responsiva e acessível.

---

## Objetivos

* Promover inclusão digital por meio do recondicionamento de equipamentos.
* Incentivar a reutilização e a destinação adequada de equipamentos eletrônicos.
* Facilitar o engajamento de doadores e voluntários.
* Demonstrar boas práticas de desenvolvimento front-end.
* Aplicar princípios de acessibilidade e responsividade.
* Utilizar controle de versão e fluxo de desenvolvimento baseado em branches e Pull Requests.
* Preparar a aplicação para execução em ambiente de produção.

---

## Tecnologias utilizadas

* **HTML5** — estrutura semântica e acessível.
* **CSS3** — identidade visual, Design System, responsividade, Flexbox e CSS Grid.
* **JavaScript ES6+** — interatividade, manipulação do DOM, eventos e lógica da aplicação.
* **ES6 Modules** — organização e modularização do código JavaScript.
* **localStorage** — persistência local dos cadastros para fins de demonstração.
* **Chart.js 4.5.1** — criação de gráficos de indicadores de impacto.
* **Vite 8.3.1** — servidor de desenvolvimento e ferramenta de build.
* **Git e GitHub** — controle de versão, branches, Pull Requests e releases.
* **Vercel** — deployment e hospedagem da aplicação em produção.

---

## Estrutura do projeto

```text
ReConecta/
├── dist/
├── node_modules/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── dados.js
│   ├── formulario.js
│   ├── graficos.js
│   ├── script.js
│   ├── storage.js
│   └── templates.js
├── img/
│   ├── equipamentos.webp
│   └── favicon.svg
├── .gitignore
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.mjs
└── README.md
```

### `html/`

Contém os arquivos HTML da aplicação.

O `index.html` funciona como ponto de entrada da interface, enquanto o conteúdo principal é renderizado dinamicamente pelo JavaScript.

### `css/`

Contém o sistema visual da plataforma, incluindo cores, tipografia, espaçamentos, componentes, Flexbox, CSS Grid e breakpoints responsivos.

### `js/`

Contém os módulos responsáveis pelas funcionalidades dinâmicas da aplicação.

* `app.js` — roteamento e controle principal da aplicação.
* `dados.js` — dados utilizados pelos componentes.
* `templates.js` — geração dinâmica do conteúdo HTML.
* `formulario.js` — validação, máscaras, eventos e feedback do formulário.
* `storage.js` — leitura e gravação no `localStorage`.
* `graficos.js` — integração e configuração do Chart.js.
* `script.js` — funcionalidades complementares da aplicação.

### `img/`

Armazena os recursos gráficos utilizados pela interface.

* `equipamentos.webp` — imagem principal otimizada em formato WebP.
* `favicon.svg` — ícone da aplicação.

---

## Funcionalidades

A aplicação possui:

* Navegação em formato de Single Page Application.
* Roteamento por hash entre Início, Projetos e Cadastro.
* Menu responsivo e submenu.
* Layout responsivo com CSS Grid e Flexbox.
* Design System baseado em variáveis CSS.
* Cards e badges para apresentação dos projetos.
* Formulário de participação.
* Máscaras para CPF, telefone e CEP.
* Validação de dados no lado do cliente.
* Feedback visual para erros e sucesso.
* Armazenamento local de cadastros.
* Gráfico de indicadores de impacto.
* Navegação por teclado.
* Recursos de acessibilidade com elementos semânticos e atributos ARIA.

---

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
* Melhorias no carregamento da imagem principal utilizando `decoding="async"`.

---

## Otimizações

Durante o desenvolvimento foram realizadas melhorias voltadas à apresentação e ao desempenho:

* Conversão da imagem principal de JPG para **WebP**.
* Redução do tamanho do recurso gráfico utilizado na página inicial.
* Utilização de `decoding="async"` na imagem principal.
* Adição de favicon em SVG.
* Uso do Vite para build e preparação dos arquivos para produção.
* Remoção da dependência `lightningcss-win32-x64-msvc`, específica para Windows, para garantir compatibilidade com o ambiente Linux utilizado pela Vercel.

A imagem principal passou de aproximadamente **321 KB em JPG para 292 KB em WebP**, representando uma redução aproximada de 9% no tamanho do arquivo.

---

## Execução local

### Pré-requisitos

* **Node.js**
* **npm**
* Visual Studio Code ou outro editor de código
* Navegador atualizado

### Instalação

Após clonar ou baixar o projeto:

```bash
npm install
```

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite disponibilizará a aplicação localmente.

Com a estrutura atual do projeto, a página principal pode ser acessada em:

```text
http://localhost:5173/html/index.html
```

### Build de produção

Para gerar os arquivos de produção:

```bash
npm run build
```

Os arquivos gerados serão colocados no diretório:

```text
dist/
```

### Preview do build

Para testar localmente a versão produzida pelo build:

```bash
npm run preview
```

A aplicação ficará disponível em um endereço local fornecido pelo Vite, normalmente:

```text
http://localhost:4173/html/index.html
```

---

## Produção

O projeto está publicado na **Vercel**.

**URL da aplicação:**

https://re-conecta-seven.vercel.app/#inicio

A configuração de produção utiliza:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Production Branch: master
```

O arquivo `vercel.json` contém a configuração necessária para direcionar a raiz da aplicação para:

```text
/html/index.html
```

O deployment foi validado após a correção da incompatibilidade de uma dependência específica do Windows com o ambiente Linux da Vercel.

---

## Controle de versão

O projeto utiliza **Git e GitHub** para controle de versão.

O fluxo de branches adotado foi:

```text
master
  └── develop
      └── feature/*
```

Branches de funcionalidade e correção foram utilizadas para separar alterações antes da integração na `develop`.

Branches utilizadas no desenvolvimento:

```text
feature/acessibilidade
feature/otimizacao-producao
feature/correcao-vercel
```

As alterações foram integradas por meio de **Pull Requests**.

---

## Fluxo de desenvolvimento

O fluxo adotado foi:

```text
Criar branch de feature
        ↓
Desenvolver
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
Merge em develop
        ↓
Pull Request develop → master
        ↓
Release
```

As mensagens de commit seguem o padrão **Conventional Commits**, utilizando prefixos como:

```text
feat:
fix:
perf:
refactor:
docs:
style:
```

---

## Versionamento

O projeto utiliza versionamento semântico:

```text
MAJOR.MINOR.PATCH
```

Releases realizadas:

```text
v1.0.0 — primeira versão consolidada do projeto.
v1.0.1 — correção de compatibilidade das dependências com o ambiente de produção da Vercel.
```

A release `v1.0.1` está associada à branch `master`.

---

## Limitações

O projeto possui caráter acadêmico e utiliza algumas funcionalidades simuladas.

O `localStorage` representa uma solução de persistência local para demonstração e não substitui um banco de dados de produção.

O projeto não possui um back-end real para processamento dos cadastros.

O Chart.js é carregado externamente por CDN e depende de conexão com a internet para ser disponibilizado.

---

## Possíveis evoluções

Como etapas futuras, a aplicação poderia receber:

* API e Back-end próprios.
* Banco de dados.
* Autenticação de usuários.
* Painel administrativo.
* Integração real com doações.
* Sistema de acompanhamento dos equipamentos.
* Testes automatizados.
* Monitoramento de desempenho e acessibilidade.
* Expansão das funcionalidades da plataforma.

---

## Autoria

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento Front-End, utilizando a proposta da **ReConecta** como estudo de caso para inclusão digital, sustentabilidade e economia circular.
