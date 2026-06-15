import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import Header from '../components/Header';
import './Home.css';

const featuredProducts = [
  { id: 1, name: 'محصول ویژه ۱', price: 299000, image: 'https://via.placeholder.com/300x200?text=Product+1' },
  { id: 2, name: 'محصول ویژه ۲', price: 459000, image: 'https://via.placeholder.com/300x200?text=Product+2' },
  { id: 3, name: 'محصول ویژه ۳', price: 189000, image: 'https://via.placeholder.com/300x200?text=Product+3' },
];

function Home() {
  return (
    <div className="home">
      <Header />
      
      <section className="hero-section">
        <div className="hero-content">
          <h1>به فروشگاه ما خوش آمدید</h1>
          <p>بهترین محصولات با بهترین قیمت‌ها</p>
          <Link to="/products" className="cta-button">
            مشاهده محصولات
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <Zap size={40} color="#667eea" />
          <h3>ارسال سریع</h3>
          <p>تحویل فوری در تهران و شهرستان‌ها</p>
        </div>
        <div className="feature">
          <Shield size={40} color="#667eea" />
          <h3>ضمانت اصالت</h3>
          <p>تمامی محصولات اورجینال هستند</p>
        </div>
        <div className="feature">
          <Truck size={40} color="#667eea" />
          <h3>ارسال رایگان</h3>
          <p>برای خریدهای بالای ۵۰۰ هزار تومان</p>
        </div>
      </section>

      <section className="featured-products">
        <h2>محصولات ویژه</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card-simple">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString('fa-IR')} تومان</p>
              <Link to={`/product/${product.id}`} className="view-btn">مشاهده جزئیات</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
