import IgniteLogo from '../assets/ignite-logo.svg'
import styles from './Header.module.css'
export  function Header() {
  console.log("asdasd")
  return (
    <header className={styles.headerContainer}>
      <img className={styles.headerLogo} src={IgniteLogo}/>
    </header>
  )
}
