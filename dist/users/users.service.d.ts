import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(email: string, password: string): Promise<User>;
}
