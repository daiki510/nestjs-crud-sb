import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './entities/blog.entity';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto): Blog {
    return this.blogsService.create(createBlogDto);
  }

  @Get()
  findAll(): Blog[] {
    return this.blogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Blog {
    return this.blogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number): Blog {
    return this.blogsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    return this.blogsService.remove(+id);
  }
}
