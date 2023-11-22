import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Grid, Button, Typography, TextField, Snackbar, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { SignupForm } from '../fragments/SignupForm.js';
import { ConfirmCode } from '../dialogs/ConfirmCode.js';
import { ForgotPassword } from '../dialogs/ForgotPassword.js';

// This will be set to the confirmation code sent by server
//
let confirmedCode;

export const Start = ({ state }) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();
    const routerNavigate = useNavigate();
    const answers = state.answers();

    const { apiBase } = state.session(store => store);

    const [accountCreationStatus, setAccountCreationStatus] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
        setAccountCreationStatus(null);
    };

    useEffect(() => {
        if (accountCreationStatus !== null) {
            setSnackbarOpen(true);
        }
    }, [accountCreationStatus]);

    const [codeDialogOpen, setCodeDialogOpen] = useState(false);
    const openCodeDialog = code => {
        confirmedCode = String(code);
        setCodeDialogOpen(true);
    };
    const closeCodeDialog = success => {
        setCodeDialogOpen(false);
        if (success) {
            routerNavigate('/page');
        }
    };
    const checkCode = candidate => {
        if (candidate === confirmedCode) {
            return true;
        }
    };

    const [forgotDialogOpen, setForgotDialogOpen] = useState(false);
    const openForgotDialog = () => {
        setForgotDialogOpen(true);
    };
    const closeForgotDialog = () => {
        setForgotDialogOpen(false);
    };

    const handleSubmit = event => {
        event.preventDefault();
        state.storeAnswers(answers);

        fetch(`${apiBase}/mail/code`, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${answers.firstName} ${answers.lastName}`,
                email: answers.email
            })
        }).then(async response => {
            if (response.errors) {
                throw new Error(response.errors.message || 'Confirmation code fetch error');
            }
            const codeData = await response.json();
            openCodeDialog(codeData.code);
        });
    };

    return (
        <Container sx={{ minHeight: '80vh' }}>
            <ConfirmCode open={codeDialogOpen} handleClose={closeCodeDialog} checkCode={checkCode} state={state} />
            <ForgotPassword open={forgotDialogOpen} handleClose={closeForgotDialog} state={state} />
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={12}>
                    <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
                        <Grid>
                            <Typography
                                gutterBottom
                                sx={{
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    color: theme.palette.text.primary
                                }}>
                                {t('login.getStarted')}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'black'
                                }}>
                                {/*The form fields...*/}
                                <SignupForm state={state} />
                            </Box>
                        </Grid>
                        <Box mt={2}>
                            <Button type="submit" variant="contained" color="primary">
                                {t('form.button.signUp')}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            {accountCreationStatus && (
                <Snackbar
                    open={snackbarOpen}
                    onClose={handleSnackbarClose}
                    autoHideDuration={10_000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Alert
                        severity={accountCreationStatus === 'succeeded' ? 'success' : 'error'}
                        onClose={handleSnackbarClose}>
                        {accountCreationStatus === 'succeeded'
                            ? 'Account Created'
                            : accountCreationStatus === null
                              ? ''
                              : accountCreationStatus}
                    </Alert>
                </Snackbar>
            )}
        </Container>
    );
};
