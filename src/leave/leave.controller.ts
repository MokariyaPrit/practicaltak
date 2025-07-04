import { Body, Controller, Post } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { createLeaveDto } from './dto/createleave.dto';

@Controller('leave')
export class LeaveController {
    constructor(private readonly leaveServices: LeaveService){}

    @Post()
    createLeave(@Body() createLeaveDto:createLeaveDto) {
        return this.leaveServices.createleave(createLeaveDto)
    }
}
