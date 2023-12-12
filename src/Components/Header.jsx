import { CartIcon, UserIcon } from '../svg-icons/icons'

const Header = () => {
  return (
    <header className=''>
      <nav className='flex justify-between items-center min-h-[110px] px-10 '>
        <div>
          <button className='w-[187px] h-[57px] rounded-full bg-light-orange text-white text-2xl text-normal'>New here?</button>
        </div>
        <div className='absolute right-1/2 top-10 transform translate-x-1/2'>
          <picture className=''>
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
        <ul className='flex w-5/12 justify-around text-brown'>
          <li className='transition-all duration-500  hover:bg-[url(/tablon2.png)] hover:bg-cover hover:bg-no-repeat hover:text-white'>
            <a className='inline-flex items-center justify-center  text-lg  w-[200px] h-[110px]' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} href="#">ABOUT US</a>
          </li>
          <li className='transition-all duration-500  hover:bg-[url(/tablon2.png)] hover:bg-cover hover:bg-no-repeat hover:text-white' style={{ transition: 'background 0.5s ease' }}>
            <a className='inline-flex items-center justify-center  text-lg  w-[200px] h-[110px]' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} href="#">PURPOSE</a>
          </li>
          <li className='transition-all duration-500  hover:bg-[url(/tablon2.png)] hover:bg-cover hover:bg-no-repeat hover:text-white'>
            <a className='inline-flex items-center justify-center  text-lg  w-[200px] h-[110px]' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} href="#">SUMMER 24`</a>
          </li>
          <li className='transition-all duration-500  hover:bg-[url(/tablon2.png)] hover:bg-cover hover:bg-no-repeat hover:text-white'>
            <a className='inline-flex items-center justify-center  text-lg  w-[200px] h-[110px]' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} href="#">FQ&A`S</a>
          </li>
          <li className='transition-all duration-500  hover:bg-[url(/tablon2.png)] hover:bg-cover hover:bg-no-repeat hover:text-white'>
            <a className='inline-flex items-center justify-center  text-lg  w-[200px] h-[110px]' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} href="#">STORE</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
