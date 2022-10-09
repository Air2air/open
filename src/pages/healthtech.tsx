

import { Link } from "react-router-dom";

export default function HealthTech() {
  return (
    <ul className="products">
      <li>
        <Link to="healthtech-1">healthtech 1</Link>
      </li>
      <li>
        <Link to="healthtech-3?color=green">healthtech 3</Link>
      </li>
    </ul>
  );
}