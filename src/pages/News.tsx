import { Header } from '@/parts/Header/Header'
import { News } from '@/parts/News/NewsComp'
import style from '@/parts/News/News.module.scss'

export default function Home() {
    return (
      <div>
        <Header/>
          <div className={style.container}>
            <News/>
          </div>
      </div>
    )
  }