import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    Button,
    TextField,
    Grid,
    Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export const Login = ({ state, open, handleClose }) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const answers = state.answers();

    const { apiBase } = state.session(store => store);

    const onChange = event => {
        const target = event.target;
        state.storeAnswers({
            [target.name]: target.value
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        const response = await fetch(`${apiBase}/login`, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: answers.email,
                password: answers.password
            })
        });

        const { errors, data } = await response.json();

        if (errors) {
            throw new Error(errors.message || 'Login Error');
        }

        state.logIn();
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="xl">
            <DialogTitle>{t('dialog.logIn').title}</DialogTitle>
            <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
                <DialogContent>
                    <Typography
                        variant="h7"
                        gutterBottom
                        sx={{
                            color: theme.palette.text.primary
                        }}>
                        {t('dialog.logIn').text}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                {...t('form.account.email')}
                                name="email"
                                type="email"
                                fullWidth
                                variant="filled"
                                onChange={onChange}
                                autoComplete="off"
                                value={answers.email}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                {...t('form.account.password')}
                                name="password"
                                type="password"
                                fullWidth
                                variant="filled"
                                onChange={onChange}
                                autoComplete="off"
                                value={answers.password}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        {t('form.button.cancel')}
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        {t('form.button.logIn')}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};
