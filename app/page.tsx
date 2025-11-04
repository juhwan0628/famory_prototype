'use client';

import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';

export default function Home() {
  const { currentUser, users, deceasedProfiles, posts, comments } = useApp();

  return (
    <MainLayout>
      <Header title="Famory" />
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <div className="mb-6 text-center">
          <p className="text-lg mb-4" style={{ color: 'var(--secondary)' }}>
            가족과 함께 기억하는 디지털 앨범
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Phase 4 완료</h2>
            <p className="text-sm mb-4" style={{ color: 'var(--secondary)' }}>
              인증 플로우 (로그인/회원가입/로그아웃)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
                <h3 className="font-semibold mb-2">현재 사용자</h3>
                <div className="flex items-center gap-2 mt-2">
                  <Avatar src={currentUser.profileImage} alt={currentUser.name} size="sm" />
                  <div>
                    <p>{currentUser.name} ({currentUser.role})</p>
                    <p className="text-xs" style={{ color: 'var(--secondary)' }}>
                      {currentUser.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
                <h3 className="font-semibold mb-2">전체 사용자</h3>
                <p>{users.length}명</p>
                <p className="text-xs mt-1" style={{ color: 'var(--secondary)' }}>
                  {users.map(u => u.name).join(', ')}
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
                <h3 className="font-semibold mb-2">고인 프로필</h3>
                <p>{deceasedProfiles.length}명</p>
                <p className="text-xs mt-1" style={{ color: 'var(--secondary)' }}>
                  {deceasedProfiles.map(d => d.name).join(', ')}
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
                <h3 className="font-semibold mb-2">게시물 & 댓글</h3>
                <p>{posts.length}개 게시물, {comments.length}개 댓글</p>
                <p className="text-xs mt-1" style={{ color: 'var(--secondary)' }}>
                  Archive, Memory, General 타입 포함
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold mb-3">공통 컴포넌트 데모</h3>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm mb-2" style={{ color: 'var(--secondary)' }}>Avatar 컴포넌트:</p>
                <div className="flex items-center gap-2">
                  <Avatar src={currentUser.profileImage} alt="Small" size="sm" />
                  <Avatar src={currentUser.profileImage} alt="Medium" size="md" />
                  <Avatar src={currentUser.profileImage} alt="Large" size="lg" />
                  <Avatar src={currentUser.profileImage} alt="XLarge" size="xl" />
                </div>
              </div>
              <div>
                <p className="text-sm mb-2" style={{ color: 'var(--secondary)' }}>Button 컴포넌트:</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" size="sm">Primary SM</Button>
                  <Button variant="secondary" size="md">Secondary MD</Button>
                  <Button variant="outline" size="md">Outline</Button>
                  <Button variant="ghost" size="md">Ghost</Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--primary)' }}>
              <p className="text-white font-medium text-center">Primary</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--secondary)' }}>
              <p className="text-white font-medium text-center">Secondary</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--ai-color)' }}>
              <p className="font-medium text-center">AI Color</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--error)' }}>
              <p className="text-white font-medium text-center">Error</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
