import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Login } from '../dialogs/Login.js';

export function Nav({ state }) {
    const theme = useTheme();
    const { t, i18n } = useTranslation();
    const [anchorElementNav, setAnchorElementNav] = React.useState(null);
    const [anchorElementUser, setAnchorElementUser] = React.useState(null);
    const routerNavigate = useNavigate();

    const answers = state.answers();
    const isLoggedIn = answers.isLoggedIn;

    const userMenu = [
        {
            text: 'Profile',
            link: '/profile'
        },
        {
            text: 'Logout',
            link: '/logout'
        }
    ];

    const disabled = [];
    const pages = ['/page'].map((link, index) => {
        return {
            text: t('nav.items')[index],
            link,
            disabled: disabled[index] ?? false
        };
    });

    const enablePage = index => {
        disabled[index] = false;
    };
    const disablePage = index => {
        disabled[index] = true;
    };

    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const openLoginDialog = () => {
        setLoginDialogOpen(true);
    };
    const closeLoginDialog = () => {
        setLoginDialogOpen(false);
    };

    const handleStageSelection = event => {
        routerNavigate(event.currentTarget.name);
    };
    const handleOpenNavMenu = event => {
        setAnchorElementNav(event.currentTarget);
    };
    const handleOpenUserMenu = event => {
        setAnchorElementUser(event.currentTarget);
    };
    const handleCloseNavMenu = event => {
        setAnchorElementNav(null);
    };

    // The icon menu handler, when clicked
    //
    const handleCloseUserMenu = event => {
        event.preventDefault();
        const target = event.currentTarget?.attributes?.name?.value?.toLowerCase();
        switch (target) {
            case 'logout': {
                state.logOut();
                break;
            }
            case 'login': {
                openLoginDialog();
                break;
            }
            default: {
                // This is fine; typically the menu has been closed without a selection.
                break;
            }
        }
        setAnchorElementUser(null);
    };

    const logIn = () => {
        openLoginDialog();
    };

    return (
        <AppBar enableColorOnDark>
            <Login open={loginDialogOpen} handleClose={closeLoginDialog} state={state} />
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: theme.palette.text.secondary,
                                textDecoration: 'none'
                            }}>
                            HOME
                        </Typography>
                    </Link>
                    {isLoggedIn ? (
                        <React.Fragment>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit">
                                    <MenuIcon />
                                </IconButton>
                                {/* Mobile nav items */}
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElementNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left'
                                    }}
                                    open={Boolean(anchorElementNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' }
                                    }}>
                                    {/*Draw the hamburger menu (triggerd on mobile view)*/}
                                    {pages.map((data, index) => (
                                        <MenuItem
                                            key={data.text}
                                            onClick={handleCloseNavMenu}
                                            disabled={pages[index].disabled}>
                                            <Link to={data.link}>
                                                <Typography variant="body2" color="text.secondary">
                                                    {index + 1}. {data.text}
                                                </Typography>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            {/* Full-screen Nav items */}
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((data, index) => (
                                    <Button
                                        key={data.text}
                                        name={data.link}
                                        color="text.primary"
                                        variant="body2"
                                        onClick={handleStageSelection}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                        disabled={pages[index].disabled}>
                                        {data.text}
                                    </Button>
                                ))}
                            </Box>
                        </React.Fragment>
                    ) : (
                        ''
                    )}

                    {/* User Icon/Menu */}
                    {isLoggedIn ? (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="User Avatar" src="/images/avatar.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElementUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                open={Boolean(anchorElementUser)}
                                onClose={handleCloseUserMenu}>
                                {/*User menu construction*/}
                                {userMenu.map(data => (
                                    <MenuItem key={data.text} name={data.text} onClick={handleCloseUserMenu}>
                                        <Typography variant="body2" color="text.secondary">
                                            {data.text}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    ) : (
                        // When not logged in Nav provies login button and message
                        <Box>
                            {t('nav.loginHeadline')}
                            <Button color="text.primary" variant="body2" onClick={logIn}>
                                {t('form.button.logIn')}
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
