import React from 'react';

const HomeSection6 = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[calc(70vh-80px)]"
            style={{
                backgroundImage: "url('/HomePart6.png')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Our Instagram
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    follow our store on instagram
                </p>
                <button className="bg-white text-black font-medium py-4 px-20 rounded-full shadow-2xl hover:shadow-xl hover:bg-gray-100">
                    Follow Us
                </button>
            </div>
        </div>
    );
};

export default HomeSection6;
