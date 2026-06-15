import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import './ProductDetail.css';

const products = [
  { id: 1, name: 'گوشی موبایل', price: 15999000, image: 'https://via.placeholder.com/400x300?text=Phone', description: 'یک گوشی موبایل با کیفیت بالا و ویژگی‌های عالی', category: 'electronics' },
  { id: 2, name: 'لپ‌تاپ', price: 45999000, image: 'https://via.placeholder.com/400x300?text=Laptop', description: 'لپ‌تاپ قدرتمند برای کار و بازی', category: 'electronics' },
  { id: 3, name: 'هدفون', price: 2999000, image: 'https://via.placeholder.com/400x300?text=Headphone', description: 'هدفون بی‌سیم با کیفیت صدای عالی', category: 'electronics' },
  { id: 4, name: 'ساعت هوشمند', price: 8999000, image: 'https://via.placeholder.com/400x300?text=Watch', description: 'ساعت هوشمند با امکانات کامل', category: 'electronics' },
  { id: 5, name: 'کفش ورزشی', price: 1899000, image: 'https://via.placeholder.com/400x300?text=Shoes', description: 'کفش ورزشی راحت و سبک', category: 'fashion' },
  { id: 6, name: 'کیف', price: 999000, image: 'https://via.placeholder.com/400x300?text=Bag', description: 'کیف شیک و جادار', category: 'fashion' },
  { id: 7, name: 'عینک آفتابی', price: 599000, image: 'https://via.placeholder.com/400x300?text=Sunglasses', description: 'عینک آفتابی با محافظ UV', category: 'fashion' },
  { id: 8, name: 'کتاب', price: 150000, image: 'https://via.placeholder.com/400x300?text=Book', description: 'کتاب جذاب و خواندنی', category: 'books' },
];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-page">
        <Header />
        <div className="not-found">
          <h1>محصول یافت نشد</h1>
          <Link to="/products" className="back-btn">بازگشت به محصولات</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail-page">
      <Header />
      
      <div className="product-detail-container">
        <Link to="/products" className="back-link">
          <ArrowLeft size={20} />
          <span>بازگشت به محصولات</span>
        </Link>

        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-detail-price">{product.price.toLocaleString('fa-IR')} تومان</p>
            <p className="product-detail-description">{product.description}</p>
            
            <button className="add-to-cart-large" onClick={handleAddToCart}>
              <ShoppingCart size={20} />
              <span>افزودن به سبد خرید</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
