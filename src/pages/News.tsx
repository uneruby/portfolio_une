import styles from '@/styles/News.module.scss'
import Link from 'next/link'
import { Base } from '@/parts/Base/Base'
import { Header } from '@/parts/Header/Header'
import { News } from '@/parts/NewsComp'


export default function Home() {
    return (
      <div>
        <Header/>
          <News/>
      </div>
    )
  }