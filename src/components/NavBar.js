import logo from '../logo.svg';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand color-white" href="#">NEW LOOK PELUQUERIA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="flex__item nav-item">
                            <a className="flex__enlace nav-link" href="./index.html">Inicio</a>
                        </li>
                        <li className="flex__item nav-item">
                            <a className="flex__enlace nav-link" href="./pages/galeria.html">Galeria</a>
                        </li>
                        <li className="flex__item nav-item">
                            <a className="flex__enlace nav-link" href="./pages/premium.html">Premium</a>
                        </li>
                        <li className="flex__item nav-item">
                            <a className="flex__enlace nav-link" href="./pages/dejanos-tu-consulta.html">Dejanos tu consulta</a>
                        </li>
                        <li className="flex__item nav-item">
                            <a className="flex__enlace nav-link" href="./pages/ayuda.html">Ayuda</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;