import React from 'react'
import Image from 'next/image'

const ProductsDescriptions = () => {
    return (
        <div>
            <div className='w-full h-[3px] mb-4 bg-gray-400'></div>
            <div className="w-full flex justify-between items-center mb-4">
                <ul className='flex gap-6 w-full  items-center justify-center text-2xl font-normal'>
                    <li>Description</li>
                    <li>Additional Information</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div className="w-[80%] mx-auto ">

                <p className='text-md text-gray-500 mb-4'>Embodying the raw wayward spirit of rock n roll the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall unplugs the chords and takes the show on the road.</p>
                <p className='text-md text-gray-500 mb-4'>Weighing in under 7 pounds the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class the Kilburn is a compact stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>
            <div className="w-[80%] mx-auto flex-row md:flex gap-6 mb-8 ">
                <div className="bg-[#FFF9E3]">
                    <Image src="/ListDesc2.png" alt="speaker" width={10000} height={10000}></Image>
                </div>
                <div className="bg-[#FFF9E3]">

                    <Image src="/ListDesc1.png" alt="speaker" width={10000} height={10000}></Image>
                </div>
            </div>
        </div>
    )
}

export default ProductsDescriptions
