import Additions from "./components/Additions.tsx";
import Upgrades from "./components/Upgrades.tsx";
import useInterval from "./hooks/UseInterval.ts";
import useLocalStorage from "./hooks/UseLocalStorage.ts";
import { initialState } from "./hooks/UseLocalStorage.ts";
import formatNumber from "./utils/formatNumber.ts";
import getIncrement from "./utils/getIncrement.ts";

const GAME_INTERVAL = 100;

export default function App() {
  const [state, dispatch] = useLocalStorage(initialState, "playerData");

  const { ore, additions, upgrades } = state;
  const increment = getIncrement(additions, GAME_INTERVAL);

  useInterval(() => {
    dispatch({
      type: "increment",
      payload: increment,
    });
  }, GAME_INTERVAL);

  function handleClick() {
    dispatch({ type: "click" });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <main className="flex p-4">
      <div className="flex flex-1 flex-col items-center">
        <p className="flex">
          {/* {Math.floor(ore).toLocaleString()} */}
          {formatNumber(ore)}
          <img src="/images/ore.png" alt="" className="inline-block w-6" />
        </p>
        <p>{`per second: ${(increment * 10).toLocaleString()}`}</p>
        <button
          className=" pointer-pointer transition-transform hover:scale-105 active:scale-100"
          onClick={handleClick}
        >
          <img
            className="pointer-events-none"
            src="/images/ore.png"
            alt="chunk of ore"
          />
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <h2 className="text-center text-4xl">Store</h2>
        <Upgrades upgrades={upgrades} ore={ore} dispatch={dispatch} />
        <Additions additions={additions} ore={ore} dispatch={dispatch} />
      </div>
    </main>
  );
}
