import { Addition } from "../../types";
import formatName from "../utils/formatName";

type TooltipProps = {
  children: React.ReactElement;
  addition: Addition;
};

function Tooltip({ children, addition }: TooltipProps) {
  const { name, owned, power } = addition;
  return (
    <div className="group relative">
      {children}
      <div className="pointer-events-none absolute right-full top-0 mr-4 w-80 bg-gray-600 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <p className="font-bold capitalize leading-none">{formatName(name)}</p>
        <p className="py-.5 inline-block rounded bg-gray-200 px-2 text-xs font-bold text-black">
          Owned: {owned.toLocaleString()}
        </p>
        <ul className="list-inside list-disc text-xs">
          <li>
            Each {formatName(name)} produces {power.toLocaleString()} ore per
            second
          </li>
          <li>
            {owned.toLocaleString()}{" "}
            {`${formatName(name)}${owned === 1 ? "" : "s"}`} producing{" "}
            {power.toLocaleString()} ore per second
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tooltip;
