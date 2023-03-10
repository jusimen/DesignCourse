import styles from '@/styles/components/Navbar.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;
    const menuItems = document.querySelectorAll(`.${styles.item}`);

    menuItems.forEach((item) => {
      // Remove "active" class from all items
      item.classList.remove(styles.active);

      if (item.getAttribute('href') === currentPath) {
        item.classList.add(styles.active);
      }
    });
  }, [router.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.menu}>
          <Link href={'/'} className={styles.item}>
            Home
          </Link>
          <Link href={'/about'} className={styles.item}>
            About
          </Link>
          <Link href={'/contact'} className={styles.item}>
            Contact
          </Link>
        </div>

        <Link href={'/cart'} className={styles.button}>
          <Image src="/icons/cart.svg" alt="Cart Icon" width={20} height={20} />
          Cart
        </Link>
      </div>
    </div>
  );
}
