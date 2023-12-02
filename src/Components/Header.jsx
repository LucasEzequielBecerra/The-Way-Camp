import { CartIcon, UserIcon } from '../svg-icons/icons'

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <button>New here?</button>
        </div>
        <div>
          <picture>
            <img src="logo.png" alt="camp logo" />
          </picture>
        </div>
      </div>
      <div>
        <input type="text" />
        <CartIcon/>
        <UserIcon/>
      </div>
    </header>
  )
}

export default Header
