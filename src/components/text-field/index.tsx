import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Controller } from "react-hook-form";
import React from 'react'


const BaseTextField = (props: any) => {
  const options: { [x: string]: any } = {
    multiline: props?.lines > 1,
    required: !props?.optional,
    helperText: !props?.optional ? 'Required' : '',
    maxRows: props?.lines,
    fullWidth: props?.size === 'full'
  }
  if (props?.charlimit) {
    options.inputProps = {
      maxLength: props?.charlimit
    }
  }

  return (
    <Box component='div' marginTop='12px'>
      <FormControl required={options.required} fullWidth={options.fullWidth}>
        <FormLabel>{props?.stem}</FormLabel>
        <TextField {...options} value={props.value} onChange={props?.onChange}></TextField>
        <FormHelperText></FormHelperText>
      </FormControl>
    </Box>
  )
}

export default BaseTextField