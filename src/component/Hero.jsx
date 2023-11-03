import React from 'react'

function Hero() {
  return (
    <>
      <div className="w-full h-[80vh]   flex items-center justify-center space-x-8 ">
        <div className="w-[35%] h-[75vh]  flex flex-col justify-center space-y-4">
          <h1 className='Welcome text-black md:text-[25px] sm:text-[15px] font-semibold font-mono uppercase  tracking-wide'>Welcome To<br /> <span className='text-indigo-900 md:text-4xl sm:text-3xl font-semibold font-mono uppercase  tracking-wide'>Wagalag</span></h1>
          <p className="  text-black text-sm font-normal font-[Montserrat]  ">Situated in Al Janabiya, Wagalag offers acres that are clean, safe & fully<br /> enclosed for you to socialize and for your dogs to exercise, train,<br /> play swim and enjoy being off leash.</p>
          <div className=' flex md:space-x-6  flex-wrap max-sm:space-y-2 max-sm:justify-center items-center  '>
            <button class="max-sm:h-10 max-sm:px-[16px] max-sm:py-[7px]  text-white text-[15px] px-[22px] w-[152px] h-12 py-[11px] font-bold font-['Montserrat']  bg-indigo-900 rounded-lg uppercase leading-relaxed tracking-wide max-sm:text-xs">Buy Tickets</button>
            <button className="max-sm:h-10 h-12  w-[212px] max-sm:px-[16px] max-sm:py-[7px] bg-emerald-700 rounded-lg text-white text-[15px] font-bold font-['Montserrat'] uppercase leading-relaxed tracking-wide max-sm:text-xs">Become a Member</button>
          </div>
        </div>

        <div className="relative h-[60vh] w-[45%] md:h-[70vh] md:w-[30%]  sm:h-[60vh] sm:w-[26%]  max-sm:h-[45vh] max-sm:w-[26%] top-4 max-sm:-top-10 ">

          <div class="BigDog md:w-full md:h-[100%]   sm:w-full sm:h-[100%]   max-sm:w-full max-sm:h-[100%] max-sm:top-0     absolute">
          </div>


          <img class="DogSwim md:w-[160px] md:h-[260px]  sm:w-[100px] sm:h-[160px] sm:left-20 max-sm:w-[90px] max-sm:h-[120px] max-sm:left-24    max-sm:-top-8 md:left-[300px]  max-sm:left-[60px]   md:-top-12 absolute rounded-[100px] border-[8px] border-white" src="images/dog-swim.png" />
          <img class=" md:w-[179px] md:h-[179px] md:-left-20 md:top-[260px]  absolute rounded-full border-8 border-white max-sm:w-[80px] max-sm:h-[80px] max-sm:-left-12 max-sm:top-[188px]" src="images/dogs.png" />





        </div>
      </div>



    </>
  )
}

export default Hero