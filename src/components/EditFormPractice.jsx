import React from 'react'
import { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import {Typography,Box} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
export default function EditFormPractice()
{
    const infoQuery = useParams().QueryDescription
    const infoEmail = useParams().Email

    const [email,setEmail] = useState(infoEmail)
    const [description,setDescription] = useState(infoQuery)
    const [response,setResponse] = useState('')

   

    const handleEmailChange = (event)=>{
        setEmail(event.target.value)
    }

    const handleDescriptionChange = (event)=>{
        setDescription(event.target.value)
    }
    
    const handleResponseChange = (event)=>{
        setResponse(event.target.value)
    }
    
    
  const createUser = () => {
    if (!response) {
      Swal.fire("Message!", "Empty message can not be sent,", "warning");
      return;
    }

    // Create a new object to send in the POST body
    const requestBody = {
      email: email,
      description: description,
      response: response,
    };

    // Set options for Fetch API
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };

    // Call the API
    fetch(
      "https://send-email-api.netlify.app/.netlify/functions/app/query",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Email sent successfully") {
          Swal.fire("Sended!", "Your Response has been sended,", "success");
          setResponse("");
        } else {
          Swal.fire("Error!", data.message, "error");
        }
      })
      .catch((error) => {
        Swal.fire(
          "Error!",
          "Something went wrong. Please try again later.",
          "error"
        );
      });
  };


    return(
    <div>
        <>
        <Box sx={{m:2}}/>
        <Typography id="modal-modal-title" variant="h5" align="center" sx={{margin:2}}>
            Send Response
          </Typography>
         <IconButton
            style={{position:"absolute", top:"0", right:"0"}}
         >
            <CloseIcon/>
         </IconButton>
         <Box >
         <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Seneder"
              variant="outlined"
              onChange={handleEmailChange}
              value={email}
              
              sx={{minWidth:"50%"}}
              disabled

            />
            </Grid>

            <Grid item xs={12} >
            <TextField
                id="outlined-multiline-flexible"
                label="Query-Description"
                multiline
                maxRows={4}
                onChange={handleDescriptionChange}
                value={description}
                sx={{minWidth:"50%"}}
                disabled
            />
            </Grid>
            
            <Grid item xs={12}>
            <TextField
                id="outlined-multiline-flexible"
                label="Response"
                multiline
                maxRows={4}
                onChange={handleResponseChange}
                value={response}
                sx={{minWidth:"70%",}}
                required
            />
            
            </Grid>

            <Grid item xs={12}>
            <Typography variant='h5' align='center' >
                <Button variant='contained' 
                    
                onClick={createUser}
                >
                    Send
                </Button>
            </Typography>
            </Grid>


         </Grid>
         </Box>
        </>

    </div>
    )

}