import React from 'react'
import { TextField } from '@mui/material'

const BaseTextField = (props: any) => {
  const options: { [x: string]: any } = {
    multiline: props?.lines > 1,
    required: !props?.optional,
    helperText: !props?.optional ? 'Required' : '',
    rows: props?.lines,
    fullWidth: props?.size === 'full'  
  }
  if (props?.charlimit) {
    options.inputProps = {
      maxLength: props?.charlimit
    }
  }

  return (
    <TextField {...options} value={props.value} onChange={props?.onChange}></TextField>
  )
}

export default BaseTextField