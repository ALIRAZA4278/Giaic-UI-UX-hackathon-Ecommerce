"use client";

import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import Link from "next/link";
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";

const CartModal = () => {
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  const totalPrice = cart?.lineItems?.reduce(
    (acc, item) =>
      acc + (parseFloat(item.price?.amount || "0") * (item.quantity || 0)),
    0
  );

  const handleCheckout = async () => {
    try {
      const checkout = await wixClient.currentCart.createCheckoutFromCurrentCart({
        channelType: currentCart.ChannelType.WEB,
      });

      const { redirectSession } = await wixClient.redirects.createRedirectSession({
        ecomCheckout: { checkoutId: checkout.checkoutId },
        callbacks: {
          postFlowUrl: window.location.origin,
          thankYouPageUrl: `${window.location.origin}/success`,
        },
      });

      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  if (!cart || !cart.lineItems?.length) {
    return (
      <div className="w-max absolute p-6 rounded-lg shadow-lg bg-white top-12 right-0 flex flex-col gap-4 z-20">
        <div className="text-gray-600 text-center font-medium">Your cart is empty</div>
      </div>
    );
  }

  return (
    <div className="w-max absolute p-6 rounded-lg shadow-lg bg-white top-12 right-0 flex flex-col gap-6 z-20">
      <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
      <div className="flex flex-col gap-6">
        {cart.lineItems.map((item) => (
          <div className="flex gap-4 border-b pb-4" key={item._id}>
            {item.image && (
              <Image
                src={wixMedia.getScaledToFillImageUrl(item.image, 80, 100, {})}
                alt=""
                width={80}
                height={100}
                className="object-cover rounded-md"
              />
            )}
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-gray-700">
                    {item.productName?.original}
                  </h3>
                  <div className="text-sm font-medium text-gray-600">
                    RS: {item.price?.amount}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {item.availability?.status}
                </p>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-500">Qty: {item.quantity}</span>
                <button
                  className={`text-red-500 hover:underline ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => removeItem(wixClient, item._id!)}
                  disabled={isLoading}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between font-semibold text-lg">
          <span>Subtotal</span>
          <span>RS: {totalPrice}</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="flex justify-between mt-4">
          <Link href="/Cart">
            <button className="rounded-md py-2 px-4 border border-gray-300 hover:bg-gray-100 transition">
              View Cart
            </button>
          </Link>
          <Link href="/Checkout">
            <button
              className="rounded-md py-2 px-4 bg-black text-white hover:bg-gray-800 transition disabled:cursor-not-allowed disabled:opacity-75"
              disabled={isLoading}
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
