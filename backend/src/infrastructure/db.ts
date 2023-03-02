import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'bibliochouette',
  password: 'password',
  database: 'bibliochouette',
  entities: ['src/entity/*.ts'],
  logging: true,
  synchronize: true,
});

export const initDb = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
      process.exit(0);
    });
};
