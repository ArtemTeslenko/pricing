"use client";

import { Card, toolCards } from "@/components/ToolCardList/toolCards";
import ToolCard from "@/components/ToolCard/ToolCard";
import style from "@/components/ToolCardList/ToolCardList.module.scss";
import useIsMobile from "@/hooks/useIsMobile";

export default function ToolCardList() {
  const isMobile = useIsMobile();

  return (
    <div className={style.marqueeContainer}>
      <div className={style.marquee}>
        <ul className={style.marqueeList}>
          {toolCards.map(({ name, imageUrl }: Card) => {
            return <ToolCard key={name} cardName={name} cardIcon={imageUrl} />;
          })}
        </ul>
        {isMobile && (
          <ul className={style.marqueeList}>
            {toolCards.map(({ name, imageUrl }: Card) => {
              return (
                <ToolCard key={name} cardName={name} cardIcon={imageUrl} />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
