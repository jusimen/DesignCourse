import Image from 'next/image';
import styles from '@/styles/components/UserAvatar.module.scss';

export default function UserAvatar() {
  return (
    
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src="/images/user.jpg"
          alt="Avatar"
          width={40}
          height={40}
        />
        <h1>Jane Doe</h1>
      </div>
      <div className={styles.status}></div>
    </div>
  );
}
