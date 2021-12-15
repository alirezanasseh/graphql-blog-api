import {createConnection} from "typeorm";

export default async function typeORMLoader() {
    // TypeORM reads connection options from ormconfig.json file
    await createConnection();
}