import React, { Component, useState } from 'react';
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormGroup, FormHelperText, IconButton, InputAdornment, TextField } from '@mui/material';
import { Link, withRouter } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState();

    const handleSubmit = (e) => {
        console.log(email + " " + password);
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="auth-background">
            <div className="auth-wrapper">
                <div className='auth-card'>
                    <div className='auth-card__title'>Login</div>
                    <FormGroup>
                        <Box className='auth-card--box'>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField
                                className="auth-card--box__input"
                                label="Email"
                                variant="standard"
                                type="text"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Box>
                    </FormGroup>
                    <FormGroup>
                        <Box className='auth-card--box'>
                            <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField
                                className="auth-card--box__input"
                                label="Password"
                                variant="standard"
                                type={showPassword ? 'text' : 'password'}
                                onChange={e => setPassword(e.target.value) }
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Box>
                        <div className='auth-card__forgotpw'>
                            <Button variant="text" size="small">Forgot Password?</Button>
                        </div>
                    </FormGroup>
                    <FormGroup className="text-center">
                        <Button className='auth-card__authbtn' variant="contained" onClick={() => handleSubmit()}>Login</Button>
                    </FormGroup>
                    <small className="auth-card__subtitle">You don't have an account? <b className='register-btn'>Register</b></small>
                </div>
            </div>
        </div>
    );
}
export default Login