import React from 'react'
import Image from 'next/image'

const BlogComponentsForm = () => {
  return (
    <div className="hidden md:block w-[45%]">
      {/* Search Form */}
      <form
        className="flex items-center justify-between gap-4 bg-white p-6 rounded-md flex-1 m-2 border-2 border-black"
        // onSubmit={handleSearch} 
      >
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none"
        />
        <button type="submit" className="cursor-pointer">
          <Image src="/search.png" alt="Search" width={16} height={16} />
        </button>
      </form>

      {/* Categories Section */}
      <div className="flex flex-col items-center justify-center w-full my-20 mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Categories</h1>
        <ul className="w-[90%] max-w-md divide-y divide-gray-200">
          {[
            { name: 'Crafts', count: 2 },
            { name: 'Design', count: 8 },
            { name: 'Handmade', count: 7 },
            { name: 'Interior', count: 1 },
            { name: 'Wood', count: 6 },
          ].map((category, index) => (
            <li key={index} className="flex justify-between items-center px-6 py-4 hover:bg-gray-100">
              <span className="text-lg font-medium text-gray-700">{category.name}</span>
              <span className="text-gray-600 font-semibold">{category.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div className="flex flex-col items-center justify-center w-full my-20 mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Recent Posts</h1>
        <div className="w-full max-w-3xl space-y-6">
          {[
            { img: '/BlogForm1.png', title: 'Going all-in with millennial design', date: '03 Aug 2022' },
            { img: '/BlogForm2.png', title: 'Exploring new ways of decorating', date: '15 Sep 2022' },
            { img: '/BlogForm3.png', title: 'Handmade pieces that took time to make', date: '10 Oct 2022' },
            { img: '/BlogForm4.png', title: 'Modern home in Milan', date: '15 Sep 2022' },
            { img: '/BlogForm5.png', title: 'Colorful office redesign', date: '25 Nov 2022' }
          ].map((post, index) => (
            <div key={index} className="flex items-start text-left p-4 hover:bg-gray-100 transition duration-200">
              <Image src={post.img} alt={post.title} width={100} height={100} className="rounded-md object-cover" />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-700">{post.title}</p>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogComponentsForm
