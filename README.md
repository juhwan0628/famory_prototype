# Famory - 가족과 함께 기억하는 디지털 앨범

고인의 추억을 AI와 함께 보존하고 공유하는 가족 전용 추억 공유 플랫폼

## 프로젝트 개요

Famory는 가족 구성원들이 고인의 추억을 디지털로 보존하고, AI 페르소나를 통해 고인과 대화하며, 추억을 공유할 수 있는 웹 애플리케이션입니다.

### 핵심 기능
- 고인 프로필 생성 및 관리
- AI 기반 고인 페르소나와의 대화 (DM)
- 추억 게시물 작성 및 공유
- 가족 구성원 간 소통
- AI가 자동으로 생성하는 아카이브 게시물

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Deployment**: Vercel

## 개발 진행 단계

### Phase 1: 프로젝트 기본 셋업 ✅
- [x] Next.js 14 + TypeScript + Tailwind CSS 설치
- [x] Famory 커스텀 컬러 시스템 적용 (베이지/세피아 톤)
- [x] CSS 변수로 컬러 팔레트 정의

### Phase 2: 타입 정의 & 더미 데이터 ✅
- [x] TypeScript 타입 정의 (User, DeceasedProfile, Post, Comment, DM, Notification)
- [x] 더미 데이터 생성 (사용자, 고인 프로필, 게시물, 댓글 등)
- [x] Context API 구현 (전역 상태 관리)

### Phase 3: 레이아웃 & 공통 컴포넌트 ✅
- [x] MainLayout (하단 네비게이션)
- [x] Header 컴포넌트
- [x] Card, Button, Avatar 공통 컴포넌트
- [x] 반응형 디자인

### Phase 4: 인증 플로우 ✅
- [x] Google 로그인 UI (프로토타입용 더미 인증)
- [x] AuthGuard 컴포넌트 (라우트 보호)
- [x] 로그아웃 기능
- [x] 설정 페이지

### Phase 5: 홈 피드 (기본) ✅
- [x] PostCard 컴포넌트 (좋아요, 댓글 수 표시)
- [x] PostList 컴포넌트 (필터링, 정렬)
- [x] 홈 피드 페이지
- [x] 게시물 타입별 배지 (AI 아카이브, 추억, 일반)

### Phase 6: 게시물 상세 & 댓글 ⬜
- [ ] 게시물 상세 페이지
- [ ] 댓글 작성 기능
- [ ] AI 댓글 표시 (고인 페르소나)
- [ ] 댓글 목록

### Phase 7: 고인 프로필 (기본) ⬜
- [ ] 고인 프로필 목록 페이지
- [ ] 고인 프로필 상세 페이지
- [ ] 프로필별 게시물 필터링
- [ ] AI 페르소나 정보 표시

### Phase 8: 프로필 생성 플로우 ⬜
- [ ] 고인 프로필 생성 폼
- [ ] 이미지 업로드 (프로토타입: URL 입력)
- [ ] AI 페르소나 설정
- [ ] 생성 완료 및 확인

### Phase 9: 게시물 작성 ⬜
- [ ] 게시물 작성 폼
- [ ] 고인 프로필 선택
- [ ] 이미지 첨부 (프로토타입: URL 입력)
- [ ] 게시물 타입 선택

### Phase 10: DM 기능 ⬜
- [ ] DM 대화 목록
- [ ] 고인 페르소나와의 1:1 대화
- [ ] 메시지 전송 및 수신
- [ ] AI 응답 시뮬레이션

### Phase 11: 추가 기능 ⬜
- [ ] 알림 페이지 구현
- [ ] 프로필 수정 기능
- [ ] 알림 설정
- [ ] 비밀번호 변경

### Phase 12: 폴리싱 ⬜
- [ ] UI/UX 개선
- [ ] 로딩 상태 추가
- [ ] 에러 핸들링
- [ ] 접근성 개선
- [ ] 최종 테스트

## 시작하기

### 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로토타입 로그인

현재는 프로토타입 버전으로, Google 로그인 버튼을 클릭하면 테스트 계정으로 자동 로그인됩니다.

## 프로젝트 구조

```
famory-app/
├── app/                    # Next.js App Router 페이지
│   ├── auth/              # 인증 관련 페이지
│   ├── dm/                # DM 페이지
│   ├── notifications/     # 알림 페이지
│   ├── profiles/          # 고인 프로필 페이지
│   ├── settings/          # 설정 페이지
│   └── page.tsx           # 홈 피드
├── components/            # React 컴포넌트
│   ├── common/           # 공통 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   ├── auth/             # 인증 컴포넌트
│   └── feed/             # 피드 컴포넌트
├── context/              # Context API
├── data/                 # 더미 데이터
├── types/                # TypeScript 타입 정의
└── public/               # 정적 파일
```

## 배포

이 프로젝트는 Vercel에 자동 배포됩니다.

## 라이선스

MIT
