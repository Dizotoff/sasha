import React from "react"
import { Link } from "gatsby"

const Layout = (props) => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu"></ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>

          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.instagram.com/savelievvaa/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        <p style={{ marginBottom: "0" }}>+358405112324</p>
        <p style={{ marginBottom: "0" }}> Y-tunnus: 3222489-3 </p>
        <a
          href="https://www.instagram.com/savelievvaa/"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <p>
          &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>
        </p>
      </footer>
    </div>
  )
}

export default Layout
