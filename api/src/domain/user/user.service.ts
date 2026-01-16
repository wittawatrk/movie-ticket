import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from '../../infrastructure/database/services/user-repository.service';
import {
  CreateUserDto,
  UpdateUserDto,
} from '../../route/user/user.controller.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepositoryService) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findMany();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
