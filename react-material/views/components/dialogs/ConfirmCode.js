import React, { useState, createRef } from 'react';
import {
    Typography,
    Paper,
    TextField,
    Button,
    Box,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';

export const ConfirmCode = ({ state, open, handleClose, checkCode }) => {
    const [digits, setDigits] = useState(Array.from({ length: 6 }).fill(''));
    const [errorMessage, setErrorMessage] = useState('');

    // Create an array of refs
    //
    const inputReferences = Array.from({ length: 6 }, () => createRef());

    const handleChange = (index, event) => {
        // Get the last digit
        //
        const value = event.target.value.slice(-1);

        // Only accept digits
        //
        if(/^\d$/.test(value) || value === '') {
            const codeDigits = [...digits];
            codeDigits[index] = value;
            setDigits(codeDigits);
            setErrorMessage('');

            // If a digit is entered and there is a next input, focus it
            //
            if(value && index < inputReferences.length - 1) {
                inputReferences[index + 1].current.focus();
            } else {
                const enteredCode = codeDigits.join('');
                if(checkCode(enteredCode)) {
                    handleClose(true);
                } else {
                    setErrorMessage('Incorrect key. Please try again.');
                }
            }
        }
    };

    const handleKeyDown = (index, event) => {
        if(event.key === 'Backspace' && digits[index] === '' && index > 0) {
            inputReferences[index - 1].current.focus();
        }
    };

    const handleResend = () => {};

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <DialogTitle>Enter your six-digit confirmation code</DialogTitle>
                <Box
                    sx={{
                        height: '140px'
                    }}>
                    <Grid container justifyContent="center" spacing={1}>
                        {digits.map((digit, index) => (
                            <Grid item key={index}>
                                <Paper
                                    sx={{
                                        width: 60,
                                        height: 100,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <TextField
                                        inputProps={{ maxLength: 1 }}
                                        sx={{
                                            fontSize: '3rem',
                                            width: '100%',
                                            textAlign: 'center'
                                        }}
                                        value={digit}
                                        onChange={event => handleChange(index, event)}
                                        onKeyDown={event => handleKeyDown(index, event)}
                                        inputRef={inputReferences[index]} // Assign the ref to the input
                                    />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    {/*<Box mt={2} textAlign="center">*/}
                    {/*    <Button variant="contained" color="primary" onClick={handleSubmit}>*/}
                    {/*        Submit*/}
                    {/*    </Button>*/}
                    {/*</Box>*/}
                    {errorMessage && (
                        <Box mt={2} textAlign="center">
                            <Typography color="error">{errorMessage}</Typography>
                        </Box>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={handleResend}>
                    Re-send code
                </Button>
            </DialogActions>
        </Dialog>
    );
};
