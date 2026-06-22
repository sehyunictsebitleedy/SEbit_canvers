const templates = [
  {
    title: "Modern Business",
    label: "모던 비즈니스",
    tone: "Clear, structured, trustworthy",
    description: "전문 서비스, 컨설팅, B2B 브랜드처럼 신뢰와 정보 구조가 중요한 비즈니스에 맞춘 테마입니다.",
    features: ["명확한 히어로 카피", "서비스/전문 분야 섹션", "문의 전환 중심 구성"],
    className: "template-business"
  },
  {
    title: "Warm Food",
    label: "감성 카페·푸드",
    tone: "Warm, local, inviting",
    description: "카페, 식당, 디저트샵처럼 공간의 온도와 메뉴의 매력을 부드럽게 보여줘야 하는 브랜드에 어울립니다.",
    features: ["대표 메뉴 소개", "공간 감성 강조", "방문/예약 CTA"],
    className: "template-food"
  },
  {
    title: "Minimal Service",
    label: "심플 전문 서비스",
    tone: "Minimal, calm, conversion-first",
    description: "상담, 예약, 문의가 중요한 전문 서비스 업종을 위해 정보의 우선순위를 차분하게 정리합니다.",
    features: ["상담 흐름 중심", "간결한 정보 배치", "신뢰 요소 강조"],
    className: "template-service"
  },
  {
    title: "Craft Studio",
    label: "공방·제품 판매",
    tone: "Tactile, crafted, story-led",
    description: "제품의 질감, 제작자의 이야기, 브랜드의 손맛을 함께 보여주는 공방형 테마입니다.",
    features: ["제품 그리드", "브랜드 스토리", "제작 과정 소개"],
    className: "template-workshop"
  },
  {
    title: "Beauty Care",
    label: "뷰티·미용",
    tone: "Soft, polished, appointment-ready",
    description: "시술 메뉴, 분위기, 예약 전환을 감각적으로 연결하는 뷰티 업종용 테마입니다.",
    features: ["시술/가격 안내", "예약 CTA", "고객 경험 강조"],
    className: "template-beauty"
  }
];

export default function ThemesPage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="SEbit Canvers 홈">
          <span className="brand-mark">S</span>
          <strong>SEbit Canvers</strong>
        </a>
        <nav className="nav" aria-label="주요 섹션">
          <a href="/">Home</a>
          <a href="/themes">Themes</a>
          <a href="/#about">About</a>
          <a href="/#ecosystem">SEbit</a>
        </nav>
        <a className="nav-cta" href="/create">
          Start
        </a>
      </header>

      <main className="templates-page">
        <section className="templates-hero">
          <div className="section-inner templates-hero-inner">
            <p className="pill-eyebrow">Canvers theme library</p>
            <h1>
              Ship faster with
              <span>Canvers Themes</span>
            </h1>
            <p>
              업종과 브랜드 분위기에 맞는 홈페이지 시안 테마를 고르세요. 각 테마는 색상, 타이포그래피, 섹션 구성, 카피 톤을 하나의 스타일 명세로 정리합니다.
            </p>
          </div>
        </section>

        <section className="templates-list" aria-label="Canvers 추천 테마 목록">
          <div className="section-inner">
            {templates.map((template) => (
              <article className="template-row" key={template.title}>
                <div className="template-copy">
                  <span>{template.label}</span>
                  <h2>{template.title}</h2>
                  <p>{template.description}</p>
                  <ul>
                    {template.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="template-actions">
                    <a href="/create">이 테마로 시작</a>
                    <small>{template.tone}</small>
                  </div>
                </div>

                <div className={`template-preview-card ${template.className}`} aria-hidden="true">
                  <div className="template-window">
                    <div className="template-window-top">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="template-window-body">
                      <b>{template.label}</b>
                      <strong>{template.title}</strong>
                      <span />
                      <span />
                      <em />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
