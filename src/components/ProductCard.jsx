import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            -{product.discount}%
          </div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Esgotado</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        
        {/* Product Name */}
        <h3 className="product-title font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="product-rating flex items-center space-x-1 mb-3">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="price-section flex items-center space-x-2 mb-4">
          <span className="product-price text-lg font-bold price-highlight">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Features */}
        <div className="product-features mb-4">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 3 && (
              <span className="text-xs text-gray-500">
                +{product.features.length - 3} mais
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`add-to-cart-btn w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-semibold transition-colors ${
            product.inStock
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="font-semibold">
            {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

