import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import HomePage from './components/HomePage';
import AddProductPage from './components/AddProductPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/add" element={<AddProductPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
