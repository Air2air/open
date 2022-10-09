

import { Link } from "react-router-dom";

export default function PharmaTech() {
  return (
    <ul className="products">
      <li>
        <Link to="pharmatech-1">pharmatech 1</Link>
      </li>
      <li>
        <Link to="pharmatech-3?color=green">pharmatech 3</Link>
      </li>
    </ul>
  );
}