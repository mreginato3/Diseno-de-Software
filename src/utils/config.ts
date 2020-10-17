import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../.env` });

export const config = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: (process.env.port) ? (process.env.port) : 3000,
    JWT_SECRET: process.env.JWT_SECRET,
    BASE_URL: process.env.BASE_URL,
    MONGO_DB: {
        CONN_STRING: "mongodb://localhost:27017/diseno",
        //`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DBNAME}`,
        LOG: process.env.MONGO_DB_LOG
    },
    CORS: {
        WHITELIST: process.env.CORS_WHITELIST
                    ? process.env.CORS_WHITELIST.split(',')
                    : []
    }
}