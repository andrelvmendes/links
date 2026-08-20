import styles from './styles.module.css'
import { siteData } from '../../data/data';

export function SocialLink() {

  return (
    <div className={styles.socialLinks}>
      {siteData.social.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          {link.icon}
        </a>
      ))}
    </div>
  )
}