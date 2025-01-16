# Starsoft frontend challenge

**Versão: 0.1.0**

---

## Instruções para Configuração e Execução

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (v16 ou superior recomendado)
- **npm** ou **yarn**

---

### Tecnologias Utilizadas

- Next.js: Framework para renderização do lado do servidor e criação de aplicações React.
- Tailwind CSS: Biblioteca para estilização rápida e responsiva.
- Shadcn UI: Fornece componentes estilizados que combinam a acessibilidade do Radix UI com personalização via Tailwind CSS.
- Axios: Para gerenciamento de requisições HTTP.

---

### Justificativas

- Next.js: Escolhido por sua eficiência em renderização SSR (Server-Side Rendering) e SSG (Static Site Generation), ideal para projetos modernos e de alta performance.
- Tailwind CSS: Proporciona agilidade na criação de layouts sem sair do HTML.
- Shadcn UI: Utiliza os componentes acessíveis do Radix UI com estilização personalizada para integração mais simples ao Tailwind CSS.

---

### Passos para Configuração

1. **Clone o repositório**:
```
   git clone <URL_DO_REPOSITORIO>
   cd frontend-challenge
```

---

2. **Instale as dependências**:
```
npm install
```
ou
```
yarn install
```

---

### Comandos Disponíveis

- Desenvolvimento:
```
npm run dev
```
Executa o servidor de desenvolvimento do Next.js com Turbopack para maior desempenho.

- Build de Produção:
```
npm run build
```
Cria uma versão otimizada do projeto para produção.

- Iniciar Servidor de Produção:
```
npm run start
```
Inicia a aplicação usando o build de produção.

- Linting:
```
npm run lint
```
Verifica e corrige problemas de lint no código.
  
---

### Melhorias Futuras

1. Implementação de Testes Automatizados:
- Adicionar frameworks como Jest ou Testing Library para garantir a qualidade do código.

3. Aprimorar SEO e Acessibilidade:
- Melhorar metadados e tags semânticas para otimização de motores de busca e navegação acessível.

4. Internacionalização (i18n):
- Implementar suporte para múltiplos idiomas, ampliando o alcance da aplicação.

5. Monitoramento e Logging:
- Integrar ferramentas como Sentry para rastreamento de erros e monitoramento de desempenho.


















