import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {
  private blogs: Blog[] = [];
  private readonly logger = new Logger(BlogsService.name);

  create(createBlogDto: CreateBlogDto) {
    this.blogs.push(createBlogDto);
    return createBlogDto;
  }

  findAll(): Blog[] {
    return this.blogs;
  }

  findOne(id: number): Blog {
    return this.blogs.find((blog) => blog.id === id);
  }

  update(id: number) {
    const blog = this.findOne(id);
    blog.content = 'update content';
    return blog;
  }

  remove(id: number) {
    this.blogs = this.blogs.filter((blog) => blog.id !== id);
  }

  @Cron('10 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 10');
  }
}
