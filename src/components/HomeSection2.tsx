import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeSection2 = () => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center bg-[#FAF4F4]">
            <div className="w-full h-full flex flex-wrap justify-center items-center">
                {/* First Section */}
                <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-4">
                    <Image src="/HomeSection2IMG1.png" alt="Side table 1" width={500} height={500} className="mb-4" />
                    <div className="text-center w-full">
                        <h2 className="text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-black mb-4">Side table</h2>
                        <Link href="/list?cat=all-products">
                            <button className="text-black underline py-4 px-2 text-lg lg:text-xl underline-offset-8 decoration-2">
                                View more
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Second Section */}
                <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-4">
                    <Image src="/HomeSection2IMG2.png" alt="Side table 2" width={500} height={500} className="mb-4" />
                    <div className="text-center w-full">
                        <h2 className="text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-black mb-4">Side table</h2>
                        <Link href="/list?cat=all-products">
                            <button className="text-black underline py-4 px-2 text-lg lg:text-xl underline-offset-8 decoration-2">
                                View more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection2;
