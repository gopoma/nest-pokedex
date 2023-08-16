import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  public present() {
    return {
      name: 'nest-pokedex',
      version: '1.0.0',
      author: 'gopoma',
    };
  }
}
