'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';

export default function DMPage() {
  return (
    <MainLayout>
      <Header title="DM" />
      <div className="flex items-center justify-center h-[calc(100vh-140px)]">
        <p style={{ color: 'var(--secondary)' }}>DM 페이지 (Phase 10에서 구현 예정)</p>
      </div>
    </MainLayout>
  );
}
