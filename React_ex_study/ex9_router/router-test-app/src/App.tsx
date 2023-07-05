import React from 'react'
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
//import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import Header from './components/Header'

import pMinDelay from 'p-min-delay'
import Loading from './components/Loading'

//import Home from './pages/Home'
//import About from './pages/About';
//import SongList from './pages/SongList';
//import Members from './pages/Members';
//import SongDetail from "./pages/SongDetail";
//import Player from './pages/songs/Player'
//import SongIndex from './pages/songs/Index'
//import NotFound from './components/NotFound';

const Home = React.lazy( ()=> pMinDelay(import("./pages/Home"), 1000));
const About = React.lazy(() => pMinDelay(import("./pages/About"), 1000));
const SongList = React.lazy(() => pMinDelay(import("./pages/SongList"), 1000));
const Members = React.lazy(() => pMinDelay(import("./pages/Members"), 1000));
const Player = React.lazy(() => pMinDelay(import("./pages/songs/Player"), 1000));
const SongIndex = React.lazy(() => pMinDelay(import("./pages/songs/Index"), 1000));
const NotFound = React.lazy(() => pMinDelay(import("./components/NotFound"), 1000));



export type MemberType ={name : string; photo: string;}
export type SongType = {id : number; title : string; musician : string; youtube_link : string};

const App = () => {
  const [members] = useState<Array<MemberType>>([
    { name : "A", photo : "photos/jewels.png"},
    { name : "B", photo : "photos/jewels.png" },
    { name : "C", photo : "photos/jewels.png" },
    { name : "D", photo : "photos/diamond.png" },
    { name : "E", photo : "photos/diamond.png" },
    { name : "F", photo : "photos/diamond.png" }
  ]);

  const [songs] = useState<Array<SongType>>([
    { id: 1, title: "Fallin' for you", musician: "Colbie callet", youtube_link: "PABUl_EX_hw" },
    { id: 2, title: "Can't hurry love", musician: "The supremes", youtube_link: "EJDPhjQft04" },
    { id: 3, title: "Landslide", musician: "Dixie chicks", youtube_link: "V2N7gYom9-A" },
    { id: 4, title: "Can't let go", musician: "Linda ronstadt", youtube_link: "P-EpGKXmoe4" },
    { id: 5, title: "Doctor my eyes", musician: "Jackson Browne", youtube_link: "7JlFKS_1oZk" },
    { id: 6, title: "We gotta get you a woman", musician: "Todd Rundgren", youtube_link: "EyUjbBViAGE" },
    { id: 7, title: "Hip to my heart", musician: "Band Perry", youtube_link: "vpLCFnD9LFo" },
    { id: 8, title: "Rolling in the deep", musician: "Adele", youtube_link: "EvK8pDK6IQU" },
  ]);


  return(
    <React.Suspense fallback={<Loading/>}>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home/>}></Route>          
            <Route path="/members" element={<Members members={members}/>} />
            <Route path="/songs" element={<SongList songs={songs} />} />
            {/* <Route path="/songs/:id" element={<SongDetail songs={songs} />} /> */}
            <Route path="/about" element={<About title={'여우와 늙다리들'}/>}/>
            
            <Route path="/songs" element={<SongList songs={songs}/>}>
              <Route index element={<SongIndex/>}/>
              {/* <Route path=":id" element={<Player songs={songs}/>}/> */}
              <Route path=":id" element={<Player/>}></Route>
            </Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>  
        </div>
      </Router>
    </React.Suspense>
  )
}

export default App
