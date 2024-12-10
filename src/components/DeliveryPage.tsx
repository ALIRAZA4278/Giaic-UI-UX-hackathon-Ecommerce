import React from 'react'

const DeliveryPage = () => {
    return (
        <div>
            <div className="w-full bg-[#FAF4F4] flex justify-between gap-10 py-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 mt-4 max-[600px]:flex-wrap">
                <div className="items-center justify-center w-full my-20">
                    <h1 className="font-semibold text-3xl">Free Delivery</h1>
                    <p className="text-xl text-gray-700 mt-3">
                        For all orders over $50, consectetur adipim scing elit.
                    </p>
                </div>
                <div className="items-center justify-center w-full my-20">
                    <h1 className="font-semibold text-3xl">90 Day Returns</h1>
                    <p className="text-xl text-gray-700 mt-3">
                        If goods have problems, consectetur adipim scing elit.
                    </p>
                </div>
                <div className="items-center justify-center w-full my-20">
                    <h1 className="font-semibold text-3xl">Secure Payment</h1>
                    <p className="text-xl text-gray-700 mt-3">
                        100% secure payment, consectetur adipim scing elit.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DeliveryPage
