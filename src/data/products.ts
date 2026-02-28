export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  description: string;
  specs: Record<string, string>;
  reviews: { id: number; user: string; rating: number; comment: string }[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    oldPrice: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
    description: "Experience studio-quality sound with our premium wireless headphones. Featuring active noise cancellation and 40-hour battery life.",
    specs: {
      "Battery Life": "40 Hours",
      "Noise Cancellation": "Active",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g"
    },
    reviews: [
      { id: 1, user: "John Doe", rating: 5, comment: "Best headphones I've ever owned!" },
      { id: 2, user: "Jane Smith", rating: 4, comment: "Great sound quality, but a bit heavy." },
      { id: 3, user: "Alice Johnson", rating: 5, comment: "The noise cancellation is incredible." },
      { id: 4, user: "Bob Wilson", rating: 4, comment: "Battery life is as advertised. Very happy." },
      { id: 5, user: "Charlie Brown", rating: 3, comment: "Good sound, but the ear pads are a bit tight." },
      { id: 6, user: "Diana Prince", rating: 5, comment: "Perfect for my long flights. Highly recommend!" },
      { id: 7, user: "Edward Norton", rating: 4, comment: "Solid build quality and great bass." },
      { id: 8, user: "Fiona Apple", rating: 5, comment: "Crystal clear audio. Worth every penny." }
    ]
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 129.00,
    oldPrice: 159.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Accessories",
    description: "A timeless piece for the modern individual. Genuine leather strap with a minimalist stainless steel dial.",
    specs: {
      "Strap Material": "Genuine Leather",
      "Case Material": "Stainless Steel",
      "Water Resistance": "5 ATM",
      "Movement": "Quartz"
    },
    reviews: [
      { id: 1, user: "George Miller", rating: 5, comment: "Elegant and simple. Exactly what I wanted." },
      { id: 2, user: "Hannah Montana", rating: 4, comment: "Beautiful watch, but the strap is a bit stiff at first." },
      { id: 3, user: "Ian Wright", rating: 5, comment: "Gets compliments every time I wear it." },
      { id: 4, user: "Julia Roberts", rating: 3, comment: "Nice design, but the face is smaller than I expected." },
      { id: 5, user: "Kevin Hart", rating: 5, comment: "Great value for the price. Looks expensive." }
    ]
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
    category: "Electronics",
    description: "Track your health and fitness goals with precision. Heart rate monitoring, sleep tracking, and GPS built-in.",
    specs: {
      "Display": "AMOLED",
      "Battery": "14 Days",
      "Waterproof": "IP68",
      "Sensors": "Heart Rate, SpO2"
    },
    reviews: []
  },
  {
    id: 4,
    name: "Eco-Friendly Yoga Mat",
    price: 45.00,
    oldPrice: 55.00,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80",
    category: "Fitness",
    description: "Non-slip, biodegradable yoga mat designed for comfort and sustainability. Perfect for all types of practice.",
    specs: {
      "Material": "Natural Rubber",
      "Thickness": "6mm",
      "Dimensions": "183cm x 61cm",
      "Weight": "2.5kg"
    },
    reviews: []
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=800&q=80",
    category: "Electronics",
    description: "Big sound in a small package. Waterproof and rugged, perfect for outdoor adventures.",
    specs: {
      "Power": "20W",
      "Battery": "12 Hours",
      "Waterproof": "IPX7",
      "Bluetooth": "5.1"
    },
    reviews: []
  },
  {
    id: 6,
    name: "Designer Sunglasses",
    price: 180.00,
    oldPrice: 220.00,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    category: "Accessories",
    description: "Protect your eyes in style. Polarized lenses with a classic frame design that never goes out of fashion.",
    specs: {
      "Lens": "Polarized",
      "UV Protection": "100% UVA/UVB",
      "Frame": "Acetate",
      "Gender": "Unisex"
    },
    reviews: []
  },
  {
    id: 7,
    name: "Mechanical Gaming Keyboard",
    price: 149.99,
    oldPrice: 179.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80",
    category: "Electronics",
    description: "Ultra-responsive mechanical switches with customizable RGB lighting. Built for performance and durability.",
    specs: {
      "Switches": "Mechanical Brown",
      "Backlight": "RGB",
      "Connection": "USB-C",
      "Keycaps": "PBT Doubleshot"
    },
    reviews: []
  },
  {
    id: 8,
    name: "Ergonomic Office Chair",
    price: 299.00,
    image: "https://images.unsplash.com/photo-1505797149-43b007664a3d?w=800&q=80",
    category: "Furniture",
    description: "Stay comfortable during long work hours. Fully adjustable lumbar support, armrests, and headrest.",
    specs: {
      "Material": "Breathable Mesh",
      "Adjustment": "4D Armrests",
      "Weight Capacity": "150kg",
      "Base": "Aluminum"
    },
    reviews: []
  },
  {
    id: 9,
    name: "Smart Home Security Camera",
    price: 89.00,
    oldPrice: 119.00,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=80",
    category: "Electronics",
    description: "Monitor your home from anywhere. 2K resolution, night vision, and two-way audio.",
    specs: {
      "Resolution": "2K QHD",
      "Field of View": "160°",
      "Storage": "Cloud/MicroSD",
      "Power": "Battery/Wired"
    },
    reviews: []
  },
  {
    id: 10,
    name: "Insulated Water Bottle",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1602143303410-7199d114565c?w=800&q=80",
    category: "Fitness",
    description: "Keep your drinks cold for 24 hours or hot for 12. Double-wall vacuum insulation and leak-proof lid.",
    specs: {
      "Capacity": "750ml",
      "Material": "Stainless Steel",
      "BPA Free": "Yes",
      "Coating": "Powder Coat"
    },
    reviews: []
  }
];
