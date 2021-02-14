import {
  Table,
  Model,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import User from './User.model';
import Status from './Status.model';

@Table({
  timestamps: true
})
export default class Task extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @ForeignKey(() => User)
  @Column
  creatorId: number;

  @BelongsTo(() => User, 'creatorId')
  creator: User;

  @ForeignKey(() => Status)
  @Column
  statusId: number;

  @BelongsTo(() => Status, 'statusId')
  status: Status;
}
