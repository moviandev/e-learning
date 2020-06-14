import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  Delete,
  Post,
  ParseIntPipe,
} from '@nestjs/common';

import { Course } from '../../../../shared/course';
import { CourseRepository } from '../repositories/courses.repository';
import { ToIntegerPipe } from '../pipes/to-integer.pipe';

@Controller('courses')
export class CoursesControllers {
  constructor(private readonly courseDB: CourseRepository) {}

  @Post()
  async createCourse(@Body() course: Partial<Course>): Promise<Course> {
    console.log('Creating a course');
    return this.courseDB.addCourse(course);
  }

  @Get()
  async findAll(): Promise<Course[]> {
    return await this.courseDB.findAll();
  }

  @Put(':idCourse')
  async updateCourse(
    @Param('idCourse') id: string,
    @Body() changes: Course,
  ): Promise<Course> {
    console.log('Updating course');
    return this.courseDB.updateCourse(id, changes);
  }

  @Delete(':idCourse')
  async deleteCourse(@Param('idCourse') id: string): Promise<void> {
    console.log('Deleting course');
    return this.courseDB.deleteCourse(id);
  }
}
