import prices from "./prices.png";
const Prices = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="promo-tittle-div ">
        <h5>Nuestras Promos</h5>
      </div>
      <div className="prices">
        <img src={prices} alt="prices" />
      </div>
    </div>
  );
};

export default Prices;
