import React, { useState } from 'react';
import { Container, Box } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export const Page = ({ state }) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();
    const routerNavigate = useNavigate();

    const answers = state.answers();

    return (
        <Container sx={{ minHeight: '80vh' }}>
            <Box>A page</Box>
        </Container>
    );
};
