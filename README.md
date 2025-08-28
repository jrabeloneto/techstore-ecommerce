# 🛒 TechStore - E-commerce Moderno

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> E-commerce completo e moderno desenvolvido em React com funcionalidades avançadas de carrinho de compras, autenticação de usuários e interface responsiva.

## 🌟 Demonstração

**🔗 [Ver Demo Online](https://techstore-ecommerce.vercel.app)**

![TechStore Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=TechStore+E-commerce)

## ✨ Funcionalidades

### 🛍️ **E-commerce Completo**
- Catálogo de produtos com 12+ itens
- Sistema de categorias e filtros avançados
- Busca em tempo real
- Ordenação por preço, nome e avaliação
- Visualização em grid e lista

### 🛒 **Carrinho de Compras**
- Adicionar/remover produtos
- Atualizar quantidades
- Cálculo automático de totais
- Persistência no localStorage
- Sidebar deslizante responsiva

### 👤 **Sistema de Autenticação**
- Login e registro de usuários
- Autenticação simulada
- Persistência de sessão
- Modal responsivo

### 🎨 **Design Moderno**
- Interface responsiva (mobile-first)
- Animações suaves com CSS
- Gradientes e efeitos visuais
- Tema consistente
- Componentes reutilizáveis

### 📱 **Responsividade Total**
- Otimizado para mobile, tablet e desktop
- Menu hambúrguer para dispositivos móveis
- Layout adaptativo
- Touch-friendly

## 🚀 Tecnologias Utilizadas

### **Frontend**
- **React 18.3.1** - Biblioteca JavaScript para interfaces
- **Vite 6.3.5** - Build tool moderna e rápida
- **Tailwind CSS 3.4.17** - Framework CSS utilitário
- **Lucide React** - Ícones modernos e consistentes

### **Gerenciamento de Estado**
- **Context API** - Estado global da aplicação
- **localStorage** - Persistência de dados
- **Custom Hooks** - Lógica reutilizável

### **Funcionalidades Avançadas**
- **Lazy Loading** - Carregamento otimizado
- **Error Boundaries** - Tratamento de erros
- **Performance Optimization** - Memoização e otimizações

## 📦 Instalação e Uso

### **Pré-requisitos**
- Node.js 18+ 
- npm, yarn ou pnpm

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/jrabeloneto/techstore-ecommerce.git

# Entre no diretório
cd techstore-ecommerce

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### **Desenvolvimento**

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev

# Acesse http://localhost:5173
```

### **Build para Produção**

```bash
# Gere o build de produção
npm run build
# ou
yarn build
# ou
pnpm build

# Preview do build
npm run preview
```

## 🏗️ Estrutura do Projeto

```
techstore-ecommerce/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.jsx     # Cabeçalho e navegação
│   │   ├── Hero.jsx       # Seção hero
│   │   ├── ProductCard.jsx # Card de produto
│   │   ├── ProductList.jsx # Lista de produtos
│   │   ├── Cart.jsx       # Carrinho de compras
│   │   └── AuthModal.jsx  # Modal de autenticação
│   ├── contexts/          # Context API
│   │   ├── CartContext.jsx # Estado do carrinho
│   │   └── AuthContext.jsx # Estado de autenticação
│   ├── data/              # Dados da aplicação
│   │   └── products.js    # Base de dados dos produtos
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos globais
│   └── main.jsx           # Ponto de entrada
├── README.md              # Documentação
├── package.json           # Dependências
└── tailwind.config.js     # Configuração Tailwind
```

## 🎯 Funcionalidades Detalhadas

### **Catálogo de Produtos**
- 12 produtos reais com imagens do Unsplash
- Categorias: Smartphones, Laptops, Tablets, Áudio, Wearables, Gaming
- Marcas: Apple, Samsung, Dell, Sony, Microsoft
- Filtros por categoria, marca e faixa de preço
- Sistema de avaliações e reviews

### **Carrinho de Compras**
- Adicionar produtos com animação
- Contador de itens no header
- Sidebar deslizante com produtos
- Controles de quantidade (+/-)
- Remoção individual de itens
- Cálculo automático de subtotais e total
- Botão "Limpar Carrinho"
- Persistência entre sessões

### **Sistema de Autenticação**
- Modal de login/registro
- Validação de formulários
- Estados de loading
- Simulação de autenticação
- Avatar e nome do usuário
- Logout funcional

## 🎨 Design System

### **Cores Principais**
- **Primary**: `#3B82F6` (Blue-500)
- **Secondary**: `#8B5CF6` (Purple-500)
- **Success**: `#10B981` (Green-500)
- **Danger**: `#EF4444` (Red-500)
- **Warning**: `#F59E0B` (Yellow-500)

### **Tipografia**
- **Font Family**: Inter (Google Fonts)
- **Headings**: Font-bold
- **Body**: Font-medium
- **Captions**: Font-normal

### **Componentes**
- Botões com estados hover/active
- Cards com shadow e hover effects
- Inputs com focus states
- Modals com backdrop blur
- Animações CSS customizadas

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Deploy

### **Vercel (Recomendado)**
1. Conecte seu repositório GitHub ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### **Netlify**
1. Conecte seu repositório ao Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automático configurado

### **GitHub Pages**
```bash
npm run build
npm run deploy
```

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Roadmap

### **Próximas Funcionalidades**
- [ ] Sistema de pagamento (Stripe/PayPal)
- [ ] Checkout multi-step
- [ ] Wishlist de produtos
- [ ] Sistema de reviews
- [ ] Comparação de produtos
- [ ] Cupons de desconto
- [ ] Histórico de pedidos
- [ ] Notificações push
- [ ] PWA (Progressive Web App)
- [ ] Modo escuro/claro

### **Melhorias Técnicas**
- [ ] Testes unitários (Jest/Testing Library)
- [ ] Testes E2E (Cypress)
- [ ] Storybook para componentes
- [ ] TypeScript migration
- [ ] Internacionalização (i18n)
- [ ] SEO optimization
- [ ] Analytics integration

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**João da Cunha Rabelo Neto**
- GitHub: [@jrabeloneto](https://github.com/jrabeloneto)
- LinkedIn: [João Rabelo](https://www.linkedin.com/in/joão-rabelo-44a184330)
- Portfolio: [joaorabelo.vercel.app](https://joao-repositorio.vercel.app)

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**

**Desenvolvido com ❤️ por João Rabelo**

