import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import * as Motion from "motion/react-client";
import Main from '../Layouts/Main';
import { QUESTIONS, RESULTS, getResult } from '../Logic';

import './Quiz.scss';

export default function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [jobResult, setJobResult] = useState(null);

  const chooseOption = (choice) => {
    let updatedAnswers = [...answersArray];
    updatedAnswers[currentQuestion] = choice;
    setAnswersArray(updatedAnswers);
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else setJobResult(getResult(updatedAnswers));
  }

  return <Main>
    <React.Fragment>

      <div className="quiz-container">

        {!!jobResult
          ? <React.Fragment>

            <div className="prompt result">
              <Stack spacing={1}>
                <span className="header">Your future job:</span>
                <span className="job-title">{jobResult}</span>
                <span className="job-description">{RESULTS[jobResult].description}</span>
              </Stack>
            </div>

            {(jobResult === "Monster Truck Driver") && <React.Fragment>
              <ResultsCharacter side="left" size={100}>
                <img src="/images/result-monstertruck-blippi.png" />
              </ResultsCharacter>
              <ResultsCharacter side="right" size={94}>
                <img src="/images/result-monstertruck-meekah.png" />
              </ResultsCharacter>
            </React.Fragment>}

          </React.Fragment>
          : <React.Fragment>
            <div className="prompt">
              <Stack spacing={1}>
                <span>{QUESTIONS[currentQuestion].header}</span>
                <span>{QUESTIONS[currentQuestion].question}</span>
              </Stack>
            </div>
          </React.Fragment>
        }

        {!!!jobResult && <React.Fragment>
          <div className="choices">
            <Stack spacing={2} direction="row" justifyContent="center">

              {QUESTIONS[currentQuestion].choices.map((choice, index) => <React.Fragment key={index}>
                <Motion.div whileHover={{ scale: 1.1 }}>
                  <Box className={`choice ${choice.class}`} style={choice.style} onClick={() => chooseOption(index)}>
                    {choice.label}
                  </Box>
                </Motion.div>
              </React.Fragment>)}

            </Stack>
          </div>
        </React.Fragment>}

      </div>

    </React.Fragment>
  </Main>

}

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