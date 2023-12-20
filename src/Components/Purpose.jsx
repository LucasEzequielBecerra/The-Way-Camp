const Purpose = () => {
  return (
    <section id="purpose" className="mt-10">
      <div className="w-full relative h-[390px] ">
        <picture className="absolute  z-10">
          <img className="w-full " src="./tablon-pics.png" alt="tablon-pics-image" />
        </picture>
      </div>
      <div className="bg-pink ">
        <div className=" flex justify-center">
          <picture className="z-0">
            <img src="./cartel-purpose.png" alt="cartel-purpose-image" />
          </picture>
        </div>
        <div className="mt-24 text-center font-body w-1/2 m-auto flex flex-col gap-5 text-xl text-black">
          <p>Our main purpose is always leading them to trully know God, Jesus and the Holy Spirit and find their own way to connect with them, Cause we belive everyone has a special and unique way to talk to God.</p>
          <p>That´s why our staff is present to leader them through their path in our camp, they recieve pastorships by our owners to really follow the kids connect and share with them.</p>
          <p>Every year they grow and we let them participate and volunteer in younger kids camps to keep teaching them values and love for others.</p>
          <p>We believe in future generations, we believe that God is moving and making amazing things with our kids!   </p>
        </div>
      </div>
    </section>
  )
}

export default Purpose
