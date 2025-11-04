'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export default function Card({ children, className = '', onClick, hoverable = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-xl p-4 border
        ${hoverable ? 'hover:shadow-md cursor-pointer transition-shadow' : ''}
        ${className}
      `}
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border)'
      }}
    >
      {children}
    </div>
  );
}
