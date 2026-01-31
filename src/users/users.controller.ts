import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from 'src/Types/usersType';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get()
    findAll(): User[]{
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string): User {
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body() user: User): User {
        return this.userService.create(user)
    }
}
