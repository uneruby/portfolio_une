import styles from '@/styles/Works.module.scss'
import Link from 'next/link'
import { Base } from '@/parts/Base/Base'
import { Header } from '@/parts/Header/Header'


export default function Home() {
    return (
      <div>
        <Header/>
          <div className={styles.Works}>
            <div className={styles.Works_title}>
                <p>Works</p>
            </div>
            <div className={styles.Works_contents}>
              <div className={styles.contents_img}>
                <img src="/images/maching.png"></img>
              </div>
              <div className={styles.div}>
                <h1 className={styles.title}>独占型マッチングアプリ（進行中）</h1>
                <p className={styles.tool}>使用技術：Vue.js, node.js, postgreSQL</p>
                <h2 className={styles.copy}>最高の出会いを、僕にだけ</h2>
                <h3 className={styles.discription}>ああああああああああああああああああああだああああああああああああああああああ<br/>
                だだだだだ</h3>
              </div>
            </div>
          </div>
      </div>
    )
  }