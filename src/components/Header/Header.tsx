import styles from './index.module.css';
import imgLogo from '../../assets/Logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={imgLogo} alt="Logo" />
    </header>
  )
}