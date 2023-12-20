const Home = () => {
  return (
    <main className="h-[1500px] mt-64">
      <section className="relative h-full">
        <picture className="absolute left-0 top-1 z-10"><img src="./mountain-rose.png" alt="mountain-rose-image" /></picture>
        <picture className="absolute right-0 top-32 z-20"><img src="./mountain-orange.png" alt="mountain-orange-image" /></picture>
        <picture className="absolute -top-48 z-30"><img src="./are-you-ready.png" alt="are-you-ready-image" /></picture>
        <picture className="absolute top-[650px] start-2/3"><img src="./bonfire.png" alt="bonfire-image" /></picture>
        <picture className="absolute -bottom-24 left-10"><img src="./pictures-collection.png" alt="pictures-collection-image" /></picture>
        <picture className="absolute top-[490px] left-[150px]"><img src="./road.png" alt="road-image" /></picture>
      </section>
    </main>
  )
}

export default Home
