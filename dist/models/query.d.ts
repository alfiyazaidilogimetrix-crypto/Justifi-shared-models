import { Model, Optional } from 'sequelize';
export interface QueryAttributes {
    id: number;
    title: string;
    description: string;
    category: number;
    query: string;
    is_closed: boolean;
    user_id?: number;
    medias?: number[];
    createdAt?: Date;
    updatedAt?: Date;
}
export interface QueryCreationAttributes extends Optional<QueryAttributes, 'id' | 'query' | 'title' | 'description' | 'category' | 'is_closed' | 'user_id' | 'medias' | 'createdAt' | 'updatedAt'> {
}
declare class Query extends Model<QueryAttributes, QueryCreationAttributes> implements QueryAttributes {
    id: number;
    user_id: number;
    query: string;
    title: string;
    description: string;
    category: number;
    is_closed: boolean;
    medias: number[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
    userid: number | undefined;
}
export default Query;
//# sourceMappingURL=query.d.ts.map