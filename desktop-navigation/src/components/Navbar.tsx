import styles from '@/styles/components/Navbar.module.scss';
import { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();

  useEffect(() => {
    //Change Path
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

  useEffect(() => {
    const openBtn = document.querySelector(`.${styles.open__btn}`);
    const closeBtn = document.querySelector(`.${styles.close__btn}`);
    const menuMobile = document.querySelector(`.${styles.menu__mobile}`);

    openBtn?.addEventListener('click', () => {
      console.log('Open');
      menuMobile?.classList.add(styles.menu__active);
    });

    closeBtn?.addEventListener('click', () => {
      console.log('close');
      menuMobile?.classList.remove(styles.menu__active);
    });
    

    //If Screen is bigger than 700px, remove the menu__active class
    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) {
        menuMobile?.classList.remove(styles.menu__active);
      }
    } );

  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.menu__mobile}>
          <ul>
            <li><Image src="/icons/close-btn.svg" className={styles.close__btn} alt="Open Menu Icon" width={30} height={30} /></li>
            <li><Link href={'/'} className={styles.item}>Home</Link></li>
            <li><Link href={'/about'} className={styles.item}>About</Link></li>
            <li><Link href={'/contact'} className={styles.item}>Contact</Link></li>
          </ul>
        </div>
        <div className={styles.menu__icons}>
          <Link href={'/cart'} className={styles.button}>
            <Image src="/icons/cart.svg" alt="Cart Icon" width={20} height={20} />
            Cart
          </Link>
          <Image src="/icons/menu-btn.svg" className={styles.open__btn} alt="Close Menu Icon" width={30} height={30}/>
        </div>
      </div>
    </div>
  );
}
