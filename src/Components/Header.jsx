import { CartIcon, UserIcon } from '../svg-icons/Icons'

const Header = ({ setRegisterVisible, registerVisible }) => {
  return (
    <header id='header' >
      <nav className='flex justify-between items-center min-h-[110px] px-10 '>
        <div>
          <button onClick={() => setRegisterVisible(!registerVisible)} className='w-[187px] h-[57px] rounded-full bg-light-orange text-white text-2xl tracking-wide '>New here?</button>
        </div>
        <div className='absolute right-1/2 top-10 transform translate-x-1/2'>
          <picture >
            <img src="logo.png" alt="camp logo" />
          </picture>
        </div>
        <div className='flex items-center flex-end gap-4'>
          <input type="text" className='rounded-full bg-inherit border-[1px] border-brown h-12 pr-10 mr-auto'/>
          <button>
            <CartIcon/>
          </button>
          <button>
            <UserIcon/>
          </button>
        </div>
      </nav>
      <nav className='flex mt-8 w-full items-center justify-center '>
        <ul className='flex  justify-around text-brown'>
          <li className='transition-all duration-500  hover:bg-[url(/tablon2.png)] hover:bg-cover hover:bg-no-repeat hover:text-white'>
            <a className='inline-flex items-center justify-center  text-lg  w-[200px] h-[110px]' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} href="#aboutUs">ABOUT US</a>
          </li>
          <li className='transition-all duration-500  hover:bg-[url(/tablon2.png)] hover:bg-cover hover:bg-no-repeat hover:text-white'>
            <a className='inline-flex items-center justify-center  text-lg  w-[200px] h-[110px]' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} href="#purpose">PURPOSE</a>
          </li>
          <li className='transition-all duration-500  hover:bg-[url(/tablon2.png)] hover:bg-cover hover:bg-no-repeat hover:text-white'>
            <a className='inline-flex items-center justify-center  text-lg  w-[200px] h-[110px]' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} href="#buyTicket">SUMMER 24`</a>
          </li>
          <li className='transition-all duration-500  hover:bg-[url(/tablon2.png)] hover:bg-cover hover:bg-no-repeat hover:text-white'>
            <a className='inline-flex items-center justify-center  text-lg  w-[200px] h-[110px]' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} href="#fqa">FQ&A`S</a>
          </li>
          <li className='transition-all duration-500  hover:bg-[url(/tablon2.png)] hover:bg-cover hover:bg-no-repeat hover:text-white'>
            <a className='inline-flex items-center justify-center  text-lg  w-[200px] h-[110px]' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} href="#store">STORE</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
