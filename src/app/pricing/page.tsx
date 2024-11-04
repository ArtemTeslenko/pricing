import products from "@/../data/products.json";
import PricingLayout from "@/components/PricingLayout/PricingLayout";
import { Product } from "@/types/product";

export default async function Pricing() {
  const data: Product[] = products;

  return <PricingLayout products={data} />;
}

export const revalidate = 300;
