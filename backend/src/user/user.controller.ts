import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { updateUserDTO, userDTO } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch(':id')
  UpdateUser(@Param('id') id: string, @Body() updateUserDTO: updateUserDTO) {
    return this.userService.updateUser(+id, updateUserDTO);
  }
  @Get()
  GetAllUser() {
    return this.userService.getAllUser();
  }
}
