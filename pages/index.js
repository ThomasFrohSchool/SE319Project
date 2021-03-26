import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chess 2</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <p>This is the Main Page. Dunno what it does yet.</p>
        <Link href="/login"><a>Login</a></Link>
        <Link href="/register"><a>register</a></Link>
      </main>

    </div>
  )
}
