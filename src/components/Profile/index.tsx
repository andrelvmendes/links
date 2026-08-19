import styles from './styles.module.css'

export default function Profile() {

  const githubUsername = 'devisceral'
  const githubProfileImageUrl = `https://github.com/${githubUsername}.png`

  return (

        <div className={styles.profile}>
            <img className={styles.profileImage}src={githubProfileImageUrl} alt="Foto de perfil André Mendes" />
            <p className={styles.profileTitle}>@andrelvmendes</p>
        </div>
  )
}

