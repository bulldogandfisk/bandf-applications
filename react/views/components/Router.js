import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { Footer } from './Footer.js';
import { CookieAgree } from './legal/CookieAgree.js';
import { Loading } from './Loading.js';
import { Errored } from './Errored.js';
import { Nav } from './nav/Nav.js';
import { Start } from './nav/Start.js';
import { Page } from './nav/Page.js';

export function Router({ state, loaded, errored }) {
    if (errored) {
        return <Errored error={errored} />;
    }

    if (!loaded) {
        return <Loading />;
    }

    return (
        <Routes>
            <Route path="/" element={<Layout state={state} />}>
                <Route index element={<Start state={state} />} />
                <Route path="/page" element={<Page state={state} />} />

                {/*fall-through*/}
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

function Layout({ state }) {
    return (
        <React.Fragment>
            <Nav state={state} />
            <Container
                sx={{
                    paddingTop: '78px',
                    minHeight: '80vh'
                }}>
                {/* <Outlet> is the render target for router links */}
                <Outlet />
            </Container>
            <Footer state={state} />
            <CookieAgree />
        </React.Fragment>
    );
}
