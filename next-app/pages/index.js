import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import { Cookies } from "react-cookie"
import Link from 'next/link'

export default function Home() {

    var profile_href = "/login";
    const cookies = new Cookies();
    const user_cookie = cookies.get('user')
    if (user_cookie != null) {
        profile_href = "/user/" + user_cookie;
    }
    
    console.log(profile_href)

    return (
        <body style={{ background: '#4d1d91' }}>
            <div className={styles.container}>
                <Head>

                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <NavBar />
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
                        <Link href={profile_href}><a className={styles.card}>
                            <h3>Profile &rarr;</h3>
                            <p>Cick here to access your profile information.</p>
                        </a></Link>

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
