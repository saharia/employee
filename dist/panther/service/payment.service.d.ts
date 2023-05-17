import { NewPaymentInput } from '../input/payment.input';
import { PaymentResponse } from '../response/payment.response';
export declare class PaymentService {
    private api;
    constructor(api: any);
    getKeyRing(phrase: any): import("@polkadot/keyring/types").KeyringPair;
    makePayment(transactionInput: NewPaymentInput): Promise<PaymentResponse>;
}
