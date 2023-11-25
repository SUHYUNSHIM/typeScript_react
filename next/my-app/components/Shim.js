import Head from "next/head"

export default function Shim({title}){
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}