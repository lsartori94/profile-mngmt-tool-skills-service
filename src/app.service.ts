import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllSkills(): string[] {
    return ['React', 'NodeJS', 'NestJS', 'English'];
  }
}
