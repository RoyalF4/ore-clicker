import { Addition } from "../../types";

import AdditionsItem from "./AdditionsItem";

type AdditionsProps = {
  additions: Addition[];
};

function Additions({ additions }: AdditionsProps) {
  return (
    <div>
      {additions.map((addition) => (
        <AdditionsItem addition={addition} />
      ))}
    </div>
  );
}

export default Additions;
