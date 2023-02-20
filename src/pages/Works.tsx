import styles from '@/styles/Home.module.sass'
import Link from 'next/link'
import { Base } from '@/parts/Base/Base'


export default function Home() {
    return (
      <div>
        <Base>
          <div>
            <div>
                <h1>Works</h1>
            </div>
            <div>
                <img src="/images/maching.png"></img>
                <h1>独占型マッチングアプリ（進行中）</h1>
                <p>
                    使用技術：Vue.js, node.js, postgreSQL
                </p>
            </div>
          </div>
        </Base>
      </div>
    )
  }