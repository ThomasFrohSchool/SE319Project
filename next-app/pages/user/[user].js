import { queryUser, getAllUsers } from '../../../api/src/queryuser'

export default function Profile({ userData }) {
    var data;
    for (const data in userData) {
        data += <li>{data}</li>
    }

    return (
        <>
            <ul>
                {data}
            </ul>
        </>
    )
}

export async function getStaticPaths() {
    const users = {};
    return {
        users,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const userData = queryUser(params.user)
    return {
        props: {
            userData
        }
    }
}