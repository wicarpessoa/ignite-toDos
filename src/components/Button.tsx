import { ComponentProps } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ComponentProps<'button'> {
  title: string
}

export  function Button({title, children, ...props}:ButtonProps) {
  return (
    <button {...props} className={styles.button}>
      {title}
      {children}
    </button>
  )
}
