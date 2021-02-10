import { Table, Model, Column } from 'sequelize-typescript';

@Table({
  timestamps: true
})
export default class User extends Model {
  @Column
  name!: string;

  @Column
  email!: string;
}
