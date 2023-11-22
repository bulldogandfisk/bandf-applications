import {
    randomString,
    scryptEncode,
    scryptMatch,
    hash,
    recoverMetamaskSignature,
    createJwtSigner
} from './assets/utils.js';


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Provide a JWT access token to clients sending a valid user/pass or wallet address.
//
export default async ({ payload, STDLIB, Event, Context, Services, Channels }) => {

    const message = payload.message;

    console.log("???", message);

    // Public Ethereum address OR email address
    //
    const userId = message.userid;
    const isWallet = /^0x[\dA-Fa-f]{40}$/.test(userId);

    // If email login, this is a login password; if metamask, this is a MM-signed message
    //
    const password = message.password;

    // Only metamask logins send #nonce
    //
    const nonce = message.nonce;

    //const User = await Services.get('db/sql/get')({ database: 'user' });
    //const userProfiles = User.Profiles;
    const userIdHash = await hash(userId);

    // let userRecord = await userProfiles.findOne({
    //     where: {
    //         sub: userIdHash
    //     }
    // });

    let userRecord = {};

    // Does the address 'in' the signature match the public address?
    //
    if(isWallet) {
        const recoveredAddress = recoverMetamaskSignature(nonce, password);
        // Ethereum addresses are case insensitive and may be sent with uppercase letters).
        //
        if(recoveredAddress.toLowerCase() !== userId.toLowerCase()) {
            // TODO this comparison needs a private member
            return {
                type: 'application/json',
                200: {
                    error: 'Invalid signature'
                }
            };
        }
    }

    // Jwt. Note the #jti is also stored in db as #lastJti
    //
    const jti = randomString();
    const signer = createJwtSigner({
        sub: userIdHash,
        key: process.env.JWT_SIGNING_KEY,
        jti,
        algorithm: 'HS512'
    });

    const jwt = signer({
        b: 2,
        c: 3
    });

    // NOTE: #scryptEncode will generate salt itself
    // TODO: whitelist, verification of creation permissions, or similar.
    //
    if(userRecord === null) {
        const newAccount = {
            sub: userIdHash,
            isWallet,
            activeJwt: jwt,
            activeJti: jti,
            password: isWallet ? 'metamask' : await scryptEncode(password)
        };

        // Wallet users don't have an email
        //
        if(!isWallet) {
            newAccount.email = userId;
        }

        //userRecord = await userProfiles.create(newAccount);
    } else {
        // await userProfiles.update(
        //     {
        //         activeJwt: jwt
        //     },
        //     {
        //         where: {
        //             sub: userIdHash
        //         }
        //     }
        // );
    }

    // Email login. Verify password. This isn't relevant to metamask logins.
    //
    if(!isWallet) {
        const [salt] = userRecord.password.split(':');
        const loginPasswordHash = await scryptEncode(password, salt);
        if(!scryptMatch(loginPasswordHash, userRecord.password)) {
            return {
                type: 'application/json',
                200: {
                    error: 'Invalid email or password'
                }
            };
        }
    }

    return {
        type: 'application/json',
        200: {
            jwt
        }
    };
}
