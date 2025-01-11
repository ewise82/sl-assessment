import Header from './components/Header';
import ProductPage from './features/product/ProductPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <ProductPage />
      </main>
    </div>
  );
}

export default App;
