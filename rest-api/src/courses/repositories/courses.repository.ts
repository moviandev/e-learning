import { Injectable } from '@angular/core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Course } from '../../../../shared/course';

@Injectable()
export class CourseRepository {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return this.courseModel.find();
  }

  async updateCourse(id: string, changes: Partial<Course>): Promise<Course> {
    return this.courseModel.findOneAndUpdate({ _id: id }, changes, {
      new: true,
    });
  }

  async deleteCourse(id: string): Promise<void> {
    return this.courseModel.deleteOne({ _id: id });
  }

  async addCourse(course: Partial<Course>): Promise<Course> {
    const newCourse = this.courseModel(course);
    await newCourse.save();
    return newCourse.toObject({
      versionKey: false,
    });
  }
}
