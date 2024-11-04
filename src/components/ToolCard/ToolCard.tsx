import style from "@/components/ToolCard/ToolCard.module.scss";

export default function ToolCard({
  cardName,
  cardIcon,
}: {
  cardName: string;
  cardIcon: string;
}) {
  return (
    <li className={style.toolCard}>
      <img src={cardIcon} alt={cardName} />

      <span>{cardName}</span>
    </li>
  );
}
