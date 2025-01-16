# Starsoft - Mochila de Compras

Bem-vindo ao projeto **Starsoft - Mochila de Compras**! Este é um projeto de e-commerce focado na exibição de itens, permitindo que os usuários adicionem produtos à "Mochila de Compras" e visualizem o total acumulado. O projeto utiliza tecnologias modernas como **Next.js** e **TypeScript**, garantindo uma experiência eficiente e escalável.

---

## 🚀 Funcionalidades Implementadas

- **Catálogo de Produtos**:
  - Exibição de produtos com imagem, nome, descrição e preço.
  - Botão "COMPRAR" para adicionar produtos ao carrinho.

- **Mochila de Compras (Carrinho)**:
  - Painel lateral interativo para visualizar os produtos adicionados.
  - Ajuste de quantidade diretamente no carrinho.
  - Cálculo dinâmico do total acumulado em ETH.
  - Remoção de itens do carrinho.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **Next.js**: Framework React para renderização no lado do servidor e client.
- **TypeScript**: Linguagem com tipagem estática para maior segurança e clareza no desenvolvimento.
- **TailwindCSS**: Framework de estilos utilitários para criar uma interface responsiva e moderna.
- **SHADCN UI**: Biblioteca de componentes para criar o painel lateral (`Sheet`).

### **Justificativas Técnicas**
- **Next.js**: Escolhido pela capacidade de renderizar componentes de forma híbrida (SSR e CSR), facilitando otimizações de desempenho.
- **TypeScript**: Garante maior confiabilidade no desenvolvimento ao evitar erros comuns.
- **TailwindCSS**: Simplifica a aplicação de estilos, reduzindo o uso de CSS adicional e aumentando a produtividade.
- **SHADCN UI**: Proporciona componentes acessíveis e de fácil personalização, como o painel lateral (`Sheet`).

---

## 🛠️ Configuração e Execução

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js** (versão >= 14.x)
- **npm** ou **yarn**

### Passos para Rodar

1. **Clone o Repositório**:
```
git clone https://github.com/seu-usuario/starsoft-mochila-compras.git
cd starsoft-mochila-compras
```
   
2. **Instale as Dependências**:

```
npm install
# ou
yarn install
```

3. **Inicie o Servidor de Desenvolvimento**:

```
npm run dev
# ou
yarn dev
```

4. **Acesse no Navegador**:

Acesse
```
http://localhost:3000
```
para visualizar a aplicação.

💡 Possíveis Limitações e Melhorias Futuras

## Limitações
- Gerenciamento de Estado:

Atualmente, o carrinho utiliza useState diretamente no componente RootLayout. Isso pode limitar a escalabilidade caso o projeto cresça.

- Persistência de Dados:

Os itens do carrinho não são persistidos. Após um refresh da página, os dados do carrinho são perdidos.

- Validação de Estoque:

Não há verificação de estoque ou limites para produtos adicionados.

## Melhorias Futuras

- Gerenciamento Global de Estado:

Implementar Context API ou bibliotecas como Redux para melhorar o controle do estado global.

- Persistência de Dados:

Utilizar LocalStorage, IndexedDB ou uma API backend para salvar o estado do carrinho.

- Autenticação de Usuários:

Implementar login e perfis para usuários, possibilitando carrinhos personalizados.

- Teste Automatizado:

Adicionar testes unitários e de integração com bibliotecas como Jest e React Testing Library.

- Design e Interatividade:

Melhorar a interface da mochila de compras para incluir mais detalhes do produto.

---

🤝 Contribuição
Sinta-se à vontade para contribuir com o projeto! Faça um fork do repositório e envie um Pull Request com as suas melhorias.

---

✨ Obrigado por visitar o projeto! Se gostou, não esqueça de deixar uma ⭐ no repositório!
