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
    createdAt?: Date;
    updatedAt?: Date;
}
export interface PaymentCreationAttributes extends Optional<PaymentAttributes, 'id' | 'currency' | 'status' | 'payment_method' | 'payment_properties' | 'createdAt' | 'updatedAt'> {
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
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Payment;
//# sourceMappingURL=payment.d.ts.map