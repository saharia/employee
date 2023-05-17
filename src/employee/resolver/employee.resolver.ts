import { OnModuleInit } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmployeeInput } from '../input/create-employee.input';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { Test } from '../response/test.response';

@Resolver('Employee')
export class EmployeeResolver implements OnModuleInit {

  constructor(private employeeService: EmployeeService) {}

  async onModuleInit() {
  }

  @Query(() => Test, { name: 'users' })
  test(@Context() context: any) {
    return { message: "test" };
  }

  

  @Mutation(() => Employee, { name: 'createEmployee' })
  save(@Context() context: any, @Args('employeeInput') employeeInput: CreateEmployeeInput) {

    try {
      return this.employeeService.save(employeeInput);
    } catch (error) {
      throw error;
    }
    
  }


}
