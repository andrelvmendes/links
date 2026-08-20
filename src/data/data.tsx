import { FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaRocket} from 'react-icons/fa'
import {GiWeightLiftingUp } from 'react-icons/gi'

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
  category: string
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
    { id: 'portfolio', title: 'Veja mais sobre mim', url: 'https://andre-mendes.vercel.app/', category: 'portfolio', },
    { id: 'linkedin', title: 'Fale comigo no LinkedIn', url: 'https://example.com', category: 'social' },
    { id: 'teams', title: 'Fale comigo pelo Teams', url: 'https://teams.live.com/l/invite/FAAOy0tMUKkpk8cYw?v=g1', category: 'contato' }
  ],
  social: [
    { id: 'github', url: 'https://github.com/andrelvmendes', icon: <FaGithub size={30} /> },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/andrelvmendes/', icon: <FaLinkedin size={30} /> },
    { id: 'website', url: 'https://andre-mendes.vercel.app/', icon: <FaGlobe size={30} /> },
    { id: 'rocket', url: 'https://app.rocketseat.com.br/me/andrelvmendes', icon: <FaRocket size={30} /> },
    { id: 'instagram', url: 'https://instagram.com/andrelvmendes', icon: <FaInstagram size={30} /> },
    { id: 'hevy', url: 'https://hevy.com/user/andrelvmendes', icon: <GiWeightLiftingUp size={30} /> }
  ]
}