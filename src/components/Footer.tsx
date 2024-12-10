import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-white text-sm mt-24 text-black ">
      <div className="w-full h-[3px] mb-4 bg-gray-400"></div>
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24 items-center">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <p>
            400 University Drive Suite 200 Coral Gabies <br /> FL 33134 USA
          </p>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-full lg:w-1/2">
          <div className="flex flex-col justify-between w-1/2">
            <h1 className="font-medium text-lg pb-8">Links</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/2">
            <h1 className="font-medium text-lg pb-8">Help</h1>
            <div className="flex flex-col gap-6">
              <Link href="/payment-options">Payment Options</Link>
              <Link href="/return">Return</Link>
              <Link href="/privacy-policies">Privacy Policies</Link>
              <Link href="/terms-conditions">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Newsletter</h1>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="p-4 flex-grow border-b-2 border-black mr-4"
            />
            <button className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-3 px-4 rounded-md border-b-2 border-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>2022 Meubel House. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
