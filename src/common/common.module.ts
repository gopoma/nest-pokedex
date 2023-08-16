import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';
import { CommonController } from './common.controller';

@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
  controllers: [CommonController],
})
export class CommonModule {}
