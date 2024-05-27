const MULTIPLIER = 1.2;

export default function getCost(baseCost: number, owned: number) {
  return Math.floor(baseCost * Math.pow(MULTIPLIER, owned));
}
