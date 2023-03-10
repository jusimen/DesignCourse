import UserAvatar from "@/components/UserAvatar";
import styles from '@/styles/pages/Home.module.scss';


export default function Home() {
  return (
    <div className={styles.container}>
      <UserAvatar/>
    </div>
  )
 
}
