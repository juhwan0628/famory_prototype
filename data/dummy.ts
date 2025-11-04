import { User, DeceasedProfile, AIPersona, Post, Comment, DMConversation, DMMessage, Notification } from '@/types';

// Dummy Users
export const dummyUsers: User[] = [
  {
    id: 'user-1',
    name: '김민준',
    profileImage: 'https://i.pravatar.cc/150?img=12',
    email: 'minjun@example.com',
    familyCode: 'KIM-FAMILY-001',
    role: 'admin',
  },
  {
    id: 'user-2',
    name: '김서연',
    profileImage: 'https://i.pravatar.cc/150?img=5',
    email: 'seoyeon@example.com',
    familyCode: 'KIM-FAMILY-001',
    role: 'member',
  },
  {
    id: 'user-3',
    name: '김지호',
    profileImage: 'https://i.pravatar.cc/150?img=33',
    email: 'jiho@example.com',
    familyCode: 'KIM-FAMILY-001',
    role: 'member',
  },
  {
    id: 'user-4',
    name: '김예은',
    profileImage: 'https://i.pravatar.cc/150?img=9',
    email: 'yeeun@example.com',
    familyCode: 'KIM-FAMILY-001',
    role: 'member',
  },
];

// Dummy Deceased Profiles
export const dummyDeceasedProfiles: DeceasedProfile[] = [
  {
    id: 'deceased-1',
    name: '김영수',
    profileImage: 'https://i.pravatar.cc/150?img=60',
    birthDate: '1945-03-15',
    deathDate: '2023-11-20',
    relation: 'grandfather',
    bio: '따뜻한 미소와 지혜로운 조언으로 가족을 이끌어주셨던 할아버지. 평생 교사로 일하시며 많은 제자들에게 사랑받으셨습니다.',
    createdBy: 'user-1',
    familyCode: 'KIM-FAMILY-001',
  },
  {
    id: 'deceased-2',
    name: '이순희',
    profileImage: 'https://i.pravatar.cc/150?img=47',
    birthDate: '1948-07-22',
    deathDate: '2024-02-10',
    relation: 'grandmother',
    bio: '손주들에게 맛있는 음식을 해주시는 것을 가장 행복해하셨던 할머니. 김치 담그는 솜씨가 최고였습니다.',
    createdBy: 'user-1',
    familyCode: 'KIM-FAMILY-001',
  },
  {
    id: 'deceased-3',
    name: '김태현',
    profileImage: 'https://i.pravatar.cc/150?img=52',
    birthDate: '1975-05-08',
    deathDate: '2022-08-15',
    relation: 'father',
    bio: '항상 가족을 최우선으로 생각하셨던 아버지. 주말이면 가족과 함께 등산을 즐기셨습니다.',
    createdBy: 'user-2',
    familyCode: 'KIM-FAMILY-001',
  },
];

// Dummy AI Personas
export const dummyAIPersonas: AIPersona[] = [
  {
    deceasedId: 'deceased-1',
    personalityTraits: ['wise', 'gentle', 'humorous'],
    speechPattern: '손주야, 할아버지가 말이지... 하는 따뜻한 말투',
    enabled: true,
  },
  {
    deceasedId: 'deceased-2',
    personalityTraits: ['warm', 'caring', 'traditional'],
    speechPattern: '우리 강아지, 밥은 먹었니? 하는 다정한 말투',
    enabled: true,
  },
  {
    deceasedId: 'deceased-3',
    personalityTraits: ['supportive', 'energetic', 'positive'],
    speechPattern: '아들, 딸, 파이팅! 하는 응원하는 말투',
    enabled: true,
  },
];

// Dummy Posts
export const dummyPosts: Post[] = [
  {
    id: 'post-1',
    type: 'archive',
    authorId: 'user-1',
    deceasedId: 'deceased-1',
    content: '1980년대 할아버지께서 첫 교사 발령을 받으셨을 때 사진입니다. 정말 젊고 패기있으셨네요.',
    images: ['https://picsum.photos/seed/archive1/800/600'],
    timestamp: '2024-11-01T10:30:00Z',
    familyCode: 'KIM-FAMILY-001',
    likes: ['user-2', 'user-3'],
    commentsCount: 5,
  },
  {
    id: 'post-2',
    type: 'memory',
    authorId: 'user-2',
    deceasedId: 'deceased-2',
    content: '할머니가 만들어주신 김치찌개가 생각나서 오늘 도전해봤어요. 할머니 레시피대로 했는데 맛이 비슷하게 나왔어요!',
    images: ['https://picsum.photos/seed/memory1/800/600'],
    timestamp: '2024-11-02T14:20:00Z',
    familyCode: 'KIM-FAMILY-001',
    likes: ['user-1', 'user-3', 'user-4'],
    commentsCount: 8,
  },
  {
    id: 'post-3',
    type: 'general',
    authorId: 'user-3',
    content: '오늘 가족들과 함께 할아버지가 좋아하셨던 북한산에 다녀왔어요. 할아버지 생각 많이 났습니다.',
    images: ['https://picsum.photos/seed/general1/800/600', 'https://picsum.photos/seed/general2/800/600'],
    timestamp: '2024-11-03T09:15:00Z',
    familyCode: 'KIM-FAMILY-001',
    likes: ['user-1', 'user-2'],
    commentsCount: 4,
  },
  {
    id: 'post-4',
    type: 'archive',
    authorId: 'user-1',
    deceasedId: 'deceased-2',
    content: '1990년 명절에 온 가족이 모였을 때의 사진이에요. 할머니의 밝은 미소가 너무 그립습니다.',
    images: ['https://picsum.photos/seed/archive2/800/600'],
    timestamp: '2024-11-03T16:45:00Z',
    familyCode: 'KIM-FAMILY-001',
    likes: ['user-2', 'user-3', 'user-4'],
    commentsCount: 12,
  },
  {
    id: 'post-5',
    type: 'memory',
    authorId: 'user-4',
    deceasedId: 'deceased-3',
    content: '아빠와 함께 갔던 캠핑이 생각나서 오늘 친구들과 같은 장소에 왔어요. 아빠가 알려주신 텐트 치는 법 아직도 기억나요.',
    images: ['https://picsum.photos/seed/memory2/800/600'],
    timestamp: '2024-11-04T11:00:00Z',
    familyCode: 'KIM-FAMILY-001',
    likes: ['user-1', 'user-2'],
    commentsCount: 6,
  },
  {
    id: 'post-6',
    type: 'general',
    authorId: 'user-2',
    content: '할아버지 생신이 다가와서 미리 준비하고 있어요. 좋아하셨던 꽃과 음식들로 상을 차리려고 합니다.',
    images: [],
    timestamp: '2024-11-04T13:30:00Z',
    familyCode: 'KIM-FAMILY-001',
    likes: ['user-1', 'user-3', 'user-4'],
    commentsCount: 3,
  },
];

// Dummy Comments
export const dummyComments: Comment[] = [
  {
    id: 'comment-1',
    postId: 'post-1',
    authorId: 'user-2',
    isAI: false,
    content: '정말 멋지시네요! 이 사진 처음 보는 것 같아요.',
    timestamp: '2024-11-01T11:00:00Z',
  },
  {
    id: 'comment-2',
    postId: 'post-1',
    authorId: 'ai-deceased-1',
    isAI: true,
    content: '허허, 그때가 참 열정적이었지. 첫 발령받고 설레던 마음이 아직도 생생하구나. 손주야, 너도 무슨 일을 하든 그 첫 마음을 잃지 말거라.',
    timestamp: '2024-11-01T11:15:00Z',
  },
  {
    id: 'comment-3',
    postId: 'post-2',
    authorId: 'user-1',
    isAI: false,
    content: '우와 정말 맛있어 보여요! 할머니가 보시면 정말 기뻐하실 것 같아요.',
    timestamp: '2024-11-02T15:00:00Z',
  },
  {
    id: 'comment-4',
    postId: 'post-2',
    authorId: 'ai-deceased-2',
    isAI: true,
    content: '우리 강아지, 정말 잘했구나! 김치는 사랑으로 담가야 맛있단다. 할머니가 해준 김치 생각나니?',
    timestamp: '2024-11-02T15:20:00Z',
  },
  {
    id: 'comment-5',
    postId: 'post-2',
    authorId: 'user-3',
    isAI: false,
    content: '저도 먹고싶어요! 다음에 나눠주세요 ㅎㅎ',
    timestamp: '2024-11-02T16:00:00Z',
  },
  {
    id: 'comment-6',
    postId: 'post-3',
    authorId: 'ai-deceased-1',
    isAI: true,
    content: '북한산 백운대까지 올라갔니? 할아버지랑 같이 올랐던 그 길 말이야. 건강 잘 챙기고, 자주 산에 가거라.',
    timestamp: '2024-11-03T10:00:00Z',
  },
  {
    id: 'comment-7',
    postId: 'post-4',
    authorId: 'user-2',
    isAI: false,
    content: '이 사진 너무 소중해요. 디지털로 보관할 수 있어서 정말 다행이에요.',
    timestamp: '2024-11-03T17:00:00Z',
  },
  {
    id: 'comment-8',
    postId: 'post-5',
    authorId: 'ai-deceased-3',
    isAI: true,
    content: '아들, 잘했어! 아빠가 가르쳐준 것들 기억해줘서 고맙구나. 언제나 너를 응원한다!',
    timestamp: '2024-11-04T11:30:00Z',
  },
];

// Dummy DM Conversations
export const dummyDMConversations: DMConversation[] = [
  {
    id: 'dm-conv-1',
    userId: 'user-1',
    deceasedId: 'deceased-1',
    lastMessage: '할아버지, 요즘 회사에서 힘든 일이 있어요...',
    lastMessageTime: '2024-11-04T09:00:00Z',
  },
  {
    id: 'dm-conv-2',
    userId: 'user-2',
    deceasedId: 'deceased-2',
    lastMessage: '할머니 김치찌개 레시피 다시 한번 여쭤봐도 될까요?',
    lastMessageTime: '2024-11-03T18:00:00Z',
  },
  {
    id: 'dm-conv-3',
    userId: 'user-4',
    deceasedId: 'deceased-3',
    lastMessage: '아빠, 오늘 학교에서 상 받았어요!',
    lastMessageTime: '2024-11-04T14:00:00Z',
  },
];

// Dummy DM Messages
export const dummyDMMessages: DMMessage[] = [
  // Conversation 1 (user-1 with deceased-1)
  {
    id: 'dm-msg-1',
    conversationId: 'dm-conv-1',
    senderId: 'user-1',
    isAI: false,
    content: '할아버지, 요즘 회사에서 힘든 일이 있어요...',
    timestamp: '2024-11-04T09:00:00Z',
    read: true,
  },
  {
    id: 'dm-msg-2',
    conversationId: 'dm-conv-1',
    senderId: 'ai-deceased-1',
    isAI: true,
    content: '손주야, 무슨 일인지 할아버지한테 말해보렴. 할아버지가 평생 살면서 배운 게 있단다. 어려운 일이 있을 때는 먼저 마음을 가라앉히고, 문제를 하나씩 풀어가는 거란다.',
    timestamp: '2024-11-04T09:05:00Z',
    read: true,
  },
  {
    id: 'dm-msg-3',
    conversationId: 'dm-conv-1',
    senderId: 'user-1',
    isAI: false,
    content: '감사합니다 할아버지. 할아버지 말씀 들으니까 마음이 조금 편해지네요.',
    timestamp: '2024-11-04T09:10:00Z',
    read: true,
  },
  // Conversation 2 (user-2 with deceased-2)
  {
    id: 'dm-msg-4',
    conversationId: 'dm-conv-2',
    senderId: 'user-2',
    isAI: false,
    content: '할머니 김치찌개 레시피 다시 한번 여쭤봐도 될까요?',
    timestamp: '2024-11-03T18:00:00Z',
    read: true,
  },
  {
    id: 'dm-msg-5',
    conversationId: 'dm-conv-2',
    senderId: 'ai-deceased-2',
    isAI: true,
    content: '우리 강아지, 그럼~ 묵은 김치를 먼저 송송 썰고, 돼지고기는 참기름에 볶다가 김치를 넣는 거야. 그리고 물을 자작하게 붓고 끓이면 되는데, 마지막에 두부 넣는 거 잊지 마!',
    timestamp: '2024-11-03T18:05:00Z',
    read: true,
  },
  // Conversation 3 (user-4 with deceased-3)
  {
    id: 'dm-msg-6',
    conversationId: 'dm-conv-3',
    senderId: 'user-4',
    isAI: false,
    content: '아빠, 오늘 학교에서 상 받았어요!',
    timestamp: '2024-11-04T14:00:00Z',
    read: true,
  },
  {
    id: 'dm-msg-7',
    conversationId: 'dm-conv-3',
    senderId: 'ai-deceased-3',
    isAI: true,
    content: '정말? 우리 딸 최고다! 아빠가 정말 자랑스럽구나. 앞으로도 열심히 하면 더 좋은 일들이 많이 생길 거야. 파이팅!',
    timestamp: '2024-11-04T14:05:00Z',
    read: true,
  },
];

// Dummy Notifications
export const dummyNotifications: Notification[] = [
  {
    id: 'notif-1',
    userId: 'user-1',
    type: 'ai_comment',
    content: '할아버지 AI가 회원님의 게시물에 댓글을 남겼습니다.',
    relatedId: 'post-1',
    timestamp: '2024-11-01T11:15:00Z',
    read: false,
  },
  {
    id: 'notif-2',
    userId: 'user-2',
    type: 'like',
    content: '김민준님이 회원님의 게시물을 좋아합니다.',
    relatedId: 'post-2',
    timestamp: '2024-11-02T14:30:00Z',
    read: true,
  },
  {
    id: 'notif-3',
    userId: 'user-2',
    type: 'comment',
    content: '김지호님이 회원님의 게시물에 댓글을 남겼습니다.',
    relatedId: 'post-2',
    timestamp: '2024-11-02T16:00:00Z',
    read: true,
  },
  {
    id: 'notif-4',
    userId: 'user-1',
    type: 'dm',
    content: '할아버지 AI로부터 새로운 메시지가 도착했습니다.',
    relatedId: 'dm-conv-1',
    timestamp: '2024-11-04T09:05:00Z',
    read: false,
  },
];

// Current logged-in user (for context)
export const currentUser = dummyUsers[0]; // 김민준
