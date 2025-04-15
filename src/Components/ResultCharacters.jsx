import React from 'react';
import * as Motion from "motion/react-client";

const ResultsCharacter = (props) => {
  const { side, classes, size, style, children } = props;
  const rotation = (side === "right") ? [0, -2, 0] : [0, 2, 0];
  return <div className={`results-character ${side} ${classes}`} style={{ ...style, height: `${size}%` }}>
    <Motion.div
      animate={{
        rotate: rotation
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1
      }}>
      {children}
    </Motion.div>
  </div>
}

export default function ResultCharacters(props) {

  const { result } = props;

  return <React.Fragment>

    {(result === "Art Teacher") && <React.Fragment>
      <ResultsCharacter side="left" size={100} classes="mobile-hide">
        <img src="/images/result-artist-blippi.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={98}>
        <img src="/images/result-artist-meekah.png" />
      </ResultsCharacter>
    </React.Fragment>}

    {(result === "Astronaut") && <React.Fragment>
      <ResultsCharacter side="left" size={94} classes="mobile-hide">
        <img src="/images/result-astronaut-meekah.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={100}>
        <img src="/images/result-astronaut-blippi.png" />
      </ResultsCharacter>
    </React.Fragment>}

    {(result === "Construction Worker") && <React.Fragment>
      <ResultsCharacter side="left" size={94} style={{ left: "-6%" }} classes="mobile-hide">
        <img src="/images/result-construction-meekah.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={100}>
        <img src="/images/result-construction-blippi.png" />
      </ResultsCharacter>
    </React.Fragment>}

    {(result === "Dancer") && <React.Fragment>
      <ResultsCharacter side="left" size={112} style={{ left: "-16%" }} classes="mobile-hide">
        <img src="/images/result-dancer-meekah.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={100}>
        <img src="/images/result-dancer-blippi.png" />
      </ResultsCharacter>
    </React.Fragment>}

    {(result === "Doctor") && <React.Fragment>
      <ResultsCharacter side="left" size={94}>
        <img src="/images/result-doctor-meekah.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={100} style={{ right: "-9%" }}>
        <img src="/images/result-doctor-blippi.png" />
      </ResultsCharacter>
    </React.Fragment>}

    {(result === "Farmer") && <React.Fragment>
      <ResultsCharacter side="left" size={94} style={{ left: "-9%" }} classes="mobile-hide">
        <img src="/images/result-farmer-meekah.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={100} style={{ right: "-9%" }}>
        <img src="/images/result-farmer-blippi.png" />
      </ResultsCharacter>
    </React.Fragment>}

    {(result === "Firefighter") && <React.Fragment>
      <ResultsCharacter side="left" size={100}>
        <img src="/images/result-firefighter-blippi.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={94} style={{ right: "-11%" }}>
        <img src="/images/result-firefighter-meekah.png" />
      </ResultsCharacter>
    </React.Fragment>}

    {(result === "Grocery Worker") && <React.Fragment>
      <ResultsCharacter side="left" size={100}>
        <img src="/images/result-grocer-blippi.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={94} style={{ right: "-11%" }}>
        <img src="/images/result-grocer-meekah.png" />
      </ResultsCharacter>
    </React.Fragment>}

    {(result === "Monster Truck Driver") && <React.Fragment>
      <ResultsCharacter side="left" size={100}>
        <img src="/images/result-monstertruck-blippi.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={94} classes="mobile-hide">
        <img src="/images/result-monstertruck-meekah.png" />
      </ResultsCharacter>
    </React.Fragment>}

    {(result === "Pizza Chef") && <React.Fragment>
      <ResultsCharacter side="left" size={94} classes="mobile-hide">
        <img src="/images/result-pizza-meekah.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={100} style={{ right: "-7%" }}>
        <img src="/images/result-pizza-blippi.png" />
      </ResultsCharacter>
    </React.Fragment>}

  </React.Fragment >

}