import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shardapeetham</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.headsection} >
          <h1 className={styles.heading}>Shardapeetham</h1>
          <img src="/images/logo.png" width="150px" />
        </div>

        <p className={styles.paragraphtext}>
          This is some sample text.
        </p>
      </main>
    </div>
  )
}
