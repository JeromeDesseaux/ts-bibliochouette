import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class AuditableEntity extends BaseEntity {
  @CreateDateColumn()
  @Column({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn()
  @Column({ name: 'updated_at' })
  updated_at: Date;

  // TODO add user id
}
