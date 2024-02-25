import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export default function Gander() {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    onChange(selectedGender);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleGenderChange}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}


