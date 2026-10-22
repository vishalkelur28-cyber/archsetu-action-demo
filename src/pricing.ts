export function price(amount: number): number {
  return Math.round(amount * 100);
}

export function discount(amount: number, percent: number): number {
  return price(amount) - Math.round((price(amount) * percent) / 100);
}
