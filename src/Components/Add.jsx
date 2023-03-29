import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

const Add = (props) => {
    var[input,setInput]=useState(props.data)
    console.log("add page props" + props.data)
   
    
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInput({ ...input,[name]:value})
    }

    const readValues = () => {
        console.log("clicked")
        console.log(input);
        if(props.method==="post") {
        axios.post("http://localhost:3005/Addlibrary",input)
        .then((response) => {
        console.log("post data" + response.data)
                alert("success")
        })
            .catch((err) => {
                console.log(err)
            })

    } else if (props.method=="put") {
        axios.put("http://localhost:3005/students/" + input.id,input)
        .then((response) => {
            console.log("put data" + response.data)
            alert("success")
            window.location.reload(false);

        })
        .catch((err) =>{
            console.log(err)
        })
        }
    }



    return (
        <div>
            <br></br>

            <TextField label='name' name='name' variant='outlined'
                value={input.name} onChange={inputHandler} />
        <br></br>
            <br></br>
            <TextField label='grade' name='grade' variant='outlined' value={input.grade} onChange={inputHandler} />
        <br></br>
            <br></br>
            <Button variant='contained' onClick={readValues} color='success'>submit</Button>

        </div>
    )
}

export default Add
