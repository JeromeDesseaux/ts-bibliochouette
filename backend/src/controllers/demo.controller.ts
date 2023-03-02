import { Request, Response } from 'express';
import { container, singleton } from 'tsyringe';
import { DemoService } from '../services/demo.services';

@singleton()
export class DemoController {
  constructor(public service: DemoService) {}

  async get(req: Request, res: Response) {
    return res.status(200).json(this.service.getAll());
  }
}

export const demoController = container.resolve(DemoController);
