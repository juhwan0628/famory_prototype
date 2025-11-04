'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const variantStyles = {
    primary: 'text-white hover:opacity-90',
    secondary: 'text-white hover:opacity-90',
    outline: 'bg-transparent border hover:opacity-70',
    ghost: 'bg-transparent hover:opacity-70'
  };

  const getVariantColor = () => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: 'var(--primary)' };
      case 'secondary':
        return { backgroundColor: 'var(--secondary)' };
      case 'outline':
        return { borderColor: 'var(--border)', color: 'var(--primary)' };
      case 'ghost':
        return { color: 'var(--secondary)' };
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      style={getVariantColor()}
    >
      {children}
    </button>
  );
}
