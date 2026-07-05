# SEbit Canvers

SEbit Canvers는 회원가입 없이 업종과 디자인 테마를 선택하고 간단한 가게 정보를 입력하면, AI가 맞춤형 홈페이지 시안과 CMS를 생성하는 서비스입니다.

> 회원가입 없이 3분 만에 홈페이지 시안과 CMS를 만들어보세요.

## 현재 사용자 흐름

```text
메인 진입
→ 업종 선택
→ 디자인 테마 선택
→ 가게 정보 입력
→ AI 시안 생성
→ 시안 미리보기
→ CMS 발급
```

URL 기반 스타일 분석은 MVP에서 제외했으며 향후 v2 기능으로 제공할 예정입니다.

## 최근 업데이트

### 메인 화면

- 기존 Hero의 큰 타이포그래피와 정보 위계 유지
- Soft Pastel 시안의 보라색 포인트와 그라디언트 적용
- 둥근 카드, 부드러운 그림자 및 인터랙션 스타일 반영
- 무료·비회원 시작 메시지와 업종·테마 선택 CTA 연결
- 데스크톱과 모바일 반응형 레이아웃 지원
- 움직임 감소 환경을 위한 `prefers-reduced-motion` 대응

### 업종 및 디자인 테마

지원 업종:

- 카페·베이커리
- 뷰티·살롱
- 피트니스
- 클리닉·헬스
- 레스토랑
- 온라인 스토어

지원 테마:

- `Minimal`: 여백 중심의 미니멀 스타일
- `Editorial`: 잡지형 에디토리얼 스타일
- `Bold`: 강한 컬러와 대비 중심 스타일
- `Soft`: 부드러운 파스텔 스타일

### 정보 입력 및 생성

- 메인에서 선택한 업종과 테마를 `/create` 화면으로 전달
- 가게명, 사이트 주소, 한 줄 소개, 핵심 제공 항목 입력
- 연락처, 주소, 영업시간 입력
- 업종별 기본 AI 카피 확장
- 기존 AI 시안 생성, 공개 미리보기 및 CMS 흐름 유지

## 현재 구현 범위

- 업종 및 테마 선택형 메인 화면
- AI 카피 및 홈페이지 시안 생성
- 슬러그 생성과 중복 확인 API
- 생성된 공개 시안 페이지
- CMS 텍스트 편집 화면 초안
- 리드 문의 저장 API
- Supabase 테이블 스키마
- OpenAI와 Supabase 키 없이 동작하는 mock 생성 흐름

## 기술 스택

- Next.js 14
- React 18
- TypeScript
- Supabase
- OpenAI API
- Playwright
- Zod

## 주요 폴더 구조

```text
app/
  api/
    generate/        시안 생성 API
    leads/           문의 저장 API
    slug/check/      사이트 주소 중복 확인
  create/            가게 정보 입력 및 시안 생성
  [slug]/            생성된 공개 시안
  [slug]/cms/        CMS 편집 화면 초안
  page.tsx           업종·테마 선택 메인 화면
  globals.css        전역 및 반응형 스타일

lib/
  canvers/
    types.ts         공통 타입
    themes.ts        디자인 테마 프리셋
    slug.ts          슬러그 생성 및 검증
    copy.ts          업종별 mock 카피 생성
  server/
    ai.ts            AI 연동 및 fallback
    store.ts         Supabase 및 메모리 저장소
    generate-site.ts 시안 생성 파이프라인
    env.ts           환경 변수 유틸

supabase/
  schema.sql         MVP 테이블 스키마
```

## 실행 방법

```powershell
git clone https://github.com/sehyunictsebitleedy/SEbit_canvers.git
cd SEbit_canvers
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

PowerShell 실행 정책으로 `npm` 명령이 차단되면 `npm.cmd`를 사용하세요.

## 환경 변수

`.env.example`을 `.env.local`로 복사한 뒤 필요한 값을 입력합니다.

```text
NEXT_PUBLIC_SITE_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

OPENAI_API_KEY=
CANVERS_MOCK_MODE=true
```

API 키가 없으면 mock mode로 동작합니다. OpenAI API를 사용하려면 `OPENAI_API_KEY`를 설정하고 `CANVERS_MOCK_MODE=false`로 변경하세요.

## Supabase 설정

Supabase 프로젝트 생성 후 `supabase/schema.sql`을 SQL Editor에서 실행합니다.

- `sites`: 생성된 홈페이지 시안 데이터
- `leads`: 맞춤 디자인 문의 데이터

## 검증

- Next.js 프로덕션 빌드 성공
- TypeScript 타입 검사 성공
- 정적 페이지 생성 성공
- 로컬 메인 화면 렌더링 확인

```powershell
npm.cmd run build
```

## 문서

- [Canvers 기획서 v2.2](./Canvers_기획서_v2.2.md)
- [백엔드 구성 문서](./BACKEND.md)

## 저장소

[sehyunictsebitleedy/SEbit_canvers](https://github.com/sehyunictsebitleedy/SEbit_canvers)
