import { Model, Optional } from 'sequelize';
export interface WalletTransactionAttributes {
    id: number;
    user_id: number;
    transaction_type: 'CREDIT_REFERRAL' | 'DEBIT_PLAN_PURCHASE' | 'DEBIT_WITHDRAWAL';
    amount: number;
    balance_after: number;
    reference_id?: number | null;
    description?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface WalletTransactionCreationAttributes extends Optional<WalletTransactionAttributes, 'id' | 'reference_id' | 'description' | 'createdAt' | 'updatedAt'> {
}
declare class WalletTransaction extends Model<WalletTransactionAttributes, WalletTransactionCreationAttributes> implements WalletTransactionAttributes {
    id: number;
    user_id: number;
    transaction_type: 'CREDIT_REFERRAL' | 'DEBIT_PLAN_PURCHASE' | 'DEBIT_WITHDRAWAL';
    amount: number;
    balance_after: number;
    reference_id: number | null;
    description: string | null;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default WalletTransaction;
//# sourceMappingURL=wallet_transaction.d.ts.map