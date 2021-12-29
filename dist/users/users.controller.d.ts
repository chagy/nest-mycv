import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(body: CreateUserDto): void;
    findUser(id: string): Promise<import("./users.entity").User>;
    findAllUsers(email: string): Promise<import("./users.entity").User[]>;
    removeUser(id: string): Promise<import("./users.entity").User>;
    updateUser(id: string, body: UpdateUserDto): Promise<import("./users.entity").User>;
}
