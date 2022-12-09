import { Connection, createConnection } from "typeorm";
import { getConnection } from "typeorm/globals";

export default async(): Promise<Connection> => {
    const defaultOption = await getConnection();

    return createConnection(
        Object.assign(defaultOption)
    );
}