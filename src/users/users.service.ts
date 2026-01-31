import { Injectable } from '@nestjs/common';
import { User } from 'src/Types/usersType';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: '1',
            name: 'Tovo',
            email: 'elytovoniaina@gmail.com',
            role: 'admin'
        },
        {
            id: '2',
            name: 'Ghost',
            email: 'ghost@gmail.com',
            role: 'user'
        },
    ]

    findAll(): User[]{
        return this.users
    }

    findOne(id: string): User{
        return this.users.find((user) => user.id == id) as User
    }

    create(user: User): User{
        const newId = this.users.length + 1

        const newUser: User = {
            ...user,
            id: String(newId)
        }

        this.users.push(newUser)

        return newUser
    }
}
