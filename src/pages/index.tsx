import styles from '@/styles/home.module.scss'
import Link from 'next/link'
import { Header } from '@/parts/Header/Header'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import router from 'next/router'
import "swiper/css";
import { News } from '@/parts/News/NewsComp'
import { About } from '@/parts/About/AboutComp'


export default function Home() {
  const jumpToNews = () => {
    router.push("/News")
  }
  const jumpToAbout = () => {
    router.push("/About")
  }

  return (
    <div>
      <Header/>
      
        <div className={styles.Home}>
          <div className={styles.News}>
            <News/>
            {/* <button className={styles.News_button} onClick={jumpToNews}>more</button> */}
            <div className={styles.button_line001} >
              <a href="/News">More</a>
            </div>
          </div>
          <div className={styles.About}>
              <About/>
              {/* <button className={styles.About_button} onClick={jumpToAbout}>more</button> */}
              <div className={styles.button_line002} >
              <a href="/About">More</a>
            </div>
          </div>
          <div className={styles.Infomation}>
            <div className={styles.Info_title}>
            <p>Infomation</p>
            </div>
            <h2 className={styles.mail_adress}>mail: uneruby@gmail.com</h2>
            <h2 className={styles.github_url}>github: <Link href="https://github.com/uneruby">https://github.com/uneruby</Link></h2>
          </div>
        </div>
      {/* <Footer/> */}
    </div>
  )
}
