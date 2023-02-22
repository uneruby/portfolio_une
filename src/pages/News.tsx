import { Header } from '@/parts/Header/Header'
import { News } from '@/parts/News/NewsComp copy'
import style from '@/parts/News/News.module.scss'
import { useState } from 'react'
import { makeDummyNews, myNews } from '@/parts/mock/mockNews'

export default function Home() {
  const requestDummyNews = () => {
    console.log("eawawawawwa")
    makeDummyNews(dummyTitle)
    setDummytitle("")
  }
  
  const [dummyTitle,setDummytitle] = useState("")
    return (
      <div>
        <Header/>
          <div className={style.container}>
            <News/>
            <div className={style.dummyButton}>
                <input value={dummyTitle} onChange={(event) => setDummytitle(event.target.value)}></input>
                <button onClick={requestDummyNews}>登録</button>
            </div>
          </div>
      </div>
    )
  }