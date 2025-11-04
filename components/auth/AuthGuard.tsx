'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { currentUser } = useApp();
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // 인증이 필요한 페이지인지 확인
    const isAuthPage = pathname?.startsWith('/auth');

    // 로그인하지 않았고, 인증 페이지가 아니면 로그인 페이지로 리다이렉트
    if (!currentUser && !isAuthPage) {
      router.replace('/auth/login');
    }

    // 로그인했는데 인증 페이지에 있으면 홈으로 리다이렉트
    if (currentUser && isAuthPage) {
      router.replace('/');
    }

    // 체크 완료
    setIsChecking(false);
  }, [currentUser, pathname, router]);

  // 인증 페이지는 항상 렌더링
  if (pathname?.startsWith('/auth')) {
    return <>{children}</>;
  }

  // 체크 중이거나 로그인하지 않았으면 로딩 표시
  if (isChecking || !currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
            style={{ borderColor: 'var(--primary)', borderTopColor: 'transparent' }}></div>
          <p style={{ color: 'var(--secondary)' }}>로딩 중...</p>
        </div>
      </div>
    );
  }

  // 로그인했으면 children 렌더링
  return <>{children}</>;
}
