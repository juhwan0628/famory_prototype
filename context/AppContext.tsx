'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, DeceasedProfile, Post, Comment, DMConversation, DMMessage, Notification } from '@/types';
import {
  dummyUsers,
  dummyDeceasedProfiles,
  dummyPosts,
  dummyComments,
  dummyDMConversations,
  dummyDMMessages,
  dummyNotifications,
  currentUser as initialUser,
} from '@/data/dummy';

interface AppContextType {
  // Current user
  currentUser: User;
  setCurrentUser: (user: User) => void;

  // Users
  users: User[];

  // Deceased profiles
  deceasedProfiles: DeceasedProfile[];

  // Posts
  posts: Post[];
  addPost: (post: Post) => void;
  likePost: (postId: string, userId: string) => void;

  // Comments
  comments: Comment[];
  addComment: (comment: Comment) => void;
  getCommentsByPostId: (postId: string) => Comment[];

  // DM
  dmConversations: DMConversation[];
  dmMessages: DMMessage[];
  getDMMessagesByConversationId: (conversationId: string) => DMMessage[];
  addDMMessage: (message: DMMessage) => void;

  // Notifications
  notifications: Notification[];
  markNotificationAsRead: (notificationId: string) => void;
  getUnreadNotificationsCount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User>(initialUser);
  const [users] = useState<User[]>(dummyUsers);
  const [deceasedProfiles] = useState<DeceasedProfile[]>(dummyDeceasedProfiles);
  const [posts, setPosts] = useState<Post[]>(dummyPosts);
  const [comments, setComments] = useState<Comment[]>(dummyComments);
  const [dmConversations, setDmConversations] = useState<DMConversation[]>(dummyDMConversations);
  const [dmMessages, setDmMessages] = useState<DMMessage[]>(dummyDMMessages);
  const [notifications, setNotifications] = useState<Notification[]>(dummyNotifications);

  // Post functions
  const addPost = (post: Post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const likePost = (postId: string, userId: string) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const likes = post.likes.includes(userId)
            ? post.likes.filter((id) => id !== userId)
            : [...post.likes, userId];
          return { ...post, likes };
        }
        return post;
      })
    );
  };

  // Comment functions
  const addComment = (comment: Comment) => {
    setComments((prev) => [...prev, comment]);
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === comment.postId) {
          return { ...post, commentsCount: post.commentsCount + 1 };
        }
        return post;
      })
    );
  };

  const getCommentsByPostId = (postId: string) => {
    return comments.filter((comment) => comment.postId === postId);
  };

  // DM functions
  const getDMMessagesByConversationId = (conversationId: string) => {
    return dmMessages.filter((message) => message.conversationId === conversationId);
  };

  const addDMMessage = (message: DMMessage) => {
    setDmMessages((prev) => [...prev, message]);
    setDmConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === message.conversationId) {
          return {
            ...conv,
            lastMessage: message.content,
            lastMessageTime: message.timestamp,
          };
        }
        return conv;
      })
    );
  };

  // Notification functions
  const markNotificationAsRead = (notificationId: string) => {
    setNotifications((prev) =>
      prev.map((notif) => {
        if (notif.id === notificationId) {
          return { ...notif, read: true };
        }
        return notif;
      })
    );
  };

  const getUnreadNotificationsCount = () => {
    return notifications.filter((notif) => !notif.read && notif.userId === currentUser.id).length;
  };

  const value: AppContextType = {
    currentUser,
    setCurrentUser,
    users,
    deceasedProfiles,
    posts,
    addPost,
    likePost,
    comments,
    addComment,
    getCommentsByPostId,
    dmConversations,
    dmMessages,
    getDMMessagesByConversationId,
    addDMMessage,
    notifications,
    markNotificationAsRead,
    getUnreadNotificationsCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
