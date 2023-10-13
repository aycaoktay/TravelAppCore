

import { TextField } from '@mui/material';
import React from 'react';

const PasswordField = ({passwordRef , id = 'password' , label ='Password'}) => {
    return(
        <TextField
        autoFocus
        margin="normal"
        variant="standard"
        id={id}
        label = {label}
        type="password"
        fullWidth
        inputRef={passwordRef}
        inputProps={{minLength:2}}
        required/>
            
        
    )
}
export default PasswordField