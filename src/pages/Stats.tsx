import { Link } from "react-router-dom";
import { GameState } from "../../types";
import formatNumber from "../utils/formatNumber";

type StatsProps = {
  state: GameState;
};

function Stats({ state }: StatsProps) {
  const { clicks, totalOre } = state;
  console.log(state);
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl">
        <span className="font-bold">Total clicks: </span>
        {clicks}
      </p>
      <p className="text-xl">
        <span className="font-bold">Total ore gathered: </span>
        {formatNumber(totalOre)}
      </p>
      <Link
        to="/game"
        className="text-lg text-blue-500 underline hover:text-blue-800"
      >
        Back to Game
      </Link>
    </div>
  );
}

export default Stats;
