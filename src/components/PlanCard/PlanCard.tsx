"use client";

import { useState } from "react";
import TimeNotification from "@/components/TimeNotification/TimeNotification";
import { Product } from "@/types/product";
import style from "@/components/PlanCard/PlanCard.module.scss";
import { getProductName } from "@/utils/getProductName";
import { getTrialAmount } from "@/utils/getProductTrialAmount";

export default function PlanCard({
  isMobile,
  additional,
  product,
  activeCard,
  handleCardClick,
}: {
  isMobile: boolean;
  additional: { popularity: string; isBest: boolean };
  product: Product;
  activeCard: string | null;
  handleCardClick: (id: string) => void;
}) {
  const [isInitialTime, setIsInitialTime] = useState(false);
  const { id, name, regularity, price, trial_period, trial_amount } = product;
  const trialAmount = getTrialAmount(name);

  function isCardActive(): boolean {
    return id === activeCard;
  }

  return (
    <div
      className={`${style.planCard} ${
        isMobile && additional.isBest ? style.large : ""
      } ${activeCard && isCardActive() ? style.active : ""} ${
        isInitialTime ? style.timer : ""
      }
        `}
      onClick={() => handleCardClick(id)}
    >
      {!isMobile && <TimeNotification getIsInitialTime={setIsInitialTime} />}

      <div className={style.planCardPopularity}>{additional.popularity}</div>

      {additional.isBest && (
        <span className={style.planCardBadge}>Best value</span>
      )}

      <div className={style.planCardName}>{getProductName(name)}</div>

      <div className={style.planCardPriceWrapper}>
        <div className={style.planCardPrice}>${(price / 100).toFixed(2)}</div>

        <div className={style.planCardTrialAmount}>
          $
          {trialAmount
            ? trialAmount.toFixed(2)
            : (trial_amount / 100).toFixed(2)}
        </div>

        {trial_period > 0 ? (
          <div className={style.planCardTrialPeriod}>
            Then {(trial_amount / 100).toFixed(2)} per month
          </div>
        ) : (
          <div className={style.planCardTrialPeriod}>
            {regularity === "month" ? "Per month" : "Per year"}
          </div>
        )}
      </div>
    </div>
  );
}
