import { Service } from "./service.js";

export class Controller{
  constructor(){
    this.service = new Service();
  }
   async getFileSream(name)
{
  return this.service.getFileStream(name)
}}
