import './App.css'
import AboutUs from './Components/AboutUs'
import BuyTicket from './Components/BuyTicket'
import Header from './Components/Header'
import Home from './Components/Home'
import Purpose from './Components/Purpose'

function App () {
  return (
    <div className='scroll-smooth'>
      <Header />
      <Home/>
      <AboutUs/>
      <Purpose/>
      <BuyTicket/>
    </div>
  )
}

export default App
