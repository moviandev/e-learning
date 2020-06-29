import { Module, ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoursesModule } from './courses/courses.module';
import { MONGODB_CONNECTION } from './courses/constants';
import { APP_PIPE, APP_FILTER } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { ValidationFilter } from './filters/validation.filter';
import { ValidationException } from './filters/validation.exception';

@Module({
  imports: [
    CoursesModule,
    MongooseModule.forRoot(MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ValidationFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
      useFactory: (errors: ValidationError[]) => {
        const messages = errors.map(
          error => `${error.property} has wrong value ${error.value},
          ${Object.values(error.constraints).join(',')}`,
        );

        return new ValidationException(messages);
      },
    },
  ],
})
export class AppModule {}
