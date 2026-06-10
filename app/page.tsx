const referenceLinks = [
  ["Awwwards", "https://www.awwwards.com"],
  ["One Page Love", "https://onepagelove.com"],
  ["Lapa Ninja", "https://www.lapa.ninja"],
  ["MUUUUU", "https://muuuuu.org"],
  ["GDWEB", "https://www.gdweb.co.kr"],
  ["DBcut", "https://www.dbcut.com"]
];

const themeCards = [
  {
    className: "theme-business",
    title: "Modern Business",
    label: "모던 비즈니스",
    copy: "신뢰가 필요한 전문 서비스와 B2B 브랜드를 위한 선명한 첫 화면"
  },
  {
    className: "theme-food",
    title: "Warm Food",
    label: "감성 카페·푸드",
    copy: "공간의 온도, 메뉴의 결, 브랜드의 리듬을 부드럽게 보여주는 구성"
  },
  {
    className: "theme-service",
    title: "Minimal Service",
    label: "심플 전문 서비스",
    copy: "불필요한 장식을 덜고 상담과 문의로 바로 이어지는 정보 설계"
  }
];

const ecosystemItems = [
  ["Canvers", "참고 URL과 테마를 바탕으로 홈페이지 시안을 생성합니다."],
  ["CMS", "고객이 문구와 정보를 직접 수정할 수 있는 관리 화면을 제공합니다."],
  ["Lead Form", "완성 화면에서 맞춤 디자인 문의를 수집합니다."],
  ["Growth Data", "테마, 문구, 전환 데이터를 학습해 다음 제안을 개선합니다."]
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#reference" aria-label="SEbit Canvers 홈">
          <span className="brand-mark">S</span>
          <strong>SEbit Canvers</strong>
        </a>
        <nav className="nav" aria-label="주요 섹션">
          <a href="#reference">Reference</a>
          <a href="#themes">Themes</a>
          <a href="#about">About</a>
          <a href="#ecosystem">SEbit</a>
        </nav>
        <a className="nav-cta" href="/create">
          Start
        </a>
      </header>

      <main>
        <section className="section hero" id="reference" aria-labelledby="hero-title">
          <div className="section-inner hero-inner">
            <p className="pill-eyebrow">AI website proposal system</p>
            <h1 id="hero-title">
              AI with an eye
              <span>for local brands.</span>
            </h1>
            <p className="hero-lead">
              마음에 드는 사이트 URL을 넣으면 Canvers가 스타일을 읽고, 내 가게 정보로 바로 시안 화면을 만듭니다.
            </p>

            <form className="search-panel" action="/create">
              <input
                className="search-input"
                name="referenceUrl"
                type="url"
                inputMode="url"
                placeholder="Paste a reference URL"
                aria-label="참고 사이트 URL"
              />
              <button className="search-button" type="submit">
                Generate
              </button>
            </form>

            <div className="reference-row" aria-label="참고 사이트">
              <span>Get inspired by</span>
              {referenceLinks.map(([label, href]) => (
                <a className="reference-chip" href={href} target="_blank" rel="noreferrer" key={href}>
                  {label}
                </a>
              ))}
            </div>

            <div className="hero-preview" aria-hidden="true">
              <div>
                <span>Generated proposal</span>
                <strong>Hapjeong Roasters</strong>
              </div>
              <p>Style JSON + business information + editable CMS</p>
            </div>
          </div>
        </section>

        <section className="section themes-section" id="themes" aria-labelledby="themes-title">
          <div className="section-inner">
            <p className="pill-eyebrow">Theme presets</p>
            <div className="split-head">
              <h2 className="display-title" id="themes-title">
                Start from a visual language.
              </h2>
              <p className="section-note">
                참고 URL이 없어도 괜찮습니다. 준비된 테마를 고르면 색상, 폰트, 레이아웃, 카피 톤이 하나의 스타일 명세로 연결됩니다.
              </p>
            </div>

            <div className="theme-grid" aria-label="추천 테마 선택">
              {themeCards.map((theme, index) => (
                <a className={`theme-card ${index === 0 ? "is-active" : ""}`} href="/create" key={theme.title}>
                  <span className={`theme-preview ${theme.className}`}>
                    <span className="theme-topline">{theme.label}</span>
                    <span className="sample-title">{theme.title}</span>
                  </span>
                  <span className="theme-meta">
                    <h3>{theme.label}</h3>
                    <p>{theme.copy}</p>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="section-inner about-panel">
            <div>
              <p className="pill-eyebrow">About Canvers</p>
              <h2 className="display-title" id="about-title">
                좋은 가게가 좋은 첫 화면을 갖기까지.
              </h2>
            </div>
            <div className="purpose-list" aria-label="서비스 목적">
              <div className="purpose-item">
                <b>01 / 선택을 단순하게</b>
                <span>참고 사이트를 붙여넣거나 추천 테마를 고르는 두 가지 길만 남깁니다.</span>
              </div>
              <div className="purpose-item">
                <b>02 / 내 정보로 구체화</b>
                <span>가게명, 업종, 소개, 핵심 제공물을 넣어 실제 내 홈페이지처럼 보이게 합니다.</span>
              </div>
              <div className="purpose-item">
                <b>03 / 다음 영업으로 연결</b>
                <span>무료 시안 경험 이후 맞춤 디자인 문의로 이어지는 리드 흐름을 만듭니다.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section ecosystem" id="ecosystem" aria-labelledby="ecosystem-title">
          <div className="section-inner">
            <p className="pill-eyebrow dark">SEbit ecosystem</p>
            <div className="split-head">
              <h2 className="display-title" id="ecosystem-title">
                From idea to lead.
              </h2>
              <p className="section-note">
                SEbit은 소상공인이 온라인에서 발견되고, 설득하고, 문의를 받는 과정을 하나의 운영 흐름으로 연결합니다.
              </p>
            </div>

            <div className="ecosystem-map">
              <div className="orbit" aria-label="SEbit 생태계">
                {ecosystemItems.map(([title, copy]) => (
                  <article className="orbit-node" key={title}>
                    <b>{title}</b>
                    <span>{copy}</span>
                  </article>
                ))}
              </div>

              <aside className="company-card" aria-label="세현 소개">
                <p className="pill-eyebrow">SEHYUN</p>
                <h3>작은 사업자의 첫 화면을 설계합니다.</h3>
                <p>
                  세현은 AI 기반 제작 흐름과 실무형 웹 운영 경험을 결합해, 초기 창업자와 소상공인이 빠르게 검증 가능한 온라인 시안을 얻도록 돕습니다.
                </p>
                <a className="primary-button" href="/create">
                  시안 생성 시작
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
