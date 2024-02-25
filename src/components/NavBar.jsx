import { Link } from "react-router-dom";

export default function NavBar({ isOpen, closeNavbar }) {
  return (
    <nav className="transition duration-500 ease-in-out">
      <ul>
        <li className="p-2 bg-sky-600 text-center text-white border">
          <Link to={"/"} onClick={closeNavbar}>
            Home
          </Link>
        </li>
        <li className="p-2 bg-sky-600 text-center text-white border">
          <Link to={"/create-new-history"} onClick={closeNavbar}>
            {" "}
            Create New History
          </Link>
        </li>
        <li className="p-2 bg-sky-600 text-center text-white border">
          <Link to={"/prices-tags"} onClick={closeNavbar}>
            Prices Tags
          </Link>
        </li>
      </ul>
    </nav>
  );
}
