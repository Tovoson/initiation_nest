import { Injectable } from '@nestjs/common';
import { Task } from './Types/task.dto';
import * as fs from 'fs/promises';

@Injectable()
export class AppService {
  async addTask(task: Task) {
    const filePath = './src/data/task-test.json';

    try {
      await fs.mkdir('./src/data', { recursive: true });

      let taskList: Task[] = [];

      try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        const parsedData = JSON.parse(fileData);
        taskList = Array.isArray(parsedData) ? parsedData : [parsedData];
      } catch (error) {
        console.log(error);
      }

      taskList.push(task);
      try {
        await fs.writeFile(
          filePath,
          JSON.stringify(taskList, null, 2),
          'utf-8',
        );
        console.log('task added on json file');

        return taskList;
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
