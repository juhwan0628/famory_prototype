'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { User } from '@/types';

export default function SignupPage() {
  const router = useRouter();
  const { users, setCurrentUser } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 유효성 검사
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (password.length < 6) {
      setError('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }

    // 이메일 중복 확인
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      setError('이미 사용 중인 이메일입니다.');
      return;
    }

    // 새 사용자 생성 (프로토타입이므로 실제 저장은 하지 않음)
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      name,
      role: 'family-member',
      profileImage: `https://i.pravatar.cc/150?u=${email}`,
      joinedAt: new Date().toISOString(),
    };

    // 현재 사용자로 설정하고 홈으로 이동
    setCurrentUser(newUser);
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--background)' }}>
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
            회원가입
          </h1>
          <p className="text-sm" style={{ color: 'var(--secondary)' }}>
            Famory에 오신 것을 환영합니다
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1"
              style={{ color: 'var(--primary)' }}>
              이름
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--primary)'
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1"
              style={{ color: 'var(--primary)' }}>
              이메일
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--primary)'
              }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1"
              style={{ color: 'var(--primary)' }}>
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="최소 6자 이상"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--primary)'
              }}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1"
              style={{ color: 'var(--primary)' }}>
              비밀번호 확인
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="비밀번호 재입력"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--primary)'
              }}
            />
          </div>

          {error && (
            <p className="text-sm text-center" style={{ color: 'var(--error)' }}>
              {error}
            </p>
          )}

          <Button type="submit" variant="primary" size="lg" fullWidth>
            가입하기
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm" style={{ color: 'var(--secondary)' }}>
            이미 계정이 있으신가요?{' '}
            <Link href="/auth/login" className="font-medium hover:underline"
              style={{ color: 'var(--primary)' }}>
              로그인
            </Link>
          </p>
        </div>

        <div className="mt-8 p-4 rounded-lg text-sm" style={{ backgroundColor: 'var(--background)' }}>
          <p className="font-semibold mb-2" style={{ color: 'var(--primary)' }}>
            안내:
          </p>
          <p style={{ color: 'var(--secondary)' }}>
            이 페이지는 프로토타입입니다. 실제로 계정이 생성되지는 않으며,
            테스트용 임시 사용자로 로그인됩니다.
          </p>
        </div>
      </Card>
    </div>
  );
}
