import React from 'react';
import Image from 'next/image';

const Contactform = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full mx-auto mt-8">
      <h1 className="text-3xl md:text-4xl font-normal mb-4 text-center">Get in touch With Us</h1>
      <p className="text-center mb-8">
        For more information about our product and services please feel free to drop us an email. <br />
        Our staff will always be there to help you out. Do not hesitate
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-[768px]:mt-0">
        {/* Left Section */}
        <div className="space-y-16">
          <div className="flex items-start space-x-4">
            <Image src="/map-pin-2-fill.png" alt="Location" width={24} height={24} />
            <div>
              <h2 className="font-bold text-lg">Address</h2>
              <p>236 5th SE Avenue New York NY10000 United States</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Image src="/phone-fill.png" alt="Phone" width={24} height={24} />
            <div>
              <h2 className="font-bold text-lg">Phone</h2>
              <p>
                Mobile 84 5466789 <br />
                Hotline 84 4566789
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Image src="/time-fill.png" alt="Working Time" width={24} height={24} />
            <div>
              <h2 className="font-bold text-lg">Working Time</h2>
              <p>
                Mondayto Friday 9 00 till 21 00 <br />
                Saturday to Sunday 9 00 till  21 00
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-4">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md px-4 py-6 "
                placeholder="Abc"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-4">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-4 py-6"
                placeholder="Abc@del.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-4">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full border border-gray-300 rounded-md px-4 py-6"
                placeholder="This is optional"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-4">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-300 rounded-md px-4 py-6"
                placeholder="hi! I want to know more about your product"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[50%] bg-transparent text-black border border-gray-300 rounded-full py-4 px-4    hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
