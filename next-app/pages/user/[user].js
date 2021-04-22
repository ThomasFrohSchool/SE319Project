import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/user_styles.module.css'

export default function User({ udata }) {
    const { query } = useRouter()
    if (query.user == undefined) return <></>;

    var firstName = udata.first
    var lastName = udata.last
    var userName = udata.uname
    var pic = udata.profilepic + '.jpg'
    var dateJoined = udata.datemade
    dateJoined = dateJoined.substring(0, 10)

    var dateObjects = dateJoined.split('-')
    var month;
    var day = dateObjects[2];
    if (day[day.length - 1] == 1) {
        day+='st'
    }
    else if (day[day.length - 1] == 2) {
        day+='nd'
    }
    else if (day[day.length - 1] == 3) {
        day+='rd'
    }
    else {
        day+='th'
    }
    var year = dateObjects[0];
    switch (dateObjects[1]) {
        case '01':
            month = 'January';
            break;
        case '02':
            month = 'February';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'August';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'October';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'December';
            break;
        default:
            month = 'January';
            break;
    }
    var buildDate = month + " " + day + ", " + year

    if (pic == '.jpg' || pic == 'null.jpg') {
        pic = 'default.jpg'
    }

    var picSrc = '/profile_pics/' + pic

    return (
        <>
            <Head>
                <title>User | {userName}</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <main className={styles.main}>
                <div className={styles.body}>
                    <div className={styles.header}>
                        <img src={picSrc} height="100%" className={styles.profile_pic}/>
                        <h3 className={styles.headerName}>{userName}</h3>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.userInfo}>
                        <p className={styles.info} id="name">Name: {firstName} {lastName}</p>
                        <p className={styles.info} id="date">Member Since: {buildDate}</p>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.statInfo}>
                        <h2 className={styles.stats_header}>Stats</h2>
                    </div>
                </div>
            </main>
        </>
    )
    
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3080/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    })
    const users = await res.json()
    console.log(users)
    const paths = users.map(u => {
        return {
            params: {
                user: u.uname
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {

    const res = await fetch('http://localhost:3080/api/users/' + context.user, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ context })
    })
    const udata = await res.json()

    return {
      revalidate: 5,
      props: {
        udata,
      },
    }
  }