import { Addition } from "../../types";
//import getCost from "../utils/getCost";

type AdditionProps = {
  addition: Addition;
};

function AdditionsItem({ addition }: AdditionProps) {
  const { name, power } = addition;
  return (
    <button className="bg-gray-300">
      <div>
        <p>{name}</p>
        <p>{power}</p>
      </div>
    </button>
  );
}

export default AdditionsItem;
