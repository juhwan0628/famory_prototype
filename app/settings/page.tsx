'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Avatar from '@/components/common/Avatar';
import { useApp } from '@/context/AppContext';

export default function SettingsPage() {
  const router = useRouter();
  const { currentUser, setCurrentUser } = useApp();

  const handleLogout = () => {
    setCurrentUser(null);
    router.push('/auth/login');
  };

  if (!currentUser) {
    return null;
  }

  return (
    <MainLayout>
      <Header title="설정" />
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <Card className="mb-4">
          <div className="flex items-center gap-4 mb-6">
            <Avatar src={currentUser.profileImage} alt={currentUser.name} size="xl" />
            <div>
              <h2 className="text-xl font-semibold" style={{ color: 'var(--primary)' }}>
                {currentUser.name}
              </h2>
              <p className="text-sm" style={{ color: 'var(--secondary)' }}>
                {currentUser.email}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--secondary)' }}>
                역할: {currentUser.role === 'admin' ? '관리자' : '가족 구성원'}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--primary)' }}>
                가족 코드
              </p>
              <p className="text-sm font-mono" style={{ color: 'var(--secondary)' }}>
                {currentUser.familyCode}
              </p>
            </div>
          </div>
        </Card>

        <Card className="mb-4">
          <h3 className="font-semibold mb-3" style={{ color: 'var(--primary)' }}>
            계정 관리
          </h3>
          <div className="space-y-2">
            <Button variant="outline" fullWidth onClick={() => alert('프로필 수정 기능은 추후 구현 예정입니다.')}>
              프로필 수정
            </Button>
            <Button variant="outline" fullWidth onClick={() => alert('알림 설정 기능은 추후 구현 예정입니다.')}>
              알림 설정
            </Button>
            <Button variant="outline" fullWidth onClick={() => alert('비밀번호 변경 기능은 추후 구현 예정입니다.')}>
              비밀번호 변경
            </Button>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3" style={{ color: 'var(--primary)' }}>
            앱 정보
          </h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-sm" style={{ color: 'var(--secondary)' }}>버전</span>
              <span className="text-sm font-medium" style={{ color: 'var(--primary)' }}>1.0.0 (Prototype)</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm" style={{ color: 'var(--secondary)' }}>개발 단계</span>
              <span className="text-sm font-medium" style={{ color: 'var(--primary)' }}>Phase 4</span>
            </div>
          </div>

          <Button variant="secondary" fullWidth onClick={handleLogout}>
            로그아웃
          </Button>
        </Card>

        <div className="mt-4 p-4 rounded-lg text-sm text-center"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <p style={{ color: 'var(--secondary)' }}>
            이 페이지는 프로토타입입니다. <br />
            일부 기능은 Phase 11에서 구현될 예정입니다.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
