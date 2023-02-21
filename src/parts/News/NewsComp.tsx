import styles from '@/parts/News/News.module.scss'

export const News:React.FC = () => {
    return (
      <div>
          <div className={styles.News}>
            <div className={styles.News_title}>
                <p>News</p>
            </div>
            <div className={styles.News_contents1}>
                <img className={styles.contents_img} src="https://storage.googleapis.com/studio-cms-assets/projects/7kadlQE8a3/s-1920x1080_v-frms_webp_50d50d0d-0c60-4b00-9e42-68c70d3eabb8_middle.webp"></img>
                <h1 className={styles.contents_title}>Link-Uインターンに参加</h1>
                <div className={styles.contents_border}>
                  <p className={styles.contents_discription}>
                      楽しい<br/>
                      aだだだだだだだだだだだだだ<br/>
                      dwdadwadwadawdawdwaddwaddwad<br/>
                      dwadawdwadwadwadawdwadwadwad
                  </p>
                </div>
            </div>
            <div className={styles.News_contents2}>
                <img className={styles.contents_img} src="https://www.pref.wakayama.lg.jp/prefg/040200/wakayama-nct_d/img/001.jpg"></img>
                <h1 className={styles.contents_title}>和歌山高専から謎の4万円、振り込まれる</h1>
                <div className={styles.contents_border}>
                <p className={styles.contents_discription}>
                    絶対に返さない
                </p>
                </div>
            </div>
          </div>
      </div>
    )
  }