import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Addlibrary=() => {
  return (
    <div><br></br><br></br><center>
        <TextField label="bname" name='bname' variant='outlined' ></TextField><br></br>
        <TextField label="genre" name='genre' variant='outlined' ></TextField><br></br>
        <Button variant="contained">submit</Button>
    </center>
      
    </div>
  )
}

export default Addlibrary

