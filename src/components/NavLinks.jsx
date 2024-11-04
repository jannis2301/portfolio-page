import { NavLink } from 'react-router-dom'

const NavLinks = ({ navLinks, setShowNav }) => {
  return (
    <>
      {navLinks.map((link, id) => {
        const { title, exact, className, href, icon } = link
        return (
          <NavLink
            key={id}
            exact={exact.toString()}
            className={({ isActive }) =>
              isActive ? `${className} active` : `${className}`
            }
            to={href}
            onClick={() => setShowNav(false)}
            aria-label={title}
          >
            {icon}
          </NavLink>
        )
      })}
    </>
  )
}
export default NavLinks
