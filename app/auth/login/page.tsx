'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

export default function LoginPage() {
  const router = useRouter();
  const { users, setCurrentUser } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 더미 로그인: 이메일로 사용자 찾기
    const user = users.find(u => u.email === email);

    if (!user) {
      setError('존재하지 않는 이메일입니다.');
      return;
    }

    // 프로토타입이므로 비밀번호는 'password123'으로 고정
    if (password !== 'password123') {
      setError('비밀번호가 일치하지 않습니다. (힌트: password123)');
      return;
    }

    // 로그인 성공
    setCurrentUser(user);
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--background)' }}>
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
            Famory
          </h1>
          <p className="text-sm" style={{ color: 'var(--secondary)' }}>
            가족과 함께 기억하는 디지털 앨범
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
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
              placeholder="••••••••"
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
            로그인
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm" style={{ color: 'var(--secondary)' }}>
            계정이 없으신가요?{' '}
            <Link href="/auth/signup" className="font-medium hover:underline"
              style={{ color: 'var(--primary)' }}>
              회원가입
            </Link>
          </p>
        </div>

        <div className="mt-8 p-4 rounded-lg text-sm" style={{ backgroundColor: 'var(--background)' }}>
          <p className="font-semibold mb-2" style={{ color: 'var(--primary)' }}>
            테스트 계정:
          </p>
          <ul className="space-y-1" style={{ color: 'var(--secondary)' }}>
            {users.map((user) => (
              <li key={user.id}>
                <span className="font-medium">{user.name}</span>: {user.email}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs" style={{ color: 'var(--secondary)' }}>
            모든 계정 비밀번호: password123
          </p>
        </div>
      </Card>
    </div>
  );
}
