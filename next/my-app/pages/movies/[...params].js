import {useRouter} from "next/router";
import Shim from "@/components/Shim";

export default function Detail({params}){
    const router = useRouter()
    const [title,id] = params || [];
    //console.log(router)
    //console.log(params)
    //return "detail"
    return (
        <div>
            <Shim title={title}/>
            <h4>{title}</h4>
        </div>
    )
}
export function getServerSideProps({params:{params}}){
    return {
        props : {params}
    }
}