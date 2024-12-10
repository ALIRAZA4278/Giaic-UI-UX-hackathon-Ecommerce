import React from 'react';
import Link from 'next/link';

const LoginRegister = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-28 mt-20 max-[768px]:mt-0">
                {/* Left Section */}
                <div className="space-y-16">
                    <div>
                        <form className="space-y-4">
                            <h1 className='font-bold text-2xl md:text-4xl mb-16'>Log In</h1>
                            <div className='mb-4'>
                                <label htmlFor="email" className="block text-md font-medium mb-4">
                                    Username or email address
                                </label>
                                <input
                                    type="text"
                                    id="Username"
                                    name="Username"
                                    className="w-full border border-gray-300 rounded-md px-4 py-6 mb-4"
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="email" className="block text-md font-medium mb-4">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-md px-4 py-6 mb-4"
                                />
                            </div>
                            <input type="checkbox" id="remember" name="remember" className="mr-2" />Remember me
                            <div className="flex justify-between items-center">
                                <button
                                    type="submit"
                                    className="w-[50%] bg-transparent text-black border border-gray-300 rounded-lg py-4 px-4 mb-4 hover:bg-black hover:text-white"
                                >
                                    Login
                                </button>
                                <Link href="#" className='hover:underline'>Lost Your Password?</Link>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <form className="space-y-4">
                        <h1 className='font-bold text-2xl md:text-4xl mb-16'>Register</h1>
                        <div>
                            <label htmlFor="email" className="block text-md font-medium mb-4">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-md px-4 py-6 mb-4"
                            />
                        </div>
                        <div className="">
                            <p className='text-lg mb-4'>A link to set a new password will be sent to your email address.</p>
                            <p className='text-lg mb-8'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in ours <strong>privacy policy.&apos;</strong> </p>
                        </div>
                        <button
                            type="submit"
                            className="w-[50%] bg-transparent text-black border border-gray-300 rounded-lg py-4 px-4 mb-8 hover:bg-black hover:text-white"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
