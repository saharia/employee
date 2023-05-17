"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const env_validation_1 = require("./env.validation");
const ENV = process.env.NODE_ENV;
let ConfigurationModule = class ConfigurationModule {
};
ConfigurationModule = __decorate([
    (0, common_1.Module)({
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: !ENV ? 'env/development.env' : `env/${ENV}.env`,
                validate: env_validation_1.envValidate,
                isGlobal: true,
            })
        ],
        exports: [
            config_1.ConfigModule.forRoot({
                envFilePath: !ENV ? 'env/development.env' : `env/${ENV}.env`,
                validate: env_validation_1.envValidate,
                isGlobal: true,
            })
        ],
    })
], ConfigurationModule);
exports.ConfigurationModule = ConfigurationModule;
//# sourceMappingURL=configuration.module.js.map