import { Group } from '../entities/group.model';
import AppDataSource from '../infrastructure/db';

export const GroupRepository = AppDataSource.getRepository(Group);
