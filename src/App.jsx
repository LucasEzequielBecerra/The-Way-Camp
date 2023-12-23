import './App.css'
import AboutUs from './Components/AboutUs'
import ButtonToTop from './Components/ButtonToTop'
import Summer from './Components/Summer'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Purpose from './Components/Purpose'
import Register from './Components/Register'

function App () {
  return (
    <div className='relative'>
      <Register/>
      <Header />
      <Home />
      <AboutUs />
      <Purpose />
      <Summer />
      <Footer />
      <ButtonToTop />
    </div>
  )
}

export default App
