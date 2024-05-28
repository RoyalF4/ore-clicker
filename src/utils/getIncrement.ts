import { Addition } from "../../types";

export default function getIncrement(additions: Addition[], interval: number) {
  // since addition power is based in seconds, need to correct interval by diving by 10
  const trueInterval = interval / 10;

  return (
    additions.reduce(
      (sum, { power, owned, multiplier }) =>
        (sum += power * multiplier * owned),
      0,
    ) / trueInterval
  );
}
