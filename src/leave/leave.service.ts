import { Injectable, Post } from '@nestjs/common';
import { createLeaveDto } from './dto/createleave.dto';

@Injectable()
export class LeaveService {

     createleave(createLeave:createLeaveDto) {
           
         console.log(createLeave)
        return createLeave
     }
}


// const date =new Date()
// const testDate = new Date("2025-07-07T07:34:40.555Z")
// Date.toString()
// console.log(date)
// console.log(testDate.toLocaleString())

// {
//     "start_date":"2025-07-04T07:34:40.555Z",
//     "end_date":"2025-07-07T07:34:40.555Z",
//     "is_saturday_holiday":false,
//     "is_sunday_holiday":false
// }