import { Action, Upgrade } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UpgradeProps = {
  upgrade: Upgrade;
  ore: number;
  dispatch: React.Dispatch<Action>;
};

function UpgradeItem({ upgrade, ore, dispatch }: UpgradeProps) {
  const { type, name, icon, color, cost, multiplier } = upgrade;
  const canAfford = ore >= cost;

  function handleClick() {
    if (type === "click") {
      dispatch({ type: "purchaseClickUpgrade", payload: { name, cost } });
    } else {
      dispatch({
        type: "purchaseAdditionUpgrade",
        payload: { name, cost, type, multiplier },
      });
    }
  }

  return (
    <button
      className={`h-10 w-10 border-2 border-black bg-gray-800 p-1 ${canAfford ? "" : "cursor-not-allowed opacity-50"}`}
      disabled={!canAfford}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} style={{ color: color }} size="xl" />
    </button>
  );
}

export default UpgradeItem;
