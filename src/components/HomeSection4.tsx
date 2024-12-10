import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeSection4 = () => {
    return (
        <div>
            <div className="h-[calc(80vh-80px)] overflow-hidden">
                <div className="w-full h-full flex">
                    <div className="w-full h-full flex flex-col gap-8 xl:flex-row bg-transparent">
                          {/* IMAGE CONTAINER */}
                        <div className="relative h-1/2 xl:w-[65%] xl:h-full bg-transparent xl:ml-4">
                            <Image
                                src="/AssgardSofa.png"
                                alt="Rockey Single Seater"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover w-full h-full"
                            />
                        </div>
                           {/* TEXT CONTAINER */}
                        <div className="h-1/2 xl:w-[35%] text-white flex flex-col items-center gap-8 2xl:gap-12 text-center justify-center xl:h-full xl:items-center xl:text-center md:px-28">
                            <div className="md:items-start md:text-center text-center items-center">
                                <p className="text-2xl lg:text-2xl 2xl:text-3xl font-[400] text-black xl:text-4xl">New Arrivals</p>
                                <br />
                                <h1 className="text-2xl lg:text-2xl 2xl:text-6xl font-semibold text-black xl:text-4xl">Asgaard sofa</h1>
                                <Link href="/list?cat=all-products">
                                    <button className="text-black border border-black py-4 px-4 mt-4 xl:mt-8 text-lg lg:text-xl underline-offset-8 decoration-2 w-full">
                                        order now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* IMAGE CONTAINER */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection4;
    