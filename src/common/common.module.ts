import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';

@Module({
  providers: [AxiosAdapter, CommonService],
  exports: [AxiosAdapter],
  controllers: [CommonController],
})
export class CommonModule {}
