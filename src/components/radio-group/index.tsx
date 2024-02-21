import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';

const BaseRadioButtonsGroup = (props: any) => {
  const radioButtonOptions = props?.options || [];
  return (
    <Box component='div' marginTop='12px'>
    <FormControl>
      <FormLabel>{props?.stem}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.value}
        onChange={props.onChange}
      >
        {
          radioButtonOptions.map((option: any, index: number) => (
            <FormControlLabel key={index} value={option?.value} control={<Radio />} label={option.text} />
          ))
        }
      </RadioGroup>
    </FormControl>
    </Box>
  );
}

export default BaseRadioButtonsGroup;