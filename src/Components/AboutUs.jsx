const AboutUs = () => {
  return (
    <section id="aboutUs" className="relative">
      <div className="flex flex-col gap-10">
        <div className="h-[200px]">
          <picture className="absolute left-1/2 -translate-x-1/2">
            <img src="./cartel-about.png"/>
          </picture>
        </div>
        <div className="text-center font-body w-1/2 m-auto flex flex-col gap-5 text-xl text-black">
          <p>The Way Camp was created in 2002 by a couple with a burning heart for kids to know Jesus, but in a real way letting the experience what God was talking to them.</p>
          <p>Lucas and Jael Becerra created this idea in a sketch and doodles, with a lot of prayers and words from God they understood this was something God was leading them to do.</p>
          <p>With our hole crew we want to let kids find their own way to express their love for Jesus. It could be through music, art, sports, welcoming people, leading, praying, dancing and more!</p>
          <p>Teaching a way that´s the only one who could ever save and change lives for good... Bringing love, hope, freedom, future, healing, joy and peace... </p>
          <p>A summer sharing with others, making friends, learning about the Bible and having fun in a healthy and safe way.</p>
          <p>Our camp is Settle in Toronto, Canada. Soon we´ll be opening another location in the US.</p>
          <span className="flex justify-center"><img src="./are-you-join-us.png" alt="are-you-join-us-image" /></span>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
