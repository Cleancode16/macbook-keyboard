import React from 'react'

function Hero() {
  return (
    <div className='my-40 w-full  flex flex-col items-center justify- font-display'>
      <h1 className='text-7xl font-bold tracking-tight max-w-2xl text-center leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>
        Unleash the power of intuitive finance
      </h1>
      <p className='text-neutral-500 max-w-3xl mx-auto text-center mt-10 text-xl selection:bg-white'>Say goodbye to <span className='text-primary'>outdated</span>  financial tools. Every small business owner, regardless of the background, can now manage their <span className='text-primary'>business</span>  like a pro. Simple. Intuitive. And never boring.</p>
      <div className='flex justify-center mt-8 w-full max-w-lg flex'>
        <input type="text" className='border border-neutral-600 rounded-xl mr-paaji-relaxed placeholder:text-neutral text-white px-4 flex-1 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200' placeholder='Enter Your Email'/>
        <button className='relative px-4 py-2 rounded-xl border border-neutral-700 text-white cursor-pointer'>
          Join WaitList
          <div className='absolute -bottom-px inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent'></div>
        </button>
      </div>
    </div>
  )
}

export default Hero