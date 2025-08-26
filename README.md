# 📝 Next.js 15 — CRUD com API Pública

Projeto desenvolvido em **Next.js 15** consumindo a **Rick and Morty API** para demonstrar conceitos de CRUD, componentização e consumo de APIs públicas.

## 🎯 Objetivo

Construir um projeto em Next.js 15 consumindo uma API pública, organizando o projeto em páginas específicas e praticando o uso de fetch/axios, componentes, props e estilização.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para construção de interfaces
- **Tailwind CSS 4** - Framework de CSS para estilização
- **Axios** - Cliente HTTP para requisições à API
- **React Toastify** - Sistema de notificações
- **next/image** - Otimização de imagens
- **next/link** - Navegação otimizada

## 📌 Estrutura de Páginas

### 1. Home (`/`)
- Nome da turma: **Turma de Front-end**
- Nome da escola: **Escola de Programação** 
- Nome completo do aluno: **João Roberto Delgado**
- Foto do aluno usando next/image
- Frase inspiradora pessoal
- Links de navegação para outras páginas

### 2. Página sobre a API (`/apiinfo`)
- Nome da API: **Rick and Morty API**
- Link para documentação oficial
- URL base: `https://rickandmortyapi.com/api`
- Endpoint utilizado: `/character`
- Lista completa de atributos da resposta
- Descrição detalhada sobre a API

### 3. Página de Listagem (`/characters`)
- Listagem paginada de personagens
- Cards com informações principais (nome, espécie, gênero, origem)
- Status visual (vivo/morto/desconhecido)
- Botão "Ver Detalhes" para cada personagem
- Sistema de paginação
- Feedback com Toastify

### 4. Página de Detalhes (`/characters/[id]`)
- Informações completas do personagem
- Imagem em alta qualidade
- Todos os dados disponíveis na API
- Lista dos primeiros 5 episódios
- Navegação de volta

### 5. Página 404 (`/not-found`)
- Página amigável para erros 404
- Emoji grande e título claro
- Botão para voltar à Home
- Links úteis para navegação

## 🔧 Características Técnicas

✅ **Next.js 15** com App Router  
✅ **Tailwind CSS** para estilização  
✅ **Aliases** configurados (`@/`)  
✅ **src/ directory** estrutura organizada  
✅ **Componentização** (CharacterCard, Header)  
✅ **Props** para passagem de dados  
✅ **next/link** para navegação  
✅ **next/image** para otimização de imagens  
✅ **Toastify** para feedbacks visuais  
✅ **Axios** para consumo da API  
✅ **Responsive Design** com Tailwind  
✅ **Loading States** com spinners  
✅ **Error Handling** com try/catch  

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── apiinfo/
│   │   └── page.jsx          # Informações da API
│   ├── characters/
│   │   ├── [id]/
│   │   │   └── page.jsx      # Detalhes do personagem
│   │   └── page.jsx          # Lista de personagens
│   ├── globals.css           # Estilos globais
│   ├── layout.jsx            # Layout principal
│   ├── not-found.jsx         # Página 404
│   └── page.jsx              # Home
└── components/
    ├── CharacterCard.jsx     # Card do personagem
    └── Header.jsx            # Cabeçalho (não utilizado)
```

## 🌐 API Utilizada

**Rick and Morty API**
- **URL Base:** `https://rickandmortyapi.com/api`
- **Endpoint:** `/character`
- **Documentação:** [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)
- **Características:** API REST pública, sem autenticação, paginação inclusa

### Atributos Principais:
- `id` - Identificador único
- `name` - Nome do personagem  
- `status` - Status (Alive, Dead, unknown)
- `species` - Espécie
- `type` - Tipo/Subtipo
- `gender` - Gênero
- `origin` - Local de origem
- `location` - Localização atual
- `image` - URL da imagem
- `episode` - Array de episódios

## 🚀 Como Executar

1. **Clone o repositório:**
```bash
git clone [url-do-repositorio]
cd god-of-war
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

## 📱 Funcionalidades

- ✅ **Navegação fluída** entre páginas
- ✅ **Listagem paginada** de personagens
- ✅ **Busca de detalhes** por ID
- ✅ **Loading states** durante requisições
- ✅ **Tratamento de erros** com mensagens amigáveis
- ✅ **Design responsivo** para mobile e desktop
- ✅ **Otimização de imagens** automática
- ✅ **Feedback visual** com toasts
- ✅ **Página 404** personalizada

## 🎨 Design

O projeto utiliza uma paleta de cores gradient com tons de azul, verde, roxo e rosa, criando uma experiência visual moderna e agradável. Todos os componentes foram estilizados com Tailwind CSS seguindo princípios de design consistentes.

## 📝 Observações

Este projeto foi desenvolvido como atividade acadêmica seguindo exatamente os requisitos solicitados, demonstrando competências em:

- Desenvolvimento com Next.js 15
- Consumo de APIs REST
- Componentização React
- Estilização com Tailwind CSS
- Otimização de performance
- UX/UI responsivo

---

**Desenvolvido por:** João Roberto Delgado  
**Turma:** Front-end  
**Escola:** Escola de Programação

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
