import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/Firebase.js';
import Swal from 'sweetalert2';
import CloseIcon from '@mui/icons-material/Close';
import { Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { deleteDoc, doc } from "firebase/firestore";


export default function SendResponse() {
  const infoQuery = useParams().QueryDescription;
  const infoEmail = useParams().Email;
  const infoID = useParams().id;
  const history = useHistory();

  const [email, setEmail] = useState(infoEmail);
  const [description, setDescription] = useState(infoQuery);
  const [response, setResponse] = useState('');

  const deleteId = async () => {
    const userDocRef = doc(db, "Queries", infoID);
    await deleteDoc(userDocRef);
    // Swal.fire("Sended Successfully");
    
    history.push("/query"); // Redirect to "/query" after deletion
    window.location.reload();
    
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const mailSend = () => {
    if (response) {
      if (window.Email) {
        window.Email.send({
          SecureToken: '2ad0c56c-2a55-47de-8eed-2be00af96c73',
          To: email,
          From: 'fa19-bse-005@cuilahore.edu.pk',
          Subject: 'Decor Spot Admin',
          Body: response,
        })
          .then(() => {
            deleteId();
            setResponse('');
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            Swal.fire('Error!', 'Failed to send email', 'error');
          });
      }
    } else {
      Swal.fire('Message!', 'Empty message cannot be sent', 'warning');
    }
  };

  return (
    <div>
      <>
        <Box sx={{ m: 2 }} />
        <Typography id="modal-modal-title" variant="h5" align="center" sx={{ margin: 2 }}>
          Send Response
        </Typography>
        <IconButton style={{ position: 'absolute', top: '0', right: '0' }}>
          <CloseIcon />
        </IconButton>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Sender"
                variant="outlined"
                onChange={handleEmailChange}
                value={email}
                sx={{ minWidth: '50%' }}
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-flexible"
                label="Query-Description"
                multiline
                maxRows={4}
                onChange={handleDescriptionChange}
                value={description}
                sx={{ minWidth: '50%' }}
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
                sx={{ minWidth: '70%' }}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                <Button variant="contained" onClick={mailSend}>
                  Send
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </>
    </div>
  );
}
