import styles from '@/styles/pages/Home.module.scss'
import CurrentVisitors from '@/components/CurrentVisitors'
import PageStats from '@/components/PageStats'
import { Button } from '@/components/Button'

export default function Home() {
  return(
    <div className={styles.wrapper}>
      <div className={styles.container}>
          <CurrentVisitors/>
          <PageStats/>
        <div className={styles.cta__wrapper}>
          <div className={styles.cta}>
            <Button title="Launch LiveView"/>
          </div>
          <div className={styles.note}>
            <p><span>Note</span>: You will need the latest version of Google Chrome for optimal performance.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
