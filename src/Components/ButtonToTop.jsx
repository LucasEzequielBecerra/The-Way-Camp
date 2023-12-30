import { useEffect, useState } from 'react'
import { ButtonToTopIcon } from '../svg-icons/Icons'

const ButtonToTop = () => {
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 800) {
        setAppear(true)
      } else {
        setAppear(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button onClick={scrollToTop} className={`rounded-full fixed right-12 z-10 bottom-24 text-3xl ${appear ? 'opacity-100' : 'opacity-0'}`}>
      <ButtonToTopIcon/>
    </button>
  )
}

export default ButtonToTop
