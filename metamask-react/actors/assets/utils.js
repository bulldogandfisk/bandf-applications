import { randomBytes, createHash, scrypt, timingSafeEqual } from 'node:crypto';
import { ethers } from 'ethers';

const randomString = (size = 32) => {
    return randomBytes(size).toString('base64').slice(0, size);
};

// Typically receive a #salt, but note default.
//
const scryptEncode = async (text, salt = randomBytes(16).toString('hex')) =>
    new Promise((resolve, reject) => {
        scrypt(text, salt, 64, (error, derivedKey) => {
            if(error) {
                return reject(error);
            }
            resolve(`${salt}:${derivedKey.toString('hex')}`);
        });
    });

// Whether two hashes generated from #scryptEncode match.
// Candidates should have the hash shape returned from #scryptEncode <salt>:<key>, noting colon.
//
const scryptMatch = (first, second) => {
    return timingSafeEqual(Buffer.from(first), Buffer.from(second));
};

const hash = (text, algorithm = 'sha256') => {
    const base = createHash(algorithm);
    return base.update(text).digest('hex');
};

const recoverMetamaskSignature = (data, signature) => {
    return ethers.verifyMessage(data, signature);
};

export {
    randomString,
    scryptEncode,
    scryptMatch,
    hash,
    recoverMetamaskSignature
};

export {
    createSigner as createJwtSigner,
    createVerifier as createJwtVerifier
} from 'fast-jwt';
