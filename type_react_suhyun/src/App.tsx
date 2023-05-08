import React from 'react';
import logo from './logo.svg';
import CountryList from './CountryList';
import './App.css';

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
}

const App = () => {

  let msg = "by suhyun";
  const addResult = (x: number, y: number) => {
    return (
      <div className='card card-body bg-light mb-3'>
        {x} + {y} = {x + y}
      </div>
    )
  }
  let list: Array<CountryType> = [
    { no: 1, country: "이집트", visited: false },
    { no: 2, country: "일본", visited: true },
    { no: 3, country: "피지", visited: false },
    { no: 4, country: "콜롬비아", visited: false },
  ]
  return (
    <div className="container">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Hello world {msg}!</h2>
      <hr className='dash-style' />
      {addResult(4, 3)}
      <CountryList countries={list} />
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
