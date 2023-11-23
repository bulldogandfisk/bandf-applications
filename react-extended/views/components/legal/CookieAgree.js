import React, { useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { TermsConditions } from './TermsConditions.js';

export const CookieAgree = () => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const [cookies, setCookies] = useState({ accepted: false });
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const clickedAgree = event => {
        setCookies(() => ({ accepted: true }));
    };

    const termsAndConditions = event => {
        setOpen(true);
    };

    if (cookies.accepted === true) {
        return <></>;
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: theme.spacing(1)
            }}>
            <TermsConditions open={open} close={handleClose} />
            <Container>
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                    <Typography>{t('cookie.agree')}</Typography>
                    <Box>
                        <Button variant="contained" color="primary" onClick={termsAndConditions} sx={{ mr: 1 }}>
                            {t('form.button.learnMore')}
                        </Button>
                        <Button variant="contained" color="primary" onClick={clickedAgree}>
                            {t('form.button.accept')}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
