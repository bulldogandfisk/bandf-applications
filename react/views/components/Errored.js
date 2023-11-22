import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Dialog, DialogContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Errored = ({ error }) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();
    const errors = t('load.errors');

    const errorMessage = error ? `${errors[2]} ${error}` : '';

    return (
        <Dialog open={true} fullScreen>
            <DialogContent
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.primary.main,
                    minHeight: '100vh'
                }}>
                <Typography
                    sx={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: 'white'
                    }}>
                    <dd>{errors[0]}</dd>
                    <dd>
                        {errors[1]} <a href="contact@bulldogandfisk.com">contact@bulldogandfisk.com</a>
                    </dd>
                    <dd>{errorMessage}</dd>
                    <dd>{errors[3]}</dd>
                    <dd>{errors[4]}</dd>
                </Typography>
            </DialogContent>
        </Dialog>
    );
};
