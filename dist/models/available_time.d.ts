import { Model, Optional } from 'sequelize';
export interface LawyerAvailabilityAttributes {
    id: number;
    lawyerId: number;
    availability: {
        day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
        startTime: string;
        endTime: string;
        skipHours?: number;
        description?: string;
        isAvailable: boolean;
        breaks?: {
            startTime: string;
            endTime: string;
            description?: string;
        }[];
    }[];
    lastLoginAt?: Date | null;
    nextLoginAt?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface LawyerAvailabilityCreationAttributes extends Optional<LawyerAvailabilityAttributes, 'id' | 'lastLoginAt' | 'nextLoginAt' | 'createdAt' | 'updatedAt'> {
}
declare class LawyerAvailability extends Model<LawyerAvailabilityAttributes, LawyerAvailabilityCreationAttributes> implements LawyerAvailabilityAttributes {
    id: number;
    lawyerId: number;
    availability: {
        day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
        startTime: string;
        endTime: string;
        skipHours?: number;
        description?: string;
        isAvailable: boolean;
        breaks?: {
            startTime: string;
            endTime: string;
            description?: string;
        }[];
    }[];
    lastLoginAt?: Date;
    nextLoginAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
export default LawyerAvailability;
//# sourceMappingURL=available_time.d.ts.map