import { Action, Addition } from "../../types";
import Tooltip from "./Tooltip";

import AdditionsItem from "./AdditionsItem";

type AdditionsProps = {
  additions: Addition[];
  dispatch: React.Dispatch<Action>;
};

function Additions({ additions, dispatch }: AdditionsProps) {
  return (
    <div className="flex flex-col gap-4">
      {additions.map((addition) => (
        <Tooltip addition={addition} key={addition.name}>
          <AdditionsItem
            addition={addition}
            key={addition.name}
            dispatch={dispatch}
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default Additions;
