import { Table, Model, Column, HasMany } from 'sequelize-typescript';
import Task from './Task.model';

@Table({
  timestamps: true
})
export default class Status extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @HasMany(() => Task)
  tasks: Task[];
}
