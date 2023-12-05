import { CartIcon, UserIcon } from '../svg-icons/icons'

const Header = () => {
  return (
    <header className=''>
      <div className='flex justify-between items-center min-h-[100px] px-10 '>
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
          <CartIcon/>
          <UserIcon/>
        </div>
      </div>
    </header>
  )
}

export default Header
