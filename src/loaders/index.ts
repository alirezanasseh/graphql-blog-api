import {Application} from 'express';
import expressLoader from './express.loader';
import typeORMLoader from "./typeorm.loader";

export default async ({expressApp}: {expressApp: Application}) => {
    try {
        await typeORMLoader();
        return await expressLoader({app: expressApp});
    } catch (e) {
        console.log(e);
        throw e;
    }
};