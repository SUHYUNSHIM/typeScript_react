import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About';
import SongList from './pages/SongList';
import Members from './pages/Members';
//import SongDetail from "./pages/SongDetail";
import Player from './pages/songs/Player'
import SongIndex from './pages/songs/Index'

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
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>          
          <Route path="/members" element={<Members members={members}/>} />
          <Route path="/songs" element={<SongList songs={songs} />} />
          {/* <Route path="/songs/:id" element={<SongDetail songs={songs} />} /> */}
          <Route path="/about" element={<About title={'여우와 늙다리들'}/>}/>
          <Route path="/songs" element={<SongList songs={songs}/>}>
            <Route index element={<SongIndex/>}/>
            <Route path=":id" element={<Player songs={songs}/>}/>
          </Route>
        </Routes>  
      </div>
    </Router>
  )
}

export default App