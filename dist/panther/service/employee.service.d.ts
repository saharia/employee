import { CreateEmployeeInput } from '../input/create-employee.input';
import { Employee } from '../model/employee';
export declare class EmployeeService {
    constructor();
    save(data: CreateEmployeeInput): Promise<Employee>;
}
