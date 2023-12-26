import Navbar from "../Navbar"
import "./style.css"

const Header = () =>{

    return(
        <header className="header-container">
            <Navbar handleShow={handleShow}/>
        </header>
    )
}

export default Header;