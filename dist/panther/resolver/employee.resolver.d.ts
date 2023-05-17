import { OnModuleInit } from '@nestjs/common';
import { CreateEmployeeInput } from '../input/create-employee.input';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
export declare class EmployeeResolver implements OnModuleInit {
    private employeeService;
    constructor(employeeService: EmployeeService);
    onModuleInit(): Promise<void>;
    save(context: any, employeeInput: CreateEmployeeInput): Promise<Employee>;
}
