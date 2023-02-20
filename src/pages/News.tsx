import styles from '@/styles/Home.module.sass'
import Link from 'next/link'
import { Base } from '@/parts/Base/Base'


export default function Home() {
    return (
      <div>
        <Base>
          <div>
            <div>
                <h1>News</h1>
            </div>
            <div>
                <img src="https://storage.googleapis.com/studio-cms-assets/projects/7kadlQE8a3/s-1920x1080_v-frms_webp_50d50d0d-0c60-4b00-9e42-68c70d3eabb8_middle.webp"></img>
                <h1>Link-Uインターンに参加</h1>
                <p>
                    楽しい
                </p>
            </div>
            <div>
                <img src="https://www.pref.wakayama.lg.jp/prefg/040200/wakayama-nct_d/img/001.jpg"></img>
                <h1>和歌山高専から謎の4万円、振り込まれる</h1>
                <p>
                    絶対に返さない
                </p>
            </div>
          </div>
        </Base>
      </div>
    )
  }