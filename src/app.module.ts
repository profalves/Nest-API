import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { TaskService } from './tasks/shared/task.service';

@Module({
  imports: [TasksModule],
  controllers: [AppController, TasksController],
  providers: [AppService, TaskService],
})
export class AppModule {}
