import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Box, Button, TextField, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { SignupForm } from '../fragments/SignupForm.js';

export const CreateAccount = ({ state, open, handleClose, handleSubmit }) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{t('login.getStarted')}</DialogTitle>
            <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
                <DialogContent>
                    <SignupForm state={state} />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        {t('form.button.cancel')}
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        {t('form.button.signUp')}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};
