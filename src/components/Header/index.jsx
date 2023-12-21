import Navbar from "../Navbar"

const Header = ({handleShow}) =>{

    return(
        <header>
            <Navbar handleShow={handleShow}/>
        </header>
    )
}

export default Header;