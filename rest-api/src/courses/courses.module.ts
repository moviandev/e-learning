import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoursesControllers } from './controllers/courses.controller';
import { CoursesSchema } from './schemas/courses.schema';
import { CourseRepository } from './repositories/courses.repository';

@Module({
  controllers: [CoursesControllers],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Course',
        schema: CoursesSchema,
      },
    ]),
  ],
  providers: [CourseRepository],
})
export class CoursesModule {}
