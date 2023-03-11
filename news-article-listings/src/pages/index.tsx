import Head from 'next/head'
import styles from '@/styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>News Article Listings</title>
      </Head>
      <main>
        <h1>Latest News</h1>
        <div className={styles.article__container}>
          <div className={styles.article}>
            <h2>Engagement at an all time low among young voters</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam impedit sed vel quia ipsum pariatur, consequuntur iure a ex. Expedita nobis, sequi aut asperiores magni non accusantium doloribus exercitationem.</p>
          </div>
          <div className={styles.article}>
            <h2>Engagement at an all time low among young voters</h2>
            <p>Young voters are less likely to vote than any other age group, according to a new study.</p>
          </div>
          <div className={styles.article}>
            <h2>Engagement at an all time low among young voters</h2>
            <p>Young voters are less likely to vote than any other age group, according to a new study.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
