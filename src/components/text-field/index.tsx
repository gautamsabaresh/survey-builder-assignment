import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
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
        <FormLabel>{props?.label}</FormLabel>
        <Controller
          name={props.name}
          control={props.control}
          rules={{
            required: options.required,
            maxLength: props?.charlimit,
          }}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <TextField
              multiline={options.multiline}
              value={value}
              {...options}
              helperText={error ? error.message : null}
              required={options.required}
              error={!!error}
              onChange={onChange} />
          )}
        />
      </FormControl>
    </Box>
  )
}

export default BaseTextField