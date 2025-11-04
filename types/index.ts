// User types
export interface User {
  id: string;
  name: string;
  profileImage: string;
  email: string;
  familyCode: string; // 가족 그룹 코드
  role: 'admin' | 'member'; // 관리자 or 일반 멤버
}

// Deceased Profile types
export type RelationType = 'father' | 'mother' | 'grandfather' | 'grandmother' | 'sibling' | 'other';

export interface DeceasedProfile {
  id: string;
  name: string;
  profileImage: string;
  birthDate: string;
  deathDate: string;
  relation: RelationType;
  bio: string;
  createdBy: string; // User ID
  familyCode: string;
}

// AI Persona types
export interface AIPersona {
  deceasedId: string;
  personalityTraits: string[]; // e.g., ['warm', 'humorous', 'wise']
  speechPattern: string; // e.g., '따뜻하고 다정한 말투'
  enabled: boolean;
}

// Post types
export type PostType = 'archive' | 'memory' | 'general';

export interface Post {
  id: string;
  type: PostType;
  authorId: string; // User ID
  deceasedId?: string; // archive/memory 타입일 때만
  content: string;
  images: string[]; // 이미지 URL 배열
  timestamp: string;
  familyCode: string;
  likes: string[]; // User IDs who liked
  commentsCount: number;
}

// Comment types
export interface Comment {
  id: string;
  postId: string;
  authorId: string; // User ID or 'ai-{deceasedId}'
  isAI: boolean;
  content: string;
  timestamp: string;
}

// DM (Direct Message) types
export interface DMConversation {
  id: string;
  userId: string;
  deceasedId: string;
  lastMessage?: string;
  lastMessageTime?: string;
}

export interface DMMessage {
  id: string;
  conversationId: string;
  senderId: string; // User ID or 'ai-{deceasedId}'
  isAI: boolean;
  content: string;
  timestamp: string;
  read: boolean;
}

// Notification types
export type NotificationType = 'like' | 'comment' | 'ai_comment' | 'dm' | 'new_member';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  content: string;
  relatedId?: string; // Post ID, Comment ID, etc.
  timestamp: string;
  read: boolean;
}
