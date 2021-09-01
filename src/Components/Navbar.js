import logo from './logo-cars.png';
const Navbar = () => {
    return ( 
        <div className="container-fluid" >
            
                
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src={logo} className="navbar-brand logo" alt="logo"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active lg-mr-5">
        <a className="nav-link " href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

        </div>
     );
}
 
export default Navbar;