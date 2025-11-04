'use client';

import React, { useMemo } from 'react';
import { Post } from '@/types';
import PostCard from './PostCard';
import { useApp } from '@/context/AppContext';

interface PostListProps {
  filter?: 'all' | 'archive' | 'memory' | 'general';
  deceasedProfileId?: string;
}

export default function PostList({ filter = 'all', deceasedProfileId }: PostListProps) {
  const { posts } = useApp();

  // 필터링 & 정렬
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // 타입 필터
    if (filter !== 'all') {
      result = result.filter((post) => post.type === filter);
    }

    // 고인 프로필 필터
    if (deceasedProfileId) {
      result = result.filter((post) => post.deceasedId === deceasedProfileId);
    }

    // 최신순 정렬
    result.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return result;
  }, [posts, filter, deceasedProfileId]);

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg mb-2" style={{ color: 'var(--secondary)' }}>
          게시물이 없습니다
        </p>
        <p className="text-sm" style={{ color: 'var(--secondary)' }}>
          첫 번째 게시물을 작성해보세요!
        </p>
      </div>
    );
  }

  return (
    <div>
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
