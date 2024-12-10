"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useState } from "react";

const CheckOutform = () => {
    const { cart } = useCartStore();
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });
    // const [paymentMethod, setPaymentMethod] = useState("creditCard");

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserDetails({ ...userDetails, [name]: value });
    // };

    // const handlePaymentChange = (e) => {
    //     setPaymentMethod(e.target.value);
    // };

    // const handleCheckout = () => {
    //     alert("Checkout process initiated");
    //     // Logic to handle checkout goes here
    // };

    if (!cart || !cart.lineItems) {
        return <div className="text-center text-lg font-semibold"> Checkout page is loading...</div>;
    }
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full mx-auto mt-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-[768px]:mt-0">


                {/* Right Section */}
                <div>
                    <form className="space-y-4">
                        <div className="flex gap-5 w-full">

                            <div >
                                <label htmlFor="name" className="block text-sm font-medium mb-4">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-gray-300 rounded-md px-16 py-6 "
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-4">
                                    last Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-gray-300 rounded-md px-16 py-6 "
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-4">
                                Company Name (Optional)
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
                            <label htmlFor="subject" className="block text-sm font-medium mb-4">
                                Country / Region
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                className="w-full border border-gray-300 rounded-md px-4 py-6"
                            >
                                <option value="" disabled selected>
                                    Sri Lanka
                                </option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="GB">United Kingdom</option>
                                <option value="AU">Australia</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-4">
                                Street Address
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full border border-gray-300 rounded-md px-4 py-6"

                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-4">
                                Town / City
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full border border-gray-300 rounded-md px-4 py-6"

                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-4">
                                Province
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                className="w-full border border-gray-300 rounded-md px-4 py-6"
                            >
                                <option value="" disabled selected>
                                    Westren province
                                </option>
                                <option value="Central">Central province</option>
                            </select>
                        </div>


                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-4">
                                Zip Code
                            </label>
                            <input
                                type="number"
                                id="subject"
                                name="subject"
                                className="w-full border border-gray-300 rounded-md px-4 py-6"

                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-4">
                                Phone
                            </label>
                            <input
                                type="number"
                                id="subject"
                                name="subject"
                                className="w-full border border-gray-300 rounded-md px-4 py-6"

                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-4">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="subject"
                                name="subject"
                                className="w-full border border-gray-300 rounded-md px-4 py-6"

                            />
                        </div>

                        <div>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full border border-gray-300 rounded-md px-4 py-6"
                                placeholder="Additional information"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-transparent text-black border-4 border-gray-300 rounded-full py-4 px-4    hover:bg-gray-800 hover:text-white"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                {/* Left Section */}
                <div className="p-6 bg-white rounded-lg shadow-lg mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Product</h2>
                    <div className="space-y-2">
                        {cart.lineItems.map((item) => (
                            <div key={item._id} className="flex justify-between">
                                <span>{item.productName?.original} x {item.quantity}</span>
                                {/* <span>${(item.price?.amount * item.quantity).toFixed(2)}</span> */}
                            </div>
                        ))}
                        <div className="flex justify-between font-bold mt-4">
                            <span>Total</span>
                            {/* <span className="text-[#B88E2F] text-2xl">${Number(cart.subtotal.amount).toFixed(2)}</span> */}
                        </div>
                    </div>
                    <div className="h-px bg-gray-600"></div>
                    <div>
                        <h1>Direct Back transfer</h1>
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            Direct Bank Transfer
                            Cash On Delivery
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                            Place order</p>
                        <div className="my-4">
                            <span className="block mb-1 " > <input type="radio" className="" /> Direct Bank Transfer</span>
                            <span className="block"> <input type="radio" /> Cash On Delivery</span>
                        </div>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        <button className="w-full py-3 mt-4 bg-transparent border-2 border-gray-300 text-black rounded-md hover:bg-black hover:text-white">Place order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutform;
