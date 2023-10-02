import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToDoDTO } from './../../dtos/create-toDo.dto';

@Injectable()
export class toDoListService {
  private allToDoList: CreateToDoDTO[] = [];
  private nextId: number = 1;

  create(body: CreateToDoDTO) {
    body.id = this.nextId;
    this.allToDoList.push(body);
    this.nextId++;
    return true;
  }

  getAll() {
    return this.allToDoList;
  }

  delete(id: number) {
    const foundToDo = this.allToDoList.find((e) => e.id == id);
    if (!foundToDo) throw new NotFoundException('This ToDo Not Found');
    this.allToDoList = this.allToDoList.filter((e) => e.id != id);
    return this.allToDoList;
  }
}
