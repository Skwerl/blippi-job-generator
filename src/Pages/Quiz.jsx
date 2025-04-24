import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import * as Motion from "motion/react-client";
import Main from '../Layouts/Main';
import Player from '../Components/Player';
import ResultCharacters from '../Components/ResultCharacters';
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
                <Player snippet={RESULTS[jobResult].audio} />
              </Stack>
            </div>
            <ResultCharacters result={jobResult} />
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
            <Stack spacing={2} direction="row" justifyContent="center" flexWrap="wrap">
              {QUESTIONS[currentQuestion].choices.map((choice, index) => <React.Fragment key={index}>
                <Box className="choice-wrapper">
                  <Motion.div whileHover={{ scale: 1.1 }}>
                    <Box className={`choice ${choice.class}`} style={choice.style} onClick={() => chooseOption(index)}>
                      {choice.label}
                    </Box>
                  </Motion.div>
                </Box>
              </React.Fragment>)}

            </Stack>
          </div>
        </React.Fragment>}

      </div>

    </React.Fragment>
  </Main>

}