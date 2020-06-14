import { IsInt, IsString, IsMongoId } from "class-validator";
export class Course {
  @IsString()
  @IsMongoId()
  _id: string;

  @IsInt({ message: "seqNo must be numeric" })
  seqNo: number;

  @IsString()
  url: string;

  @IsString()
  iconUrl: string;

  @IsString()
  courseListIcon: string;

  @IsString()
  description: string;

  @IsString()
  longDescription?: string;

  @IsString()
  category: string;

  @IsString()
  lessonsCount: number;

  @IsString()
  promo: boolean;
}

export function compareCourses(c1: Course, c2: Course) {
  const compare = c1.seqNo - c2.seqNo;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}
