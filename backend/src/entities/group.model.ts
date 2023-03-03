import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from './auditable.model';

@Entity({ name: 'group' })
export class Group extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32, name: 'label' })
  label: string;
}
