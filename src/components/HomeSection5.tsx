import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeSection5 = () => {
    const posts = [
        {
            id: 1,
            image: '/HOMEBLOG1.png',
            description: 'Going all-in with millennial design',
            readTime: '5 min',
            date: '12th Oct, 2022',
        },
        {
            id: 2,
            image: '/HOMEBLOG2.png',
            description: 'Going all-in with millennial design',
            readTime: '5 min',
            date: '12th Oct, 2022',
        },
        {
            id: 3,
            image: '/HOMEBLOG3.png',
            description: 'Going all-in with millennial design',
            readTime: '5 min',
            date: '12th Oct, 2022',
        },
    ];

    return (
        <div className="bg-white py-10 text-center">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-transparent shadow-lg rounded-lg overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.description}
                                width={500}
                                height={300}
                                className="w-full h-[60%] object-cover"
                                priority
                            />
                            <div className="p-4">
                                <p className="text-black text-xl">{post.description}</p>
                                <div className="w-full text-center">
                                    <Link href="/Blog">
                                        <button className="text-black underline pb-4 px-2 mt-4 text-lg lg:text-2xl underline-offset-8 decoration-2">
                                            &#39;Read More&#39;
                                        </button>
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center text-sm text-black mb-4 gap-6">
                                    <span className="flex items-center pr-1">
                                        <Image
                                            src="/clock.png"
                                            alt="Clock"
                                            width={30}
                                            height={30}
                                            className="mr-2"
                                        />
                                        {post.readTime}
                                    </span>
                                    <span className="flex items-center pr-1">
                                        <Image
                                            src="/calendar.png"
                                            alt="Calendar"
                                            width={30}
                                            height={30}
                                            className="mr-2"
                                        />
                                        {post.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-12 w-full text-center">
                    <Link href="/Blog">
                        <button className="text-black underline py-4 px-2 text-lg lg:text-xl underline-offset-8 decoration-2">
                            &#39;View All Posts&#39;
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeSection5;
