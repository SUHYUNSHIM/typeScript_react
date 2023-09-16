import {useState} from 'react'
function App(){
    const heavyWork = () => {
        return ['심정봉', '심수봉']
    }
    const [names, setNames] = useState(() => {
        return heavyWork(); //callback 맨 처음 랜더링에만 한번 setter 작업.
    })
    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    const handleUpload = () => {
        setNames((prevState) => {
            return [input, ...prevState]
        })
    }
    return (
        <div>
            <input type= "text" value={input} onChange={handleInputChange}></input>
            <button onClick={handleUpload}>Upload</button>
            {names.map((name,idx) => {
                return <p key={idx}>{name}</p>
            })}
        </div>
    )
}

export default App;