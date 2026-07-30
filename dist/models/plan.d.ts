import { Model, Optional } from 'sequelize';
export interface PlanAttributes {
    id: number;
    name: string;
    description?: string;
    price: number;
    currency: string;
    duration: 'monthly' | 'yearly' | 'quaterly' | 'daily' | 'weekly' | 'lifetime';
    is_active: boolean;
    is_recommended: boolean;
    plan_type: 'CALLING' | 'EMERGENCY' | 'LAWYER_MONTHLY' | 'LAWYER_YEARLY' | 'LAWYER_TRIAL' | 'RYLAW_BOT' | 'ENTERPRISE_PLAN';
    features?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}
export interface PlanCreationAttributes extends Optional<PlanAttributes, 'id' | 'description' | 'currency' | 'duration' | 'is_active' | 'is_recommended' | 'features' | 'plan_type' | 'createdAt' | 'updatedAt'> {
}
declare class Plan extends Model<PlanAttributes, PlanCreationAttributes> implements PlanAttributes {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    duration: 'monthly' | 'yearly' | 'quaterly' | 'daily' | 'weekly' | 'lifetime';
    is_active: boolean;
    is_recommended: boolean;
    plan_type: 'CALLING' | 'EMERGENCY' | 'LAWYER_MONTHLY' | 'LAWYER_YEARLY' | 'LAWYER_TRIAL' | 'RYLAW_BOT' | 'ENTERPRISE_PLAN';
    features: any;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Plan;
//# sourceMappingURL=plan.d.ts.map