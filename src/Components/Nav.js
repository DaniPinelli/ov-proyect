const Nav = () => {
  return (
    <div className="container-fluid bg-success main-container">
      <div className="row">
        <div className="col-6 nav-div"></div>
        <div className="col-6 rigth-side">
          <div className="div-title ">
            <h1>
              Somos especialistas en casos difíciles, tenemos más paciencia que
              cualquiera 100% garantizado!
            </h1>
            <p>
              {" "}
              <span className="text-main">
                Te acompañamos en todo momento, hasta que obtengas tu licencia.
              </span>{" "}
              Nuestra secretaria va a estar todo el tiempo monitoreando tu
              trámite y tu aprendizaje. Nuestros instructores se van a ocupar de
              que en cada clase puedas aprender a tu ritmo, logrando que tu
              experiencia sea óptima.
            </p>
          </div>
          <div className="emoji d-flex">
            <p>&#128663;</p>
            <p>&#128079;&#127995;</p>
            <p>&#127941;</p>
            <p>&#128591;</p>
            <p>&#128640;</p>
            <p>&#127891;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
