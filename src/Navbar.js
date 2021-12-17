import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
            <NavLink to="/users">Les users</NavLink>
            <NavLink to="/comments">Commentaire</NavLink>
        </nav>
    )
}
