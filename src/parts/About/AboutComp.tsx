import styles from '@/parts/About/About.module.scss'

export const About:React.FC = () => {
    return (
      <div>
          <div className={styles.About_comp}>
            <div className={styles.About_title}>
              <p>About</p>
            </div>
            <div className={styles.About_hystory}>
              <div>
                <img className={styles.my_profile} src="./images/myprofile_5.jpg"></img>
                <h1 className={styles.my_name}>宇根　昇汰</h1>
                <p className={styles.my_goods}>
                Webフロントの勉強をしています。<br/>
                普段は深海の細菌の研究をしたり、ギターを弾いたり、<br/>
                Vue.jsとnode.jsを用いて趣味の制作をしたりしています。<br/>
                </p>
                <h2 className={styles.my_story_title}>経歴</h2>
                <div className={styles.my_story}>
                  2017.4    和歌山工業高等専門学校 生物応用化学科 入学<br/>
                  2022.3    同学校 同学科 卒業<br/>
                  2022.4    和歌山工業高等専門学校 エコシステム工学専攻 入学<br/>
                  2022.10   プログラミングを始める<br/>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }