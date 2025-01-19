import React from 'react'
import { Button, TextField } from '@mui/material'

const add = () => {
  return (
    <div>
    <h1>FORM</h1>
    
    
    <TextField label='BLOG NAME' variant='outlined' /><br /><br />
  
    <TextField label='DESCRIPTION' variant='outlined' /><br /><br />
    <TextField label='AUTHOR NAME' variant='outlined' /><br /><br />
   
    <Button variant='contained' >SUBMIT</Button> 
    </div>
  )
}

export default add
