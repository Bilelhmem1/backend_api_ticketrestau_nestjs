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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const typeorm_2 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async register(userData) {
        const user = this.userRepository.create({
            ...userData
        });
        console.log(user);
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        return await this.userRepository.save(user);
    }
    async login(credentials) {
        const { email, password } = credentials;
        const user = await this.userRepository.createQueryBuilder("user").where("user.email= :email ", { email }).getOne();
        if (!user) {
            throw new common_1.NotFoundException('email or password erronée');
        }
        const hashedPassword = await bcrypt.hash(password, user.salt);
        if (hashedPassword === user.password) {
            const payload = {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                Role: user.Role,
            };
            const jwt = await this.jwtService.sign(payload);
            return {
                "access_token": jwt
            };
        }
        else {
            throw new common_1.NotFoundException(`email or password erronée`);
        }
    }
    async softDelete(id) {
        return await this.userRepository.softDelete(id);
    }
    async restoreUser(id) {
        await this.userRepository.restore(id);
    }
    async getList() {
        return await this.userRepository.find();
    }
    async updateUserByid(idu, user) {
        const newUser = await this.userRepository.preload({
            idu,
            ...user
        });
        if (!newUser) {
            throw new common_1.NotFoundException(`User d'id ${idu} n'existe pas`);
        }
        return this.userRepository.save(newUser);
    }
    async countUsers() {
        const count = await this.userRepository.count();
        return count;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map