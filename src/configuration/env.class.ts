import { IsEnum } from "class-validator";
import { Environment } from './env.enum';
export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

}