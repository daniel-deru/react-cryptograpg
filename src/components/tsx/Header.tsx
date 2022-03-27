import { Link } from "react-router-dom"

import { HeaderComponent } from "../styles/Header.styled"

const Header: React.FC = () => {
  return (
    <HeaderComponent>
        <h1>Cryptograph</h1>
        <Link to="/help">?</Link>
    </HeaderComponent>
  )
}

export default Header