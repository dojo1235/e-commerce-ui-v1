import { Product, products } from './products';

export interface OrderItem {
  product: Product;
  quantity: number;
  priceAtPurchase: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: OrderItem[];
  total: number;
  shippingAddress: string;
  paymentMethod: string;
}

export const orders: Order[] = [
  {
    id: "ORD-7721",
    date: "2024-02-15",
    status: "Delivered",
    total: 328.99,
    shippingAddress: "123 Main St, New York, NY 10001",
    paymentMethod: "Visa ending in 4242",
    items: [
      {
        product: products[0],
        quantity: 1,
        priceAtPurchase: 199.99
      },
      {
        product: products[1],
        quantity: 1,
        priceAtPurchase: 129.00
      }
    ]
  },
  {
    id: "ORD-8832",
    date: "2024-02-20",
    status: "Shipped",
    total: 79.99,
    shippingAddress: "123 Main St, New York, NY 10001",
    paymentMethod: "Apple Pay",
    items: [
      {
        product: products[2],
        quantity: 1,
        priceAtPurchase: 79.99
      }
    ]
  },
  {
    id: "ORD-9943",
    date: "2024-02-25",
    status: "Processing",
    total: 225.00,
    shippingAddress: "123 Main St, New York, NY 10001",
    paymentMethod: "Mastercard ending in 5555",
    items: [
      {
        product: products[3],
        quantity: 5,
        priceAtPurchase: 45.00
      }
    ]
  },
  {
    id: "ORD-1054",
    date: "2024-02-28",
    status: "Cancelled",
    total: 180.00,
    shippingAddress: "123 Main St, New York, NY 10001",
    paymentMethod: "Visa ending in 4242",
    items: [
      {
        product: products[5],
        quantity: 1,
        priceAtPurchase: 180.00
      }
    ]
  },
  {
    id: "ORD-2001",
    date: "2024-03-01",
    status: "Processing",
    total: 150.00,
    shippingAddress: "456 Park Ave, Chicago, IL 60601",
    paymentMethod: "Visa ending in 1234",
    items: [{ product: products[0], quantity: 1, priceAtPurchase: 150.00 }]
  },
  {
    id: "ORD-2002",
    date: "2024-03-02",
    status: "Shipped",
    total: 85.50,
    shippingAddress: "789 Oak St, Los Angeles, CA 90001",
    paymentMethod: "Mastercard ending in 8888",
    items: [{ product: products[1], quantity: 1, priceAtPurchase: 85.50 }]
  },
  {
    id: "ORD-2003",
    date: "2024-03-03",
    status: "Delivered",
    total: 210.00,
    shippingAddress: "321 Pine Rd, Seattle, WA 98101",
    paymentMethod: "PayPal",
    items: [{ product: products[2], quantity: 2, priceAtPurchase: 105.00 }]
  },
  {
    id: "ORD-2004",
    date: "2024-03-04",
    status: "Processing",
    total: 45.00,
    shippingAddress: "654 Maple Dr, Austin, TX 78701",
    paymentMethod: "Apple Pay",
    items: [{ product: products[3], quantity: 1, priceAtPurchase: 45.00 }]
  },
  {
    id: "ORD-2005",
    date: "2024-03-05",
    status: "Shipped",
    total: 120.00,
    shippingAddress: "987 Cedar Ln, Miami, FL 33101",
    paymentMethod: "Visa ending in 5678",
    items: [{ product: products[4], quantity: 1, priceAtPurchase: 120.00 }]
  },
  {
    id: "ORD-2006",
    date: "2024-03-06",
    status: "Delivered",
    total: 300.00,
    shippingAddress: "159 Birch St, Denver, CO 80201",
    paymentMethod: "Google Pay",
    items: [{ product: products[5], quantity: 1, priceAtPurchase: 300.00 }]
  },
  {
    id: "ORD-2007",
    date: "2024-03-07",
    status: "Cancelled",
    total: 55.00,
    shippingAddress: "753 Elm St, Boston, MA 02101",
    paymentMethod: "Mastercard ending in 1111",
    items: [{ product: products[6], quantity: 1, priceAtPurchase: 55.00 }]
  },
  {
    id: "ORD-2008",
    date: "2024-03-08",
    status: "Processing",
    total: 95.00,
    shippingAddress: "852 Walnut Ave, Phoenix, AZ 85001",
    paymentMethod: "Visa ending in 9999",
    items: [{ product: products[7], quantity: 1, priceAtPurchase: 95.00 }]
  },
  {
    id: "ORD-2009",
    date: "2024-03-09",
    status: "Shipped",
    total: 175.00,
    shippingAddress: "369 Spruce St, Portland, OR 97201",
    paymentMethod: "Apple Pay",
    items: [{ product: products[0], quantity: 1, priceAtPurchase: 175.00 }]
  },
  {
    id: "ORD-2010",
    date: "2024-03-10",
    status: "Delivered",
    total: 60.00,
    shippingAddress: "147 Ash Rd, Atlanta, GA 30301",
    paymentMethod: "PayPal",
    items: [{ product: products[1], quantity: 1, priceAtPurchase: 60.00 }]
  }
];
