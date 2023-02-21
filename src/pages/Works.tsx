import styles from '@/parts/Works/Works.module.scss'
import { Header } from '@/parts/Header/Header'
import { Works } from '@/parts/Works/WorksComp'


export default function Home() {
    return (
      <div>
        <Header/>
        <Works/>
      </div>
    )
  }