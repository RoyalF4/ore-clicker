import { Upgrade } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TooltipProps = {
  children: React.ReactElement;
  upgrade: Upgrade;
  ore: number;
};

function UpgradeTooltip({ children, upgrade, ore }: TooltipProps) {
  const { name, description, cost, icon, color } = upgrade;
  const canAfford = ore >= cost;

  return (
    <div className="group relative">
      {children}
      <div className=" pointer-events-none absolute -top-2 right-12 z-10 mt-2 w-80 bg-gray-600 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <div className=" flex gap-2">
          <FontAwesomeIcon icon={icon} style={{ color: color }} size="2xl" />
          <div className="flex-1">
            <p className="font-bold capitalize leading-none">{name}</p>
            <p className="py-.5 inline-block rounded bg-gray-200 px-2 text-xs font-bold text-black">
              Upgrade
            </p>
          </div>
          <div>
            <img src="/images/ore.png" alt="" className={`inline-block w-6 `} />
            <span
              className={`${canAfford ? "text-green-500" : "text-red-500"}`}
            >
              {cost}
            </span>
          </div>
        </div>
        <p className="my-2 text-sm">{description}</p>
        <p className="text-center text-xs italic"> Click to purchase!</p>
      </div>
    </div>
  );
}

export default UpgradeTooltip;
