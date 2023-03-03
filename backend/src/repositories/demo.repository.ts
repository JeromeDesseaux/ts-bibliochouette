import { singleton } from 'tsyringe';

@singleton()
export class DemoRepository {
  findAll() {
    return ['toto', 'tata', 'titi', 'tutu', 'tete'];
  }
}
