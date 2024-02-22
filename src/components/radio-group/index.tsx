import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { Controller } from 'react-hook-form';

const BaseRadioButtonsGroup = (props: any) => {
  const radioButtonOptions = props?.options || [];
  return (
    <Box component='div' marginTop='12px'>
      <FormControl required={props?.required}>
        <FormLabel>{props?.stem}</FormLabel>
        <Controller
          name={props.name}
          control={props.control}
          rules={{
            required: props?.required
          }}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <RadioGroup value={value ?? ''} onChange={onChange}>
              {
                radioButtonOptions.map((option: any, index: number) => (
                  <FormControlLabel key={index} value={option?.value} control={<Radio />} label={option.text} />
                ))
              }
            </RadioGroup>
          )}
        />
      </FormControl>
    </Box>
  );
}

export default BaseRadioButtonsGroup;