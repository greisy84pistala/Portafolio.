import { Link } from "react-router-dom";

const Header =()=>{
    return <div>
        <nav className="barra">
            <label></label>
            <ul className="menu">
                <li>
                <Link className="link" to="inicio">Inicio</Link> 
                </li>
                <li>
                <Link className="link" to="informacion">Informacion</Link>
                </li>
                <li>
                <Link className="link" to="Cards">Cards</Link> 
                </li>
                <li>
                <Link className="link" to="pokebola">Pokebola</Link> 
                </li>
            </ul>
        </nav>
    </div>
}

export default Header;
