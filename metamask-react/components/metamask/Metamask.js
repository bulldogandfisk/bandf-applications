import React, { useEffect, useRef, useCallback } from 'react';
import {detectEthereumProvider} from './detect-provider.min.js';
import './Metamask.css';

export const Metamask = (props) => {
    let state = {
        isLoggedIn: false
    };

    const fetchJwtAndLogIn = async (userid, password) => {
        try {
            const fetchKey = 'bandf-fetch-config';
            const jwtKey = 'bandf-jwt';
            let jwt = localStorage.getItem(jwtKey) || undefined;

            const fetchConfig = {
                'cache': 'no-store', // These are internal "function calls" and should never be cached
                redirect: 'follow',
                referrerPolicy: 'no-referrer'
            };

            const headers = {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            };

            // Is store jwt still valid?
            // Note that it's ok if there is no jwt at all, still leads to "login again" flow w/ nonce.
            //
            const tokenState = await fetch(`http://localhost:3000/dev/token/check`, {
                headers: {
                    ...headers,
                    'Authorization': jwt
                },
                ...fetchConfig,
                method: 'GET'
            }).then(response => response.json()).then(json => json);

            // #nonce is set if jwt is NOT valid.
            //
            const nonce = (await tokenState).nonce;

            // Need a new #jwt.
            // Use #nonce to get a personal_sign and ask for a new #jwt issue.
            //
            if (nonce) {
                const callBody = {
                    userid,
                    password
                };

                // Sign this request to login using this user's MM public address
                // https://docs.metamask.io/guide/signing-data.html#signing-data-with-metamask
                //
                callBody.password = await ethereum.request({
                    method: 'personal_sign',
                    params: [nonce, await getSelectedAddress()]
                }).catch(error => {
                    // Signing error, such as canceling signing. Warn about this.
                    //
                    if (error.code === 4001) {
                        throw new Error(`You must sign this Metamask request to log in`);
                    }
                    throw error;
                });

                callBody.nonce = nonce;

                const reply = await fetch(`http://localhost:3000/dev/token/issue`, {
                    headers: {
                        ...headers,
                        'x-error-message': 'Invalid login credentials'
                    },
                    ...fetchConfig,
                    method: 'POST',
                    body: JSON.stringify(callBody)
                }).then(response => response.json()).catch(error => {
                    throw error
                });

                if (reply.error) {
                    throw new Error(reply.error);
                }

                jwt = reply.jwt;
                localStorage.setItem(jwtKey, jwt);

                headers['Authorization'] = `Bearer: ${jwt}`;

                localStorage.setItem(fetchKey, JSON.stringify({
                    headers,
                    ...fetchConfig
                }));
            }

            state = {
                ...state,
                isLoggedIn: true,
                jwt
            };

        } catch (error) {
            console.log(error);
        }
    }

    const getSelectedAddress = async () => (await ethereum.request({ method: 'eth_accounts' }))[0];

    const login = async event => {

        if(state.isLoggedIn) {
            console.log('Already logged in');
            return;
        }

        // #accounts is an array of addresses.
        // #selectedAddress shortcut to selected address.
        //
        await ethereum.request({method: 'eth_requestAccounts'})
        .then(async accounts => {
            state = {
                ...state,
                isLoggedIn: false
            };
            await fetchJwtAndLogIn(await getSelectedAddress());
        })
        .catch(error => {
            // error.code === 4001 > EIP-1193 userRejectedRequest error
            //
            console.error(error);
        });
    }

    const connectEvents = useCallback(() => {

        if (window.ethereum) {
            detectEthereumProvider()
            .then(provider => {
                state.provider = provider;
                state.signer = provider.getSigner();
            }).catch(error => {
                state.error = error.message;
            });
        }

        // Triggered when account is changed in MM
        //
        ethereum.on('accountsChanged', async accounts => {
            if (!accounts || !accounts.length) {
                console.log(`Logged out of MetaMask`);

                // Wipe everything when we "log out" of Metamask
                //
                localStorage.clear();

                state = {
                    ...state,
                    isLoggedIn: false
                };
            }
        });

        ethereum.on('connect', async struct => {
            console.log(`Metamask[connected]`);
        });

        // Triggered when MM is disconnected from chain
        //
        ethereum.on('disconnect', async struct => {
            console.log(`Metamask[disconnected]`);
        });

        ethereum.autoRefreshOnNetworkChange = false;

    }, []);

    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        connectEvents();
    }, []);

    return (
        <div>
            {state.error ? (<div>Error</div>)
                : !state.isLoggedIn ? (
                    <button className="metamask-login" onClick={event => login(event)}>Sign in using MetaMask</button>
                )
                : (<div>{props.children}</div>)}
        </div>);
}
