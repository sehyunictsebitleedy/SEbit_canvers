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
  },
  {
    className: "theme-workshop",
    title: "Craft Studio",
    label: "공방·제품 판매",
    copy: "제품의 질감과 제작자의 이야기를 함께 보여주는 브랜드형 구성"
  },
  {
    className: "theme-beauty",
    title: "Beauty Care",
    label: "뷰티·미용",
    copy: "예약, 시술, 분위기를 감각적으로 연결하는 부드러운 화면"
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
          <a href="/themes">Themes</a>
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
              Imagine it.
              <span>Make it real.</span>
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
                placeholder="마음에 드는 참고 사이트 주소를 붙여넣기"
                aria-label="참고 사이트 URL"
              />
              <button className="search-button" type="submit">
                시안 만들기
              </button>
            </form>

            <div className="reference-row" aria-label="참고 사이트">
              <span>참고 사이트 찾기</span>
              {referenceLinks.map(([label, href]) => (
                <a className="reference-chip" href={href} target="_blank" rel="noreferrer" key={href}>
                  {label}
                </a>
              ))}
            </div>

           
          </div>
        </section>

        <section className="section themes-section" id="themes" aria-labelledby="themes-title">
          <div className="section-inner theme-showcase">
            <div className="theme-heading">
              <h2 id="themes-title">
                Browse first.
                <span>Build with a theme.</span>
              </h2>
              <p>
                참고 URL이 없어도 괜찮습니다. 지금 바로 시작할 수 있는 스타일을 고르면
                색상, 폰트, 레이아웃, 카피 톤이 하나의 시안으로 연결됩니다.
              </p>
            </div>

            <div className="theme-grid" aria-label="추천 테마 선택">
              {themeCards.map((theme, index) => (
                <a className={`theme-card ${index === 0 ? "is-active" : ""}`} href="/create" key={theme.title}>
                  <span className={`theme-preview ${theme.className}`}>
                    <span className="theme-topline">{theme.label}</span>
                    <span className="sample-title">{theme.title}</span>
                    <span className="theme-play" aria-hidden="true" />
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
          <div className="section-inner about-dark">
            <div className="about-dark-head">
              <h2 id="about-title">What kind of website do you need?</h2>
              <p>
                소상공인의 홈페이지 제작 환경은 빠르게 바뀌고 있습니다. Canvers는 참고 디자인, 업종 정보, AI 생성 흐름을 하나로 연결해
                더 빠르게 시안을 보고, 더 쉽게 방향을 결정할 수 있도록 돕습니다.
              </p>
            </div>

            <div className="about-capabilities" aria-label="Canvers가 돕는 일">
              <article className="capability-item">
                <div className="capability-title">
                  <span aria-hidden="true">◇</span>
                  <h3>Visual Direction</h3>
                </div>
                <p>
                  마음에 드는 사이트 URL이나 준비된 테마를 출발점으로 삼아, 색상과 타이포그래피, 레이아웃의 방향을 빠르게 정리합니다.
                </p>
                <p>
                  디자인을 설명하기 어려운 고객도 “이런 느낌”을 기준으로 첫 시안을 구체화할 수 있습니다.
                </p>
              </article>

              <article className="capability-item">
                <div className="capability-title">
                  <span aria-hidden="true">□</span>
                  <h3>AI Proposal</h3>
                </div>
                <p>
                  가게명, 업종, 한 줄 소개, 핵심 제공물을 조합해 실제 사업에 맞는 홈페이지 문장과 섹션 구성을 만듭니다.
                </p>
                <p>
                  추상적인 템플릿이 아니라 내 가게 정보가 들어간 화면으로 제작 방향을 검토할 수 있습니다.
                </p>
              </article>

              <article className="capability-item">
                <div className="capability-title">
                  <span aria-hidden="true">✦</span>
                  <h3>CMS Ready</h3>
                </div>
                <p>
                  생성된 시안은 이후 CMS에서 문구를 수정하고, 문의 흐름으로 연결할 수 있는 운영 구조를 전제로 설계됩니다.
                </p>
                <p>
                  빠른 시안 확인에서 끝나지 않고 실제 제작 상담과 운영 단계까지 자연스럽게 이어집니다.
                </p>
              </article>
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
                <h3>Designing the first screen for small businesses.</h3>
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

        <footer className="site-footer" aria-label="SEbit Canvers footer">
          <div className="section-inner footer-inner">
            <div className="footer-brand">
              <span className="brand-mark">S</span>
              <div>
                <strong>SEbit Canvers</strong>
                <p>AI website proposal system by SEHYUN</p>
              </div>
            </div>

            <div className="footer-grid">
              <div>
                <b>Service</b>
                <a href="#reference">Reference</a>
                <a href="/themes">Theme presets</a>
                <a href="/create">Create proposal</a>
              </div>
              <div>
                <b>SEbit</b>
                <a href="#ecosystem">Ecosystem</a>
                <a href="https://sebit.co.kr" target="_blank" rel="noreferrer">
                  sebit.co.kr
                </a>
                <a href="#about">About Canvers</a>
              </div>
              <div>
                <b>Company</b>
                <span>SEHYUN</span>
                <span>Small business web experience</span>
                <span>AI · CMS · Lead generation</span>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© 2026 SEbit Canvers. All rights reserved.</span>
              <span>Designed for local brands.</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
