import React from 'react';
import { create } from 'zustand';
import { Metamask } from './components/metamask/Metamask.js';

const store = createStore();

export const App = () => {
    return <Metamask store={store} />;
};

function createStore() {
    // When the compiler runs it will interpolate process.env values. At runtime (rendered on
    // client) these are resolved as numbers if numeric, otherwise string values.
    //
    const { origin, pathname, search } = window.location;
    const isDeployed = process.env.DEPLOY_BUILD === 'true';
    const deployedStage = process.env.DEPLOYED_STAGE;
    const port = process.env.DEPLOYED_PORT;
    const deployedEnvironment = process.env.NODE_ENV;
    const localApiKey = process.env.LOCAL_SERVER_API_KEY;

    return create(set => ({
        origin,
        pathname,
        search,
        isDeployed,
        deployedStage,
        port,
        deployedEnvironment,
        localApiKey,
        basename: `${deployedStage}/view/index`,
        apiBase: () => (isDeployed ? `${origin}/${deployedStage}` : `http://localhost:${port}/${deployedStage}`),

        isLoggedIn: false
    }));
}
