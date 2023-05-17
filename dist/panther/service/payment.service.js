"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const api_1 = require("@polkadot/api");
let PaymentService = class PaymentService {
    constructor(api) {
        this.api = api;
    }
    getKeyRing(phrase) {
        const keyring = new api_1.Keyring({ type: 'sr25519' });
        const key = keyring.addFromUri(phrase);
        return key;
    }
    async makePayment(transactionInput) {
        try {
            const fromKey = this.getKeyRing(transactionInput.fromPhrase);
            const toAddress = transactionInput.toAddress;
            console.log(1 * Math.pow(10, 12));
            const txHash = await this.api.tx.balances
                .transfer(toAddress, transactionInput.pantherCoin * Math.pow(10, 12))
                .signAndSend(fromKey);
            return { success: true, message: "Payment successfull" };
        }
        catch (error) {
            throw error;
        }
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PANTHER_CLIENT')),
    __metadata("design:paramtypes", [Object])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map