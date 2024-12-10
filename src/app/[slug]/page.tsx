import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import CustomizeProducts from "@/components/CustomizeProducts";
import Add from "@/components/Add";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Reviews from "@/components/Reviews";
import ProductsDescriptions from "@/components/ProductsDescriptions";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  let product = null;

  try {
    const wixClient = await wixClientServer();
    const products = await wixClient.products.queryProducts().eq("slug", params.slug).find();

    if (!products.items[0]) {
      return notFound();
    }

    product = products.items[0];
  } catch (error) {
    console.error("Error fetching product:", error);
    return notFound();
  }

  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        {/* IMG */}
        <div className="w-full lg:w-1/2 top-20 h-max">
          <ProductImages items={product.media?.items} />

        </div>
        {/* TEXTS */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium">{product.name}</h1>
          {product.price?.price === product.price?.discountedPrice ? (
            <h2 className="font-medium text-2xl">Rs. {product.price?.price}</h2>
          ) : (
            <div className="flex items-center gap-4">
              <h3 className="text-xl text-gray-500 line-through">
                Rs. {product.price?.price}
              </h3>
              <h2 className="font-medium text-2xl">
                Rs. {product.price?.discountedPrice}
              </h2>
            </div>
          )}
          <div className="flex gap-2">
            <div className="star">⭐️</div>
            <div className="star">⭐️</div>
            <div className="star">⭐️</div>
            <div className="star">⭐️</div>
            <div className="star">⭐️</div>
            |
            <p className="text-gray-500">5 Customer Reviews</p>
          </div>
          <p className="text-gray-500">{product.description}</p>

          {product.variants && product.productOptions ? (
            <CustomizeProducts
              productId={product._id!}
              variants={product.variants}
              productOptions={product.productOptions}
            />
          ) : (
            <Add
              productId={product._id!}
              variantId="00000000-0000-0000-0000-000000000000"
              stockNumber={product.stock?.quantity || 0}
            />
          )}

          <div className="h-[2px] bg-gray-100" />
          {product.additionalInfoSections?.map((section: any) => (
            <div className="text-sm" key={section.title}>
              <h4 className="font-medium mb-4">{section.title}</h4>
              <p>{section.description.text}</p>
            </div>
          ))}
          <div className="h-[2px] bg-gray-100" />
          {/* REVIEWS */}
          <Suspense fallback={<div>Loading reviews...</div>}>
            <Reviews productId={product._id!} />
          </Suspense>
        </div>
      </div>
      <div className="w-full h-auto ">
        <ProductsDescriptions />
      </div>
      {/* Related Products */}
      <div className="items-center justify-center text-center py-10">
        <h1 className="text-3xl">Related Products</h1>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <Suspense fallback={<Skeleton />}>
            <ProductList
              categoryId={process.env.FURNITURE_PRODUCTS_CATEGORY_NEW_ID!}
              limit={4}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
