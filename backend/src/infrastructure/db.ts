import { DataSource } from 'typeorm';
import { logger } from './logging';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'bibliochouette',
  password: 'password',
  database: 'bibliochouette',
  entities: ['src/entities/**/*.model.ts'],
  migrations: ['src/infrastructure/migrations/**/*.ts'],
  logging: false,
  synchronize: true,
});

export const initDb = () => {
  AppDataSource.initialize()
    .then(() => {
      logger.info('Data Source has been initialized.');
    })
    .catch((err) => {
      logger.fatal('Error during Data Source initialization', err);
      process.exit(0);
    });
};

export default AppDataSource;
