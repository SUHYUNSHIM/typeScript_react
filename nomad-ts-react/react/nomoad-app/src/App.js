import {useState,useEffect} from "react"

function Hello(){
  function destroyedFn(){
    console.log("bye : {")
  }
  function effectFn(){
    console.log("created : )")
    return destroyedFn;
    //return () => console.log("bye : {")
  }
  useEffect(effectFn,[])
  // useEffect(function(){
  //   console.log("hi :)")
  //   return function(){
  //     console.log("bye : (")
  //   }
  // },[]);

  // useEffect(()=>{
  //   console.log("created : )")
  //   return () => console.log("destroyed : {")
  // },[])

  //case
  //useEffect(()=>{},[])
  //useEffect(function(){},[])
  return <h1>Hello</h1>
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>  
  )
}

export default App;
