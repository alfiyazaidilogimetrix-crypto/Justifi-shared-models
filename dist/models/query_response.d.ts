import { Model, Optional } from 'sequelize';
export interface QueryResponseAttributes {
    id: number;
    lawyer_id: number;
    query_id: number;
    response: string;
    isSelect: boolean;
    isSatisfied: boolean;
    review: string;
    rating: number;
    is_user_closed: boolean;
    is_lawyer_closed: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface QueryResponseCreationAttributes extends Optional<QueryResponseAttributes, 'id' | 'isSelect' | 'isSatisfied' | 'review' | 'rating' | 'is_user_closed' | 'is_lawyer_closed' | 'createdAt' | 'updatedAt'> {
}
declare class QueryResponse extends Model<QueryResponseAttributes, QueryResponseCreationAttributes> implements QueryResponseAttributes {
    id: number;
    lawyer_id: number;
    query_id: number;
    response: string;
    isSelect: boolean;
    isSatisfied: boolean;
    review: string;
    rating: number;
    is_user_closed: boolean;
    is_lawyer_closed: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default QueryResponse;
//# sourceMappingURL=query_response.d.ts.map