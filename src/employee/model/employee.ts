import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Employee {

  @Field(() => String)
  id: string;

  @Field(() => String)
  employeeId: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

}