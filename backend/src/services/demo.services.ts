import { injectable, inject, autoInjectable, singleton } from "tsyringe";
import { DemoRepository } from "../repositories/demo.repository";

@singleton()
export class DemoService {
    constructor(public repository: DemoRepository) {}

    getAll() {
        return this.repository.findAll();


        
    }
}