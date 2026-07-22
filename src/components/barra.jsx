import { NavLink } from "react-router-dom";

function Barra() {
    return (
        <header>
            <h1>DonLinux</h1>
            <nav>
                <NavLink to="/">Inicio</NavLink>
                {" | "}
                <NavLink to="gestion">Adopciones</NavLink>
                {" | "}
                <NavLink to="datos_api">Animales</NavLink>
            </nav>
        </header>
    );
}

export default Barra;