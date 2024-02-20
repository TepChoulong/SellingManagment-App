import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="transition duration-500 ease-in-out">
      <ul>
        <li className="p-2 bg-sky-600 text-center text-white border">
          <Link>Home</Link>
        </li>
        <li className="p-2 bg-sky-600 text-center text-white border">
          <Link>Drinks</Link>
        </li>
        <li className="p-2 bg-sky-600 text-center text-white border">
          <Link>Noodles</Link>
        </li>
        <li className="p-2 bg-sky-600 text-center text-white border">
          <Link>Ingredients</Link>
        </li>
        <li className="p-2 bg-sky-600 text-center text-white border">
          <Link>Bathroom Supplies</Link>
        </li>
      </ul>
    </nav>
  );
}
