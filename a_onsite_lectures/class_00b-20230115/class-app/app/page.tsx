// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>WMD 2023/15/01</h1>
      <p>Route Groups</p>
      <ol>
        <li><Link href="/name">Name</Link></li>
        <li><Link href="/address">Address</Link></li>
      </ol>
      <p>Dynamic Route</p>
      <ol>
        <li><Link href="/AI">Hassan</Link></li>
        <li><Link href="/CNC">Umar</Link></li>
      </ol>
    </div>
  )
}
