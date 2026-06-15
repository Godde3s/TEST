import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price.toLocaleString('fa-IR')} تومان</p>
        </div>
      </Link>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        <ShoppingCart size={18} />
        <span>افزودن به سبد</span>
      </button>
    </div>
  );
}

export default ProductCard;
