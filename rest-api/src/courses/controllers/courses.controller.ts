import { Controller, Get } from '@nestjs/common';

import { Course } from '../../../../shared/course';
import { findAllCourses } from '../../../db-data';

@Controller('/api/courses')
export class CoursesControllers {
  @Get()
  async findAll(): Promise<Course[]> {
    return findAllCourses();
  }
}
