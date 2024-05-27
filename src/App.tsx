import Additions from "./components/Additions.tsx";
import useInterval from "./hooks/UseInterval.ts";
import useLocalStorage from "./hooks/UseLocalStorage.ts";
import { initialState } from "./hooks/UseLocalStorage.ts";
import getIncrement from "./utils/getIncrement.ts";

export default function App() {
  const [state, dispatch] = useLocalStorage(initialState, "playerData");

  const { ore, additions } = state;

  useInterval(() => {
    dispatch({ type: "increment", payload: getIncrement(additions) });
  }, 1000);

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
      <Additions additions={additions} dispatch={dispatch} />
      <button onClick={handleReset}>Reset</button>
    </main>
  );
}
