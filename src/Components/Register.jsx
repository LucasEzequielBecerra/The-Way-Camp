const Register = () => {
  return (
    <section className="absolute flex flex-col items-center rounded-md bg-orange z-50 p-2">
      <h2 className="mb-5">Create your account</h2>
      <form action="" className="flex flex-col items-start [&>input]:rounded-full [&>input]:p-2 [&>input]:pl-5 [&>input]:w-3/4 gap-3 w-3/4">

        <input type="text" placeholder="full name" />
        <input type="text" placeholder="email" />
        <div className="flex [&>input]:rounded-full justify-end [&>input]:p-2 [&>input]:pl-5 gap-3">
          <input type="text" placeholder="password" />
          <input type="text" className="w-1/3" placeholder="age" />
        </div>

        <div className="w-full flex justify-center">
          <button className="rounded-full bg-pink text-orange px-7 py-2">CREATE</button>
        </div>
      </form>
    </section>
  )
}

export default Register
