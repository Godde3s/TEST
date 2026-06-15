import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    postalCode: ''
  });

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <Header />
        <div className="empty-checkout">
          <h1>سبد خرید شما خالی است</h1>
          <Link to="/products" className="shop-btn">مشاهده محصولات</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('سفارش شما با موفقیت ثبت شد!');
    clearCart();
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="checkout-page">
      <Header />
      
      <div className="checkout-container">
        <h1>تکمیل خرید</h1>
        
        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>اطلاعات ارسال</h2>
            
            <div className="form-group">
              <label>نام و نام خانوادگی</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>شماره تماس</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>آدرس</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="4"
              />
            </div>

            <div className="form-group">
              <label>کد پستی</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              <CheckCircle size={20} />
              <span>ثبت سفارش</span>
            </button>
          </form>

          <div className="order-summary">
            <h2>خلاصه سفارش</h2>
            
            <div className="order-items">
              {cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div className="order-item-info">
                    <span>{item.name}</span>
                    <span className="quantity">x{item.quantity}</span>
                  </div>
                  <span className="price">{(item.price * item.quantity).toLocaleString('fa-IR')}</span>
                </div>
              ))}
            </div>

            <div className="order-total">
              <span>مجموع کل:</span>
              <span>{total.toLocaleString('fa-IR')} تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
