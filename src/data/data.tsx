import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa'

export type LinkCategory = 'portfolio' | 'social' | 'contato'

export type ProfileData = {
  name: string
  username: string
  avatarUrl: string
  bio?: string
}

export type CardLink = {
  id: string
  title: string
  url: string
  category: LinkCategory
}

export type SocialItem = {
  id: string
  url: string
  icon: any
}

export type SiteData = {
  profile: ProfileData
  links: CardLink[]
  social: SocialItem[]
}

export const siteData: SiteData = {
  profile: {
    name: 'André Mendes',
    username: 'andrelvmendes',
    avatarUrl: `https://github.com/andrelvmendes.png`,
    bio: 'Desenvolvedor Full Stack | Python | FastAPI | Java | Springboot'
  },
  links: [
    { id: 'portfolio', title: 'Ver meu portfólio', url: 'https://example.com', category: 'portfolio', },
    { id: 'linkedin', title: 'LinkedIn', url: 'https://example.com', category: 'social' },
    { id: 'teams', title: 'Fale comigo pelo Teams', url: 'https://teams.live.com/l/invite/FAAOy0tMUKkpk8cYw?v=g1', category: 'contato' }
  ],
  social: [
    { id: 'github', url: 'https://github.com/andrelvmendes', icon: <FaGithub size={30} /> },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/andrelvmendes/', icon: <FaLinkedin size={30} /> },
    { id: 'instagram', url: 'https://instagram.com/andrelvmendes', icon: <FaInstagram size={30} /> },
    { id: 'website', url: 'https://andre-mendes.vercel.app/', icon: <FaGlobe size={30} /> },
  ]
}