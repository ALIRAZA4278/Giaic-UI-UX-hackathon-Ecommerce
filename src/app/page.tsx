// "use client";

import HomeSection2 from "@/components/HomeSection2";
import HomeSection4 from "@/components/HomeSection4";
import HomeSection5 from "@/components/HomeSection5";
import HomeSection6 from "@/components/HomeSection6";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import Link from "next/link";
import { Suspense  } from "react";

const HomePage = async () => {



  return (
    <div className="">
      {/* part 1 */}
      <Slider />
      {/* part 2 */}
      <div className="px-4 py-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#FAF4F4] ">
        <HomeSection2 />
      </div>

      {/* part 3 */}
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-4xl w-full text-center">Top Picks For You</h1>
        <p className="w-full text-center mt-2">Find a bright ideal to suit your taste with our great selection floor and table light</p>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FURNITURE_PRODUCTS_CATEGORY_NEW_ID!}
            limit={4}
          />
        </Suspense>
        <div className="h-12 w-full items-center justify-center text-center">

          <Link href="/list?cat=all-products">
            <button className='text-black underline py-4 px-2 mt-4 xl:mt-8 text-lg lg:text-xl underline-offset-8 decoration-2'>
              view more
            </button>
          </Link>
        </div>
      </div>

      {/* part 4 */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-0 bg-[#FFF9E5]">
        <HomeSection4 />
      </div>

      {/* part 5 */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-0">
        <h1 className="text-4xl w-full text-center">Our Blog</h1>
        <p className="w-full text-center mt-2">Find a bright ideal to suit your taste with our great selection floor and table light</p>
        <HomeSection5 />
      </div>


      {/* part 6 */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-0">
        <HomeSection6 />
      </div>




    </div>
  );
};

export default HomePage;
