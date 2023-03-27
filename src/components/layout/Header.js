
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Header.css';
const Header = (props) => {
    return (
        <header>
        <nav>
            <div className="imagenfondonav">
                <div className="contenedorprincipal">
                    <div className="lista">
                        <img src="img/LOGO.png" alt=""></img>
                        <li><NavLink to="/" className={({isActive})=> isActive ? "activo" : undefined}>Inicio</NavLink></li>
                        <li><NavLink to="/contacto" className={({isActive})=> isActive ? "activo" : undefined}>Contacto</NavLink></li>
                        <li><NavLink to="/plataformas" className={({isActive})=> isActive ? "activo" : undefined}>Plataformas</NavLink></li>
                        <li><NavLink to="/trailers" className={({isActive})=> isActive ? "activo" : undefined}>Trailers</NavLink></li>
                    </div>

                    <div className="buscar">
                        <input type="text" placeholder="Buscar" required></input>
                        <div className="btnbusqueda">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    </header>
    );
}

export default Header