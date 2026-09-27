# 🚀 Habit Tracker (Next.js App Router)

Um aplicativo web **full-stack minimalista** para rastreamento e gerenciamento de metas diárias, desenvolvido com **Next.js**. O projeto explora recursos modernos do framework como Rotas de API, manipulação de arquivos locais e componentes interativos.

---

## 📋 Funcionalidades

- **Cadastro de Hábitos:** Adicione novos hábitos informando o nome e selecionando uma categoria (*Geral, Estudos, Saúde, Trabalho*).
- **Matriz de Acompanhamento:** Visualize e marque o progresso dos últimos 7 dias em uma interface limpa e responsiva.
- **Persistência no Servidor:** Os dados são salvos automaticamente em um arquivo JSON local (`data/habits.json`) através de rotas de API nativas.
- **Painel de Estatísticas:** Acompanhe métricas gerais, como o total de hábitos e o volume de conclusões registradas.
- **Gerenciamento Completo:** Opção de excluir hábitos individualmente de forma dinâmica.

---

## 🛠️ Tecnologias e Recursos do Next.js Utilizados

- **Next.js (App Router):** Estrutura moderna de rotas baseada em diretórios (`app/`).
- **Route Handlers (Rotas de API):** Criação de endpoints de backend (`GET`, `POST`, `PUT`, `DELETE`) em `app/api/habits/route.js`.
- **Node.js File System (`fs`):** Leitura e escrita síncrona em arquivos locais para persistir dados sem a necessidade de um banco de dados externo.
- **React Hooks (`useState`, `useEffect`):** Gerenciamento de estado e ciclo de vida no lado do cliente (`'use client'`).
- **Lucide React:** Biblioteca de ícones minimalistas.

---

## 📂 Estrutura do Projeto

```text
next_project/
├── app/
│   ├── api/
│   │   └── habits/
│   │       └── route.js     # Endpoints de API (CRUD completo)
│   ├── globals.css          # Estilos globais (Tailwind)
│   ├── layout.js            # Layout raiz da aplicação
│   └── page.js              # Interface de usuário (Front-end)
├── data/
│   └── habits.json          # Arquivo JSON para persistência no servidor
├── public/                  # Arquivos estáticos
├── package.json
└── README.md
