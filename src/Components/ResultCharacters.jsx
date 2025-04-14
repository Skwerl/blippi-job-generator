import React from 'react';
import * as Motion from "motion/react-client";

const ResultsCharacter = (props) => {
  const { side, size, children } = props;
  const rotation = (side === "right") ? [0, -2, 0] : [0, 2, 0];
  return <div className={`results-character ${side}`} style={{ height: `${size}%` }}>
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

    {(result === "Monster Truck Driver") && <React.Fragment>
      <ResultsCharacter side="left" size={100}>
        <img src="/images/result-monstertruck-blippi.png" />
      </ResultsCharacter>
      <ResultsCharacter side="right" size={94}>
        <img src="/images/result-monstertruck-meekah.png" />
      </ResultsCharacter>
    </React.Fragment>}

  </React.Fragment>

}