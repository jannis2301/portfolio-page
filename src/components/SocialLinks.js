const NavLinks = ({ socialLinks }) => {
  return (
    <ul className="social-links">
      {socialLinks.map((link, id) => {
        const { title, url, icon } = link
        return (
          <li key={id}>
            <a href={url} aria-label={title} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default NavLinks
