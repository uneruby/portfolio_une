import styles from '@/styles/Home.module.sass'
import Link from 'next/link'
import { Base } from '@/parts/Base/Base'
import { Header } from '@/parts/Header/Header'


export default function Home() {
    return (
      <div>
        <Header/>
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
            </div>
            <div>
                <h2>研究</h2>
                マリアナ海溝11,000 mより単離された細菌<br/>
                Colwellia marinimaniae MTCD1について<br/>
                研究しています。この細菌は120 MPaという<br/>
                超高圧環境のもとで生息しており、世界一<br/>
                圧力に強い細菌です。私はMTCD1が圧力に<br/>
                強い理由を遺伝子の解析によって解明すべく<br/>
                日々研究しています。<br/>
                <img src="data:image/jpeg;base64,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"></img>
                <p>▲Colwellia marinimaniae MTCD1</p>
            </div>
          </div>
      </div>
    )
  }