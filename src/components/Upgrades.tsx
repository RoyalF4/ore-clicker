import { Action, Upgrade } from "../../types";
import UpgradeItem from "./UpgradeItem";
import UpgradeTooltip from "./UpgradeTooltip";

type UpgradesProps = {
  upgrades: Upgrade[];
  ore: number;
  dispatch: React.Dispatch<Action>;
};

function Upgrades({ upgrades, ore, dispatch }: UpgradesProps) {
  const availableUpgrades = upgrades
    .filter((upgrade) => !upgrade.purchased)
    .slice(0, 6);

  return (
    <div>
      <h3 className="text-2xl font-bold">Upgrades</h3>
      <div className="flex gap-2">
        {availableUpgrades
          .sort((a, b) => a.cost - b.cost)
          .map((upgrade) => (
            <UpgradeTooltip upgrade={upgrade} ore={ore} key={upgrade.name}>
              <UpgradeItem
                upgrade={upgrade}
                ore={ore}
                dispatch={dispatch}
                key={upgrade.name}
              />
            </UpgradeTooltip>
          ))}
      </div>
    </div>
  );
}

export default Upgrades;
