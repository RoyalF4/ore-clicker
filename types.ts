export type GameState = {
  ore: number;
  additions: Addition[];
};

export type Addition = {
  name: string;
  baseCost: number;
  power: number;
  owned: number;
};

export type Action = { type: "click" } | { type: "reset" };
