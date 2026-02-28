import React, { ReactNode } from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  key?: React.Key;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled,
  type = 'button',
  title,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-zinc-800',
    secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
    outline: 'border border-zinc-200 bg-transparent hover:bg-zinc-50',
    ghost: 'bg-transparent hover:bg-zinc-100',
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs rounded-md',
    md: 'h-10 px-4 text-sm rounded-lg',
    lg: 'h-12 px-6 text-base rounded-xl',
    icon: 'h-10 w-10 rounded-full',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      title={title}
      {...props}
    >
      {children}
    </button>
  );
};

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

export const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  required,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`flex h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    />
  );
};

export const Badge = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <span className={`inline-flex items-center rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white leading-none ${className}`}>
      {children}
    </span>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination = ({ currentPage, totalPages, onPageChange, className = '' }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
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

  const uniquePages = pages.filter((page, index) => {
    if (page === '...') {
      return pages[index - 1] !== '...';
    }
    return true;
  });

  return (
    <div className={`flex items-center justify-center gap-1 py-4 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-2"
      >
        Previous
      </Button>
      
      <div className="flex items-center gap-1 mx-2">
        {uniquePages.map((page, index) => (
          typeof page === 'number' ? (
            <Button
              key={index}
              variant={currentPage === page ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onPageChange(page)}
              className="w-8 h-8 p-0"
            >
              {page}
            </Button>
          ) : (
            <span key={index} className="px-1 text-zinc-400">...</span>
          )
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-2"
      >
        Next
      </Button>
    </div>
  );
};
