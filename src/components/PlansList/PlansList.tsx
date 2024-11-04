"use client";

import { useState } from "react";
import TimeNotification from "@/components/TimeNotification/TimeNotification";
import PlanCard from "@/components/PlanCard/PlanCard";
import { Product } from "@/types/product";
import style from "@/components/PlansList/PlansList.module.scss";
import useIsMobile from "@/hooks/useIsMobile";
import SubmitButton from "@/components/SubmitButton/SubmitButton";

const additional = [
  { popularity: "Save 50%", isBest: true },
  { popularity: "Save 90%", isBest: false },
  { popularity: "Most Popular", isBest: false },
];

export default function PlansList({ products }: { products: Product[] }) {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const isMobile = useIsMobile();

  function getActiveCard(id: string | null) {
    return products.find((product) => product.id === id) || null;
  }

  return (
    <>
      <div className={style.palnsList}>
        {isMobile && <TimeNotification />}

        {products &&
          products.map((product, index) => (
            <PlanCard
              key={product.id}
              isMobile={isMobile}
              product={product}
              additional={additional[index]}
              activeCard={activeCard}
              handleCardClick={setActiveCard}
            />
          ))}
      </div>

      <SubmitButton activeCard={getActiveCard(activeCard)} />
    </>
  );
}
