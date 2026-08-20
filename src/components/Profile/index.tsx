import styles from './styles.module.css'
import { siteData } from '../../data/data';

export default function Profile() {

  return (
    <div className={styles.profile}>
        <img className={styles.profileImage}src={siteData.profile.avatarUrl} alt="Foto de perfil André Mendes" />
        <p className={styles.profileTitle}>{siteData.profile.name}</p>
    </div>
  )
}

