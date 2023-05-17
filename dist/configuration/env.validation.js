"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envValidate = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const env_class_1 = require("./env.class");
function envValidate(config) {
    const validatedConfig = (0, class_transformer_1.plainToInstance)(env_class_1.EnvironmentVariables, config, { enableImplicitConversion: true });
    const errors = (0, class_validator_1.validateSync)(validatedConfig, { skipMissingProperties: false });
    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
}
exports.envValidate = envValidate;
//# sourceMappingURL=env.validation.js.map