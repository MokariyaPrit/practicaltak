import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaveModule } from './leave/leave.module';

@Module({
  imports: [LeaveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
