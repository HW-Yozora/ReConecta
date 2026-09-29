import equipamentos from "../img/equipamentos.webp";
import {projetos,impacto} from "./dados.js";

const escapeHTML=value=>String(value).replace(
  /[&<>"']/g,
  c=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "\"":"&quot;",
    "'":"&#39;"
  }[c])
);

export function templateInicio(){

  const impactos=impacto.map(i=>`
    <article class="impact">
      <h3>${escapeHTML(i.label)}</h3>
      <strong>${i.valor}</strong>
      <p>Indicador acompanhado pela iniciativa.</p>
    </article>
  `).join("");

  return `
    <section class="hero">

      <div class="hero-content">
        <span class="eyebrow">TI Verde • inclusão digital</span>

        <h1>Tecnologia reutilizada para gerar oportunidades.</h1>

        <p>
          A ReConecta transforma equipamentos eletrônicos subutilizados
          em recursos para educação, trabalho, informação e participação social.
        </p>

        <a class="btn"
          href="#projetos"
          data-route="projetos">
          Conheça os projetos
        </a>
      </div>

      <div class="hero-media">
        <img
          src="${equipamentos}"
          alt="Equipamentos eletrônicos recondicionados destinados à inclusão digital">
      </div>

    </section>

    <section class="layout-grid">

      <div class="section-head">
        <h2>Como atuamos</h2>
      </div>

      <article class="content-block">
        <h3>Recondicionamento</h3>
        <p>
          Equipamentos recebidos de doadores e parceiros passam por
          diagnóstico, reaproveitamento de componentes e preparação
          para novos ciclos de uso.
        </p>
      </article>

      <article class="content-block">
        <h3>Inclusão digital</h3>
        <p>
          Além da entrega de equipamentos, a proposta considera
          capacitação, suporte, acessibilidade e compatibilidade
          com diferentes condições de uso.
        </p>
      </article>

      <div class="section-head">
        <h2>Indicadores de impacto</h2>
      </div>

      ${impactos}

      <div class="chart-wrap">
        <h2>Visão geral do impacto</h2>

        <canvas
          id="impact-chart"
          role="img"
          aria-label="Gráfico com indicadores de impacto da ReConecta">
        </canvas>
      </div>

    </section>
  `;
}

export function templateProjetos(){

  const cards=projetos.map(p=>`
    <article class="card">

      <span class="badge ${escapeHTML(p.badge)}">
        ${escapeHTML(p.categoria)}
      </span>

      <h2>${escapeHTML(p.nome)}</h2>

      <p>${escapeHTML(p.descricao)}</p>

      <div class="card-actions">
        <a
          class="btn secondary"
          href="#cadastro"
          data-route="cadastro">
          Participar
        </a>
      </div>

    </article>
  `).join("");

  return `
    <section class="layout-grid">

      <div class="section-head">

        <span class="eyebrow">
          Projetos
        </span>

        <h1>Iniciativas da ReConecta</h1>

        <p>
          Conheça as frentes que conectam sustentabilidade,
          recondicionamento e inclusão digital.
        </p>

      </div>

      ${cards}

    </section>
  `;
}

export function templateCadastro(totalCadastros=0){

  return `
    <section class="layout-grid">

      <div class="section-head">

        <span class="eyebrow">
          Engajamento
        </span>

        <h1>Cadastro de participação</h1>

        <p>
          Preencha os dados abaixo para simular seu vínculo
          com a ReConecta.
        </p>

        <p class="help" id="cadastro-count">
          Cadastros registrados nesta simulação:
          ${totalCadastros}
        </p>

      </div>

      <div class="content-block form-container">

        <div
          id="form-alert"
          class="alert"
          hidden>
        </div>

        <form
          id="cadastro-form"
          novalidate>

          <fieldset>

            <legend>
              Dados pessoais
            </legend>

            <div class="field">
              <label for="nome">
                Nome completo
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                required
                minlength="3"
                maxlength="100">
            </div>

            <div class="field">
              <label for="email">
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                maxlength="100">
            </div>

            <div class="field">
              <label for="cpf">
                CPF
              </label>

              <input
                id="cpf"
                name="cpf"
                type="text"
                inputmode="numeric"
                required
                maxlength="14"
                pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                placeholder="000.000.000-00"
                aria-describedby="cpf-error">

              <small
                class="error-msg"
                id="cpf-error">
              </small>
            </div>

            <div class="field">
              <label for="nascimento">
                Data de nascimento
              </label>

              <input
                id="nascimento"
                name="nascimento"
                type="date"
                required>
            </div>

          </fieldset>

          <fieldset>

            <legend>
              Endereço
            </legend>

            <div class="field">
              <label for="endereco">
                Endereço
              </label>

              <input
                id="endereco"
                name="endereco"
                type="text"
                required
                maxlength="150">
            </div>

            <div class="field">
              <label for="cidade">
                Cidade
              </label>

              <input
                id="cidade"
                name="cidade"
                type="text"
                required
                maxlength="80">
            </div>

            <div class="field">
              <label for="estado">
                Estado
              </label>

              <input
                id="estado"
                name="estado"
                type="text"
                required
                minlength="2"
                maxlength="2"
                pattern="[A-Za-z]{2}"
                placeholder="SP">
            </div>

            <div class="field">
              <label for="cep">
                CEP
              </label>

              <input
                id="cep"
                name="cep"
                type="text"
                inputmode="numeric"
                required
                maxlength="9"
                pattern="\\d{5}-\\d{3}"
                placeholder="00000-000">
            </div>

          </fieldset>

          <fieldset>

            <legend>
              Contato e participação
            </legend>

            <div class="field">

              <label for="telefone">
                Telefone
              </label>

              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                maxlength="15"
                pattern="\\(\\d{2}\\) \\d{5}-\\d{4}"
                placeholder="(00) 00000-0000">

            </div>

            <div class="field">

              <span>
                Como deseja participar?
              </span>

              <div class="radio-row">

                <label>
                  <input
                    type="radio"
                    name="participacao"
                    value="doador"
                    required>
                  Doador
                </label>

                <label>
                  <input
                    type="radio"
                    name="participacao"
                    value="voluntario">
                  Voluntário
                </label>

              </div>

            </div>

          </fieldset>

          <button
            class="btn"
            type="submit">
            Enviar cadastro
          </button>

        </form>

      </div>

    </section>
  `;
}