import { randomString, createJwtVerifier } from './assets/utils.js';

let verify;

export default async context => {
    // const {
    //     headers: { authorization: jwt },
    //     State: { config, Services }
    // } = context;
    //
    const jwt = context.headers?.authorization?.jwt;
    const config = context.config;
    const Services = context.Services;

    // Cached
    //
    verify =
        verify ??
        createJwtVerifier({
            key: async () => process.env.JWT_SIGNING_KEY
        });

    // 1. Check if this is a registered user. Send #nonce if not found.
    // 2. Verify jwt packet validity. Send #nonce if not valid.
    // 3. If everything checks out do not send #nonce, indicating that jwt is valid and active.
    //
    // const User = await Services.get('db/sql/get')({ database: 'user' });


    // const userProfiles = User.Profiles;
    // const userRecord = await userProfiles.findOne({
    //     where: {
    //         activeJwt: jwt
    //     }
    // });

    const userRecord = {};

    if(userRecord === null) {
        return nonceResponse();
    }

    try {
        await verify(jwt);
    } catch {
        return nonceResponse();
    }

    return {
        200: {

        }
    };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function nonceResponse() {
    return {
        200: {
            nonce: 'Sign this login request: ' + randomString()
        }
    };
}
