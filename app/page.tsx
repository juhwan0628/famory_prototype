'use client';

import { useApp } from '@/context/AppContext';

export default function Home() {
  const { currentUser, users, deceasedProfiles, posts, comments } = useApp();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl w-full">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
            Famory
          </h1>
          <p className="text-lg" style={{ color: 'var(--secondary)' }}>
            가족과 함께 기억하는 디지털 앨범
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div
            className="p-6 rounded-xl shadow-sm"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)', border: '1px solid' }}
          >
            <h2 className="text-xl font-semibold mb-4">Phase 2 완료</h2>
            <p className="text-sm mb-4" style={{ color: 'var(--secondary)' }}>
              타입 정의 & 더미 데이터 & Context API
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
                <h3 className="font-semibold mb-2">현재 사용자</h3>
                <p>{currentUser.name} ({currentUser.role})</p>
                <p className="text-xs mt-1" style={{ color: 'var(--secondary)' }}>
                  {currentUser.email}
                </p>
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
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--primary)' }}>
              <p className="text-white font-medium">Primary</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--secondary)' }}>
              <p className="text-white font-medium">Secondary</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--ai-color)' }}>
              <p className="font-medium">AI Color</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--error)' }}>
              <p className="text-white font-medium">Error</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
