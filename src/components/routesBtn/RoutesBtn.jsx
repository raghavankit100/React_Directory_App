import { Link } from "react-router-dom";

export default function RoutesBtn() {
  return (
    <div className="p-8 flex gap-8">
      <Link to="/">
        <button className="bg-blue-600 text-white px-8 py-4 rounded text-lg">
          Add New Person
        </button>
      </Link>
      <Link to="/retrieve-info">
        <button className="bg-blue-600 text-white px-8 py-4 rounded text-lg">
          Retrieve Information
        </button>
      </Link>
    </div>
  );
}
