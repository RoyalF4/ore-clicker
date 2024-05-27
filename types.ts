export type GameState = {
  ore: number;
  totalOre: number;
  clicks: number;
  additions: Addition[];
};

export type Addition = {
  name: string;
  baseCost: number;
  power: number;
  owned: number;
};

export type Action =
  | { type: "click" }
  | { type: "reset" }
  | { type: "increment"; payload: number }
  | { type: "purchaseAddition"; payload: { cost: number; name: string } };
