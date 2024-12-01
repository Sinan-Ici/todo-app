import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Todo App</h1>
    @if (!isUpdateWorkFormActive) {
    <div>
      <label>Work</label>
      <input [(ngModel)]="work" />
      <button (click)="save()">Save</button>
    </div>
    } @else {
    <div>
      <label>UpdateWork</label>
      <input [(ngModel)]="updatework" />
      <button (click)="update()">Update</button>
    </div>
    }
    <hr />
    <div>
      <ul>
        @for(data of todos; track data){
        <li>{{ data }}</li>
        @if (!isUpdateWorkFormActive) {
        <button (click)="delete($index)">Delete</button>
        <button (click)="get($index)">Update</button>
        } }
      </ul>
    </div>
  `,
})
export class AppComponent {
  work: string = '';
  updatework: string = '';
  updateIndex: number = 0;
  todos: string[] = [];
  isUpdateWorkFormActive: boolean = false;
  save() {
    this.todos.push(this.work);
    this.work = '';
  }
  delete(index: number) {
    this.todos.splice(index, 1);
  }
  get(index: number) {
    this.updateIndex = index;
    this.updatework = this.todos[index];
    this.isUpdateWorkFormActive = true;
  }
  update() {
    this.todos[this.updateIndex] = this.updatework;
    this.isUpdateWorkFormActive = false;
  }
}
