import { useReducer } from "react";

// import useInterval from "./hooks/UseInterval";
// import Additions from "./components/Additions";

import { GameState, Action } from "../types.ts";

const initialState: GameState = {
  ore: 0,
  additions: [],
};

function reducer(state: GameState, action: Action) {
  switch (action.type) {
    case "click": {
      return { ...state, ore: state.ore + 1 };
    }
    case "reset": {
      return { ...initialState };
    }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { ore } = state;

  // useInterval(() => {
  //   setOre((ore) => ore + 1);
  // }, 1000);

  function handleClick() {
    dispatch({ type: "click" });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <main className="flex flex-col items-center">
      <p>Ore: {ore}</p>
      <button className=" cursor-pointer" onClick={handleClick}>
        <img
          className="pointer-events-none transition-transform hover:scale-105"
          src="/images/ore.png"
          alt="chunk of ore"
        />
      </button>
      <button onClick={handleReset}>Reset</button>
      {/* <Additions additions={additions} /> */}
    </main>
  );
}
