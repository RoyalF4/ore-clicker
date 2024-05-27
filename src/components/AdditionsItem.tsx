import { Action, Addition } from "../../types";
import formatName from "../utils/formatName";
import getCost from "../utils/getCost";
//import getCost from "../utils/getCost";

type AdditionProps = {
  addition: Addition;
  dispatch: React.Dispatch<Action>;
  ore: number;
};

function AdditionsItem({ addition, dispatch, ore }: AdditionProps) {
  const { name, baseCost, owned } = addition;
  const cost = getCost(baseCost, owned);
  const canAfford = ore >= cost;

  function handleClick() {
    dispatch({ type: "purchaseAddition", payload: { cost, name } });
  }

  return (
    <button
      className={`w-80 bg-gray-300 p-4 hover:bg-gray-400 ${canAfford ? "" : "cursor-not-allowed opacity-50"} flex items-center justify-between transition-colors`}
      onClick={handleClick}
      disabled={!canAfford}
    >
      <div>
        <p className="text-2xl capitalize">{formatName(name)}</p>
        <p className="flex">
          <img src="/images/ore.png" alt="" className="w-6" />{" "}
          <span className={`${canAfford ? "text-green-500" : "text-red-500"}`}>
            {cost.toLocaleString()}
          </span>
        </p>
      </div>
      <p className="text-4xl opacity-50">{owned}</p>
    </button>
  );
}

export default AdditionsItem;
