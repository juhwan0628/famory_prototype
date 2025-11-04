'use client';

import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import PostList from '@/components/feed/PostList';

export default function Home() {
  const { currentUser } = useApp();

  if (!currentUser) {
    return null; // AuthGuard에서 리다이렉트 처리
  }

  return (
    <MainLayout>
      <Header title="홈 피드" />
      <div className="px-4 py-6 max-w-2xl mx-auto">
        {/* 환영 메시지 */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
            안녕하세요, {currentUser.name}님
          </h2>
          <p className="text-sm" style={{ color: 'var(--secondary)' }}>
            가족의 소중한 추억을 공유하고 함께 기억해요
          </p>
        </div>

        {/* 게시물 피드 */}
        <PostList filter="all" />
      </div>
    </MainLayout>
  );
}
