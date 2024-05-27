import { Action, Upgrade } from "../../types";
import UpgradeItem from "./UpgradeItem";

type UpgradesProps = {
  upgrades: Upgrade[];
  ore: number;
  dispatch: React.Dispatch<Action>;
};

function Upgrades({ upgrades, ore, dispatch }: UpgradesProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold">Upgrades</h3>
      <div className="flex gap-2">
        {upgrades.map((upgrade) => (
          <UpgradeItem
            upgrade={upgrade}
            ore={ore}
            dispatch={dispatch}
            key={upgrade.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Upgrades;
