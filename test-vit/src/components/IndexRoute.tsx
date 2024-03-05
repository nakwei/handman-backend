import { Link } from "react-router-dom";

export const IndexRoute = () => {
  return (
    <>
      <h1>Welcome</h1>
      <div className="mt-4 flex flex-col gap-y-1">
        <Link className="text-blue-600 block" to="/hangman">
          Hangman
        </Link>
        <Link className="text-blue-600 block" to="/counter">
          Counter
        </Link>
      </div>
    </>
  );
};
