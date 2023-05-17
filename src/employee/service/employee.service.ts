import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from '../input/create-employee.input';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService {
  
  constructor() {

  }

 async save(data: CreateEmployeeInput): Promise<Employee> {
  return { ...data, id: "12" };
 }


}