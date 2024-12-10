'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Slider = () => {
  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
      <div className="w-full h-full flex  bg-primary">
        <div className="w-full h-full flex flex-col gap-8 xl:flex-row bg-transparent">
          {/* TEXT CONTAINER */}
          <div className="h-1/2 xl:w-1/2 text-white flex flex-col items-center gap-8 2xl:gap-12 text-center justify-center xl:h-full xl:items-center xl:text-center md:px-28   ">
            <div className='md:items-start md:text-left text-center items-center'>
              <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-normal text-black xl:text-9xl'>
                Rockey single seater
              </h1>
              <Link href="/list?cat=all-products">
                <button className='text-black underline py-4 px-2 mt-4 xl:mt-8 text-lg lg:text-xl underline-offset-8 decoration-2'>
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* IMAGE CONTAINER */}
          <div className="relative h-1/2 xl:w-1/2 xl:h-full bg-transparent xl:ml-4 ">
            <Image
              src="/HOMEMAIN.png"
              alt="Rockey Single Seater"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Slider
