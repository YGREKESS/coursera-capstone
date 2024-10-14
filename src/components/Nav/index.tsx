import React from "react";
import "./index.css";
import Button from "../Button";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="header">
      <img id="logo" src="https://avatar.iran.liara.run/public/45" alt="Logo" />
      <nav>
        <ul>
          <li>
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#projects">
              Menu
            </a>
          </li>
          <li>
            <a className="nav-link" href="#book">
              Book
            </a>
          </li>
          <li>
            <Button
              label="Reservation"
              cb={() => console.log("Go to reservation")}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
