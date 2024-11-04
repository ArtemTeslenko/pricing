export function getFormattedTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = String(
    Math.floor((totalSeconds % (3600 * 24)) / 3600)
  ).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${days > 0 ? `${days} d ` : ""}${hours}:${minutes}:${seconds}`;
}
