import styles from '@/styles/components/Button.module.scss'
import Link from 'next/link'

export function Button({title}) {
  return (
    <Link href={"#"}>
      <div className={styles.container}>{title}</div>
    </Link>
  )
}