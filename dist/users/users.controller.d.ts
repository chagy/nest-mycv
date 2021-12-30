import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from './auth.service';
export declare class UsersController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    whoAmI(session: any): Promise<import("./users.entity").User>;
    createUser(body: CreateUserDto, session: any): Promise<import("./users.entity").User>;
    signin(body: CreateUserDto, session: any): Promise<import("./users.entity").User>;
    findUser(id: string): Promise<import("./users.entity").User>;
    findAllUsers(email: string): Promise<import("./users.entity").User[]>;
    removeUser(id: string): Promise<import("./users.entity").User>;
    updateUser(id: string, body: UpdateUserDto): Promise<import("./users.entity").User>;
}
