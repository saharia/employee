"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const default_1 = require("@apollo/server/plugin/landingPage/default");
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
const throttler_1 = require("@nestjs/throttler");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const configuration_module_1 = require("./configuration/configuration.module");
const throttle_1 = require("./employee/model/throttle");
const employee_resolver_1 = require("./employee/resolver/employee.resolver");
const employee_service_1 = require("./employee/service/employee.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            configuration_module_1.ConfigurationModule,
            throttler_1.ThrottlerModule.forRoot({
                ttl: 5,
                limit: 2,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
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
                    var _a;
                    if ((_a = error === null || error === void 0 ? void 0 : error.extensions) === null || _a === void 0 ? void 0 : _a.stacktrace) {
                        delete error.extensions.stacktrace;
                    }
                    if (error === null || error === void 0 ? void 0 : error.path) {
                        delete error.path;
                    }
                    if (error === null || error === void 0 ? void 0 : error.locations) {
                        delete error.locations;
                    }
                    return error;
                },
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
                playground: false
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttle_1.GqlThrottlerGuard
            },
            app_service_1.AppService,
            employee_resolver_1.EmployeeResolver,
            employee_service_1.EmployeeService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map