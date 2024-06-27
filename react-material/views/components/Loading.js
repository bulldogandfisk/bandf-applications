import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Dialog, DialogContent, Typography, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Loading = () => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    return (
        <Dialog open={true} fullScreen>
            <DialogContent
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.primary.main,
                    minHeight: '100vh'
                }}>
                <Typography
                    sx={{
                        fontSize: '4rem',
                        fontWeight: 'bold',
                        color: 'white'
                    }}>
                    Hello!
                </Typography>
                <Typography
                    sx={{
                        fontSize: '2rem',
                        color: 'white',
                        marginBottom: '2rem'
                    }}>
                    We'll be right with you
                </Typography>
                <CircularProgress color="secondary" />
            </DialogContent>
        </Dialog>
    );
};
