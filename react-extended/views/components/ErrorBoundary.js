import React from 'react';
import { Errored } from './Errored.js';

const deployedStage = process.env.DEPLOYED_STAGE;
const isDeployed = process.env.DEPLOY_BUILD === 'true';

export class ErrorBoundary extends React.Component {
    constructor(properties) {
        super(properties);

        this.state = {
            hasError: false,
            context: properties.context
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        //
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        this.setState({ error: error.message });
        const context = this.state.context();

        // Only log errors when not deployed to prod
        //
        if (isDeployed || deployedStage === 'dev') {
            console.log(error, info.componentStack);
        }

        fetch('http://localhost:3000/dev/mail/support', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                context: {
                    ...context,
                    clientError: JSON.stringify(error.stack, Object.getOwnPropertyNames(error.stack)),
                    componentStack: JSON.stringify(info.componentStack, Object.getOwnPropertyNames(info.componentStack))
                }
            })
        }).then(response => {
            if(response.errors) {
                throw new Error(response.errors.message || `Support email: fetch error, unable to send.`);
            }
        });
    }

    render() {
        if (this.state.hasError) {
            return <Errored error={this.state.error} />;
        }
        return this.props.children;
    }
}
