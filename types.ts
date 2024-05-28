import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type GameState = {
  ore: number;
  totalOre: number;
  clicks: number;
  additions: Addition[];
  upgrades: Upgrade[];
};

export type Addition = {
  name: string;
  baseCost: number;
  power: number;
  owned: number;
};

export type Upgrade = {
  name: string;
  cost: number;
  multiplier: number;
  purchased: boolean;
  icon: IconProp;
  color: string;
  description: string;
};

export type Action =
  | { type: "click" }
  | { type: "reset" }
  | { type: "increment"; payload: number }
  | { type: "purchaseAddition"; payload: { cost: number; name: string } }
  | { type: "purchaseUpgrade"; payload: { name: string; cost: number } };
