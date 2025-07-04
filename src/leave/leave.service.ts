
import { Injectable } from '@nestjs/common';
import { createLeaveDto } from '../leave/dto/createleave.dto';
import * as moment from 'moment';
import { extendMoment } from 'moment-range';

 const momentRange = extendMoment(moment);

@Injectable()
export class LeaveService {
  createleave(dto: createLeaveDto): string[] {
    const {
      start_date,
      end_date,
      holidays,
      is_saturday_holiday,
      is_sunday_holiday,
    } = dto;

    const format = 'Do MMM';
    const year = new Date().getFullYear();

    const start = moment(`${start_date} ${year}`, `${format} YYYY`);
    const end = moment(`${end_date} ${year}`, `${format} YYYY`);
    const range = momentRange.range(start, end);

    const holidaySet = new Set(
      holidays.map(date =>
        moment(`${date} ${year}`, `${format} YYYY`).format(format),
      ),
    );

    const result: string[] = [];

    for (const day of range.by('day')) {
      const formatted = day.format(format);
      const dayOfWeek = day.day();

      if (holidaySet.has(formatted)) continue;
      if (is_sunday_holiday && dayOfWeek === 0) continue;
      if (is_saturday_holiday && dayOfWeek === 6) continue;

      result.push(formatted);
    }

    return result;
  }
}
