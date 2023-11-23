import React, { useState } from 'react';
import { Container, Box, Grid, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { TermsConditions } from './legal/TermsConditions.js';

export const Footer = ({ state }) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(false);
    const { i18nLanguages } = state.data(store => store);

    const handleClose = () => {
        setOpen(false);
    };

    const termsAndConditions = event => {
        setOpen(true);
    };

    const updateLanguage = event => {
        const languageCode = event.target.attributes.name.value;
        i18n.changeLanguage(languageCode);
    };

    return (
        <Box
            sx={{
                backgroundColor: '#000',
                color: 'white'
            }}>
            <TermsConditions open={open} close={handleClose} />
            <Container>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Typography variant="h6" component="div" gutterBottom>
                                {t('footer.header.legal')}
                            </Typography>
                            <ul
                                style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    cursor: 'pointer'
                                }}>
                                <li>
                                    <Link onClick={termsAndConditions}>{t('footer.text.termsConditions')}</Link>
                                </li>
                                <li>
                                    <Link onClick={termsAndConditions}>{t('footer.text.privacyPolicy')}</Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Typography variant="h6" component="div" gutterBottom>
                                {t('footer.header.translate')}
                            </Typography>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {i18nLanguages.map(([name, code]) => (
                                    <li key={code}>
                                        <Typography
                                            component="div"
                                            name={code}
                                            onClick={updateLanguage}
                                            sx={{
                                                cursor: 'pointer'
                                            }}>
                                            {name}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Typography variant="h6" component="div" gutterBottom>
                                {t('footer.header.help')}
                            </Typography>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>
                                    <Link href="mailto:contact@bulldogandfisk.com">contact@bulldogandfisk.com</Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
