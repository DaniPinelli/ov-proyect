import { Fragment } from "react";
import Links from "./Links";
import Slider from "./Slider";
import Prices from "./Prices";

const Section = () => {
  return (
    <Fragment>
      <Links />
      <Slider />
      <Prices />
    </Fragment>
  );
};

export default Section;
