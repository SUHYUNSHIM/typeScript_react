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

    useEffect(() => {
        
    },[count])

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