"use client";

import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import Link from "next/link";
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";
import Breadcrumb from "@/components/Breadcrumb";
import DeliveryPage from "@/components/DeliveryPage";

const CartPage = () => {
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  // Calculate total price
  const totalPrice = cart?.lineItems?.reduce(
    (acc, item) =>
      acc +
      (parseFloat(item.price?.amount || "0") * (item.quantity || 0)),
    0
  );

  const handleCheckout = async () => {
    try {
      const checkout =
        await wixClient.currentCart.createCheckoutFromCurrentCart({
          channelType: currentCart.ChannelType.WEB,
        });

      const { redirectSession } =
        await wixClient.redirects.createRedirectSession({
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
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center h-[calc(40vh-80px)]"
        style={{
          backgroundImage: "url('/ShopBackgroud.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center h-full text-center text-black px-4">
          <Image src="/ShopLogo.png" alt="Logo" width={100} height={100} />
          <p className="text-4xl md:text-5xl font-normal mb-2">Cart</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="min-h-fit p-4 md:p-8 bg-white">
        {!cart.lineItems ? (
          <div className="text-center text-lg font-semibold">Cart is Empty</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section: Cart Items */}
            <div className="col-span-2 overflow-x-auto">
              <table className="w-full bg-white rounded-md shadow-md min-w-full">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="p-4 text-left">Product</th>
                    <th className="p-4 text-left">Price</th>
                    <th className="p-4 text-left">Quantity</th>
                    <th className="p-4 text-left">Subtotal</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.lineItems.map((item) => (
                    <tr key={item._id} className="border-t">
                      <td className="p-4 flex items-center gap-2">
                        {item.image && (
                          <Image
                            src={wixMedia.getScaledToFillImageUrl(
                              item.image,
                              72,
                              72,
                              {}
                            )}
                            alt=""
                            width={72}
                            height={72}
                            className="object-cover rounded-md"
                          />
                        )}
                        <span className="truncate max-w-[150px] md:max-w-full">
                          {item.productName?.original}
                        </span>
                      </td>
                      <td className="p-4">Rs.{item.price?.amount}</td>
                      <td className="p-4">
                        <input
                          type="number"
                          value={item.quantity}
                          className="w-16 border rounded-md text-center"
                          readOnly
                        />
                      </td>
                      <td className="p-4">
                        ${(
                          (Number(item.price?.amount) || 0) *
                          (Number(item.quantity) || 0)
                        ).toFixed(2)}
                      </td>
                      <td className="p-4 text-center">
                        <button
                          className="text-red-500 hover:underline"
                          onClick={() => removeItem(wixClient, item._id!)}
                          disabled={isLoading}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right Section: Cart Totals */}
            <div className="p-4 bg-yellow-50 rounded-md shadow-md">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Cart Summary
              </h2>
              <div className="space-y-4">
                {cart.lineItems.map((item) => (
                  <div key={item._id} className="flex justify-between">
                    <span>{item.productName?.original}</span>
                    <span>Rs.{item.price?.amount}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-bold text-sm md:text-2xl mt-4">
                <span>Total</span>
                <span>Rs.{totalPrice?.toFixed(2)}</span>
              </div>
              <div className="w-full items-center justify-center mt-6">
                <Link href="/Checkout">
                  <button
                    className="w-full py-4 px-4 bg-transparent text-black border-4 border-black rounded-full hover:bg-black hover:text-white text-lg md:text-xl disabled:opacity-50"
                    onClick={handleCheckout}
                    disabled={isLoading}
                  >
                    Check Out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        <DeliveryPage />
      </div>
    </>
  );
};

export default CartPage;
