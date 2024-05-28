import { useReducer, useEffect } from "react";
import { GameState, Action } from "../../types";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons/faHandPointer";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons/faPersonDigging";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";

// 15, 18, 20, 23, 27, 31, 35, 40, 46, 53

export const initialState: GameState = {
  ore: 0,
  totalOre: 0,
  clicks: 0,
  additions: [
    {
      name: "miner",
      baseCost: 15,
      power: 1,
      owned: 0,
      multiplier: 1,
    },
    {
      name: "minecart",
      baseCost: 150,
      power: 10,
      owned: 0,
      multiplier: 1,
    },
    {
      name: "truck",
      baseCost: 1500,
      power: 100,
      owned: 0,
      multiplier: 1,
    },
    {
      name: "excavator",
      baseCost: 150000,
      power: 1000,
      owned: 0,
      multiplier: 1,
    },
    {
      name: "processing-plant",
      baseCost: 1500000,
      power: 10000,
      owned: 0,
      multiplier: 1,
    },
  ],
  upgrades: [
    {
      type: "click",
      name: "cursor upgrade 1",
      cost: 100,
      multiplier: 2,
      purchased: false,
      icon: faHandPointer,
      color: "green",
      description: "Gives clicks a 2x multiplier.",
    },
    {
      type: "click",
      name: "cursor upgrade 2",
      cost: 1000,
      multiplier: 2,
      purchased: false,
      icon: faHandPointer,
      color: "yellow",
      description: "Gives clicks a 2x multiplier.",
    },
    {
      type: "click",
      name: "cursor upgrade 3",
      cost: 10000,
      multiplier: 2,
      purchased: false,
      icon: faHandPointer,
      color: "red",
      description: "Gives clicks a 2x multiplier.",
    },
    {
      type: "miner",
      name: "miner upgrade 1",
      cost: 7500,
      multiplier: 2,
      purchased: false,
      icon: faPersonDigging,
      color: "green",
      description: "Makes miners twice as efficient.",
    },
    {
      type: "miner",
      name: "miner upgrade 2",
      cost: 50000,
      multiplier: 2,
      purchased: false,
      icon: faPersonDigging,
      color: "yellow",
      description: "Makes miners twice as efficient.",
    },
    {
      type: "minecart",
      name: "minecart upgrade 1",
      cost: 25000,
      multiplier: 2,
      purchased: false,
      icon: faCartFlatbed,
      color: "green",
      description: "Makes minecarts twice as efficient.",
    },
    {
      type: "minecart",
      name: "minecart upgrade 2",
      cost: 100000,
      multiplier: 2,
      purchased: false,
      icon: faCartFlatbed,
      color: "yellow",
      description: "Makes minecarts twice as efficient.",
    },
  ],
};

function reducer(state: GameState, action: Action) {
  switch (action.type) {
    case "click": {
      const clickPower = state.upgrades.reduce(
        (power, cur) => (cur.purchased ? cur.multiplier * power : power),
        1,
      );
      return {
        ...state,
        ore: state.ore + clickPower,
        clicks: state.clicks + 1,
        totalOre: state.totalOre + clickPower,
      };
    }
    case "reset": {
      return { ...initialState };
    }
    case "increment": {
      if (action.payload === 0) return { ...state };
      return {
        ...state,
        ore: Number((state.ore + action.payload).toFixed(2)),
        totalOre: Number((state.ore + action.payload).toFixed(2)),
      };
    }
    case "purchaseAddition": {
      const { name, cost } = action.payload;
      // check if user has enough ore to purchase addition
      return state.ore >= cost
        ? {
            ...state,
            ore: state.ore - cost,
            additions: state.additions.map((addition) =>
              addition.name === name
                ? { ...addition, owned: addition.owned + 1 }
                : { ...addition },
            ),
          }
        : { ...state };
    }
    case "purchaseClickUpgrade": {
      const { name, cost } = action.payload;
      return state.ore >= cost
        ? {
            ...state,
            ore: state.ore - cost,
            upgrades: state.upgrades.map((upgrade) =>
              upgrade.name === name
                ? { ...upgrade, purchased: true }
                : { ...upgrade },
            ),
          }
        : { ...state };
    }
    case "purchaseAdditionUpgrade": {
      const { name, cost, type, multiplier } = action.payload;
      return state.ore >= cost
        ? {
            ...state,
            ore: state.ore - cost,
            upgrades: state.upgrades.map((upgrade) =>
              upgrade.name === name
                ? { ...upgrade, purchased: true }
                : { ...upgrade },
            ),
            additions: state.additions.map((addition) =>
              addition.name === type
                ? { ...addition, multiplier: addition.multiplier * multiplier }
                : { ...addition },
            ),
          }
        : { ...state };
    }
  }
}

export default function useLocalStorage(
  initialState: GameState,
  key: string,
): [GameState, React.Dispatch<Action>] {
  const initializer = (initialState: GameState) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as GameState) : initialState;
  };

  // useReducer with initializer function
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  // useEffect to update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}
