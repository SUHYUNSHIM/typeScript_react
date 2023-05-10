import React from 'react';
import {useState} from 'react'
import CountryList from './CountryList';
import './App.css';
import styles from './styles'
import AppCssModule from './App.module.css'
import Footer from './Footer';
import {
  BasicButton, ItalicButton, UnderLineButton, WhiteUnderlineButton
} from './Button'

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
}

const App = () => {

  //let msg = "by suhyun";
  

  // let list: Array<CountryType> = [
  //   { no: 1, country: "이집트", visited: false },
  //   { no: 2, country: "일본", visited: true },
  //   { no: 3, country: "피지", visited: false },
  //   { no: 4, country: "콜롬비아", visited: false },
  // ]
  
  const [msg,setMsg] = useState<string>("World");
  const [list,setList] = useState<Array<CountryType>>([
    { no: 1, country: "이집트", visited: false },
    { no: 2, country: "일본", visited: true },
    { no: 3, country: "피지", visited: false },
    { no: 4, country: "콜롬비아", visited: false },
  ]);
  const [theme, setTheme] = useState<string>("basic");


  const addResult = (x: number, y: number) => {
    return (
      <div className='card card-body bg-light mb-3'>
        {x} + {y} = {x + y}
      </div>
    )
  }

  return (    
    <div className="container">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h2 className={AppCssModule.test}>By suhyun with TypeScript, hello React {msg}!</h2>
      <hr style= {styles.dashStyle} />
      {addResult(4, 3)}
      
      <CountryList countries={list} />
      <BasicButton>기본</BasicButton>
      <ItalicButton>이탤릭</ItalicButton>
      <UnderLineButton>언더라인</UnderLineButton>
      <WhiteUnderlineButton>화이트 언더라인</WhiteUnderlineButton>
      <Footer theme={theme}/>
    </div>

  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
