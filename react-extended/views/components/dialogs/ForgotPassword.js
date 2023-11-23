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

export const ForgotPassword = ({ state, open, handleClose }) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const answers = state.answers();

    const onChange = event => {
        const target = event.target;
        state.storeAnswers({
            [target.name]: target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{t('dialog.forgotPassword').title}</DialogTitle>
            <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
                <DialogContent>
                    <Typography
                        variant="h7"
                        gutterBottom
                        sx={{
                            color: theme.palette.text.primary
                        }}>
                        {t('dialog.forgotPassword').text}
                    </Typography>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            {...t('form.account.email')}
                            name="email"
                            type="email"
                            variant="filled"
                            onChange={onChange}
                            autoComplete="off"
                            value={answers.email}
                        />
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        {t('form.button.cancel')}
                    </Button>
                    <Button variant="contained" color="primary" type="submit">
                        {t('form.button.sendEmail')}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};
