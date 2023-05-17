import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envValidate } from './env.validation';
const ENV = process.env.NODE_ENV;

@Module({
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? 'env/development.env' : `env/${ENV}.env`,
      validate: envValidate,
      isGlobal: true,
    })
  ],
  exports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? 'env/development.env' : `env/${ENV}.env`,
      validate: envValidate,
      isGlobal: true,
    })
  ],
})
export class ConfigurationModule {}
