import styles from '@/styles/components/PageStats.module.scss'
import Image from 'next/image'

export default function PageStats() {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <Image src="/icons/stack.svg" width={50} height={50} alt="Stack Icon"/>
            <div className={styles.item__text}>
                <h1>530,001</h1>
                <p>Page Views</p>
            </div>
        </div>
        <div className={styles.item}>
            <Image src="/icons/visitor.svg" width={50} height={50} alt="Visitor Icon"/>
            <div className={styles.item__text}>
                <h1>80,488</h1>
                <p>Unique Visitors</p>
            </div>
        </div>
    </div>
  )
}