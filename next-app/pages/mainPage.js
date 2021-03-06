import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (

        <body style={{ background: '#4d1d91' }}>
            <div className={styles.container}>

                <Head>

                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <img
                        src="/Chess2.png"
                        width={250}
                        height={250}>
                    </img>
                    <b className={styles.title}>
                        Chess 2
                        <p className={styles.description}> Chess with a twist. </p>
                    </b>


                    <div className={styles.grid}>
                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h3>Profile &rarr;</h3>
                            <p>Cick here to access your profile information.</p>
                        </a>

                        <a href="https://nextjs.org/learn" className={styles.card}>
                            <h3>Chess &rarr;</h3>
                            <p>Click here to play chess.</p>
                        </a>

                        <a
                            href="https://github.com/vercel/next.js/tree/master/examples"
                            className={styles.card}
                        >
                            <h3>Chess 2 &rarr;</h3>
                            <p>Click here to play chess with customisable features and additions. </p>
                        </a>
                    </div>
                </main>
            </div>
        </body>
    )
}
