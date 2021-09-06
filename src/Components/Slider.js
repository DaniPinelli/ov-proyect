import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
const Slider = () => {
  return (
    <div className="container slider-container mb-5">
      <div className=" title-slider mt-5 mb-2">
        <h4>Nuestos Alumnos:</h4>
        <p>(Perdón que no podemos ponerlos a todos)</p>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="slider" />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="slider" />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="slider" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
