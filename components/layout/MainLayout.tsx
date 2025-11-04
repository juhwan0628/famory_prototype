'use client';

import React from 'react';
import TabBar from './TabBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--background)' }}>
      {children}
      <TabBar />
    </div>
  );
}
