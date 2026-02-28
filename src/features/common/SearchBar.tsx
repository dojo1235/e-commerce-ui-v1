import { Search } from 'lucide-react';
import { Input, Button } from '@/src/ui';

export const SearchBar = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-6">
      <div className="flex w-full items-center gap-2">
        <Input placeholder="Search products..." className="flex-1 h-10 sm:h-12" />
        <Button className="shrink-0 h-10 sm:h-12 px-3 sm:px-4">
          <Search className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Search</span>
        </Button>
      </div>
    </div>
  );
};
