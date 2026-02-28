import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './features/common/Header';
import { Footer } from './features/common/Footer';
import { HomePage } from './pages/HomePage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
import { OrdersPage } from './pages/OrdersPage';
import { OrderDetailsPage } from './pages/OrderDetailsPage';
import { WishlistPage } from './pages/WishlistPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col font-sans text-zinc-900 antialiased">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/orders/:id" element={<OrderDetailsPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
