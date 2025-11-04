'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';

export default function ProfilesPage() {
  return (
    <MainLayout>
      <Header title="프로필" />
      <div className="flex items-center justify-center h-[calc(100vh-140px)]">
        <p style={{ color: 'var(--secondary)' }}>프로필 페이지 (Phase 7에서 구현 예정)</p>
      </div>
    </MainLayout>
  );
}
