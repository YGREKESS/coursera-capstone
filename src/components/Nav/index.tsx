import "./index.css";
import Button from "../Button";
import Logo from "../../img/Logo.png";
import Burger from "../../img/burger.png";

type Props = {};

const Nav = ({}: Props) => {
  return (
    <div className="header">
      <img id="logo" src={Logo} alt="Logo" />
      <img id="menu-burger" src={Burger} alt="Menu" />
      <nav>
        <ul>
          <li>
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#projects">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#book">
              Testimony
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
