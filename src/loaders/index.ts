import {Application} from 'express';
import expressLoader from './express.loader';

export default async ({expressApp}: {expressApp: Application}) => {
    try {
        const server = await expressLoader({app: expressApp});

        return server;
    } catch (e) {
        console.log(e);
        throw e;
    }
};