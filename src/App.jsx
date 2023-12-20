import './App.css'
import AboutUs from './Components/AboutUs'
import ButtonToTop from './Components/ButtonToTop'
import Summer from './Components/Summer'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Purpose from './Components/Purpose'  

function App () {
  return (
    <div>
      <Header />
      <Home/>
      <AboutUs/>
      <Purpose/>
      <Summer/>
      <Footer/>
    <ButtonToTop/>
    </div>
  )
}

export default App
