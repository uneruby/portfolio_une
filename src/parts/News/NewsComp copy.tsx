import styles from '@/parts/News/News.module.scss'
import { useState } from 'react'
import { makeDummyNews, myNews } from '../mock/mockNews'

export const News:React.FC = () => {
  const requestDummyNews = () => {
    console.log("eawawawawwa")
    makeDummyNews(dummyTitle)
    setDummytitle("")
  }
  
  const [dummyTitle,setDummytitle] = useState("")
    return (
      <div>
          <div className={styles.News}>
            <div className={styles.News_title}>
                <p>News</p>
            </div>
            {myNews.map( (v,index) => (
              <div key={index} className={styles.News_contents1}>
                <img className={styles.contents_img} src={v.imageUrl}></img>
                <div className={styles.text}>
                  <h1 className={styles.contents_title}>{v.title}</h1>
                  <div className={styles.contents_border}>
                    <p className={styles.contents_discription}>
                      {v.text}
                    </p>
                  </div>
                </div>
              </div>
            ))
            }
            {/* <div className={styles.News_contents1}>
                <img className={styles.contents_img} src="https://www.pref.wakayama.lg.jp/prefg/040200/wakayama-nct_d/img/001.jpg"></img>
                <div className={styles.text}>
                  <h1 className={styles.contents_title}>和歌山高専から謎の4万円、振り込まれる</h1>
                  <div className={styles.contents_border}>
                    <p className={styles.contents_discription}>
                        絶対に返さない
                    </p>
                  </div>
                </div>
            </div> */}
          </div>
      </div>
    )
  }