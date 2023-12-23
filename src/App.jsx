import './App.css'
import AboutUs from './Components/AboutUs'
import ButtonToTop from './Components/ButtonToTop'
import Summer from './Components/Summer'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Purpose from './Components/Purpose'
import Register from './Components/Register'
import { useEffect, useState } from 'react'

function App () {
  const [registerVisible, setRegisterVisible] = useState(false)
  useEffect(() => {
    registerVisible &&
    document.body.classList.add('overflow-hidden')
  }, [registerVisible])
  return (
    <div >
      <Register registerVisible={registerVisible} setRegisterVisible={setRegisterVisible}/>
      <Header registerVisible={registerVisible} setRegisterVisible={setRegisterVisible} />
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
