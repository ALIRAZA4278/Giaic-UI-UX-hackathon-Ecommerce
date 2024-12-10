import Breadcrumb from "@/components/Breadcrumb";
import Contactform from "@/components/Contactform";
import DeliveryPage from "@/components/DeliveryPage";
import Image from "next/image";

const contactpage = async ({ searchParams }: { searchParams: any }) => {
  

  return (
    <div className="">
      {/* CAMPAIGN */}
      <div
        className="relative bg-cover bg-center h-[calc(40vh-80px)]"
        style={{
          backgroundImage: "url('/ShopBackgroud.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center  h-full text-center text-black px-4 ">
          <Image src="/ShopLogo.png" alt="Logo" width={100} height={100} />
          <p className="text-4xl md:text-5xl font-normal mb-2">Contact</p>
          <Breadcrumb />
        </div>
      </div>

      <Contactform />



      <DeliveryPage />
    </div>
  );
};

export default contactpage;
