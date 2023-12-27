const Register = ({ registerVisible, setRegisterVisible }) => {
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('absolute') && !event.target.closest('.abolutes')) setRegisterVisible(false)
  }
  return (
    <div onClick={handleOverlayClick} className={`absolute w-screen h-screen backdrop-blur-lg z-50 ${!registerVisible && 'none'} overflow-y-hidden`}>
      <section className="absolute flex flex-col items-center rounded-3xl bg-light-orange z-50 py-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 style={{ WebkitBoxShadow: '0px 6px 4px #F50;' }} className="mb-8 uppercase font-bold tracking-wide text-4xl w-2/3 text-white text-center">Create your account</h2>
        <form action="submit" className="flex flex-col items-start [&>input]:rounded-full [&>input]:p-2 [&>input]:pl-5 [&>input]:w-4/5 [&>input]:bg-white [&>input]:outline-none [&>input]:placeholder-[#FF550080] gap-3 w-3/4">

          <input type="text" placeholder="FULL NAME" />
          <input type="text" placeholder="EMAIL" />
          <div className="flex [&>input]:rounded-full justify-end [&>input]:p-2 [&>input]:bg-white [&>input]:pl-5 [&>input]:outline-none [&>input]:placeholder-[#FF550080] gap-3">
            <input type="text" placeholder="PASSWORD" />
            <input type="number" maxLength={2} minLength={2} className="w-1/3 lowercase" placeholder="AGE" />
          </div>

          <div className="w-full flex justify-center mt-3">
            <button className="rounded-full bg-pink text-orange px-7 border-white border-2 py-2">CREATE</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Register
