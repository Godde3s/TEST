import { Link } from 'react-router-dom';
import { ShoppingCart, Home, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Header.css';

function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <Package size={28} />
          <span>فروشگاه من</span>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">
            <Home size={20} />
            <span>خانه</span>
          </Link>
          <Link to="/products" className="nav-link">
            <Package size={20} />
            <span>محصولات</span>
          </Link>
        </nav>

        <Link to="/cart" className="cart-link">
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
