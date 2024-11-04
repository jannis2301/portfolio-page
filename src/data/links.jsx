import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaSuitcase,
  FaXing,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

const navLinks = [
  {
    title: 'home page',
    href: '/',
    exact: true,
    icon: <FaHome />,
    className: 'home-link',
  },
  {
    title: 'about page',
    href: '/about',
    exact: false,
    icon: <FaUser />,
    className: 'about-link',
  },
  {
    title: 'portfolio page',
    href: '/portfolio',
    exact: false,
    icon: <FaSuitcase />,
    className: 'portfolio-link',
  },
  {
    title: 'contact page',
    href: '/contact',
    exact: false,
    icon: <FaEnvelope />,
    className: 'contact-link',
  },
]

const socialLinks = [
  {
    title: 'Xing',
    url: 'https://www.xing.com/profile/Jannis_Achtsoglou/cv',
    icon: <FaXing />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jannis-achtsoglou-67b779217/',
    icon: <FaLinkedin />,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/jannis2301',
    icon: <FaGithub />,
  },
]

export { navLinks, socialLinks }
