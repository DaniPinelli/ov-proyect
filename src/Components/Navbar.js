import logo from "./logo-cars.png";
const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler hamburguer"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <a className="nav-link mr-4 " href="#main">
                Inicio <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 " href="#links">
                Enlaces
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 " href="#students">
                Alumnos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 item-nav" href="#our-prices">
                Promos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3 " href="#us">
                Sobre Nosotros
              </a>
            </li>
          </ul>
        </div>
        <img
          src={logo}
          className="navbar-brand logo"
          alt="logo girl-with-dirver's-license"
        />
      </nav>
    </div>
  );
};

export default Navbar;
