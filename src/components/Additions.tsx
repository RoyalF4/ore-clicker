import { Action, Addition } from "../../types";

import AdditionsItem from "./AdditionsItem";

type AdditionsProps = {
  additions: Addition[];
  dispatch: React.Dispatch<Action>;
};

function Additions({ additions, dispatch }: AdditionsProps) {
  return (
    <div className="flex gap-4">
      {additions.map((addition) => (
        <AdditionsItem
          addition={addition}
          key={addition.name}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default Additions;
