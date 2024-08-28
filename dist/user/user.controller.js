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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_subscribe_Dto_1 = require("./Dto/user-subscribe.Dto");
const user_service_1 = require("./user.service");
const login_Credentials_Dto_1 = require("./Dto/login-Credentials.Dto");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const jwt_auth_gurad_1 = require("./gurads/jwt-auth.gurad");
const update_user_dto_1 = require("./Dto/update-user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    Register(userData) {
        return this.userService.register(userData);
    }
    login(credentials) {
        return this.userService.login(credentials);
    }
    async softdelete(id) {
        return await this.userService.softDelete(id);
    }
    async restoruser(id) {
        return await this.userService.restoreUser(id);
    }
    async getList() {
        return await this.userService.getList();
    }
    async updateuser(id, user) {
        return await this.userService.updateUserByid(id, user);
    }
    async nbUser() {
        return await this.userService.countUsers();
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'user registred'
    }),
    (0, swagger_1.ApiBody)({
        type: user_subscribe_Dto_1.UserSubscribeDto
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_subscribe_Dto_1.UserSubscribeDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "Register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOkResponse)({
        description: 'user login'
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'invalid credentials'
    }),
    (0, swagger_1.ApiBody)({
        type: login_Credentials_Dto_1.loginCredentialsDto
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_Credentials_Dto_1.loginCredentialsDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "softdelete", null);
__decorate([
    (0, common_1.Get)('recover/:id'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "restoruser", null);
__decorate([
    (0, common_1.Get)('getList'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getList", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateuser", null);
__decorate([
    (0, common_1.Get)('nombreUser'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "nbUser", null);
exports.UserController = UserController = __decorate([
    (0, swagger_2.ApiTags)('user'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map