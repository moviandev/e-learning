import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoursesModule } from './courses/courses.module';
import { MONGODB_CONNECTION } from './courses/constants';

@Module({
  imports: [
    CoursesModule,
    MongooseModule.forRoot(MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
})
export class AppModule {}
