"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PantherModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PantherModule = void 0;
const common_1 = require("@nestjs/common");
const api_1 = require("@polkadot/api");
const constants_1 = require("./constants");
let PantherModule = PantherModule_1 = class PantherModule {
    static async registerAsync({ useFactory, imports, inject, }) {
        const pantherProvider = {
            provide: constants_1.PANTHER_CLIENT,
            useFactory: async (...args) => {
                const { connectionOptions } = await useFactory(...args);
                console.log(connectionOptions.url);
                const wsProvider = new api_1.WsProvider(connectionOptions.url);
                const api = await api_1.ApiPromise.create({ provider: wsProvider });
                console.log(api.genesisHash.toHex());
                return api;
            },
            inject,
        };
        return {
            module: PantherModule_1,
            imports,
            providers: [pantherProvider],
            exports: [pantherProvider],
        };
    }
};
PantherModule = PantherModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], PantherModule);
exports.PantherModule = PantherModule;
//# sourceMappingURL=panther.module.js.map