import { Module } from '@nestjs/common';
import { CoursesControllers } from './controllers/courses.controller';

@Module({
  controllers: [CoursesControllers],
})
export class CoursesModule {}
