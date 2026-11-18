import { Model, Optional } from 'sequelize';
export interface PayoutRequestAttributes {
    id: number;
    user_id: number;
    amount: number;
    account_holder_name: string;
    bank_account_number: string;
    ifsc_code: string;
    status: 'PENDING' | 'PROCESSED' | 'REJECTED';
    utr_number?: string | null;
    processed_at?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface PayoutRequestCreationAttributes extends Optional<PayoutRequestAttributes, 'id' | 'status' | 'utr_number' | 'processed_at' | 'createdAt' | 'updatedAt'> {
}
declare class PayoutRequest extends Model<PayoutRequestAttributes, PayoutRequestCreationAttributes> implements PayoutRequestAttributes {
    id: number;
    user_id: number;
    amount: number;
    account_holder_name: string;
    bank_account_number: string;
    ifsc_code: string;
    status: 'PENDING' | 'PROCESSED' | 'REJECTED';
    utr_number: string | null;
    processed_at: Date | null;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default PayoutRequest;
//# sourceMappingURL=payout_request.d.ts.map