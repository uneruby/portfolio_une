import styles from '@/parts/Works/Works.module.scss'

export const Works:React.FC = () => {
    return (
    <div>
        <div className={styles.Works}>
            <div className={styles.Works_title}>
                <p>Works</p>
            </div>
            <div className={styles.Works_contents}>
                <div className={styles.div}>
                    <h1 className={styles.title}>独占型マッチングアプリ（進行中）</h1>
                    <p className={styles.tool}>使用技術：Vue.js, node.js, postgreSQL</p>
                    <h2 className={styles.copy}>最高の出会いを、僕にだけ</h2>
                    <h3 className={styles.discription}>現代の恋愛において常識となりつつあるマッチングアプリ。<br/>
                    日々の出会いがない僕にとっては希望の光になるはずだった<br/>
                    でも、結局女の子とマッチングするのはマッチングアプリなんて使わなくてもモテそうなイケメンばかり。<br/>
                    僕が女の子を選べるように、女の子もイケメンを選べるのだから当たり前。<br/>
                    だったら、選べなくすればいい。<br/>
                    このマッチングアプリでは、女性ユーザーはどれだけスワイプしても僕のプロフィールしか出てこない。<br/>
                    これなら安心だ。<br/>
                    </h3>
                </div>
                <img className={styles.contents_img} src="/images/maching.png"></img>
            </div>
        </div>
    </div>
    )
  }