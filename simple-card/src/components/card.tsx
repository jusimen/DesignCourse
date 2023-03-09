import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/Card.module.scss';

export default function Card() {
  return (
    <div className={styles.card}>
      <Link href={'#'}>
        <Image
          src={'/images/card_image.jpg'}
          alt={'Green Luxurious Building'}
          width={100}
          height={100}
        />
      </Link>
      <div className={styles.tag}>
        <Link href={'#'}>ECO News</Link>
      </div>
      <h1>A Lush Luxurious Environment</h1>
      <Link href={'#'} className={styles.cta}>
        <p>View More</p>

        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3536 4.85355C11.5488 4.65829 11.5488 4.34171 11.3536 4.14645L8.17157 0.964466C7.97631 0.769204 7.65973 0.769204 7.46447 0.964466C7.2692 1.15973 7.2692 1.47631 7.46447 1.67157L10.2929 4.5L7.46447 7.32843C7.2692 7.52369 7.2692 7.84027 7.46447 8.03553C7.65973 8.2308 7.97631 8.2308 8.17157 8.03553L11.3536 4.85355ZM0 5H11V4H0V5Z"
            fill="#B1C4D9"
          />
        </svg>
      </Link>
    </div>
  );
}
