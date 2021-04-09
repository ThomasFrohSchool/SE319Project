import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.text()

    if (res.status !== 200) {
        console.log("JSON Error")
        throw new Error(data.message)
    }
    return data
}

export default function User() {
    const { query } = useRouter()
    console.log(query.user);
    const { data, error } = useSWR(
        () => query.user && ('/api/users/' + query.user),
        fetcher
    )

    console.log("Data:" + data);
    if (error) return <div>Error: {error.message}</div>
    if (!data) return <div>Loading...</div>

    var listelems;

    for (const udata in data) {
        listelems += <li>Data: {udata}</li>
    }

    return (
        <>
            <ul>
                {listelems}
            </ul>
        </>
    )
}