export function getProductName(inputName: string): string {
  return inputName
    .replace(/(_\d{2}\.\d{2}).*$/, "")
    .replace(/_/g, " ")
    .replace(/\b\w+/g, (word, index, fullString) => {
      if (index === 0 || fullString.charAt(index - 1) === " ") {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .trim();
}
