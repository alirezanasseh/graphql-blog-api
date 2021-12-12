import {Application} from 'express';
import expressLoader from './express.loader';
import mongooseLoader from './mongoose.loader';

export default async ({expressApp}: {expressApp: Application}) => {
    try {
        const server = await expressLoader({app: expressApp});
        await mongooseLoader();

        return server;
    } catch (e) {
        console.log(e);
        throw e;
    }
};