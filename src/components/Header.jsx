import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex p-3 bg-black gap-5">
      <Link className="text-light text-decoration-none" to={"/"}>
        Movies
      </Link>
    </div>
  );
}

export default Header;
