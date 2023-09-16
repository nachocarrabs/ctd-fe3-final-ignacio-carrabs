import { Routes, Route} from "react-router-dom"
import { useGlobalContext } from "./Components/utils/global.context";
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"


function App() {

  const { stateTheme } = useGlobalContext()
  return (
  <div className={stateTheme.t ? 'App' : 'dark'}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dentist/:{id}' element={<Detail/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/favs' element={<Favs/>} />
          </Routes>
          <Footer/>
  </div>
  );
}

export default App;
