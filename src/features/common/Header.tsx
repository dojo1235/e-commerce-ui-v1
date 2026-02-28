import { useState } from 'react';
import { Menu, ShoppingCart, X, Search, User, Package, LogOut, ShieldAlert, Heart, LayoutDashboard, LogIn } from 'lucide-react';
import { Button, Badge } from '@/src/ui';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userEmail = "divinebriggs19@gmail.com";

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-bottom bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/" className="text-xl font-bold tracking-tight">
              SWIFTSHOP
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-zinc-600 transition-colors">Home</Link>
            <Link to="/" className="hover:text-zinc-600 transition-colors">Products</Link>
            <Link to="/orders" className="hover:text-zinc-600 transition-colors">Orders</Link>
            <Link to="/cart" className="hover:text-zinc-600 transition-colors">Cart</Link>
            <Link to="/login" className="hover:text-zinc-600 transition-colors">Login</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1">3</Badge>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-bottom">
          <span className="font-bold">Account</span>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6 border-bottom">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center">
              <User className="h-5 w-5 text-zinc-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">User Account</p>
              <p className="text-xs text-zinc-500 truncate">{userEmail}</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col p-4 gap-1">
          <Link to="/profile" onClick={toggleSidebar} className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors">
            <User className="h-4 w-4" />
            My Profile
          </Link>
          <Link to="/orders" onClick={toggleSidebar} className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors">
            <Package className="h-4 w-4" />
            My Orders
          </Link>
          <Link to="/wishlist" onClick={toggleSidebar} className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors">
            <Heart className="h-4 w-4" />
            Wishlist
          </Link>
          <Link to="/admin" onClick={toggleSidebar} className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors">
            <LayoutDashboard className="h-4 w-4" />
            Admin
          </Link>
          <Link to="/login" onClick={toggleSidebar} className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors">
            <LogIn className="h-4 w-4" />
            Login
          </Link>
        </nav>

        <div className="mt-auto p-4 border-t border-zinc-100">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <ShieldAlert className="mr-2 h-4 w-4" />
              Logout All
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
