import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <div className="empty-cart">
          <h1>سبد خرید خالی است</h1>
          <Link to="/products" className="shop-btn">مشاهده محصولات</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />
      
      <div className="cart-container">
        <h1>سبد خرید</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">{item.price.toLocaleString('fa-IR')} تومان</p>
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>خلاصه سفارش</h2>
            <div className="summary-row">
              <span>مجموع:</span>
              <span>{total.toLocaleString('fa-IR')} تومان</span>
            </div>
            <Link to="/checkout" className="checkout-btn">
              ادامه فرآیند خرید
            </Link>
            <Link to="/products" className="continue-shopping">
              <ArrowLeft size={16} />
              <span>بازگشت به محصولات</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
