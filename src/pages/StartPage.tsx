import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div className="flex flex-col items-center">
      <img src="/images/ore.png" alt="" />
      <p className="pb-4 text-5xl">Welcome to Ore Clicker!</p>
      <Link
        to="/app"
        className="rounded bg-blue-500 px-4 py-2 hover:bg-black hover:text-blue-500 active:scale-95"
      >
        Click to get started!
      </Link>
    </div>
  );
}

export default StartPage;
