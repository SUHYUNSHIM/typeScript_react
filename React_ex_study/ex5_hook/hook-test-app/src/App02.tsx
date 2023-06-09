 import { ChangeEvent,useState, useEffect } from "react";

const App = () => {
    const [count,setCount] = useState<number>(0);
    const [name, setName] = useState<string>("suhyun");

    /*상태 데이터 중 어느 것이 변해도 함수 effectCallback 실행.*/
    // useEffect(()=> {
    //     console.log(`${name} 님이 ${count}번 클릭했습니다`);
    // });

    /*count가 바뀔 때만 effectCallback 실행 */
    // useEffect(() => {
    //     console.log(`${name}님이 ${count}번 클릭했습니다. `)
    // }, [count])

    /*컴포넌트가 mount될 때만 실행. 즉 첫 화면 로딩.*/
     useEffect(()=> {
        console.log(`${name} 님이 ${count}번 클릭했습니다`);
    },[]);
    return (
        <div>
            이름 변경 : 
            <input type="text" value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} />
            <hr/>
            <button onClick={()=> setCount(count+1)}>카운트 증가</button>
            <p>
                {name}님이 {count}번 클릭했습니다.
            </p>
        </div>
    )
   
}

export default App;