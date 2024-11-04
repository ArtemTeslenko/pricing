export function getTrialAmount(inputName: string): number | null {
  if (inputName.includes("_0_trial")) {
    return null;
  }

  const match = inputName.match(/(\d+)_trial/);

  return match ? parseFloat(match[1]) : null;
}
