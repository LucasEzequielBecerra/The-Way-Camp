const Summer = () => {
  return (
    <section id="buyTicket" className=" bg-gradient-to-b from-pink to-white to-65% pt-10 mb-24 ">
      <div className="relative">
        <picture>
          <img src="./bg-icons.png" alt="" />
        </picture>
        <div className="flex gap-1 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <div style={{ WebkitBoxShadow: '5px 10px 7px 1px rgba(0, 0, 0, 0.25)' }} className="rounded-3xl bg-white py-8 w-[800px] shadow-xl flex items-center flex-col">
            <picture className="px-20">
              <img src="./logo-ticket.png" alt="" />
            </picture>
            <a target="_blank" href="https://www.eventbrite.com.ar/e/jesus-summer-camp-2024-9-al-13-de-febrero-preventa-tickets-770871787267?aff=ebdsoporgprofile" rel="noreferrer" className=""><button href="https://www.eventbrite.com.ar/e/jesus-summer-camp-2024-9-al-13-de-febrero-preventa-tickets-770871787267?aff=ebdsoporgprofile" style={{ WebkitBoxShadow: '5px 12px 5px 0px rgba(0, 0, 0, 0.40)' }} className="w-full rounded-full bg-orange text-white text-4xl p-5 h-[102px] ">CLICK TO BUY YOUR TICKET</button></a>
          </div>
          <div style={{ WebkitBoxShadow: '5px 10px 7px 0px rgba(0, 0, 0, 0.25)' }} className="rounded-xl shadow-xl bg-white px-28 py-60 relative">
            <div className="text-pink  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 text-center">
              <p style={{ WebkitTextStroke: '3px #FF5500' }} className="text-5xl tracking-wide">SUMMER</p>
              <p style={{ WebkitTextStroke: '4px #FF5500' }} className="text-9xl">2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-24 mx-6   justify-center gap-36">
        <div className="flex flex-col  gap-24">
          <img src="./tell-us.png" alt="tell-us-image" />
          <img src="./player.png" alt="player-image" />
        </div>
        <div className="mt-10 w-10/12 ">
          <img className=" " src="./comments.png" alt="comments-image" />
        </div>
      </div>
    </section>
  )
}

export default Summer
