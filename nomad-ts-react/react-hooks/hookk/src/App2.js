import React, {useState,useEffect} from 'react';

function App2(){
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count+1)
    }
    const handleInputChange = (event) => {
        setName(event.target.value)
    }

    //마운트가 될 때 그리고 count가 변할 때마다 실행됨.
    useEffect(() => {
        
    },[count])

    //마운트 될 때만 실행.
    useEffect(() => {
        
    },[])

    return (
        <div>
            <button onClick={handleCountUpdate}>
                Update
            </button>
            <span>count : {count}</span>
            <input type="text" value={name} onClick={handleInputChange}/>
            <span>name : {name}</span>
        </div>
    )
}
export default App2;