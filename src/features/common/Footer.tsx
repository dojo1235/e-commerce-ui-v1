export const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-xl font-bold tracking-tight">SWIFTSHOP</span>
          <p className="text-sm text-zinc-500 text-center max-w-md">
            Your one-stop shop for premium electronics, accessories, and fitness gear. 
            Quality products delivered to your doorstep.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500 mt-4">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Contact Us</a>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-200 w-full text-center">
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} SwiftShop E-commerce. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
