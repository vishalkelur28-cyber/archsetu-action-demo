export function price(amount: number): number {
  const cents = Math.round(amount * 100);
  if (cents > 100_000) return cents - 500;
  if (cents > 10_000) return cents - 100;
  return cents;
}

export function discount(amount: number, percent: number): number {
  return price(amount) - Math.round((price(amount) * percent) / 100);
}

function legacyRound(amount: number): number {
  return Math.floor(amount * 100 + 0.5);
}
