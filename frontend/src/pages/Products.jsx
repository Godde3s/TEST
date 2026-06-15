import { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import './Products.css';

const products = [
  { id: 1, name: 'گوشی موبایل', price: 15999000, image: 'https://via.placeholder.com/300x200?text=Phone', category: 'electronics' },
  { id: 2, name: 'لپ‌تاپ', price: 45999000, image: 'https://via.placeholder.com/300x200?text=Laptop', category: 'electronics' },
  { id: 3, name: 'هدفون', price: 2999000, image: 'https://via.placeholder.com/300x200?text=Headphone', category: 'electronics' },
  { id: 4, name: 'ساعت هوشمند', price: 8999000, image: 'https://via.placeholder.com/300x200?text=Watch', category: 'electronics' },
  { id: 5, name: 'کفش ورزشی', price: 1899000, image: 'https://via.placeholder.com/300x200?text=Shoes', category: 'fashion' },
  { id: 6, name: 'کیف', price: 999000, image: 'https://via.placeholder.com/300x200?text=Bag', category: 'fashion' },
  { id: 7, name: 'عینک آفتابی', price: 599000, image: 'https://via.placeholder.com/300x200?text=Sunglasses', category: 'fashion' },
  { id: 8, name: 'کتاب', price: 150000, image: 'https://via.placeholder.com/300x200?text=Book', category: 'books' },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'همه' },
    { id: 'electronics', name: 'الکترونیک' },
    { id: 'fashion', name: 'مد و پوشاک' },
    { id: 'books', name: 'کتاب' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page">
      <Header />
      
      <div className="products-container">
        <h1>محصولات</h1>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
