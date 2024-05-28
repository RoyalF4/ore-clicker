import { Addition } from "../../types";

export default function getIncrement(additions: Addition[]) {
  return additions.reduce(
    (sum, { power, owned, multiplier }) => (sum += power * multiplier * owned),
    0,
  );
}
