import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/home.module.scss'
import Link from 'next/link'
import { Header } from '@/parts/Header/Header'
import { Footer } from '@/parts/Footer/Footer'
import { Base } from '@/parts/Base/Base'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import router from 'next/router'
import "swiper/css";


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
          <h1 className={styles.News}>News</h1>
          <div>
              <img src="https://storage.googleapis.com/studio-cms-assets/projects/7kadlQE8a3/s-1920x1080_v-frms_webp_50d50d0d-0c60-4b00-9e42-68c70d3eabb8_middle.webp"></img>
              <h1>Link-Uインターンに参加</h1>
              <p>楽しい</p>
          </div>
          <div>
              <img src="https://www.pref.wakayama.lg.jp/prefg/040200/wakayama-nct_d/img/001.jpg"></img>
              <h1>和歌山高専から謎の4万円、振り込まれる</h1>
              <p>
                  絶対に返さない
              </p>
          </div>
          <div>
            <button onClick={jumpToNews}>more</button>
          </div>
          <div>
            <h1>About</h1>
            <div>
              <img src=""></img>
              <h1>宇根　昇汰</h1>
              Webフロントの勉強をしています。<br/>
              普段は深海の細菌の研究をしたり、ギターを弾いたり、<br/>
              Vue.jsとnode.jsを用いて趣味の制作をしたりしています。<br/>
              <h2>経歴</h2>
              2017.4    和歌山工業高等専門学校 生物応用化学科 入学<br/>
              2022.3    同学校 同学科 卒業<br/>
              2022.4    和歌山工業高等専門学校 エコシステム工学専攻 入学<br/>
              2022.10   プログラミングを始める<br/>
              <button onClick={jumpToAbout}>more</button>
            </div>
          </div>
          <div>
            <h1>Infomation</h1>
            <h2>mail: uneruby@gmail.com</h2>
            <h2>github: <Link href="https://github.com/uneruby">https://github.com/uneruby</Link></h2>
          </div>
        </div>
      {/* <Footer/> */}
    </div>
  )
}
