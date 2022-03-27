import { Link } from "react-router-dom"

import { HeaderComponent } from "../styles/Header.styled"
import Toggle from "./Toggle"
import Nav from "./Nav"

const Header: React.FC = () => {
  return (
    <HeaderComponent>
        <h1>&lt;Cryptograph/&gt;</h1>
        <Link to="/help">?</Link>
        <Toggle/>
        <Nav />
    </HeaderComponent>
  )
}

export default Header