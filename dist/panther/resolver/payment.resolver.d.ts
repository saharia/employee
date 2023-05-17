import { OnModuleInit } from '@nestjs/common';
import { NewPaymentInput } from '../input/payment.input';
import { PaymentResponse } from '../response/payment.response';
import { PaymentService } from '../service/payment.service';
export declare class PaymentResolver implements OnModuleInit {
    private client;
    private paymentService;
    constructor(client: any, paymentService: PaymentService);
    onModuleInit(): Promise<void>;
    test(context: any): {
        message: string;
    };
    transfer(context: any, paymentInput: NewPaymentInput): Promise<PaymentResponse>;
}
