import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PaymentResponse {

  @Field(() => String)
  message: string;

  @Field(() => Boolean)
  success: boolean;

}