import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl font-bold text-red-500">
        Oops, looks like this page doesn't exist.
      </p>
      <Link
        to="/app"
        className="text-xl text-blue-500 underline hover:text-blue-800"
      >
        Back to App
      </Link>
    </div>
  );
}

export default ErrorPage;
