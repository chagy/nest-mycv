import { Report } from '../reports/reports.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    reports: Report[];
    logInsert(): void;
    logUpdate(): void;
    logRemove(): void;
}
