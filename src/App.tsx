import Additions from "./components/Additions.tsx";
import Upgrades from "./components/Upgrades.tsx";
import useInterval from "./hooks/UseInterval.ts";
import useLocalStorage from "./hooks/UseLocalStorage.ts";
import { initialState } from "./hooks/UseLocalStorage.ts";
import getIncrement from "./utils/getIncrement.ts";

export default function App() {
  const [state, dispatch] = useLocalStorage(initialState, "playerData");

  const { ore, additions, upgrades } = state;
  const increment = getIncrement(additions);

  useInterval(() => {
    dispatch({
      type: "increment",
      payload: increment / 10,
    });
  }, 100);

  function handleClick() {
    dispatch({ type: "click" });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <main className="flex p-4">
      <div className="flex flex-1 flex-col items-center">
        <p>Ore: {Math.floor(ore).toLocaleString()}</p>
        <p>
          <img src="/images/ore.png" alt="" className="inline-block w-6" />
          {`per second: ${increment.toLocaleString()}`}
        </p>
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
