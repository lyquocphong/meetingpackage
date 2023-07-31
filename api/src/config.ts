import dotenv from 'dotenv';

const getDotEnvPath = (env?: string) => {
    if (env == 'TEST') {
        return '.env.test'
    }
    return '.env'
}

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    const envPath = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
    dotenv.config({ path: envPath });
  }

interface AppConfig {
    port: number;
    databaseURL: string;
}

const config: AppConfig = {
    port: parseInt(process.env.PORT || "") || 3000,
    databaseURL: process.env.DATABASE_URL || "mongodb://localhost:27017/mydatabase",
};

export const getConfig = <K extends keyof AppConfig>(key: K): AppConfig[K] => {
    return config[key];
};