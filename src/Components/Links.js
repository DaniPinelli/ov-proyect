import simulador from "./simulador.png";
import psicofisico from "./psicofisico.png";
import material from "./material.png";
import manual from "./manual.png";

const Links = () => {
  return (
    <div className="container-fluid container-links" id="links">
      <div className="links-container-title ">
        <h3 className="text-center font-weight-light" >
          {" "}
          Enlaces que te pueden ser útiles
        </h3>
      </div>
      <div className="cards-container d-flex justify-content-around links-container">
        <div className="links-cards first">
          <div className="card mt-3 mb-3">
            <img src={simulador} class="card-img-top mt-3" alt="logo" />
            <div className="card-body">
              <a
                href="https://www.santafe.gob.ar/examenlicencia/examenETLC/listarCuestionarios.php"
                className="btn btn-links btn-success"
              >
                Simulador Teórico
              </a>
            </div>
          </div>
        </div>

        <div className="links-cards second">
          <div className="card mt-3 mb-3">
            <img src={psicofisico} class="card-img-top mt-3" alt="logo" />
            <div className="card-body">
              <a
                href="https://www.rosario.gob.ar/turnos/tramite/iniciarTramiteWeb.do?tipoOp=cargar&oid=1"
                className="btn btn-links btn-success"
              >
                Turnos Psicofísico
              </a>
            </div>
          </div>
        </div>

        <div className="links-cards third">
          <div className="card mt-3 mb-3">
            <img src={material} class="card-img-top mt-3" alt="logo" />
            <div className="card-body">
              <a
                href="http://www.santafe.gov.ar/index.php/web/content/download/156883/764852/file/Material%20de%20Estudio.pdf"
                className="btn btn-links btn-success"
              >
                Material de Estudio
              </a>
            </div>
          </div>
        </div>

        <div className="links-cards fourth">
          <div className="card mt-3 mb-3">
            <img src={manual} class="card-img-top mt-3" alt="logo" />
            <div className="card-body">
              <a
                href="https://gestorweb.rosario.gob.ar/web/sites/default/files/manual_licencia_conducir.pdf"
                className="btn btn-links btn-success"
              >
                Manual Licencia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
