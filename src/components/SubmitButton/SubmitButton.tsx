"use client";

import style from "@/components/SubmitButton/SubmitButton.module.scss";
import { Product } from "@/types/product";

export default function SubmitButton({
  activeCard,
}: {
  activeCard: Product | null;
}) {
  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!activeCard) {
      return;
    }

    console.log(activeCard.id);
    console.log(activeCard.name);
  }

  return (
    <button type="submit" onClick={handleSubmit} className={style.submitButton}>
      Get Started
    </button>
  );
}
