import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchProducts } from './productSlice';
import Chart from '../../components/Chart';
import Table from '../../components/Table';
import './ProductPage.css';

const ProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return null; 

  const product = data[0];

  return (
    <div className="product-page">
      <aside className="sidebar">
        <img className="product-image" src={product.image} alt={product.title} />
        <h1 className="product-title">{product.title}</h1>
        <h2 className="product-subtitle">{product.subtitle}</h2>
        <div className="tags">
          {product.tags.map((tag: string) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </aside>

      <section className="product-details">
        <div className="chart-card">
          <h3>Retail Sales</h3>
          <Chart data={product.sales}  />
        </div>
        <div className="table-card">
          <Table data={product.sales}  />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
