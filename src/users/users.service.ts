import { Injectable , Inject} from '@nestjs/common'
import { Model } from 'mongoose'
import { User } from './types/user.interface'
import { CreateUserDTO } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>){}

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const createdUser = new this.userModel(createUserDTO)
    return await createdUser.save()
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec()
  }
}
