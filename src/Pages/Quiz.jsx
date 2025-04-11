import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import * as Motion from "motion/react-client";
import Main from '../Layouts/Main';

import './Quiz.scss';

export default function Quiz() {

  const questionsArray = [
    {
      header: "Question 1",
      question: "What is your favorite place to play?",
      choices: [
        { label: "Inside" },
        { label: "Outside" }
      ]
    },
    {
      header: "Question 2",
      question: "What is your favorite color to wear?",
      choices: [
        {
          label: "Red",
          style: { color: "#fff", backgroundColor: "red" }
        },
        {
          label: "White",
          style: { color: "#000", backgroundColor: "#fff" }
        },
        {
          label: "Blue",
          style: { color: "#fff", backgroundColor: "blue" }
        },
        {
          label: "Orange",
          style: { color: "#fff", backgroundColor: "orange" }
        },
        {
          label: "Purple",
          style: { color: "#fff", backgroundColor: "purple" }
        }
      ]
    },
    {
      header: "Question 3",
      question: "What is your favorite Blippi song?",
      choices: [
        { label: "Excavator" },
        { label: "Monster Truck Song" },
        { label: "Fire Truck Song" },
        { label: "Blippi Wiggle" },
        { label: "Other" }
      ]
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [jobResult, setJobResult] = useState(null);

  const getResult = (answers) => {
    let result;
    if (answers[0] === 0) {
      // Inside:
      switch (answers[1]) {
        // Colors:
        case 0: // Red
          result = "Pizza Chef";
          break;
        case 1: // White
          result = "Veterinarian";
          break;
        case 2: // Blue
          result = "Grocery Worker";
          break;
        case 3: // Orange
          result = "Dancer";
          break;
        case 4: // Purple
          result = "Art Teacher";
          break;
      }
      if (answers[2] === 3) result = "Dancer";
    } else {
      // Outside:
      switch (answers[1]) {
        // Colors:
        case 0: // Red
          result = "Firefighter";
          break;
        case 1: // White
          result = "Astronaut";
          break;
        case 2: // Blue
          result = "Farmer";
          break;
        case 3: // Orange
          result = "Construction Worker";
          break;
        case 4: // Purple
          result = "Monster Truck Driver";
          break;
      }
      if (answers[2] === 0) result = "Construction Worker";
      if (answers[2] === 1) result = "Monster Truck Driver";
      if (answers[2] === 2) result = "Firefighter";
    }
    setJobResult(result);
  }

  const chooseOption = (choice) => {
    let updatedAnswers = [...answersArray];
    updatedAnswers[currentQuestion] = choice;
    setAnswersArray(updatedAnswers);
    if (currentQuestion < questionsArray.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else getResult(updatedAnswers);
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
                <span>{questionsArray[currentQuestion].header}</span>
                <span>{questionsArray[currentQuestion].question}</span>
              </Stack>
            </div>
          </React.Fragment>
        }

        {!!!jobResult && <React.Fragment>
          <div className="choices">
            <Stack spacing={2} direction="row" justifyContent="center">

              {questionsArray[currentQuestion].choices.map((choice, index) => <React.Fragment key={index}>
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