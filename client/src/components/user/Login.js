
import {Close, Send} from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { useRef, useState } from 'react';
import { useValue } from '../../context/ContextProvider.js';
import PasswordField from './PasswordField.js';


const Login = () => {
  const {
    state: { openLogin },
    dispatch,
  } = useValue();
  const [title, setTitle] = useState("Login");
  const [isRegister, setIsRegister] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleClose = () => {
    dispatch({ type: "CLOSE_LOGIN" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog open={openLogin} onClose={handleClose}>
      <DialogTitle>
        {title}
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit= {handleSubmit}>
        <DialogContent dividers>
          <DialogContentText >
            Please fill your information in the fields below
          </DialogContentText>
          {isRegister && (
            <TextField
              autoFocus
              margin="normal"
              variant="standard"
              id="name"
              label="Name"
              type="text"
              fullWidth
              inputRef={nameRef}
              inputProps={{ minLength: 2 }}
              required
            />
          )}
          <TextField
            autoFocus={!isRegister}
            margin="normal"
            variant="standard"
            id="email"
            label="email"
            type="email"
            fullWidth
            inputRef={nameRef}
            required
          />
          <PasswordField {...{passwordRef}}/>
            {isRegister && 
             <PasswordField passwordRef={confirmPasswordRef} id='confirmpassword' label='Confirm Password' />
            }
          </DialogContent>
          <DialogActions>
            <Button type='submit' variant='contained' endIcon={<Send/>}>

            </Button>
          </DialogActions>
      </form>
    </Dialog>
  );
};

export default Login;
