import { Addition } from "../../types";

export default function getIncrement(additions: Addition[]) {
  return additions.reduce((sum, { power, owned }) => (sum += power * owned), 0);
}
