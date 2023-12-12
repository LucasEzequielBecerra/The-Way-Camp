const BuyTicket = () => {
  return (
    <section id="buyTicket" className="bg-pink pt-10 relative ">
      <picture>
        <img src="./bg-icons.png" alt="" />
      </picture>
      <div className="flex gap-1 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <div style={{ WebkitBoxShadow: '5px 10px 7px 1px rgba(0, 0, 0, 0.25)' }} className="rounded-3xl bg-white py-8 w-[800px] shadow-xl flex items-center flex-col">
          <picture className="px-20">
            <img src="./logo-ticket.png" alt="" />
          </picture>
          <button style={{ WebkitBoxShadow: '5px 12px 5px 0px rgba(0, 0, 0, 0.40)' }} className="w-10/12 rounded-full bg-orange text-white text-4xl p-5 h-[102px] ">CLICK TO BUY YOUR TICKET</button>
        </div>
        <div style={{ WebkitBoxShadow: '5px 10px 7px 0px rgba(0, 0, 0, 0.25)' }} className="rounded-xl shadow-xl bg-white px-28 py-60 relative">
          <div className="text-pink  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 text-center">
            <p style={{ WebkitTextStroke: '3px #FF5500' }} className="text-5xl tracking-wide">SUMMER</p>
            <p style={{ WebkitTextStroke: '4px #FF5500' }} className="text-9xl">2024</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default BuyTicket
