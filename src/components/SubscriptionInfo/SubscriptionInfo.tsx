import style from "@/components/SubscriptionInfo/SubscriptionInfo.module.scss";

export default function SubscriptionInfo() {
  return (
    <>
      <p className={style.subscriptionInfo}>
        Automatic renewal of $29.99 per month.
      </p>
      <p className={style.subscriptionInfo}>
        You may cancel by{" "}
        <a
          href="https://justdone.ai/contact-us"
          className={style.subscriptionInfoLink}
        >
          support@justdone.ai.
        </a>{" "}
        Our goal is customer satisfaction
      </p>
    </>
  );
}
