import React from 'react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="hero-gradient">
        <div className="hero-section container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center">
            <h1 className="hero-title text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              A Tecnologia do
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Futuro Hoje
              </span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Descubra os produtos mais inovadores com os melhores preços. 
              Qualidade garantida, entrega rápida e suporte excepcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                Explorar Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Ver Ofertas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-8 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Entrega Rápida
              </h3>
              <p className="text-gray-600">
                Receba seus produtos em até 24h em todo o Brasil com nosso sistema de logística avançado.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compra Segura
              </h3>
              <p className="text-gray-600">
                Seus dados protegidos com criptografia de ponta e garantia total em todas as compras.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Frete Grátis
              </h3>
              <p className="text-gray-600">
                Frete grátis para compras acima de R$ 299 e descontos especiais para clientes VIP.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Produtos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

