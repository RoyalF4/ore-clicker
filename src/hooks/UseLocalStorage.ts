import { useReducer, useEffect } from "react";
import { GameState, Action } from "../../types";

// 15, 18, 20, 23, 27, 31, 35, 40, 46, 53

export const initialState: GameState = {
  ore: 0,
  additions: [
    {
      name: "miner",
      baseCost: 15,
      power: 1,
      owned: 0,
    },
    {
      name: "minecart",
      baseCost: 150,
      power: 10,
      owned: 0,
    },
    {
      name: "trucks",
      baseCost: 1500,
      power: 100,
      owned: 0,
    },
    {
      name: "excavators",
      baseCost: 150000,
      power: 1000,
      owned: 0,
    },
    {
      name: "processing-plant",
      baseCost: 1500000,
      power: 10000,
      owned: 0,
    },
  ],
};

function reducer(state: GameState, action: Action) {
  switch (action.type) {
    case "click": {
      return { ...state, ore: state.ore + 1 };
    }
    case "reset": {
      return { ...initialState };
    }
    case "increment": {
      return { ...state, ore: state.ore + action.payload };
    }
    case "purchaseAddition": {
      const { name, cost } = action.payload;
      // check if user has enough ore to purchase addition
      return state.ore > cost
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
