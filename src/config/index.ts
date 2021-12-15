import dotenv from 'dotenv';
import fs from 'fs';

process.env.NODE_ENV ??= 'development';

/** To create JWT key files run this command :
 * ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
 * Do not set passphrase
 */
const RSA_PRIVATE_KEY = fs.readFileSync(__dirname + '/../../jwtRS256.key');

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error('Could not find .env file!');
}

const config = {
    port: parseInt(process.env.PORT || '8000', 10),
    jwtSecret: RSA_PRIVATE_KEY,
    nodeEnv: process.env.NODE_ENV,
    origins: process.env.ORIGINS,
};

export default config;