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
        <Button title="Launch LiveView"/>
        <div className={styles.note}>
          <p><span>Note</span>: You will need the latest version of Google Chrome for optimal performance.</p>
        </div>
      </div>
    </div>
  )
}
