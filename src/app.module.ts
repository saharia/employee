import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { GqlThrottlerGuard } from './employee/model/throttle';
import { EmployeeResolver } from './employee/resolver/employee.resolver';
import { EmployeeService } from './employee/service/employee.service';

@Module({
  imports: [
    ConfigurationModule,
    ThrottlerModule.forRoot({
      ttl: 5,
      limit: 2,
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
      cors: {
        credentials: true,
        origin: true,
      },
      formatError: (error) => {
        if(error?.extensions?.stacktrace) {
          delete error.extensions.stacktrace;
        }
        if(error?.path) {
          delete error.path;
        }
        if(error?.locations) {
          delete error.locations;
        }
        return error;
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      playground: false
    })
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: GqlThrottlerGuard
    },
    AppService,
    EmployeeResolver,
    EmployeeService,
  ],
})
export class AppModule {}
