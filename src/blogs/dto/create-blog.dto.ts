import { IsInt, IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateBlogDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsString()
  content: string;
}
