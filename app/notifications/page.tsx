'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';

export default function NotificationsPage() {
  return (
    <MainLayout>
      <Header title="알림" />
      <div className="flex items-center justify-center h-[calc(100vh-140px)]">
        <p style={{ color: 'var(--secondary)' }}>알림 페이지 (Phase 11에서 구현 예정)</p>
      </div>
    </MainLayout>
  );
}
