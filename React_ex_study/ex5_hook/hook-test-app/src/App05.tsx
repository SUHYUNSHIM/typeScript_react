import { useRef, useState } from "react";

const App = () => {
    const [name, setName] = useState("홍길동");
    const refTel = useRef("010-0000-1111"); //참조 객체 생성
    return (
        <div className="boxStyle">
            <h2>상태 데이터</h2>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            <br/>
            <div>상태(name) : {name}</div>
            <hr/>
                {/* 입력 값이 바뀔 때마다 current 속성을 통해 갱신됨. 참조객체는 current를 통해 접근해야함. */}
            <input type="text" onChange={(e) => (refTel.current = e.target.value)}/> 
            <br/>
            <div>refTel 값 : {refTel.current}</div>
        </div>
    )
}
export default App;