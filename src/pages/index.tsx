import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      トリプルディスプレイ最高！！
      <img src = '/favicon.ico'/>
      <Link href ="https://bocchi.rocks/">リンク</Link>
    </div>
  )
}
