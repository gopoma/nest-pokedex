import { Controller, Get } from '@nestjs/common';

@Controller('')
export class CommonController {
  @Get()
  public present() {
    return {
      name: 'nest-pokedex',
      version: '1.0.0',
      author: 'gopoma',
    };
  }
}
