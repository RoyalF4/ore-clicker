const MULTIPLIER = 2;

export default function getCost(baseCost: number, owned: number) {
  return baseCost * Math.pow(MULTIPLIER, owned);
}
