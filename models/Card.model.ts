import { Table, Model, Column } from 'sequelize-typescript';

@Table({
  timestamps: true
})
export default class Card extends Model {
  @Column
  title!: string;

  @Column
  description!: string;
}
