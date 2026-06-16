# SEbit Canvers

SEbit Canvers는 소상공인과 초기 창업자를 위한 AI 기반 홈페이지 시안 생성 서비스입니다.

사용자는 마음에 드는 참고 사이트 URL을 입력하거나 준비된 추천 테마를 선택하고, 가게 정보를 입력합니다. Canvers는 이 정보를 하나의 스타일 명세와 콘텐츠 데이터로 정리해 맞춤 홈페이지 시안을 생성합니다.

## 현재 구현 범위

- 타이포그래피 중심 메인 홈페이지
- 참고 URL 입력 중심의 첫 화면
- 추천 테마 선택 섹션
- Canvers 제작 목적을 설명하는 ABOUT 섹션
- SEbit 생태계 및 세현 소개 섹션
- SEbit/세현 정보가 포함된 푸터
- Next.js 앱 구조
- 시안 생성 API
- 슬러그 중복 체크 API
- 리드 문의 저장 API
- 생성 폼
- 공개 시안 페이지
- CMS 텍스트 편집 화면 초안
- Supabase 테이블 스키마
- OpenAI/Supabase 키 없이도 동작하는 mock 생성 흐름

## 최근 디자인 작업

- 전체 메인 페이지를 Anima 계열의 AI/SaaS 랜딩 감성으로 정리
- 첫 화면을 큰 타이포그래피, 대형 URL 입력창, 참고 사이트 칩 중심으로 구성
- 두 번째 섹션을 첨부 레퍼런스처럼 중앙 헤드라인과 떠 있는 카드 콜라주 형태로 변경
- 추천 테마 카드를 5개로 확장
  - 모던 비즈니스
  - 감성 카페·푸드
  - 심플 전문 서비스
  - 공방·제품 판매
  - 뷰티·미용
- 카드 hover, 검색창 focus, 히어로 등장 모션 등 가벼운 애니메이션 추가
- `prefers-reduced-motion` 대응으로 움직임 감소 설정 지원
- 푸터에 Service, SEbit, Company 링크 및 소개 영역 추가
- 한글 기본 폰트를 네이버 나눔고딕 계열로 설정

## 기술 스택

- Next.js
- React
- TypeScript
- Supabase
- OpenAI API
- Playwright
- Zod

## 주요 폴더 구조

```text
app/
  api/
    generate/       시안 생성 API
    leads/          문의 저장 API
    slug/check/     사이트 주소 사용 가능 여부 체크
  create/           시안 생성 폼
  [slug]/           생성된 공개 시안 페이지
  [slug]/cms/       CMS 편집 화면 초안
  page.tsx          메인 홈페이지
  globals.css       전역 스타일

lib/
  canvers/
    types.ts        공통 타입
    themes.ts       추천 테마 스타일 JSON
    slug.ts         슬러그 생성 및 검증
    copy.ts         mock 카피 생성
  server/
    ai.ts           AI 연동 및 fallback
    store.ts        Supabase 저장소 및 메모리 fallback
    generate-site.ts 시안 생성 파이프라인
    env.ts          환경 변수 유틸

supabase/
  schema.sql        MVP 테이블 스키마
```

## 실행 방법

```powershell
cd C:\Users\lenovo\Downloads\git\SEbit_canvers
npm.cmd install
copy .env.example .env.local
npm.cmd run dev
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:3000
```

PowerShell에서 `npm` 실행 정책 오류가 나면 `npm.cmd`를 사용하면 됩니다.

## 환경 변수

`.env.example`을 복사해 `.env.local`을 만들고 필요한 값을 채웁니다.

```text
NEXT_PUBLIC_SITE_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

OPENAI_API_KEY=
CANVERS_MOCK_MODE=true
```

API 키가 없으면 mock mode로 동작합니다.

OpenAI API를 실제로 사용하려면:

```text
OPENAI_API_KEY=...
CANVERS_MOCK_MODE=false
```

## Supabase 설정

Supabase 프로젝트를 만든 뒤 `supabase/schema.sql` 내용을 SQL Editor에서 실행합니다.

MVP 테이블은 두 개입니다.

- `sites`: 생성된 홈페이지 시안 데이터
- `leads`: 맞춤 디자인 문의 데이터

## 시안 생성 흐름

```text
사용자 입력
-> Track A: 참고 URL 입력
-> Track B: 추천 테마 선택
-> 스타일 JSON 생성 또는 프리셋 매핑
-> 가게 정보와 결합
-> 카피 생성
-> 사이트 데이터 저장
-> /{slug} 공개 시안 페이지 생성
-> /{slug}/cms CMS 화면 제공
```

현재 Track A의 참고 URL 분석은 실제 스크린샷/Vision 분석 전 단계이며, 실패 없이 동작하도록 warm fallback 스타일을 사용합니다. 실제 분석 로직은 `lib/server/ai.ts`에 추가하면 됩니다.

## 참고 문서

백엔드 상세 설명은 `BACKEND.md`에 정리되어 있습니다.

## GitHub

원격 저장소:

```text
https://github.com/sehyunictsebitleedy/SEbit_canvers.git
```
