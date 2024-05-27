import { Action, Upgrade } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UpgradeProps = {
  upgrade: Upgrade;
  ore: number;
  dispatch: React.Dispatch<Action>;
};

function UpgradeItem({ upgrade, ore, dispatch }: UpgradeProps) {
  const { name, icon, color, cost, purchased } = upgrade;
  const canAfford = ore >= cost;

  if (purchased) return;

  function handleClick() {
    dispatch({ type: "purchaseUpgrade", payload: { name, cost } });
  }

  return (
    <button
      className={`h-10 w-10 border-2 border-black bg-gray-600 p-1 ${canAfford ? "" : "cursor-not-allowed opacity-50"}`}
      disabled={!canAfford}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} style={{ color: color }} size="xl" />
    </button>
  );
}

export default UpgradeItem;
