import { useRouter } from 'next/router'
import useSWR from 'swr'
import { getUserData } from '../../services/UserService'

export default function User({ udata }) {
    const { query } = useRouter()
    if (query.user == undefined) return <></>;
    /*const { query } = useRouter()
    console.log(query.user);
    const { data, error } = useSWR(
        () => query.user && ('/api/users/' + query.user),
        fetcher
    )

    console.log("Data:" + data);
    if (error) return <div>Error: {error.message}</div>
    if (!data) return <div>Loading...</div>
        */

    var resp;
    console.log("Q: " + query.user)
    /*
    getUserData(query.user).then(response => {
        resp = JSON.parse(JSON.stringify(response));
        if (resp == undefined || resp[0] == undefined) return;
        for (const el in resp[0]) {
            console.log(el);
        }
        console.log("Re:" + resp[0].uname)
        var listelems;

        for (const udata in resp[0]) {
            listelems += <li>Data: {udata}</li>
        }

        return (
            <>
                <ul>
                    {listelems}
                </ul>
            </>
        )
    })
*/
    
    console.log("Got Here!")

    var data = JSON.parse(JSON.stringify(udata))

    console.log(data)

    const listelems = Object.values(udata).map(val => {
        return <li key={val}>{val}</li>
    });

    Object.values(udata).map(val => {
        console.log(val)
    })

    console.log(listelems)

    return (
        <>
            <ul>
                {listelems}
            </ul>
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
      props: {
        udata,
      },
    }
  }