const BuyTicket = () => {
  return (
    <section className="bg-pink pt-10 relative">
      <picture>
        <img src="./bg-icons.png" alt="" />
      </picture>
      <div className="flex bg-white">
        <div>
          <picture><img src="./logo.png" alt="" /></picture>
          <button className=" rounded-full bg-orange text-white text-2xl p-4">CLICK TO BUY YOUR TICKET</button>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default BuyTicket
