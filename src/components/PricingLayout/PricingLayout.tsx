import styles from "@/components/PricingLayout/PricingLayout.module.scss";
import ToolCardList from "@/components/ToolCardList/ToolCardList";
import PlansList from "@/components/PlansList/PlansList";
import { Product } from "@/types/product";
import SubscriptionInfo from "@/components/SubscriptionInfo/SubscriptionInfo";

export default function PricingLayout({ products }: { products: Product[] }) {
  return (
    <main className="common-layout">
      <div className="container">
        <h1 className={styles.title}>Choose Your Plan:</h1>

        <ToolCardList />

        <PlansList products={products} />

        <SubscriptionInfo />
      </div>
    </main>
  );
}
