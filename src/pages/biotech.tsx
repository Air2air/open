

import { Link } from "react-router-dom";

export default function BioTech() {
  return (
    <ul className="products">
      <li>
        <Link to="biotech-1">biotech 1</Link>
      </li>
      <li>
        <Link to="biotech-3?color=green">biotech 3</Link>
      </li>
    </ul>
  );
}