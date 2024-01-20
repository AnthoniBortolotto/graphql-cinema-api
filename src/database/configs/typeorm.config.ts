import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

// Exporta as configurações de conexão com o RDS para o funcionamento da API
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: configService.getOrThrow('POSTGRES_HOST'),
  port: parseInt(configService.getOrThrow('POSTGRES_PORT')),
  database: configService.getOrThrow('POSTGRES_DATABASE'),
  username: configService.getOrThrow('POSTGRES_USER'),
  password: configService.getOrThrow('POSTGRES_PASSWORD'),
  synchronize: false,
  extra: {
    trustServerCertificate: true,
    Encrypt: true,
    IntegratedSecurity: false,
  },
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};

// Exporta as configurações de conexão com o RDS para migrações
export default new DataSource({
  type: 'postgres',
  host: 'localhost', //configService.getOrThrow('POSTGRES_HOST'),
  port: 5432, // parseInt(configService.getOrThrow('POSTGRES_PORT')),
  database: 'Usavel', //configService.getOrThrow('POSTGRES_DATABASE'),
  username: 'postgres', //configService.getOrThrow('POSTGRES_USER'),
  password: 'admin', //configService.getOrThrow('POSTGRES_DATABASE'),
  synchronize: false,
  extra: {
    trustServerCertificate: true,
    Encrypt: true,
    IntegratedSecurity: false,
  },
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['dist/database/migrations/**'],
  migrationsRun: false,
  migrationsTableName: 'MigrationHistory',
});
