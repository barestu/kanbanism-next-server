import {
  Table,
  Model,
  Column,
  Unique,
  DefaultScope,
  Scopes,
  HasMany,
  PrimaryKey,
  IsUUID,
} from 'sequelize-typescript';
import Task from './Task.model';

@DefaultScope(() => ({
  attributes: {
    exclude: ['password'],
  },
}))
@Scopes(() => ({
  withPassword: {
    attributes: {
      include: ['password'],
    },
  },
}))
@Table({
  timestamps: true
})
export default class User extends Model {
  @Column
  name: string;

  @Unique
  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => Task)
  tasks: Task[];
}
