import { Model, Optional } from 'sequelize';
export interface PaymentAttributes {
    id: number;
    user_id: number;
    plan_id: number;
    amount: number;
    currency: string;
    status: 'created' | 'pending' | 'success' | 'failed';
    payment_method?: string;
    payment_properties?: any;
    is_used?: boolean;
    referral_code_id?: number | null;
    discount_amount?: number | null;
    original_amount?: number | null;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface PaymentCreationAttributes extends Optional<PaymentAttributes, 'id' | 'currency' | 'status' | 'payment_method' | 'payment_properties' | 'is_used' | 'referral_code_id' | 'discount_amount' | 'original_amount' | 'createdAt' | 'updatedAt'> {
}
declare class Payment extends Model<PaymentAttributes, PaymentCreationAttributes> implements PaymentAttributes {
    id: number;
    user_id: number;
    plan_id: number;
    amount: number;
    currency: string;
    status: 'created' | 'pending' | 'success' | 'failed';
    payment_method: string;
    payment_properties: any;
    is_used: boolean;
    referral_code_id: number | null;
    discount_amount: number | null;
    original_amount: number | null;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Payment;
//# sourceMappingURL=payment.d.ts.map