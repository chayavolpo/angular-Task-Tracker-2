import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onDelete(task){
     this.deleteTask.emit(task);
  }

  // tslint:disable-next-line:typedef
  onToggleReminder(task: Task) {
      this.toggleReminder.emit(task);
  }

}
