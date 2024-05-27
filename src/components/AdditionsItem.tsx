import { Action, Addition } from "../../types";
import formatName from "../utils/formatName";
import getCost from "../utils/getCost";
//import getCost from "../utils/getCost";

type AdditionProps = {
  addition: Addition;
  dispatch: React.Dispatch<Action>;
};

function AdditionsItem({ addition, dispatch }: AdditionProps) {
  const { name, power, baseCost, owned } = addition;
  const cost = getCost(baseCost, owned);

  function handleClick() {
    dispatch({ type: "purchaseAddition", payload: { cost, name } });
  }

  return (
    <button className="w-80 bg-gray-300 p-4" onClick={handleClick}>
      <div>
        <p className="capitalize">{formatName(name)}</p>
        <p>Power: {power}</p>
        <p className="flex justify-center">
          <img src="/images/ore.png" alt="" className="w-6" /> {cost}
        </p>
      </div>
    </button>
  );
}

export default AdditionsItem;
