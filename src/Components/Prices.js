const Prices = () => {
  return (
    <div className="container-fluid prices-container bg-dark">
      <div className="promo-tittle-div1">
        <h5 id="our-prices">Nuestras Promos</h5>
      </div>
      <div className="promo-tittle-div2">
        <h6 id="prices">
          Somos especialistas en casos difíciles. 😇 Tenemos mas paciencia que
          cualquiera 100% garantizado. 🤗{" "}
        </h6>
      </div>
      <div className="prices d-flex justify-content-around pt-3">
        <div className="card card-prices mt-3">
          <div className="card-body">
            <title className="card-title prices-title">Nuestros precios</title>
            <p className="card-text pt-2">
              Cada clase $2000 (media hora cada una) 10 clases $13.000 o $17.000
              a domicilio.
            </p>
          </div>
        </div>
        <div className="card card-prices mt-3">
          <div className="card-body">
            <title className="card-title prices-title">🥇 "Manejo Yo"</title>
            <p className="card-text pt-2">
              10 clases + curso teórico y auto para rendir $15.900 contado
              efectivo o $19.900 a domicilio
            </p>
          </div>
        </div>
        <div className="card card-prices mt-3">
          <div className="card-body">
            <title className="card-title prices-title">
              🏆 "Manejo yo Big"
            </title>
            <p className="card-text pt-2">
              15 clases + curso teórico y auto para rendir $18.900 contado
              efectivo o $24.500 a domicilio
            </p>
          </div>
        </div>
        <div className="card card-prices mt-3">
          <div className="card-body">
            <title className="card-title prices-title">👑 "Super"</title>
            <p className="card-text pt-2">
              20 clases + curso teórico y auto para rendir $22.900 contado
              efectivo o $28.900 a domicilio.
            </p>
          </div>
        </div>
        <div className="card card-prices mt-3">
          <div className="card-body ">
            <title className="card-title prices-title">💎 "Full"</title>
            <p className="card-text pt-2">
              30 clases + curso teórico y auto para rendir $28.900 contado
              efectivo o $38.900 a domicilio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
