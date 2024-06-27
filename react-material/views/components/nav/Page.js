import React, { useState } from 'react';
import { Button, Dialog, CardMedia } from '@mui/material';

export const Page = ({ imageUrl }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Open Fullscreen Image
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="fullscreen-image-dialog"
            >
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt="Fullscreen Image"
                    style={{ height: '100%', width: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                />
            </Dialog>
        </div>
    );
};
