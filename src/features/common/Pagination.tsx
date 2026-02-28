import React from 'react';
import { Button } from '@/src/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    // Basic pagination logic: show first, last, and pages around current
    if (
      i === 1 || 
      i === totalPages || 
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pages.push('...');
    }
  }

  // Remove duplicate dots
  const uniquePages = pages.filter((page, index) => {
    if (page === '...') {
      return pages[index - 1] !== '...';
    }
    return true;
  });

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 flex items-center justify-center gap-1 sm:gap-2">
      <Button 
        variant="outline" 
        size="icon" 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="h-8 w-8 sm:h-10 sm:w-10"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      {uniquePages.map((page, index) => (
        typeof page === 'number' ? (
          <Button 
            key={index}
            variant={currentPage === page ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => onPageChange(page)}
            className="h-8 w-8 sm:h-10 sm:w-10 min-w-0 p-0"
          >
            {page}
          </Button>
        ) : (
          <span key={index} className="px-1 sm:px-2 text-zinc-400">...</span>
        )
      ))}

      <Button 
        variant="outline" 
        size="icon" 
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="h-8 w-8 sm:h-10 sm:w-10"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
