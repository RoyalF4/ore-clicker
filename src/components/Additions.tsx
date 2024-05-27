import { Action, Addition } from "../../types";
import Tooltip from "./Tooltip";

import AdditionsItem from "./AdditionsItem";

type AdditionsProps = {
  additions: Addition[];
  dispatch: React.Dispatch<Action>;
  ore: number;
};

function Additions({ additions, dispatch, ore }: AdditionsProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Additions</h3>
      {additions.map((addition) => (
        <Tooltip addition={addition} key={addition.name}>
          <AdditionsItem
            addition={addition}
            key={addition.name}
            dispatch={dispatch}
            ore={ore}
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default Additions;
