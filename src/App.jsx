import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AuthModal from './components/AuthModal';
import './App.css';
import './mobile.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const handleCheckout = () => {
    // Implementar checkout
    alert('Funcionalidade de checkout em desenvolvimento!');
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header 
            onCartOpen={() => setIsCartOpen(true)}
            onAuthOpen={() => setIsAuthOpen(true)}
          />
          
          <main>
            {currentView === 'home' && (
              <>
                <Hero />
                <ProductList />
              </>
            )}
          </main>

          {/* Cart Sidebar */}
          <Cart 
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleCheckout}
          />

          {/* Auth Modal */}
          <AuthModal 
            isOpen={isAuthOpen}
            onClose={() => setIsAuthOpen(false)}
          />

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">TechStore</h3>
                  <p className="text-gray-400">
                    A melhor loja de tecnologia do Brasil. Produtos originais, 
                    preços justos e entrega rápida.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Produtos</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Smartphones</li>
                    <li>Laptops</li>
                    <li>Tablets</li>
                    <li>Áudio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Suporte</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Central de Ajuda</li>
                    <li>Contato</li>
                    <li>Garantia</li>
                    <li>Devolução</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Empresa</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Sobre Nós</li>
                    <li>Carreiras</li>
                    <li>Blog</li>
                    <li>Imprensa</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 TechStore. Desenvolvido por João Rabelo. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
