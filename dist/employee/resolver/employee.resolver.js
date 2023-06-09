"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_employee_input_1 = require("../input/create-employee.input");
const employee_1 = require("../model/employee");
const employee_service_1 = require("../service/employee.service");
const test_response_1 = require("../response/test.response");
let EmployeeResolver = class EmployeeResolver {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    async onModuleInit() {
    }
    test(context) {
        return { message: "test" };
    }
    save(context, employeeInput) {
        try {
            return this.employeeService.save(employeeInput);
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, graphql_1.Query)(() => test_response_1.Test, { name: 'users' }),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmployeeResolver.prototype, "test", null);
__decorate([
    (0, graphql_1.Mutation)(() => employee_1.Employee, { name: 'createEmployee' }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Args)('employeeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_employee_input_1.CreateEmployeeInput]),
    __metadata("design:returntype", void 0)
], EmployeeResolver.prototype, "save", null);
EmployeeResolver = __decorate([
    (0, graphql_1.Resolver)('Employee'),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeResolver);
exports.EmployeeResolver = EmployeeResolver;
//# sourceMappingURL=employee.resolver.js.map