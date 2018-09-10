
import { Controller, Get, Post, Body } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './types/user.interface'
import { CreateUserDTO } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() createUserDTO: CreateUserDTO) {
    this.userService.create(createUserDTO)
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }
}
