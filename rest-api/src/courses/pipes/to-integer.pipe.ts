import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

export class ToIntegerPipe implements PipeTransform<string> {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 1);

    if (typeof val !== 'number') {
      throw new BadRequestException(`Conversion to number failed ${value}`);
    }

    return val;
  }
}
