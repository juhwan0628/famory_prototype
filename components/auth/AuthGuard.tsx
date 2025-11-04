'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { currentUser } = useApp();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 인증이 필요한 페이지인지 확인
    const isAuthPage = pathname?.startsWith('/auth');

    // 로그인하지 않았고, 인증 페이지가 아니면 로그인 페이지로 리다이렉트
    if (!currentUser && !isAuthPage) {
      router.push('/auth/login');
    }

    // 로그인했는데 인증 페이지에 있으면 홈으로 리다이렉트
    if (currentUser && isAuthPage) {
      router.push('/');
    }
  }, [currentUser, pathname, router]);

  // 인증 페이지는 항상 렌더링
  if (pathname?.startsWith('/auth')) {
    return <>{children}</>;
  }

  // 로그인하지 않았으면 아무것도 렌더링하지 않음 (리다이렉트 중)
  if (!currentUser) {
    return null;
  }

  // 로그인했으면 children 렌더링
  return <>{children}</>;
}
