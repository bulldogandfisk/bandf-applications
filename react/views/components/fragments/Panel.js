import React from 'react';
import { Paper } from '@mui/material';

export const Panel = ({ sx = {}, children }) => {
    const sxSettings = {
        ...sx,

        padding: 3,
        borderRadius: 2,
        marginBottom: 3
    };

    return (
        <Paper elevation={2} sx={sxSettings}>
            {children}
        </Paper>
    );
};
