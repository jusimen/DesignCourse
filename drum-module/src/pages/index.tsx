import styles from '@/styles/pages/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className={styles.wraper}>
        <div className={styles.col_right}>
          <div className={styles.heading}>
            <h1>The best sounding drum module</h1>
            <p>..that money can buy</p>
          </div>
          <div className={styles.cta}>
            <Link href={"#"}>
              Shop Drum Machines
              <svg width="29" height="9" viewBox="0 0 29 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.0272 4.85355C28.2225 4.65829 28.2225 4.34171 28.0272 4.14645L24.8452 0.964466C24.65 0.769204 24.3334 0.769204 24.1381 0.964466C23.9429 1.15973 23.9429 1.47631 24.1381 1.67157L26.9665 4.5L24.1381 7.32843C23.9429 7.52369 23.9429 7.84027 24.1381 8.03553C24.3334 8.2308 24.65 8.2308 24.8452 8.03553L28.0272 4.85355ZM0.673645 5H27.6736V4H0.673645V5Z" fill="black"/></svg>
            </Link>
          </div>
        </div>
        <div className={styles.col_left}>
          <div className={styles.item}>
            <Image src={"/images/img1.jpg"} alt={""} height={100} width={100}/>
          </div>
          <div className={styles.item}>
            <Image src={"/images/img2.jpg"} alt={""} height={100} width={100}/>
          </div>
          <div className={styles.item}>
          </div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}>
            <Image src={"/images/img3.jpg"} alt={""} height={100} width={100}/>
          </div>
        </div>
      </div>

    </>
  )
}
