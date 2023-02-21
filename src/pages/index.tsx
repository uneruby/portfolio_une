import styles from '@/styles/home.module.scss'
import Link from 'next/link'
import { Header } from '@/parts/Header/Header'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import { News } from '@/parts/News/HomeNewsComp'
import { About } from '@/parts/About/AboutComp'


export default function Home() {
  return (
    <div>
      <Header/>
        <div className={styles.Home}>
            <News/>
            <div className= {styles.More_News}>
              <Link style={{ textDecoration: 'none', color: 'black' }} href="/News">More</Link>
            </div>
            <About/>
            <div className= {styles.More_News}>
              <Link style={{ textDecoration: 'none', color: 'black' }} href="/About">More</Link>
            </div>
            <div className={styles.Infomation}>
              <div className={styles.Info_title}>
                <p>Infomation</p>
              </div>
              <div className={styles.adress}>
                <p>mail: uneruby@gmail.com</p>
                <p>github: <Link href="https://github.com/uneruby">https://github.com/uneruby</Link></p>
              </div>
          </div>
        </div>
    </div>
  )
}
