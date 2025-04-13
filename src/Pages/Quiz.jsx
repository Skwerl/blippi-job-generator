import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import * as Motion from "motion/react-client";
import Main from '../Layouts/Main';
import { QUESTIONS, getResult } from '../Logic';

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

            <div className="prompt">
              <Stack spacing={1}>
                <span>Your future job:</span>
                <span>{`${jobResult}!`}</span>
              </Stack>
            </div>

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
                  <Box className="choice" style={choice.style} onClick={() => chooseOption(index)}>
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