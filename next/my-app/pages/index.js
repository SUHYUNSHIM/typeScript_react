import Head from "next/head"
import Shim from "@/components/Shim";

export default function Home(){
    return (
        <div>
           <Shim title="Home"/>
                <title>Home | next Movies</title>

            <h1 className='active'>Hello</h1>
        </div>
    )
}