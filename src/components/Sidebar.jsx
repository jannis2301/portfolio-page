import { useState } from 'react'
import { NavLinks, SocialLinks } from './index'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navLinks, socialLinks } from '../data/links'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <aside className="sidebar">
      <nav className={showNav ? 'mobile-show' : undefined}>
        <div className="nav-links">
          <NavLinks navLinks={navLinks} setShowNav={setShowNav} />
        </div>
        <FaTimes className="menu-icon" onClick={() => setShowNav(false)} />
        <SocialLinks socialLinks={socialLinks} />
      </nav>
      <FaBars className="menu-icon" onClick={() => setShowNav(!showNav)} />
    </aside>
  )
}

export default Sidebar
