import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export const TermsConditions = ({ open, close }) => {
    const theme = useTheme();

    return (
        <Modal
            open={open}
            onClose={close}
            onClick={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ overflow: 'scroll' }}>
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    background: theme.palette.background.default
                }}>
                <Typography variant="h6" component="h2" color="theme.palette.text.primary">
                    <div>Terms and conditions</div>
                    <p>
                        Maecenas sed justo quis nunc viverra facilisis. Sed dui urna, varius non risus ut, maximus
                        convallis velit. Mauris tincidunt augue ut porttitor pretium. Pellentesque rhoncus eu magna vel
                        mollis. Suspendisse sollicitudin iaculis sem et dapibus. Mauris sodales placerat mi in sodales.
                        Nam dictum non arcu non dapibus. Sed tincidunt efficitur orci placerat fermentum. Praesent
                        mattis consequat euismod.
                    </p>
                    <p>
                        Maecenas sed justo quis nunc viverra facilisis. Sed dui urna, varius non risus ut, maximus
                        convallis velit. Mauris tincidunt augue ut porttitor pretium. Pellentesque rhoncus eu magna vel
                        mollis. Suspendisse sollicitudin iaculis sem et dapibus. Mauris sodales placerat mi in sodales.
                        Nam dictum non arcu non dapibus. Sed tincidunt efficitur orci placerat fermentum. Praesent
                        mattis consequat euismod.
                    </p>
                    <p>
                        Maecenas sed justo quis nunc viverra facilisis. Sed dui urna, varius non risus ut, maximus
                        convallis velit. Mauris tincidunt augue ut porttitor pretium. Pellentesque rhoncus eu magna vel
                        mollis. Suspendisse sollicitudin iaculis sem et dapibus. Mauris sodales placerat mi in sodales.
                        Nam dictum non arcu non dapibus. Sed tincidunt efficitur orci placerat fermentum. Praesent
                        mattis consequat euismod.
                    </p>
                    <p>
                        Maecenas sed justo quis nunc viverra facilisis. Sed dui urna, varius non risus ut, maximus
                        convallis velit. Mauris tincidunt augue ut porttitor pretium. Pellentesque rhoncus eu magna vel
                        mollis. Suspendisse sollicitudin iaculis sem et dapibus. Mauris sodales placerat mi in sodales.
                        Nam dictum non arcu non dapibus. Sed tincidunt efficitur orci placerat fermentum. Praesent
                        mattis consequat euismod.
                    </p>
                    <p>
                        Maecenas sed justo quis nunc viverra facilisis. Sed dui urna, varius non risus ut, maximus
                        convallis velit. Mauris tincidunt augue ut porttitor pretium. Pellentesque rhoncus eu magna vel
                        mollis. Suspendisse sollicitudin iaculis sem et dapibus. Mauris sodales placerat mi in sodales.
                        Nam dictum non arcu non dapibus. Sed tincidunt efficitur orci placerat fermentum. Praesent
                        mattis consequat euismod.
                    </p>
                    <p>
                        Maecenas sed justo quis nunc viverra facilisis. Sed dui urna, varius non risus ut, maximus
                        convallis velit. Mauris tincidunt augue ut porttitor pretium. Pellentesque rhoncus eu magna vel
                        mollis. Suspendisse sollicitudin iaculis sem et dapibus. Mauris sodales placerat mi in sodales.
                        Nam dictum non arcu non dapibus. Sed tincidunt efficitur orci placerat fermentum. Praesent
                        mattis consequat euismod.
                    </p>
                    <p>
                        Maecenas sed justo quis nunc viverra facilisis. Sed dui urna, varius non risus ut, maximus
                        convallis velit. Mauris tincidunt augue ut porttitor pretium. Pellentesque rhoncus eu magna vel
                        mollis. Suspendisse sollicitudin iaculis sem et dapibus. Mauris sodales placerat mi in sodales.
                        Nam dictum non arcu non dapibus. Sed tincidunt efficitur orci placerat fermentum. Praesent
                        mattis consequat euismod.
                    </p>
                    <p>
                        Maecenas sed justo quis nunc viverra facilisis. Sed dui urna, varius non risus ut, maximus
                        convallis velit. Mauris tincidunt augue ut porttitor pretium. Pellentesque rhoncus eu magna vel
                        mollis. Suspendisse sollicitudin iaculis sem et dapibus. Mauris sodales placerat mi in sodales.
                        Nam dictum non arcu non dapibus. Sed tincidunt efficitur orci placerat fermentum. Praesent
                        mattis consequat euismod.
                    </p>
                    <p>
                        Maecenas sed justo quis nunc viverra facilisis. Sed dui urna, varius non risus ut, maximus
                        convallis velit. Mauris tincidunt augue ut porttitor pretium. Pellentesque rhoncus eu magna vel
                        mollis. Suspendisse sollicitudin iaculis sem et dapibus. Mauris sodales placerat mi in sodales.
                        Nam dictum non arcu non dapibus. Sed tincidunt efficitur orci placerat fermentum. Praesent
                        mattis consequat euismod.
                    </p>
                    <p>
                        Maecenas sed justo quis nunc viverra facilisis. Sed dui urna, varius non risus ut, maximus
                        convallis velit. Mauris tincidunt augue ut porttitor pretium. Pellentesque rhoncus eu magna vel
                        mollis. Suspendisse sollicitudin iaculis sem et dapibus. Mauris sodales placerat mi in sodales.
                        Nam dictum non arcu non dapibus. Sed tincidunt efficitur orci placerat fermentum. Praesent
                        mattis consequat euismod.
                    </p>
                </Typography>
            </Box>
        </Modal>
    );
};
