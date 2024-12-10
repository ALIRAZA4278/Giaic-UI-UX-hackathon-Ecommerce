import React from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import BlogComponents from '@/components/BlogCompoents';
import BlogComponentsForm from '@/components/BlogCompoentsform';
import DeliveryPage from '@/components/DeliveryPage';

const BlogPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[calc(40vh-80px)]"
        style={{
          backgroundImage: "url('/ShopBackgroud.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-4">
          <Image src="/ShopLogo.png" alt="Logo" width={100} height={100} />
          <p className="text-4xl md:text-5xl font-normal mb-2">Blog</p>
          <Breadcrumb />
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="flex mx-10 mt-8 max-[850px]:flex-col gap-4">
        <BlogComponents />
        <BlogComponentsForm />
      </div>

      <div className="w-full justify-center items-center flex gap-4">
        <button className="p-4 bg-primary text-black">1</button>
        <button className="p-4 bg-primary text-black">2</button>
        <button className="p-4 bg-primary text-black">3</button>
        <button className="p-4 bg-primary text-black">Next</button>
      </div>

      {/* Delivery Section */}
      <div className="mt-8">
        <DeliveryPage />
      </div>
    </div>
  );
};

export default BlogPage;
