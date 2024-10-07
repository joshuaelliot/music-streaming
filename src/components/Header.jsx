import { Link } from "react-router-dom"
import "./style/header.css"

function Header() {
  return (
    <header className="header-container">
      <div>
        <span>Logo</span>
      </div>
      <nav>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>about</Link>
          <Link to={"/contact"}>contact</Link>
          <Link to={"/login"}>login</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header