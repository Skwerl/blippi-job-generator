import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Main from '../Layouts/Main';

export default function Home() {

  const [name, setName] = useState('');
  const [results, setResults] = useState({});

  const jobs = [
    "butcher",
    "baker",
    "candlestick maker",
    "clown",
    "jedi",
    "warrior",
    "princess",
    "president"
  ];

  const inputChange = (e) => {
    setName(e.target.value);
  }

  const getResults = () => {
    const numericValue = Math.abs(hashString(name.toLowerCase()));
    setResults({
      input: name,
      numeric: numericValue,
      job: jobs[numericValue % jobs.length]
    });
  }

  const hashString = (input) => {
    let hash = 0, i, chr;
    if (input.length === 0) return hash;
    for (i = 0; i < input.length; i++) {
      chr = input.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }

  return <Main>
    <React.Fragment>

      <Box component="form" p={3} noValidate autoComplete="off">
        <Stack spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={inputChange}
          />
          <Button variant="outlined" onClick={getResults}>Generate</Button>
          <pre>{JSON.stringify(results, null, 4)}</pre>
        </Stack>
      </Box>

    </React.Fragment>
  </Main>

}