import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogComponents = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center md:items-stretch gap-8 w-full h-auto">
      {/* First Blog Section */}
      <article className=" flex-col md:flex-row  w-[70%] md:w-full  gap-4 max-[850px]:w-full">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full  h-auto">
          <div className="w-full ">
            <Image
              src="/BlogContainer1.png"
              alt="Blog Post 1"
              width={10000}
              height={10000}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full p-4">
          {/* Navigation Info */}
          <ul className="flex gap-6 text-sm text-gray-600 mb-4">
            <li className="flex items-center gap-2">
              <Image src="/admin.png" alt="Admin Icon" width={20} height={20} />
              <span>Admin</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/calendar.png" alt="Calendar Icon" width={20} height={20} />
              <span>14 Oct 2022</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/category1.png" alt="Category Icon" width={20} height={20} />
              <span>Wood</span>
            </li>
          </ul>

          <h1 className="text-lg font-semibold mb-4">Going all-in with millennial design</h1>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.
          </p>

          <Link href="/">
            <button className="text-black underline pb-4 px-2 mt-4 text-md lg:text-xl underline-offset-8 decoration-2">
              Read More
            </button>
          </Link>
        </div>
      </article>

      {/* Second Blog Section */}
      <article className=" flex-col md:flex-row  w-[70%] md:w-full  gap-4 max-[850px]:w-full">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full  h-auto">
          <div className="w-full ">
            <Image
              src="/BlogContainer2.png"
              alt="Blog Post 2"
              width={1000}
              height={1000}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full p-4">
          {/* Navigation Info */}
          <ul className="flex gap-6 text-sm text-gray-600 mb-4">
            <li className="flex items-center gap-2">
              <Image src="/admin.png" alt="Admin Icon" width={20} height={20} />
              <span>Admin</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/calendar.png" alt="Calendar Icon" width={20} height={20} />
              <span>14 Oct 2022</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/category1.png" alt="Category Icon" width={20} height={20} />
              <span>Wood</span>
            </li>
          </ul>

          <h1 className="text-lg font-semibold mb-4">Exploring new ways of decorating</h1>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.
          </p>

          <Link href="/">
            <button className="text-black underline pb-4 px-2 mt-4 text-md lg:text-xl underline-offset-8 decoration-2">
              Read More
            </button>
          </Link>
        </div>
      </article>

      {/* Third Blog Section */}
      <article className=" flex-col md:flex-row w-[70%] md:w-full  gap-4 max-[850px]:w-full">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full  h-auto">
          <div className=" w-full ">
            <Image
              src="/BlogContainer3.png"
              alt="Blog Post 3"
              width={1000}
              height={1000}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full p-4">
          {/* Navigation Info */}
          <ul className="flex gap-6 text-sm text-gray-600 mb-4">
            <li className="flex items-center gap-2">
              <Image src="/admin.png" alt="Admin Icon" width={20} height={20} />
              <span>Admin</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/calendar.png" alt="Calendar Icon" width={20} height={20} />
              <span>14 Oct 2022</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/category1.png" alt="Category Icon" width={20} height={20} />
              <span>Wood</span>
            </li>
          </ul>

          <h1 className="text-lg font-semibold mb-4">Handmade pieces that took time to make</h1>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.
          </p>

          <Link href="/">
            <button className="text-black underline pb-4 px-2 mt-4 text-md lg:text-xl underline-offset-8 decoration-2">
              Read More
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogComponents;
