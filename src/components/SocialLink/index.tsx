import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import styles from './styles.module.css'

export function SocialLink() {
  return (
    <div className={styles.socialLinks}>
      <a href="#" target="_blank">
        <FaGithub size={30} />
      </a>
      <a href="#" target="_blank">
        <FaInstagram size={30} />
      </a>
      <a href="#" target="_blank">
        <FaYoutube size={30} />
      </a>
      <a href="#" target="_blank">
        <FaLinkedin size={30} />
      </a>
    </div>
  )
}