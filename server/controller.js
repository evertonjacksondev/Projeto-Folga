import { Service } from "./service.js";

export class Controller{
  constructor(){
    this.service = new Service();
  }
   async getFileSream(filename)
{
  return this.service.getFileStream(filename)
}}
