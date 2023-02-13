import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.sass'
import Link from 'next/link'
import { Base } from '@/parts/Base/Base'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Base>
        <p className={styles.title}>トリプルディスプレイ最高！！</p>
        <p>改行</p>
        <img src = '/favicon.ico'/>
        <Link href ="https://bocchi.rocks/">リンク</Link>
      </Base>
    </div>
  )
}
