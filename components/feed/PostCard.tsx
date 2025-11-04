'use client';

import React from 'react';
import { Post, User, DeceasedProfile } from '@/types';
import Card from '@/components/common/Card';
import Avatar from '@/components/common/Avatar';
import { useApp } from '@/context/AppContext';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { users, deceasedProfiles, currentUser, likePost, getCommentsByPostId } = useApp();

  // 작성자 찾기
  const author = users.find((u) => u.id === post.authorId);

  // 고인 프로필 찾기 (있는 경우)
  const deceased = post.deceasedId
    ? deceasedProfiles.find((d) => d.id === post.deceasedId)
    : null;

  // 댓글 개수 (실시간)
  const commentsCount = getCommentsByPostId(post.id).length;

  // 좋아요 여부
  const isLiked = currentUser ? post.likes.includes(currentUser.id) : false;

  // 좋아요 토글
  const handleLike = () => {
    if (currentUser) {
      likePost(post.id, currentUser.id);
    }
  };

  // 포스트 타입별 배지 색상
  const getTypeBadgeColor = (type: Post['type']) => {
    switch (type) {
      case 'archive':
        return 'var(--ai-color)';
      case 'memory':
        return 'var(--primary)';
      case 'general':
      default:
        return 'var(--secondary)';
    }
  };

  // 포스트 타입별 한글 이름
  const getTypeLabel = (type: Post['type']) => {
    switch (type) {
      case 'archive':
        return 'AI 아카이브';
      case 'memory':
        return '추억';
      case 'general':
      default:
        return '일반';
    }
  };

  if (!author) return null;

  return (
    <Card className="mb-4">
      {/* 헤더: 작성자 정보 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar src={author.profileImage} alt={author.name} size="md" />
          <div>
            <p className="font-semibold text-sm" style={{ color: 'var(--primary)' }}>
              {author.name}
            </p>
            <p className="text-xs" style={{ color: 'var(--secondary)' }}>
              {new Date(post.timestamp).toLocaleDateString('ko-KR', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
        </div>

        {/* 포스트 타입 배지 */}
        <span
          className="text-xs px-2 py-1 rounded-full font-medium"
          style={{
            backgroundColor: getTypeBadgeColor(post.type),
            color: post.type === 'general' ? 'white' : 'var(--primary)',
          }}
        >
          {getTypeLabel(post.type)}
        </span>
      </div>

      {/* 고인 프로필 (있는 경우) */}
      {deceased && (
        <div
          className="mb-3 p-2 rounded-lg flex items-center gap-2"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <Avatar src={deceased.profileImage} alt={deceased.name} size="sm" />
          <div>
            <p className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
              {deceased.name}
            </p>
            <p className="text-xs" style={{ color: 'var(--secondary)' }}>
              {deceased.birthDate} - {deceased.deathDate}
            </p>
          </div>
        </div>
      )}

      {/* 본문 */}
      <p className="mb-3 text-sm leading-relaxed" style={{ color: 'var(--primary)' }}>
        {post.content}
      </p>

      {/* 이미지 (있는 경우) */}
      {post.images && post.images.length > 0 && (
        <div className="mb-3 rounded-lg overflow-hidden">
          <img
            src={post.images[0]}
            alt="Post image"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '400px' }}
          />
          {post.images.length > 1 && (
            <p className="text-xs text-center mt-2" style={{ color: 'var(--secondary)' }}>
              +{post.images.length - 1}개 더보기
            </p>
          )}
        </div>
      )}

      {/* 액션 버튼 (좋아요, 댓글) */}
      <div className="flex items-center gap-4 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
        <button
          onClick={handleLike}
          className="flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
          style={{ color: isLiked ? 'var(--error)' : 'var(--secondary)' }}
        >
          <span className="text-lg">{isLiked ? '❤️' : '🤍'}</span>
          <span>{post.likes.length}</span>
        </button>

        <button
          className="flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
          style={{ color: 'var(--secondary)' }}
        >
          <span className="text-lg">💬</span>
          <span>{commentsCount}</span>
        </button>
      </div>
    </Card>
  );
}
