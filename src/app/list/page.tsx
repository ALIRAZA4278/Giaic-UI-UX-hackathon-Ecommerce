
import Breadcrumb from "@/components/Breadcrumb";
import DeliveryPage from "@/components/DeliveryPage";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

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
        <div className="relative z-10 flex flex-col items-center  h-full text-center text-black px-4">
          <Image src="/ShopLogo.png" alt="Logo" width={100} height={100} />
          <p className="text-4xl md:text-5xl font-normal mb-2">Shop</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">

        <Filter />

        {/* FILTER */}
        {/* PRODUCTS */}
        <h1 className="mt-12 text-xl font-semibold">{cat?.collection?.name} For You!</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={
              cat.collection?._id || "00000000-000000-000000-000000000001"
            }
            searchParams={searchParams}
          />
        </Suspense>


      </div>
     <DeliveryPage />
    </div>
  );
};

export default ListPage;
