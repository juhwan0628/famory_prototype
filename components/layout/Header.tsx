'use client';

import React from 'react';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export default function Header({ title, showBack, onBack, rightAction }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 border-b px-4 py-3 flex items-center justify-between"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border)'
      }}
    >
      <div className="flex items-center gap-3">
        {showBack && onBack && (
          <button
            onClick={onBack}
            className="p-1 rounded-lg hover:opacity-70 transition-opacity"
            aria-label="뒤로 가기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        )}
        <h1 className="text-xl font-semibold" style={{ color: 'var(--primary)' }}>
          {title}
        </h1>
      </div>
      {rightAction && <div>{rightAction}</div>}
    </header>
  );
}
