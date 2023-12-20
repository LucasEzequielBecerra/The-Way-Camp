import { EmailIcon } from '../svg-icons/icons'
import { SendButton } from './ButtonSend'

const Footer = () => {
  return (
    <footer className="bg-orange  border-orange h-[320px]
    ">
      <div className="flex w-full bg-pink mb-5 pt-5">
        <div className="flex-1 flex flex-col justify-center  relative">
          <div className='h-3/4 bg-orange absolute right-0 w-[2px]'></div>
          <picture className="flex justify-center">
            <img src="./text-ballon.png" alt="text-ballon-image" />
          </picture>
          <div className="flex justify-center gap-5">
            <a target='_blank' href="https://www.instagram.com/jesussummercamp/" rel="noreferrer">
              <img src="./instagram-logo.png" alt="instagram-logo" />
            </a>
            <a target='_blank' href="#">
              <img src="./tiktok-logo.png" alt="tiktok-logo" />
            </a>
            <a target='_blank' href="#">
              <img src="./twitter-logo.png" alt="twitter-logo" />
            </a>
          </div>
          <div className="flex justify-center mt-3">
            <p className="font-bold">12-3456-7890</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-5 relative">
          <div className='h-3/4 bg-orange absolute right-0 w-[2px]'></div>
          <div className="text-center mb-5">
            <img src="./u-want-updates.png" alt="u-want-updates-image" />
            <p>leave us here your info!</p>
          </div>
          <form action="submit">
            <div className="relative mb-4 ">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <EmailIcon className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="*EMAIL*"
                className="pl-9 pr-4 py-2 border rounded-[10px] w-full text-sm h-9 shadow-3xl"
              />
            </div>
            <div className="mb-4 flex gap-3">
              <input
                type="text"
                placeholder="*FIRST NAME*"
                className="pl-2 pr-4 py-2 border rounded-[10px] w-full text-sm shadow-3xl"
              />
              <SendButton />
            </div>
          </form>
        </div>
        <div className="flex-1 flex justify-center items-center relative">
          <div>
            <ul className='text-sm list-disc underline'>
              <li>VOLUNTEERING</li>
              <li>WORK WITH US</li>
              <li>COMMUNITY SERVICE</li>
              <li>OUR TEAM</li>
              <li>EVENTS</li>
              <li>SEND US A MESSAGE</li>
            </ul>
          </div>
          <a href='#header' className='absolute bottom-0 right-10'><img src="./simplified-logo.png" alt="simplified-logo" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
