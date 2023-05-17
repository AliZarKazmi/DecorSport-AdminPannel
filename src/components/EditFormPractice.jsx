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
// import '../../public'
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
    
    
    const createUser=()=>{
        // Swal.fire(response)
        if(response)
        {
          if(window.Email)
          {
            window.Email.send({
              SecureToken:"2ad0c56c-2a55-47de-8eed-2be00af96c73 ",
              To : email,
              From : "fa19-bse-005@cuilahore.edu.pk",
              Subject : " Decor Spot Admin ",
              Body : response,
          }).then(
            message => Swal.fire(message)
          );
              // Swal.fire("Sended!","Your Response has been sended,",'success')
              setResponse('')
          }
          
        }else{
            Swal.fire("Message!","Empty message can not be sent,",'warning')
        }

    }

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















