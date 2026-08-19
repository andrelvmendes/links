import styles from './styles.module.css'

interface CardProps {
    link: string;
    title: string;
}

export default function Card({ link, title }: CardProps) {

    return (
        <div className={styles.card}>
            <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                    <a className={styles.cardLink} href={link} target="_blank">
                        {title}
                    </a>
                </li>
            </ul>
        </div>
    )
}