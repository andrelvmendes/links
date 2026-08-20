import styles from './styles.module.css'

function ToggleMode(){
  const html = document.documentElement;
  
  html.classList.toggle('light');
}

export default function SwitchButton() {
  return (
    <div className={styles.switch} onClick={ToggleMode}>
      <button className={styles.switchButton}></button>
      <span className={styles.switchIcon}></span>
    </div>
  )
}