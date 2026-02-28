import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Search, 
  MoreVertical,
  Ban,
  RotateCcw,
  Trash2,
  CheckCircle,
  X,
  Eye,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { Button, Input, Pagination } from '@/src/ui';
import { products, Product } from '@/src/data/products';
import { orders as initialOrders, Order } from '@/src/data/orders';
import { users as initialUsers, User } from '@/src/data/users';

type Tab = 'users' | 'products' | 'orders' | 'admins';

const StatusDropdown = ({ 
  currentStatus, 
  onStatusChange 
}: { 
  currentStatus: Order['status'], 
  onStatusChange: (status: Order['status']) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const statuses: Order['status'][] = ['Processing', 'Shipped', 'Delivered', 'Cancelled'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-emerald-50 text-emerald-600';
      case 'Shipped': return 'bg-blue-50 text-blue-600';
      case 'Cancelled': return 'bg-red-50 text-red-600';
      default: return 'bg-yellow-50 text-yellow-600';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border border-transparent hover:border-zinc-200 ${getStatusStyles(currentStatus)}`}
      >
        {currentStatus}
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-zinc-100 rounded-xl shadow-xl z-20 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => {
                onStatusChange(status);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-zinc-50 transition-colors ${
                currentStatus === status ? 'text-zinc-900 bg-zinc-50/50' : 'text-zinc-500'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('users');
  const [usersList, setUsersList] = useState<User[]>(initialUsers);
  const [ordersList, setOrdersList] = useState<Order[]>(initialOrders);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handleUserAction = (userId: string, action: 'Ban' | 'Unban' | 'Restore' | 'Delete') => {
    setUsersList(usersList.map(u => {
      if (u.id === userId) {
        if (action === 'Ban') return { ...u, status: 'Banned' as const };
        if (action === 'Unban' || action === 'Restore') return { ...u, status: 'Active' as const };
        if (action === 'Delete') return { ...u, status: 'Deleted' as const };
      }
      return u;
    }));
  };

  const handleOrderStatusChange = (orderId: string, newStatus: Order['status']) => {
    setOrdersList(ordersList.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  const renderUserTable = (users: User[], title: string) => {
    const totalPages = Math.ceil(users.length / itemsPerPage);
    const paginatedUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
      <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-sm text-zinc-500">Count: {users.length}</p>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input placeholder="Search..." className="pl-10" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-zinc-50 text-zinc-500 uppercase text-[10px] font-bold tracking-wider">
                <th className="px-6 py-3">User</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} className="h-10 w-10 rounded-full object-cover border border-zinc-100" alt="" />
                      <span className="font-medium text-zinc-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                      user.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 
                      user.status === 'Banned' ? 'bg-red-50 text-red-600' : 
                      user.status === 'Deleted' ? 'bg-zinc-100 text-zinc-400 line-through' : 'bg-zinc-100 text-zinc-600'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{user.role}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" onClick={() => setSelectedItem({ type: 'user', data: user })} title="View Details">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {user.status === 'Active' ? (
                        <Button variant="ghost" size="icon" className="text-red-500" onClick={() => handleUserAction(user.id, 'Ban')} title="Ban User">
                          <Ban className="h-4 w-4" />
                        </Button>
                      ) : user.status === 'Banned' ? (
                        <Button variant="ghost" size="icon" className="text-emerald-500" onClick={() => handleUserAction(user.id, 'Unban')} title="Unban User">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      ) : null}
                      {user.status !== 'Active' && (
                        <Button variant="ghost" size="icon" className="text-zinc-500" onClick={() => handleUserAction(user.id, 'Restore')} title="Restore User">
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      )}
                      {user.status !== 'Deleted' && (
                        <Button variant="ghost" size="icon" className="text-red-600" onClick={() => handleUserAction(user.id, 'Delete')} title="Delete User">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-zinc-100">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        </div>
      </div>
    );
  };

  const renderProducts = () => {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
      <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-lg">Product Management</h2>
            <p className="text-sm text-zinc-500">Total Products: {products.length}</p>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-zinc-50 text-zinc-500 uppercase text-[10px] font-bold tracking-wider">
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {paginatedProducts.map((product) => (
                <tr key={product.id} className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} className="h-10 w-10 rounded-lg object-cover border border-zinc-100" alt="" />
                      <span className="font-medium text-zinc-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{product.category}</td>
                  <td className="px-6 py-4 font-semibold text-zinc-900">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-xs font-medium">In Stock</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" onClick={() => setSelectedItem({ type: 'product', data: product })}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-zinc-100">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        </div>
      </div>
    );
  };

  const renderOrders = () => {
    const totalPages = Math.ceil(ordersList.length / itemsPerPage);
    const paginatedOrders = ordersList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
      <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-lg">Order Management</h2>
            <p className="text-sm text-zinc-500">Total Orders: {ordersList.length}</p>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input placeholder="Search orders..." className="pl-10" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-zinc-50 text-zinc-500 uppercase text-[10px] font-bold tracking-wider">
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Total</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {paginatedOrders.map((order) => (
                <tr key={order.id} className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="px-6 py-4 font-bold text-zinc-900">{order.id}</td>
                  <td className="px-6 py-4 text-zinc-500">{order.date}</td>
                  <td className="px-6 py-4 font-semibold text-zinc-900">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <StatusDropdown 
                      currentStatus={order.status}
                      onStatusChange={(newStatus) => handleOrderStatusChange(order.id, newStatus)}
                    />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" onClick={() => setSelectedItem({ type: 'order', data: order })}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-zinc-100">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-zinc-50/50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <LayoutDashboard className="h-6 w-6" />
            Admin Panel
          </h1>
          <p className="text-zinc-500">Manage your users, products, and orders in one place.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <Button 
            variant={activeTab === 'users' ? 'primary' : 'outline'} 
            className="gap-2 min-w-[140px]"
            onClick={() => setActiveTab('users')}
          >
            <Users className="h-4 w-4" />
            Users
          </Button>
          <Button 
            variant={activeTab === 'products' ? 'primary' : 'outline'} 
            className="gap-2 min-w-[140px]"
            onClick={() => setActiveTab('products')}
          >
            <Package className="h-4 w-4" />
            Products
          </Button>
          <Button 
            variant={activeTab === 'orders' ? 'primary' : 'outline'} 
            className="gap-2 min-w-[140px]"
            onClick={() => setActiveTab('orders')}
          >
            <ShoppingCart className="h-4 w-4" />
            Orders
          </Button>
          <Button 
            variant={activeTab === 'admins' ? 'primary' : 'outline'} 
            className="gap-2 min-w-[140px]"
            onClick={() => setActiveTab('admins')}
          >
            <ShieldCheck className="h-4 w-4" />
            Admins
          </Button>
        </div>

        {/* Content Area */}
        <div className="relative">
          {activeTab === 'users' && renderUserTable(usersList.filter(u => u.role === 'User'), 'User Management')}
          {activeTab === 'products' && renderProducts()}
          {activeTab === 'orders' && renderOrders()}
          {activeTab === 'admins' && renderUserTable(usersList.filter(u => u.role === 'Admin'), 'Admin Management')}
        </div>

        {/* Details Sidebar/Modal Overlay */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-sm">
            <div className="h-full w-full max-w-md bg-white shadow-2xl animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between p-6 border-b border-zinc-100">
                <h3 className="font-bold text-lg capitalize">{selectedItem.type} Details</h3>
                <Button variant="ghost" size="icon" onClick={() => setSelectedItem(null)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">
                {selectedItem.type === 'user' && (
                  <div className="space-y-6">
                    <div className="flex flex-col items-center text-center">
                      <img src={selectedItem.data.avatar} className="h-24 w-24 rounded-full border-4 border-zinc-50 mb-4" alt="" />
                      <h4 className="text-xl font-bold">{selectedItem.data.name}</h4>
                      <p className="text-zinc-500">{selectedItem.data.email}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <div className="p-3 rounded-xl bg-zinc-50">
                        <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Status</p>
                        <p className="font-medium">{selectedItem.data.status}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-zinc-50">
                        <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Role</p>
                        <p className="font-medium">{selectedItem.data.role}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-zinc-50 col-span-2">
                        <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Joined Date</p>
                        <p className="font-medium">{selectedItem.data.joinedDate}</p>
                      </div>
                    </div>
                  </div>
                )}
                {selectedItem.type === 'product' && (
                  <div className="space-y-6">
                    <img src={selectedItem.data.image} className="w-full aspect-square rounded-2xl object-cover border border-zinc-100" alt="" />
                    <div>
                      <h4 className="text-xl font-bold mb-1">{selectedItem.data.name}</h4>
                      <p className="text-zinc-500">{selectedItem.data.category}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-xl bg-zinc-50">
                        <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Price</p>
                        <p className="font-bold text-lg">${selectedItem.data.price.toFixed(2)}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-zinc-50">
                        <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Stock</p>
                        <p className="font-medium">In Stock</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-50">
                      <p className="text-xs text-zinc-500 uppercase font-bold mb-2">Description</p>
                      <p className="text-sm text-zinc-600 leading-relaxed">{selectedItem.data.description}</p>
                    </div>
                  </div>
                )}
                {selectedItem.type === 'order' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold">{selectedItem.data.id}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        selectedItem.data.status === 'Delivered' ? 'bg-green-50 text-green-600' : 
                        selectedItem.data.status === 'Shipped' ? 'bg-blue-50 text-blue-600' : 
                        selectedItem.data.status === 'Cancelled' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'
                      }`}>
                        {selectedItem.data.status}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm text-zinc-500">Placed on {selectedItem.data.date}</p>
                      <div className="p-4 rounded-xl bg-zinc-50 space-y-3">
                        <p className="text-xs text-zinc-500 uppercase font-bold">Shipping Address</p>
                        <p className="text-sm">{selectedItem.data.shippingAddress}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-50 space-y-3">
                        <p className="text-xs text-zinc-500 uppercase font-bold">Items</p>
                        <div className="space-y-2">
                          {selectedItem.data.items.map((item: any, i: number) => (
                            <div key={i} className="flex justify-between text-sm">
                              <span>{item.product.name} x {item.quantity}</span>
                              <span className="font-bold">${(item.priceAtPurchase * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-2 border-t border-zinc-200 flex justify-between font-bold">
                          <span>Total</span>
                          <span>${selectedItem.data.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
