import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { create } from 'zustand';
import { produce } from 'immer';
import { State } from './state/index.js';
import { builder } from './state/theme.js';
import { Router } from './components/Router.js';
import { ErrorBoundary } from './components/ErrorBoundary.js';

const { origin, pathname, search } = window.location;

// When the compiler runs it will interpolate these environment variables. At runtime (rendered on
// client) these are resolved as string values.
//
const localDomain = process.env.LOCAL_DOMAIN;
const isDeployed = process.env.DEPLOY_BUILD === 'true';
const deployedStage = process.env.DEPLOYED_STAGE;
const deployedEnvironment = process.env.NODE_ENV;
const localApiKey = process.env.LOCAL_SERVER_API_KEY;
const basename = `${deployedStage}/view/index`;
const apiBase = isDeployed ? `${origin}/${deployedStage}` : `${localDomain}/${deployedStage}`;

// When running the local development server (localhost:3001/) there is no subpath (eg /view/index).
// When deployed that path exists. Keep local paths/environment consistent.
//
if (pathname === '/') {
    window.location.replace(`${origin}/${basename}`);
}

const state = State();

export const App = ({}) => {
    const { t, i18n } = useTranslation();

    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);

    // The interface to getting/setting form answers.
    // #answers is a hook value, and is used to provide controlled components in forms.
    // Note we send an immutable copy when requested.
    //
    const [answers, setAnswers] = useState(() =>
        state.subscribe(updates => {
            setAnswers({ ...answers, ...updates });
        })
    );

    state.answers = () => produce(answers, draft => draft);

    // Used by ErrorBoundary, see below. Essentially, place into #context any information, data, etc that an
    // error handler might use to inform a human of what happened -- e.g. current user profile, internal state...
    //
    const getContext = () => {
        const context = {
            one: 'two',
            buckle: 'my shoe'
        };
        return produce(context, draft => draft);
    };

    useEffect(() => {
        const load = async () => {
            const headers = {
                'Content-Type': 'application/json'
            };

            state.storeAnswers({
                a: 1,
                b: 2
            });

            const serverState = await fetch(`${apiBase}/state`, {
                headers
            }).then(response => response.json());

            state.session = create((set, get) => ({
                token: 'abcdefg',
                origin,
                localDomain,
                isDeployed,
                deployedStage,
                basename,
                apiBase,
                stripe: () => {},
                identity: () => {}
            }));

            state.data = create((set, get) => ({
                i18nLanguages: [
                    ['English', 'en'],
                    ['Chinese', 'zh'],
                    ['Russian', 'ru'],
                    ['French', 'fr'],
                    ['Italian', 'it'],
                    ['Spanish', 'es'],
                    ['Portuguese', 'pt'],
                    ['Hindi', 'hi'],
                    ['German', 'de']
                ]
            }));

            state.logIn = () => {
                state.storeAnswers({
                    isLoggedIn: true
                });
            };
            state.logOut = () => {
                state.storeAnswers({
                    isLoggedIn: false
                });
            };

            setLoaded(true);
        };

        // Should only run once
        //
        !state.session && load();
    }, [loaded, errored]);

    // #loaded is passed on to Router, which will not start(render) until #loaded === true
    //
    return (
        <ThemeProvider theme={builder()}>
            <CssBaseline />
            <ErrorBoundary context={getContext}>
                <BrowserRouter basename={basename}>
                    <Router state={state} loaded={loaded} errored={errored} />
                </BrowserRouter>
            </ErrorBoundary>
        </ThemeProvider>
    );
};
