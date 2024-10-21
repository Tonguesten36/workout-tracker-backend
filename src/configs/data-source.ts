import { DataSource } from 'typeorm';

require('dotenv').config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,   // Set to false in production
  logging: false,      // Enable if you want query logging
  entities: [__dirname + '/models/**/*.{ts,js}'],    // Add your entities here
  migrations: [],
  subscribers: [],
});
