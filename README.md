# Habit Tracker JS — Gerenciador de Hábitos Diários

> Aplicativo web full-stack minimalista para acompanhamento de metas diárias de constância, desenvolvido com **Next.js** (Pages Router).

---

## 📌 Objetivo

O objetivo principal deste projeto foi criar um **aplicativo web full-stack minimalista e funcional** para acompanhamento de metas diárias de constância. Ele permite que o usuário gerencie sua rotina de forma visual (estilo matriz/calendário de 7 dias) sem depender de configurações complexas de bancos de dados externos logo no início.

O projeto foi desenvolvido como parte de um seminário acadêmico sobre o framework **Next.js**, explorando seus recursos de roteamento, API Routes, renderização híbrida e o ecossistema React moderno, além de abordar a vulnerabilidade **CVE-2025-29927**.

---

## 👥 Integrantes

| #  | Nome                                        |
|----|---------------------------------------------|
| 1  | Bárbara Yasmin Pimenta dos Santos Tobias    |
| 2  | Gabriel Morais Pinto                        |
| 3  | Jonathan Willian de Paula Santos            |
| 4  | Kauê Alexandre de Souza                     |
| 5  | Micael Silva Domiciano                      |
| 6  | Miguel Viana Laube                          |
| 7  | Pedro Henrique                              |
| 8  | Ruan Monteiro Brito                         |
| 9  | Vinicius Vilaça                             |
| 10 | Vitorio Fraga Motta                         |

---

## 🛠️ Tecnologias e Versões

| Tecnologia          | Versão   | Descrição                                                    |
|---------------------|----------|--------------------------------------------------------------|
| **Next.js**         | 16.3.6   | Framework React para aplicações web full-stack (Pages Router)|
| **React**           | 19.2.8   | Biblioteca para construção de interfaces de usuário          |
| **React DOM**       | 19.2.8   | Renderizador React para o navegador                          |
| **Node.js**         | 24.13.1  | Ambiente de execução JavaScript no servidor                  |
| **npm**             | 11.8.0   | Gerenciador de pacotes do Node.js                            |
| **Tailwind CSS**    | 4.x      | Framework CSS utilitário para estilização                    |
| **Lucide React**    | 1.48.0+  | Biblioteca de ícones minimalistas em SVG                     |
| **ESLint**          | 9.x      | Ferramenta de linting para qualidade de código               |
| **TypeScript**      | 5.x      | Suporte a tipagem estática (configuração do projeto)         |

---

## 📋 Pré-requisitos

### Pré-requisitos de Sistema

Antes de rodar o projeto, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) — [Download Node.js](https://nodejs.org/)
- **npm** (versão 9 ou superior) — já incluído na instalação do Node.js
- **Git** — [Download Git](https://git-scm.com/)
- Um editor de código como **VS Code** (recomendado)

### Pré-requisitos de Conhecimento

Para trabalhar e contribuir com o projeto, é recomendado ter conhecimento básico em:

- **HTML, CSS e JavaScript** — fundamentos de desenvolvimento web
- **React** — componentes, hooks (`useState`, `useEffect`), JSX e ciclo de vida
- **Node.js** — ambiente de execução e módulos (`fs`, `path`)
- **API REST** — conceitos de requisições HTTP (`GET`, `POST`, `PUT`, `DELETE`)
- **Next.js** — conceitos de Pages Router, API Routes e estrutura de diretórios
- **Terminal / Linha de Comando** — comandos básicos para navegação e execução de scripts
- **Git / GitHub** — versionamento e colaboração

---

## 🚀 Instalação

Siga o passo a passo abaixo para clonar e configurar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/kaweg/Next.js.git
```

### 2. Acesse a pasta do projeto

```bash
cd Next.js
```

### 3. Instale as dependências

```bash
npm install
```

> **Nota:** Este comando instala todas as dependências listadas no `package.json`, incluindo Next.js, React, Tailwind CSS e Lucide React.

---

## ▶️ Execução

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload:

```bash
npm run dev
```

O aplicativo estará disponível em: **http://localhost:3000**

### Modo de Produção

Para gerar o build de produção e iniciar o servidor:

```bash
# Gerar o build otimizado
npm run build

# Iniciar o servidor de produção
npm start
```

### Linting

Para verificar a qualidade do código:

```bash
npm run lint
```

---

## 📂 Estrutura do Projeto

```text
Next.js/
├── data/
│   └── habits.json              # Arquivo JSON para persistência de dados no servidor
├── pages/
│   ├── api/
│   │   └── habits.js            # API Route — endpoints CRUD (GET, POST, PUT, DELETE)
│   ├── _app.js                  # Componente App — layout global e importação de estilos
│   ├── _document.js             # Documento HTML customizado (lang, meta tags)
│   └── index.js                 # Página principal — interface do Habit Tracker
├── public/
│   ├── file.svg                 # Ícones SVG estáticos
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── styles/
│   └── globals.css              # Estilos globais (Tailwind CSS + variáveis customizadas)
├── .gitignore                   # Arquivos ignorados pelo Git
├── eslint.config.mjs            # Configuração do ESLint
├── next.config.ts               # Configuração do Next.js
├── package.json                 # Dependências e scripts do projeto
├── postcss.config.mjs           # Configuração do PostCSS (Tailwind)
├── tsconfig.json                # Configuração do TypeScript
└── README.md                    # Este arquivo
```

---

## ✅ Funcionalidades

### 🎯 Cadastro de Hábitos
- Adicione novos hábitos informando um **nome** e selecionando uma **categoria** (Geral, Estudos, Saúde ou Trabalho).
- Cada hábito recebe um ID único gerado automaticamente pelo servidor.

### 📊 Matriz de Acompanhamento (7 dias)
- Visualize o progresso dos **últimos 7 dias** em uma interface estilo matriz/calendário.
- Marque ou desmarque dias concluídos com um clique no botão de check (✅).
- Os dias da semana são exibidos dinamicamente com base na data atual.

### 📈 Painel de Estatísticas
- Acompanhe métricas gerais do seu progresso:
  - **Total de Hábitos** cadastrados.
  - **Total de Conclusões Registradas** (soma de todos os dias marcados em todos os hábitos).

### 🗑️ Exclusão de Hábitos
- Remova hábitos individualmente de forma dinâmica pelo botão de lixeira (🗑️).
- A exclusão é refletida imediatamente na interface e persistida no servidor.

### 💾 Persistência no Servidor (Arquivo JSON)
- Todos os dados são salvos automaticamente em um arquivo local `data/habits.json` por meio das **API Routes** do Next.js.
- Utiliza o módulo `fs` (File System) do Node.js para leitura e escrita síncrona, eliminando a necessidade de banco de dados externo.

### 🔄 CRUD Completo via API REST
- **GET** `/api/habits` — Lista todos os hábitos
- **POST** `/api/habits` — Cria um novo hábito
- **PUT** `/api/habits` — Atualiza o status de conclusão de um dia
- **DELETE** `/api/habits?id=<id>` — Remove um hábito pelo ID

### 🎨 Interface Responsiva
- Layout adaptável para desktop e mobile.
- Tema escuro (dark mode) com paleta moderna utilizando Tailwind CSS.
- Ícones minimalistas da biblioteca Lucide React.

---

## 🔓 Vulnerabilidade Pesquisada — CVE-2025-29927

### Informações Gerais

| Campo              | Detalhe                                                       |
|--------------------|---------------------------------------------------------------|
| **CVE ID**         | CVE-2025-29927                                                |
| **Severidade**     | 🔴 **Crítica** (CVSS 9.1)                                    |
| **Data de Divulgação** | 21 de Março de 2025                                       |
| **Componente Afetado** | Middleware do Next.js                                     |
| **Tipo**           | Authorization Bypass (Desvio de Autorização)                  |

### Descrição da Vulnerabilidade

A **CVE-2025-29927** é uma vulnerabilidade crítica de **bypass de autorização** no framework Next.js. Ela explora o cabeçalho HTTP interno `x-middleware-subrequest`, que o Next.js utiliza internamente para identificar sub-requisições durante a execução de middlewares e evitar loops infinitos.

**O problema:** O framework confiava cegamente nesse cabeçalho, mesmo quando ele era enviado por um usuário externo e não confiável. Ao incluir esse cabeçalho em uma requisição HTTP maliciosa, um atacante poderia fazer a aplicação acreditar que se trata de uma operação interna e confiável, fazendo com que toda a camada de middleware — onde normalmente ficam as verificações de **autenticação e autorização** — fosse completamente ignorada.

### Como Funciona o Ataque

```text
┌─────────────────┐     requisição com header      ┌──────────────────┐
│   Atacante       │ ─── x-middleware-subrequest ──▶│   Next.js Server │
│   (externo)      │                                │                  │
└─────────────────┘                                 │  ❌ Middleware   │
                                                    │     IGNORADO!    │
                                                    │                  │
                                                    │  ✅ Rota protegida│
                                                    │     ACESSADA!    │
                                                    └──────────────────┘
```

**Exemplo de requisição maliciosa:**

```bash
curl -H "x-middleware-subrequest: middleware" http://alvo.com/admin/dashboard
```

### Impacto

- Acesso não autorizado a **rotas protegidas** (painéis administrativos, APIs restritas).
- Bypass completo de **autenticação e autorização** implementadas via middleware.
- Potencial **exposição de dados sensíveis** e operações privilegiadas.

### Versões Afetadas

| Versão do Next.js    | Status          |
|----------------------|-----------------|
| 11.1.4 até 12.3.4   | ⚠️ Vulnerável   |
| 13.0.0 até 13.5.8   | ⚠️ Vulnerável   |
| 14.0.0 até 14.2.24  | ⚠️ Vulnerável   |
| 15.0.0 até 15.2.2   | ⚠️ Vulnerável   |
| **12.3.5+**          | ✅ Corrigida     |
| **13.5.9+**          | ✅ Corrigida     |
| **14.2.25+**         | ✅ Corrigida     |
| **15.2.3+**          | ✅ Corrigida     |

### Mitigação e Correção

1. **Atualizar o Next.js** para uma versão corrigida (recomendado).
2. **Bloquear o cabeçalho** `x-middleware-subrequest` em requisições externas utilizando WAF, load balancer ou proxy reverso.
3. Aplicações hospedadas na **Vercel** foram protegidas automaticamente após a divulgação.

> ⚠️ **Nota:** O projeto atual utiliza Next.js **16.3.6**, que já inclui a correção para esta vulnerabilidade.

---

## 📸 Evidências / Imagens

### Tela Principal — Matriz de Acompanhamento

![Matriz de Acompanhamento — Visualização dos últimos 7 dias com hábitos cadastrados e progresso marcado](./docs/img/tela-matriz.png)

A tela principal exibe a **matriz de hábitos** com os últimos 7 dias. Cada hábito pode ser marcado individualmente, e o estado é salvo automaticamente no servidor.

### Tela de Estatísticas

![Painel de Estatísticas — Total de hábitos e total de conclusões registradas](./docs/img/tela-estatisticas.png)

O painel de estatísticas apresenta um resumo geral com o **total de hábitos** cadastrados e o **total de conclusões registradas**.

---

## 🌐 Link do GitHub Pages

🔗 **Repositório:** [https://github.com/kaweg/Next.js](https://github.com/kaweg/Next.js)

🔗 **GitHub Pages:** [https://kaweg.github.io/Next.js](https://kaweg.github.io/Next.js)

> **Nota:** Como o Next.js é uma aplicação server-side, o GitHub Pages hospeda a versão estática exportada. Para a experiência completa (com API e persistência), rode o projeto localmente.

---

## 📚 Referências

- **Next.js — Documentação Oficial:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **React — Documentação Oficial:** [https://react.dev](https://react.dev)
- **Tailwind CSS — Documentação:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Lucide Icons:** [https://lucide.dev](https://lucide.dev)
- **Node.js — File System (fs):** [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html)
- **CVE-2025-29927 — NVD (NIST):** [https://nvd.nist.gov/vuln/detail/CVE-2025-29927](https://nvd.nist.gov/vuln/detail/CVE-2025-29927)
- **CVE-2025-29927 — GitHub Advisory:** [https://github.com/vercel/next.js/security/advisories/GHSA-f82v-jwr5-cevg](https://github.com/vercel/next.js/security/advisories/GHSA-f82v-jwr5-cevg)
- **CVE-2025-29927 — Akamai Blog:** [https://www.akamai.com/blog/security-research/2025/mar/march-critical-next-js-auth-bypass-cve-2025-29927](https://www.akamai.com/blog/security-research/2025/mar/march-critical-next-js-auth-bypass-cve-2025-29927)
- **Next.js Pages Router — Documentação:** [https://nextjs.org/docs/pages](https://nextjs.org/docs/pages)
- **Next.js API Routes:** [https://nextjs.org/docs/pages/building-your-application/routing/api-routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

---
